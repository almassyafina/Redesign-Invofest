import { Link } from "react-router-dom";
import { usePembicaraStore } from "../../../store/usePembicaraStore";

export default function PembicaraIndex() {
  const pembicara = usePembicaraStore((state) => state.pembicara);

  return (
    <div>
      <div className="text-5xl md:text-4xl font-semibold text-[#8B2F4A] tracking-tight leading-tight text-center">
        <p>Selamat datang di halaman pembicara</p>
      </div>

      <div className="p-4 text-center">
        <Link 
          to="create"
          className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-95">
          Tambah Pembicara
        </Link>
      </div>

      {/* LIST DATA */}
      <div className="p-6">
        {pembicara.length === 0 ? (
          <p className="text-center">Belum ada pembicara</p>
        ) : (
          pembicara.map((item) => (
            <div key={item.id} className="border p-3 mb-2 rounded">
              <h2 className="font-bold">{item.nama}</h2>
              <p>{item.role}</p>
              {item.foto && (
                <img src={item.foto} alt={item.nama} className="w-24 mt-2" />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}