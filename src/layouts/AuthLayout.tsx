import { Outlet } from "react-router-dom";

export default function AuthLayout(){
    return (
        <div className="grid grid-cols-2 items-center min-h-screen">
            {/* Kiri */}
            <div className="h-screen flex flex-col items-center justify-center">
                 <img 
                  src="https://www.invofest-harkatnegeri.com/assets/text-image.png" 
                  alt=""
                  className='w-96'
                   />
                <h2>Informatika Vocational Festival</h2>
            </div>


            {/* Kanan */}
            <div className="p-2">
                <Outlet/>
            </div>
        </div>
    )
}