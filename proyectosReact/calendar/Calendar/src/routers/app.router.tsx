import { createBrowserRouter, Navigate } from "react-router";
import { LoginPages } from "../auth/pages/LoginPages";
import { CalendarPages } from "../calendar/index";

const autenticado = true;
const authStatus = autenticado ? 'authenticated' : 'no-authenticated';
// o 'not-authenticated'

export const appRouter = createBrowserRouter([

    // Rutas de autenticación
    {
        path: '/auth',
        children: [
            {
                index: true,
                element: <Navigate to="/auth/login" />
            },
            {
                path: 'login',
                element: authStatus === 'authenticated'
                    ? <Navigate to="/" />         // Si ya está autenticado → calendar
                    : <LoginPages />             // Si NO → mostrar login
            }
        ]
    },

    // Ruta principal (calendar) protegida
    {
        path: '/',
        element: authStatus === 'authenticated'
            ? <CalendarPages />              // Si está autenticado → calendar
            : <Navigate to="/auth/login" />  // Si NO → login
    },

    // Catch-all
    {
        path: '*',
        element: <Navigate to="/auth/login" />
    }
]);


