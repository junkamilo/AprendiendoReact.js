import { RouterProvider } from "react-router"
import { Approuter } from "../router/router.app"
import { UserContextProvider } from "../context/UserContext"

export const ProfessionalApp = () => {
    return (
        <UserContextProvider>
            <div className="bg-gradient flex flex-col">
                <RouterProvider router={Approuter} />
            </div>
        </UserContextProvider>
    );
};

