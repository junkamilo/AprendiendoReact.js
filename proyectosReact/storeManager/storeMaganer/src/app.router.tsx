import { createBrowserRouter, Navigate } from "react-router";
import { ShopLayout } from "./shop/layouts/ShopLayout";
import { HomePage } from "./shop/home/HomePage";
import { ProductPage } from "./shop/product/ProductPage";
import { GenderPage } from "./shop/gender/GenderPage";

import { LoginPage } from "./auth/page/Login/LoginPage";
import { RegisterPage } from "./auth/page/register/RegisterPage";

import { DashboardPage } from "./admin/pages/dashboard/DashboardPage";
import { AdminProductsPage } from "./admin/pages/products/AdminProductsPage";
import { lazy } from "react";

const AuthLayout = lazy(()=> import("./auth/layouts/AuthLayout"));
const AdminLayout = lazy(()=> import("./admin/Layouts/AdminLayout"));

export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <ShopLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'product/idSlug',
                element: <ProductPage />
            },
            {
                path: 'gender/:gender',
                element: <GenderPage />
            },
        ]
    },
    {
        path: 'auth',
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <Navigate to="/auth/login" />
            },
            {
                path: 'login',
                element: <LoginPage />
            },
            {
                path: 'register',
                element: <RegisterPage />
            }]
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <DashboardPage/>
            },
            {
                path: 'products',
                element: <AdminProductsPage/>
            },
            {
                path: 'products/:id',
                element: <AdminProductsPage/>
            },
        ]
    },
    {
        path:'*',
        element: <Navigate to="/"/>
    }
])
