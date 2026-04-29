import { Outlet } from "react-router-dom"
import Header from "../components/Header"

export default function MainLayout(){
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Header />

            <main className="w-full">
                <Outlet/>
            </main>

            <footer className="bg-rose-200 text-center p-4">
                &copy; 2026 UNIVERSITAS HARKAT NEGERI
            </footer>
        </div>
    )
}