import { Link } from "react-router-dom"; 
import { CalendarDays, LayoutGrid, Mic2, UserRound,  } from "lucide-react";
import { useCategoryStore } from "../../store/useCategoryStore";
import { useEventStore } from "../../store/useEventStore"; 
import { usePembicaraStore } from "../../store/usePembicaraStore";
import { useUserStore } from "../../store/useUserStore";

// Komponen StatCard (Tetap sama)
interface StatCardProps {
  title: string; value: number; color: "cyan" | "green" | "orange";
  Icon: React.ElementType; desc: string;
}

function StatCard({ title, value, color, Icon, desc }: StatCardProps) {
  const colorClasses = {
    cyan: "bg-cyan-100 text-cyan-600",
    green: "bg-green-100 text-green-600",
    orange: "bg-orange-100 text-orange-600"
  };
  return (
    <div className="relative bg-white/60 backdrop-blur-md border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-xl ${colorClasses[color]}`}><Icon size={22} /></div>
        <span className="text-xs font-medium text-gray-400 uppercase">{title}</span>
      </div>
      <h2 className="text-4xl font-bold text-gray-800">{value}</h2>
      <p className="text-sm text-gray-500 mt-1">{desc}</p>
    </div>
  );
}

export default function DashboardIndex() {
  // Hanya mengambil state-nya saja, tidak perlu memanggil fetch di sini lagi
  const { categories } = useCategoryStore();
  const { events } = useEventStore();
  const { pembicara } = usePembicaraStore();
  const { user } = useUserStore();

  return (
    <div className="p-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#8B2F4A]">Dashboard</h1>
      </div>

      {/* STAT CARDS */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <StatCard title="Category" value={Array.isArray(categories) ? categories.length : 0} color="cyan" Icon={LayoutGrid} desc="Total kategori" />
        <StatCard title="Event" value={Array.isArray(events) ? events.length : 0} color="green" Icon={CalendarDays} desc="Total event" />
        <StatCard title="Pembicara" value={Array.isArray(pembicara) ? pembicara.length : 0} color="orange" Icon={Mic2} desc="Total pembicara" />
        <StatCard title="User" value={Array.isArray(user) ? user.length : 0} color="cyan" Icon={UserRound} desc="Total user" />
      </div>

      {/* DATA TABLES GRID */}
      <div className="grid md:grid-cols-3 gap-6">
        
        {/* TABEL KATEGORI */}
        <div className="bg-[#F5F5DC] backdrop-blur-md border border-gray-200 shadow-sm rounded-2xl p-6">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Data Category</h2>
          <table className="w-full text-sm text-left">
            <tbody>
              {Array.isArray(categories) && categories.length > 0 ? categories.map((item, index) => (
                <Link key={item.id} to={`/dashboard/category`} style={{ display: 'contents' }}>
                  <tr className="border-b hover:bg-gray-50 cursor-pointer transition-colors">
                    <td className="py-3 font-medium">{index + 1}</td><td>{item.name}</td>
                  </tr>
                </Link>
              )) : <tr><td className="py-3 text-gray-400">Belum ada kategori</td></tr>}
            </tbody>
          </table>
        </div>

        {/* TABEL EVENT */}
        <div className="bg-[#F5F5DC] backdrop-blur-md border border-gray-200 shadow-sm rounded-2xl p-6">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Data Event</h2>
          <table className="w-full text-sm text-left">
            <tbody>
              {Array.isArray(events) && events.length > 0 ? events.map((item, index) => (
                <Link key={item.id} to={`/dashboard/event`} style={{ display: 'contents' }}>
                  <tr className="border-b hover:bg-gray-50 cursor-pointer transition-colors">
                    <td className="py-3 font-medium">{index + 1}</td><td>{item.name}</td>
                  </tr>
                </Link>
              )) : <tr><td className="py-3 text-gray-400">Belum ada event</td></tr>}
            </tbody>
          </table>
        </div>

        {/* TABEL PEMBICARA */}
        <div className="bg-[#F5F5DC] backdrop-blur-md border border-gray-200 shadow-sm rounded-2xl p-6">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Data Pembicara</h2>
          <table className="w-full text-sm text-left">
            <tbody>
              {Array.isArray(pembicara) && pembicara.length > 0 ? pembicara.map((item, index) => (
                <Link key={item.id} to={`/dashboard/pembicara`} style={{ display: 'contents' }}>
                  <tr className="border-b hover:bg-gray-50 cursor-pointer transition-colors">
                    <td className="py-3 font-medium">{index + 1}</td><td>{item.name}</td>
                  </tr>
                </Link>
              )) : <tr><td className="py-3 text-gray-400">Belum ada pembicara</td></tr>}
            </tbody>
          </table>
        </div>


        {/* TABEL USER */}
        <div className="bg-[#F5F5DC] backdrop-blur-md border border-gray-200 shadow-sm rounded-2xl p-6">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Data User</h2>
          <table className="w-full text-sm text-left">
            <tbody>
              {Array.isArray(user) && user.length > 0 ? user.map((item, index) => (
                <Link key={item.id} to={`/dashboard/user`} style={{ display: 'contents' }}>
                  <tr className="border-b hover:bg-gray-50 cursor-pointer transition-colors">
                    <td className="py-3 font-medium">{index + 1}</td><td>{item.name}</td>
                  </tr>
                </Link>
              )) : <tr><td className="py-3 text-gray-400">Belum ada user</td></tr>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}