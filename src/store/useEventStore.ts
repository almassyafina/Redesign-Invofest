import { create } from "zustand";

interface Event {
  id: number; // Menggunakan string | number agar fleksibel dengan tipe ID dari database
  name: string;
  category_id: number;
  pembicara_id: number;
  location: string;
  date_event: Date | string;
  description: string;

}

interface EventState {
  events: Event[];
  fetchEvents: () => Promise<void>;
  addEvent: (event: Omit<Event, "id">) => Promise<void>;
  updateEvent: (id: number, data: Omit<Event, "id">) => Promise<void>;
  deleteEvent: (id: number) => Promise<void>;
}

const API_URL = "https://backenduts-production-7092.up.railway.app/events";

export const useEventStore = create<EventState>()((set) => ({
  events: [],

  // GET: Ambil semua data dari Backend
  fetchEvents: async () => {
  try {
    const response = await fetch(API_URL);
    const json = await response.json();
    
    // PENTING: Jika API mengembalikan { success: true, data: [...] }
    // Maka simpan json.data saja ke dalam state events
    set({ events: json.data || [] }); 
  } catch (error) {
    console.error("Gagal mengambil data:", error);
  }
},

 // CREATE: Tambah data ke Backend, lalu update state UI
  addEvent: async (event) => {
  try {
    // Pastikan data yang dikirim sesuai dengan ekspektasi API
    const payload = {
      ...event,
      // Pastikan angka tetap angka
      category_id: Number(event.category_id),
      pembicara_id: Number(event.pembicara_id),
      // Pastikan tanggal dalam format ISO string yang valid
      date_event: new Date(event.date_event).toISOString(),
    };

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload), // Gunakan payload yang sudah dipastikan formatnya
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Gagal menambah event");
    }
    
    const result = await response.json();
    const newEvent = result.data || result; 

    set((state) => ({
      events: Array.isArray(state.events) ? [...state.events, newEvent] : [newEvent],
    }));
  } catch (error) {
    console.error("Error saat menambah event:", error);
    throw error; // Lempar error agar bisa ditangkap di komponen UI (misal untuk menampilkan alert)
  }
},


  // UPDATE: Edit data di Backend, lalu update state UI
  updateEvent: async (id, data) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Gagal mengubah event");
      const updatedEvent = await response.json();

      set((state) => ({
        events: state.events.map((item) =>
          item.id === id ? { ...item, ...updatedEvent } : item
        ),
      }));
    } catch (error) {
      console.error(error);
    }
  },

  // DELETE: Hapus data di Backend, lalu update state UI
  deleteEvent: async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Gagal menghapus event");

      set((state) => ({
        events: state.events.filter((item) => item.id !== id),
      }));
    } catch (error) {
      console.error(error);
    }
  },
}));
