import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useUserStore } from "../../../store/useUserStore";

export default function UserCreate() {
  const navigate = useNavigate();
  const addUser = useUserStore((state) => state.addUser);

  // State lokal untuk menampung isian form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "", // Kosongkan atau beri nilai default sesuai kebutuhan backend
    image: "", // Menampung URL gambar
  });

  // Fungsi untuk menangani perubahan ketikan di input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Fungsi saat tombol "Simpan" ditekan
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Mencegah halaman refresh otomatis

    try {
      // Memanggil action addUser dari store
      await addUser(formData);
      
      // Jika berhasil, kembali ke halaman daftar user
      alert("User berhasil ditambahkan!");
      navigate("/dashboard/user"); 
    } catch (error) {
      alert("Terjadi kesalahan saat menyimpan data.");
      console.error(error);
    }
  };

  return (
    <div>
      <div className="mb-8 text-5xl md:text-4xl font-semibold text-[#8B2F4A] tracking-tight leading-tight text-center">
        <p>Tambah User Baru</p>
      </div>

      <div className="max-w-2xl mx-auto p-6">
        <div className="bg-[#F5F5DC] backdrop-blur-sm border border-gray-200 p-8 rounded-3xl shadow-sm">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-gray-700">Nama Lengkap</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B2F4A]"
                placeholder="Masukkan nama lengkap"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-semibold text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B2F4A]"
                placeholder="Masukkan email valid"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-semibold text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B2F4A]"
                placeholder="Masukkan password"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-semibold text-gray-700">URL Gambar Profil</label>
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                className="px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B2F4A]"
                placeholder="https://..."
              />
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <Link
                to="/dashboard/user"
                className="px-6 py-3 bg-gray-400 hover:bg-gray-500 text-white font-semibold rounded-xl transition-all duration-200"
              >
                Batal
              </Link>
              <button
                type="submit"
                className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
              >
                Simpan Data
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}