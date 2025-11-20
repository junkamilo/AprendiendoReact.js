import { Outlet } from "react-router"
import { CustomMenu } from "@/components/custom/CustomMenu"

export const ArtistasLayout = () => {
    return (
        // Fondo con un gradiente más rico y profundo para que el "cristal" del menú resalte
        <div className="min-h-screen bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-slate-100 via-purple-50 to-blue-50 p-4 font-sans selection:bg-purple-200">
            <div className="max-w-7xl mx-auto relative">
                {/* El menú ahora vive dentro del flujo pero con estilo propio */}
                <div className="flex justify-center w-full mb-8 mt-4">
                    <CustomMenu />
                </div>

                <main className="animate-in fade-in duration-700 slide-in-from-bottom-4">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}
