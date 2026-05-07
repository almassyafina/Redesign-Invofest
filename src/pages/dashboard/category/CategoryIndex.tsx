import { Link } from "react-router-dom";
import { useCategoryStore } from "../../../store/useCategoryStore";


export default function CategoryIndex() {
  const categories = useCategoryStore((state) => state.categories);

  return (
    <div>
      <div className="text-5xl md:text-4xl font-semibold text-[#8B2F4A] tracking-tight leading-tight text-center">
        <p>Selamat datang di halaman category</p>
      </div>

      <div className="p-6 text-center">
        <Link 
          to="create" 
          className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-95">
          Tambah Category
        </Link>
      </div>

      {/* LIST DATA */}
      <div className="p-6">
        {categories.length === 0 ? (
          <p className="text-center">Belum ada category</p>
        ) : (
         categories.map((item) => (
          <div 
            key={item.id} 
            className="flex items-center justify-between bg-white/70 backdrop-blur-md border border-gray-200 p-4 mb-3 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-[2px] transition-all duration-200"
          >
            <div>
              <p className="text-sm text-gray-400">Category</p>
              <h3 className="text-base font-semibold text-gray-800">
                {item.nama}
              </h3>
            </div>

            <span className="text-xs px-3 py-1 bg-cyan-100 text-cyan-600 rounded-full">
              Active
            </span>
          </div>
          ))
        )}
      </div>
    </div>
  );
}