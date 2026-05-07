import { CalendarDays, LayoutGrid, Mic2 } from "lucide-react";
import { useCategoryStore } from "../../store/useCategoryStore";
import { useEventStore } from "../../store/UseEventStore";
import { usePembicaraStore } from "../../store/usePembicaraStore";

export default function DashboardIndex() {
  const categories = useCategoryStore((state) => state.categories);
  const events = useEventStore((state) => state.events);
  const pembicara = usePembicaraStore((state) => state.pembicara);

  return (
    <div className="p-8">

      {/* HEADER */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#8B2F4A]">Dashboard</h1>
        <p className="text-gray-500">Control Panel Admin</p>
      </div>

      {/* CARD */}

<div className="grid md:grid-cols-3 gap-6 mb-10">

  {/* CATEGORY */}
  <div className="relative bg-white/60 backdrop-blur-md border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
    
    <div className="flex items-center justify-between mb-4">
      <div className="p-3 rounded-xl bg-cyan-100 text-cyan-600">
        <LayoutGrid size={22} />
      </div>
      <span className="text-xs text-gray-400">Category</span>
    </div>

    <h2 className="text-4xl font-bold text-gray-800">
      {categories.length}
    </h2>

    <p className="text-sm text-gray-500 mt-1">
      Total kategori tersedia
    </p>
  </div>

  {/* EVENT */}
  <div className="relative bg-white/60 backdrop-blur-md border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
    
    <div className="flex items-center justify-between mb-4">
      <div className="p-3 rounded-xl bg-green-100 text-green-600">
        <CalendarDays size={22} />
      </div>
      <span className="text-xs text-gray-400">Event</span>
    </div>

    <h2 className="text-4xl font-bold text-gray-800">
      {events.length}
    </h2>

    <p className="text-sm text-gray-500 mt-1">
      Total event aktif
    </p>
  </div>

  {/* PEMBICARA */}
  <div className="relative bg-white/60 backdrop-blur-md border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
    
    <div className="flex items-center justify-between mb-4">
      <div className="p-3 rounded-xl bg-orange-100 text-orange-600">
        <Mic2 size={22} />
      </div>
      <span className="text-xs text-gray-400">Pembicara</span>
    </div>

    <h2 className="text-4xl font-bold text-gray-800">
      {pembicara.length}
    </h2>

    <p className="text-sm text-gray-500 mt-1">
      Total pembicara terdaftar
    </p>
  </div>

</div>

      {/* ===================== CATEGORY TABLE ===================== */}
<div className="mb-10 bg-white/70 backdrop-blur-md border border-gray-200 shadow-sm rounded-2xl p-6">
  <h2 className="text-lg font-semibold mb-4 text-gray-700">
    Data Category
  </h2>

  <div className="overflow-x-auto">
    <table className="w-full text-sm text-left">
      <thead className="text-gray-500 border-b">
        <tr>
          <th className="py-3">No</th>
          <th>Nama</th>
        </tr>
      </thead>

      <tbody>
        {categories.map((item, index) => (
          <tr
            key={item.id}
            className="border-b last:border-none hover:bg-gray-50 transition"
          >
            <td className="py-3 text-gray-400">{index + 1}</td>
            <td className="font-medium text-gray-700">{item.nama}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {categories.length === 0 && (
    <p className="text-center mt-6 text-gray-400 text-sm">
      Belum ada kategori
    </p>
  )}
</div>


{/* ===================== EVENT TABLE ===================== */}
<div className="mb-10 bg-white/70 backdrop-blur-md border border-gray-200 shadow-sm rounded-2xl p-6">
  <h2 className="text-lg font-semibold mb-4 text-gray-700">
    Data Event
  </h2>

  <div className="overflow-x-auto">
    <table className="w-full text-sm text-left">
      <thead className="text-gray-500 border-b">
        <tr>
          <th className="py-3">No</th>
          <th>Nama</th>
          <th>Pembicara</th>
          <th>Tanggal</th>
          <th>Jam</th>
        </tr>
      </thead>

      <tbody>
        {events.map((item, index) => (
          <tr
            key={item.id}
            className="border-b last:border-none hover:bg-gray-50 transition"
          >
            <td className="py-3 text-gray-400">{index + 1}</td>
            <td className="font-medium text-gray-700">{item.nama}</td>
            <td className="text-gray-600">{item.pembicara}</td>
            <td className="text-gray-500">{item.tanggal}</td>
            <td className="text-gray-500">{item.jam}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {events.length === 0 && (
    <p className="text-center mt-6 text-gray-400 text-sm">
      Belum ada event
    </p>
  )}
</div>


{/* ===================== PEMBICARA TABLE ===================== */}
<div className="bg-white/70 backdrop-blur-md border border-gray-200 shadow-sm rounded-2xl p-6">
  <h2 className="text-lg font-semibold mb-4 text-gray-700">
    Data Pembicara
  </h2>

  <div className="overflow-x-auto">
    <table className="w-full text-sm text-left">
      <thead className="text-gray-500 border-b">
        <tr>
          <th className="py-3">No</th>
          <th>Nama</th>
          <th>Role</th>
        </tr>
      </thead>

      <tbody>
        {pembicara.map((item, index) => (
          <tr
            key={item.id}
            className="border-b last:border-none hover:bg-gray-50 transition"
          >
            <td className="py-3 text-gray-400">{index + 1}</td>
            <td className="font-medium text-gray-700">{item.nama}</td>
            <td className="text-gray-500">{item.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {pembicara.length === 0 && (
    <p className="text-center mt-6 text-gray-400 text-sm">
      Belum ada pembicara
    </p>
  )}
</div>
    </div>
  );
}