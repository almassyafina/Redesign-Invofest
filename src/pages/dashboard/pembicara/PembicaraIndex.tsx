import { Link } from "react-router-dom";
import { usePembicaraStore } from "../../../store/usePembicaraStore";

export default function PembicaraIndex() {
  const pembicara = usePembicaraStore((state) => state.pembicara);
  const deletePembicara = usePembicaraStore((state) => state.deletePembicara
);

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
  <div className="bg-[#F5F5DC] backdrop-blur-sm border border-gray-200 p-6 rounded-3xl shadow-sm">
  {pembicara.length === 0 ? (
    <p className="text-center">
      Belum ada pembicara
    </p>
  ) : (
    pembicara.map((item) => (
      <div
        key={item.id}
        className="flex justify-between items-center border p-3 mb-2 rounded-3xl"
      >

        <div>
          <h2 className="font-bold">
            {item.name}
          </h2>

          <p>{item.role}</p>

          {item.image && (
            <img
              src={item.image}
              alt={item.name}
              className="w-24 mt-2 rounded-ee-2xl"
            />
          )}
        </div>

        <div className="flex gap-2">

          <Link
            to={`edit/${item.id}`}
            className="px-4 py-2 bg-yellow-400 rounded-lg"
          >
            Edit
          </Link>

          <button
            onClick={() =>
              deletePembicara(item.id)
            }
            className="px-4 py-2 bg-red-500 text-white rounded-lg"
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