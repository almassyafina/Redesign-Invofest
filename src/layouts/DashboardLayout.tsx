import { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { useCategoryStore } from "../store/useCategoryStore";
import { useEventStore } from "../store/useEventStore";
import { usePembicaraStore } from "../store/usePembicaraStore";

export default function DashboardLayout() {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  // Mengambil fungsi fetch dari masing-masing store
  const fetchCategories = useCategoryStore((state) => state.fetchCategories);
  const fetchEvents = useEventStore((state) => state.fetchEvents);
  const fetchPembicara = usePembicaraStore((state) => state.fetchPembicara);

  // useEffect untuk memastikan data selalu ter-fetch saat dashboard diakses
  useEffect(() => {
    fetchCategories();
    fetchEvents();
    fetchPembicara();
  }, [fetchCategories, fetchEvents, fetchPembicara]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex w-full h-screen bg-gray-50">
      {/* SIDEBAR (KIRI) */}
      <div className="bg-[#F5F5DC] w-64 flex flex-col justify-between p-4 shadow-lg">
        {/* LOGO */}
        <div>
          <img
            src="https://www.invofest-harkatnegeri.com/assets/text-image.png"
            alt="Logo"
            className="px-6 py-3"
          />
        </div>

        {/* MENU */}
        <div>
          <ul className="flex flex-col gap-4 w-full text-center">
            {[
              { path: "/dashboard", label: "DASHBOARD" },
              { path: "/dashboard/category", label: "CATEGORY" },
              { path: "/dashboard/pembicara", label: "PEMBICARA" },
              { path: "/dashboard/event", label: "EVENT" },
              { path: "/dashboard/Biodata", label: "BIODATA" },
            ].map((menu) => (
              <li
                key={menu.path}
                className="px-6 py-3 bg-[#911a3d] hover:bg-[#8b1a3c] text-white font-semibold rounded-ee-3xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
              >
                <Link to={menu.path} className="block w-full">
                  {menu.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* LOGOUT */}
        <div>
          <button
            type="button"
            onClick={handleLogout}
            className="w-full p-4 bg-red-700 text-white rounded-3xl cursor-pointer hover:bg-red-950 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>

      {/* KONTEN (KANAN) */}
      <div className="flex-1 p-8 overflow-auto">
        {/* Outlet akan merender halaman anak seperti EventIndex, CategoryIndex, dll */}
        <Outlet />
      </div>
    </div>
  );
}