import { Link } from "react-router-dom";
import { useEventStore } from "../../../store/useEventStore";
import { useCategoryStore } from "../../../store/useCategoryStore";
import { usePembicaraStore } from "../../../store/usePembicaraStore";

export default function EventIndex() {
  // Hanya membaca data dari store
  const events = useEventStore((state) => state.events);
  const deleteEvent = useEventStore((state) => state.deleteEvent);
  const categories = useCategoryStore((state) => state.categories);
  const pembicaras = usePembicaraStore((state) => state.pembicara);

  return (
    <div>
      {/* TITLE */}
      <div className="text-5xl md:text-4xl font-semibold text-[#8B2F4A] tracking-tight leading-tight text-center">
        <p>Selamat datang di halaman event</p>
      </div>

      {/* BUTTON TAMBAH */}
      <div className="p-6 text-center">
        <Link
          to="create"
          className="inline-flex items-center px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
        >
          Tambah Event
        </Link>
      </div>

      {/* LIST EVENT */}
      <div className="p-6">
        <div className="bg-[#F5F5DC] backdrop-blur-sm border border-gray-200 p-6 rounded-3xl shadow-sm">
        {Array.isArray(events) && events.length === 0 ? (
          <p className="text-center">Belum ada event</p>
        ) : (
          Array.isArray(events) && events.map((item: any) => {
            const category = categories?.find((cat) => cat.id === item.categoryId);
            const pembicara = pembicaras?.find((pem) => pem.id === item.pembicaraId);

            return (
              <div
                key={item.id}
                className="bg-white/70 backdrop-blur-md border border-gray-200 p-5 mb-4 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-3">
                  <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                  <span className="text-xs px-3 py-1 bg-green-100 text-green-600 rounded-full">
                    Event
                  </span>
                </div>

                <p className="text-sm text-gray-600 mb-1">
                  Category: {category?.name || "Tidak ada kategori"}
                </p>

                <p className="text-sm text-gray-600 mb-1">
                  Pembicara: {pembicara?.name || "Tidak ada pembicara"}
                </p>

                <p className="text-sm text-gray-500 mb-4">
                    {new Date(item.dateEvent).toLocaleDateString()}
                </p>

                <div className="flex gap-2">
                  <Link
                    to={`edit/${item.id}`}
                    className="px-4 py-2 bg-yellow-400 rounded-lg"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteEvent(item.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg"
                  >
                    Hapus
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  </div>
  );
}