import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";




export default function DashboardLayout(){

    const logout = useAuthStore ((state) => state.logout);
    const navigate = useNavigate();
    
    //Fungsi Logout
    const handleLogout = () => {
        logout();

    //Redirect ke halaman login 
    navigate("/login");
    };




    return (
        <div className="flex w-full h-screen">
            {/*kiri*/}
            <div className="bg-[#a8173e] w-64 flex flex-col justify-between p-4">
            {/*atas*/}
                <div>
                <img src="https://www.invofest-harkatnegeri.com/assets/text-image.png"
                 alt=""
                 className="px-6 py-3"  />
                </div>


            {/*tengah*/}
                <div>
                    <ul className="flex flex-col gap-6 w-full">
                        <li className="inline-flex items-center px-6 py-3 bg-[#ce4870] hover:bg-[#8b1a3c] text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-95  ">
                            <Link to="/dashboard">DASHBOARD</Link>
                        </li>
                        <li className="inline-flex items-center px-6 py-3 bg-[#ce4870] hover:bg-[#8b1a3c] text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 ">
                            <Link to="/dashboard/category">CATEGORY</Link>
                        </li>
                        <li className="inline-flex items-center px-6 py-3 bg-[#ce4870] hover:bg-[#8b1a3c] text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-95  ">
                            <Link to="/dashboard/pembicara">PEMBICARA</Link>
                        </li>
                        <li className=" inline-flex items-center px-6 py-3 bg-[#ce4870] hover:bg-[#8b1a3c] text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 ">
                            <Link to="/dashboard/event">EVENT</Link>
                        </li>
                    </ul>
                </div>
                

                

            {/*bawah*/}
                <div>
                    <button 
                    type="button" 
                    onClick={handleLogout}
                    className="w-full p-4 bg-red-700 text-white rounded cursor-pointer hover:bg-red-950">
                        Logout
                    </button>
                </div>
                
            </div>



            {/*kanan*/}
            <div className="flex-1 p-4 overflow-auto">
                <Outlet/>
            </div>

        </div>
    )
}