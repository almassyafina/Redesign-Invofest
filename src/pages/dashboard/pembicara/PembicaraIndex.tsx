import { Link } from "react-router-dom";

export default function PembicaraIndex(){
    return (
        <div>
            <div className="text-5xl md:text-4xl font-semibold text-[#8B2F4A] tracking-tight leading-tight text-center">
            <p>Selamat datang di halaman pembicara</p>
            </div>

        <div className="p-4 text-center">
            <Link 
            to="Create" 
            className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-95">
                Tambah Pembicara
            </Link>
        </div>
        </div>
    )
}