import { RouterProvider } from "react-router"
import { router } from "./router/app.router"

export const ArtistasApp = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )

}
