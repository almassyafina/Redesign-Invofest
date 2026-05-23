import { Link } from "react-router-dom";
import { useCategoryStore } from "../../../store/useCategoryStore";

export default function CategoryIndex() {
  const categories = useCategoryStore((state) => state.categories);
  const deleteCategory = useCategoryStore((state) => state.deleteCategory);

  return (
    <div>
      <div className="text-5xl md:text-4xl font-semibold text-[#8B2F4A] tracking-tight leading-tight text-center">
        <p>Selamat datang di halaman category</p>
      </div>

      <div className="p-6 text-center">
        <Link 
          to="create" 
          className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
        >
          Tambah Category
        </Link>
      </div>

      {/* LIST DATA */}
      <div className="p-6">
        <div className="bg-[#F5F5DC] backdrop-blur-sm border border-gray-200 p-6 rounded-3xl shadow-sm">
        {Array.isArray(categories) && categories.length === 0 ? (
          <p className="text-center">Belum ada category</p>
        ) : (
          Array.isArray(categories) && categories.map((item) => (
            <div 
              key={item.id} 
              className="flex items-center justify-between bg-[#510018] backdrop-blur-md border border-gray-200 p-4 mb-3 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div>
                <p className="text-sm text-white">Category</p>
                <h3 className="text-base font-semibold text-white">
                  {item.name}
                </h3>
              </div>

              <div className="flex gap-2">
                <Link
                  to={`edit/${item.id}`}
                  className="px-4 py-2 bg-yellow-400 text-black rounded-lg"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteCategory(item.id)}
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