import { Link } from "react-router-dom";
import { useEventStore } from "../../../store/UseEventStore";

export default function EventIndex(){
    const events = useEventStore((state) => state.events);

    return (
        <div>
        <div className="text-5xl md:text-4xl font-semibold text-[#8B2F4A] tracking-tight leading-tight text-center">
            <p>Selamat datang di halaman event</p>


            <div className="p-6 text-2xl text-center">
            <Link 
            to="create" 
            className="inline-flex items-center px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-95">
                Tambah Event
            </Link>
            {events.length === 0 ? (
        <p>Belum ada event</p>
      ) : (
        events.map((item) => (
  <div
    key={item.id}
    className="bg-white/70 backdrop-blur-md border border-gray-200 p-5 mb-4 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-[2px] transition-all duration-300"
  >
    {/* HEADER */}
    <div className="flex justify-between items-start mb-3">
      <h2 className="text-lg font-semibold text-gray-800">
        {item.nama}
      </h2>

      <span className="text-xs px-3 py-1 bg-green-100 text-green-600 rounded-full">
        Event
      </span>
    </div>

  
    <p className="text-sm text-gray-600 ">
      {item.pembicara}
    </p>

   
    <p className="text-sm text-gray-500">
       {item.tanggal} • {item.jam}
    </p>
  </div>
  
))
        )}
            </div> 
            </div> 
            </div>
        )}
          
