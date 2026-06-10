import { useEffect } from "react"; // 1. Tambahkan import useEffect
import { Link } from "react-router-dom";
import { useUserStore } from "../../../store/useUserStore";

export default function UserIndex() {
  const users = useUserStore((state) => state.user);
  const deleteUsers = useUserStore((state) => state.deleteUser);
  const fetchUser = useUserStore((state) => state.fetchUser); // 2. Ambil fungsi fetchUser dari store

  // 3. Jalankan fetchUser saat halaman pertama kali dibuka
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <div>
      <div className="text-5xl md:text-4xl font-semibold text-[#8B2F4A] tracking-tight leading-tight text-center">
        <p>Selamat datang di halaman User</p>
      </div>

      <div className="p-4 text-center">
        <Link 
          to="create"
          className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-95">
          Tambah User
        </Link>
      </div>

      {/* LIST DATA */}
      <div className="p-6">
        <div className="bg-[#F5F5DC] backdrop-blur-sm border border-gray-200 p-6 rounded-3xl shadow-sm">
          {users.length === 0 ? (
            <p className="text-center text-gray-500">
              Belum ada User atau sedang memuat data...
            </p>
          ) : (
            users.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border p-3 mb-2 rounded-3xl bg-white/50"
              >
                <div>
                  <h2 className="font-bold">{item.name}</h2>
                  <p className="text-sm text-gray-600">{item.email}</p> {/* Lebih baik tampilkan email daripada password di index */}
                  
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 mt-2 rounded-xl object-cover"
                    />
                  )}
                </div>

                <div className="flex gap-2">
                  <Link
                    to={`edit/${item.id}`}
                    className="px-4 py-2 bg-yellow-400 text-neutral-800 font-medium rounded-lg hover:bg-yellow-500 transition-all"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => deleteUsers(item.id)}
                    className="px-4 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition-all"
                  >
                    Hapus
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}