import { createBrowserRouter } from "react-router";
import { HomePage } from '../Artistas/pages/Home/homePage';
import { ArtistasPage } from "@/Artistas/pages/Artistas/ArtistasPage";
// import { SearchPage } from "@/Artistas/pages/search/SearchPage";
import { ArtistasLayout } from "@/Artistas/layouts/ArtistasLayout";
import { AdminLayout } from "@/admin/layouts/AdminLayout";
import { lazy } from "react";

const SearchPage = lazy(()=>import('@/Artistas/pages/search/SearchPage'));

export const router = createBrowserRouter([
    {
        path: '/',
        element: <ArtistasLayout />,
        children: [
            {
                index:true,
                element: <HomePage />
            },
            {
                path: 'artistas',
                element: <ArtistasPage />
            },
            {
                path: 'search',
                element: <SearchPage />
            },
        ]
    },

    {
        path: '/admin',
        element: <AdminLayout />,
        children:[
            {
                index: true,
                element: <SearchPage />
            }
        ]
    }
])