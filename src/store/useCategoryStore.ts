import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Category {
  id: number;
  nama: string;
}

interface CategoryState {
  categories: Category[];
  addCategory: (nama: string) => void;
}

export const useCategoryStore = create<CategoryState>()(
  persist(
    (set) => ({
      categories: [],

      addCategory: (nama: string) =>
        set((state) => ({
          categories: [
            ...state.categories,
            { id: Date.now(), nama },
          ],
        })),
    }),
    {
      name: "category-storage",
    }
  )
);