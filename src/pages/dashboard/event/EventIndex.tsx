import { Link } from "react-router-dom";

export default function EventIndex(){
    return (
        <div className="text-5xl md:text-4xl font-semibold text-[#8B2F4A] tracking-tight leading-tight text-center">
            <p>Selamat datang di halaman event</p>


            <div className="p-6 text-2xl text-center">
            <Link 
            to="create" 
            className="inline-flex items-center px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-95">
                Tambah Event
            </Link>
            </div>
        </div>   
    )
}