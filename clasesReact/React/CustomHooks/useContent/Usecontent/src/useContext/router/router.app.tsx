import { createBrowserRouter, Navigate } from "react-router";
import { AboutPage } from "../pages/about/AboutPage";
import { ProfilePage } from "../pages/profile/ProfilePage";
import { LoginPage } from "../pages/auth/LoginPage";
import { PrivateRoute } from "./PrivateRoute";


//creamos las rutas de la single page aplication
export const Approuter = createBrowserRouter([
    {
        path: "/",
        element: <AboutPage />
    },
    {
        path: "/profile",
        // element: <ProfilePage />
        element: <PrivateRoute element={ <ProfilePage/> }/>
    },
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        //en esta parte si el usuario agregar una ruta diferente me va a dirigir a aboutpage
        path:'*',
        element:<Navigate to={'/'}/>
    }
])
