import { create } from "zustand";

interface Pembicara {
  id: string | number; // Ubah ke string | number agar fleksibel dengan ID database
  name: string;
  role: string;
  image: string;
}

interface PembicaraState {
  pembicara: Pembicara[];
  fetchPembicara: () => Promise<void>;
  addPembicara: (data: Omit<Pembicara, "id">) => Promise<void>;
  updatePembicara: (id: string | number, data: Omit<Pembicara, "id">) => Promise<void>;
  deletePembicara: (id: string | number) => Promise<void>;
}

// URL Backend API Express untuk Pembicara
const API_URL = "https://backenduts-production-7092.up.railway.app/events";

export const usePembicaraStore = create<PembicaraState>()((set) => ({
  pembicara: [],

  // GET: Ambil semua data pembicara dari API
  fetchPembicara: async () => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok)
      throw new Error("Gagal mengambil data pembicara");

    const data = await response.json();

    console.log(data);

    set({
      pembicara: data.data,
    });

  } catch (error) {
    console.error(error);
  }
},

  // POST: Tambah pembicara baru ke API
  addPembicara: async (data) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Gagal menambah pembicara");
      const newPembicara = await response.json();

      set((state) => ({
        pembicara: [...state.pembicara, newPembicara],
      }));
    } catch (error) {
      console.error(error);
    }
  },

  // PUT: Update pembicara di API
  updatePembicara: async (id, data) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Gagal mengubah pembicara");
      const updatedPembicara = await response.json();

      set((state) => ({
        pembicara: state.pembicara.map((item) =>
          item.id === id ? { ...item, ...updatedPembicara } : item
        ),
      }));
    } catch (error) {
      console.error(error);
    }
  },

  // DELETE: Hapus pembicara dari API
  deletePembicara: async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Gagal menghapus pembicara");

      set((state) => ({
        pembicara: state.pembicara.filter((item) => item.id !== id),
      }));
    } catch (error) {
      console.error(error);
    }
  },
}));