import { create } from 'zustand';

export interface User {
    id: string | number; 
    name: string;
    email: string;
    password: string;
    image?: string;
}

interface UserState {
    user: User[]; // 1. Ubah tipe data dari objek tunggal menjadi Array []
    fetchUser: () => Promise<void>; // 2. Hapus parameter (id) agar mengambil semua user
    addUser: (data: Omit<User, 'id'>) => Promise<void>;
    updateUser: (id: string | number, data: Omit<User, 'id'>) => Promise<void>;
    deleteUser: (id: string | number) => Promise<void>;
}   

const API_URL = 'https://backenduts-production-7092.up.railway.app/user';

export const useUserStore = create<UserState>()((set) => ({
    user: [], // Nilai awal berupa array kosong

    // GET ALL: Ambil semua data user dari API untuk halaman Index
    fetchUser: async () => {
        try {
            const response = await fetch(API_URL); // Ambil semua user tanpa ID

            if (!response.ok) 
                throw new Error('Gagal mengambil data user');
            
            const data = await response.json();

            // Sesuaikan dengan struktur respons API kamu. 
            // Jika datanya dibungkus data.data pakai data.data, jika langsung array pakai data.
            set({
                user: Array.isArray(data) ? data : (data.data || []),
            });

        } catch (error) {
            console.error(error);
        }
    },

    // POST: Tambah user baru ke API
    addUser: async (data) => {
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            if (!response.ok) throw new Error('Gagal menambah user');
            
            // Setelah berhasil tambah data, disarankan fetch ulang agar data paling sinkron
            const responseAll = await fetch(API_URL);
            const dataAll = await responseAll.json();
            set({ user: Array.isArray(dataAll) ? dataAll : (dataAll.data || []) });
            
        } catch (error) {
            console.error(error);
        }
    },

    // PUT: Update user di API
    updateUser: async (id, data) => {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            if (!response.ok) throw new Error('Gagal mengupdate user');
            const result = await response.json();
            const updatedUser = result.data ?? result;

            // Update user di dalam array lokal berdasarkan id
            set((state) => ({
                user: state.user.map((u) => (u.id === id ? { ...u, ...updatedUser } : u)),
            }));
        } catch (error) {
            console.error(error);
        }
    },

    // DELETE: Hapus user dari API
    deleteUser: async (id) => {
        if (!window.confirm("Apakah kamu yakin ingin menghapus user ini?")) return;

        try {   
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) throw new Error('Gagal menghapus user');  

            // Filter out user yang dihapus dari array lokal
            set((state) => ({
                user: state.user.filter((u) => u.id !== id),
            }));
        } catch (error) {
            console.error(error);
        }
    },
}));