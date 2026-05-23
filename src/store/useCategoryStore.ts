import { create } from "zustand";

interface Category {
  id: string | number; // Ubah ke string | number agar fleksibel dengan database
  name: string;
}

interface CategoryState {
  categories: Category[];
  fetchCategories: () => Promise<void>;
  addCategory: (name: string) => Promise<void>;
  updateCategory: (id: string | number, name: string) => Promise<void>;
  deleteCategory: (id: string | number) => Promise<void>;
}

// URL Backend API Express
const API_URL = "https://backenduts-production-7092.up.railway.app/categories";

export const useCategoryStore = create<CategoryState>()((set) => ({
  categories: [],

  // GET: Ambil data dari Backend
  fetchCategories: async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Gagal mengambil data kategori");
      const data = await response.json();
      
      set({ categories: data });
    } catch (error) {
      console.error(error);
    }
  },

  // CREATE: Tambah data ke Backend
  addCategory: async (name: string) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }), // Kirim sebagai object JSON
      });
      
      if (!response.ok) throw new Error("Gagal menambah kategori");
      const newCategory = await response.json();

      set((state) => ({
        categories: [...state.categories, newCategory],
      }));
    } catch (error) {
      console.error(error);
    }
  },

  // UPDATE: Edit data di Backend
  updateCategory: async (id, name) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });

      if (!response.ok) throw new Error("Gagal mengubah kategori");
      const updatedCategory = await response.json();

      set((state) => ({
        categories: state.categories.map((category) =>
          category.id === id ? { ...category, ...updatedCategory } : category
        ),
      }));
    } catch (error) {
      console.error(error);
    }
  },

  // DELETE: Hapus data di Backend
  deleteCategory: async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Gagal menghapus kategori");

      set((state) => ({
        categories: state.categories.filter((category) => category.id !== id),
      }));
    } catch (error) {
      console.error(error);
    }
  },
}));