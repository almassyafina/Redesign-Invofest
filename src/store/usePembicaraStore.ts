import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Pembicara {
  id: number;
  nama: string;
  role: string;
  foto: string;
}

interface PembicaraState {
  pembicara: Pembicara[];
  addPembicara: (data: Omit<Pembicara, "id">) => void;
}

export const usePembicaraStore = create<PembicaraState>()(
  persist(
    (set) => ({
      pembicara: [],

      addPembicara: (data) =>
        set((state) => ({
          pembicara: [
            ...state.pembicara,
            { id: Date.now(), ...data },
          ],
        })),
    }),
    {
      name: "pembicara-storage",
    }
  )
);