import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";


export default function ProtectedRoute(){
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);


    //jika isAuthenticated false, maka reedirect ke halaman login
    if(!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    //jika isAuthenticated true, maka render childern
    return <Outlet />;
}