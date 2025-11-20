import { Outlet } from "react-router"
import { CustomMenu } from "@/components/custom/CustomMenu"

export const ArtistasLayout = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4">
            <div className="max-w-7xl mx-auto text-black">
                <CustomMenu/>

                <Outlet />
            </div>
        </div>
    )
}
