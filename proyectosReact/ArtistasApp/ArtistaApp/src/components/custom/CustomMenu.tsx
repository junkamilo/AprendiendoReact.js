import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@radix-ui/react-navigation-menu"
import { Link, useLocation } from "react-router"
import { cn } from "@/lib/utils";
import { Home, Search } from "lucide-react";

export const CustomMenu = () => {
    const { pathname } = useLocation();

    const isActive = (path: string) => pathname === path;

    // Estilos base para el Link: Transiciones suaves, forma de píldora
    const baseStyles = "group flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ease-out";

    // Estilo cuando NO está activo (Efecto Hover sutil)
    const inactiveStyles = "text-slate-600 hover:text-slate-900 hover:bg-white/50";

    // Estilo cuando ESTÁ activo (Degradado, Sombra Brillante, Texto Blanco)
    const activeStyles = "bg-slate-900 text-white shadow-[0_0_20px_-5px_rgba(0,0,0,0.3)] scale-105";

    return (
        <NavigationMenu className="relative z-10">
            <div className="bg-white/40 backdrop-blur-xl border border-white/60 p-1.5 rounded-full shadow-xl shadow-purple-500/5 ring-1 ring-white/50">

                <NavigationMenuList className="flex flex-row gap-1">

                    {/* --- ITEM 1: HOME --- */}
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link
                                to="/"
                                className={cn(baseStyles, isActive('/') ? activeStyles : inactiveStyles)}
                            >
                                {/* Icono animado ligeramente */}
                                <Home className={cn("w-4 h-4 transition-transform group-hover:scale-110", isActive('/') && "fill-current")} />
                                <span className="relative">
                                    Home
                                    {/* Pequeño punto brillante debajo del texto activo */}
                                    {isActive('/') && (
                                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-purple-400 rounded-full animate-pulse" />
                                    )}
                                </span>
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    {/* --- ITEM 2: SEARCH --- */}
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link
                                to="/search"
                                className={cn(baseStyles, isActive('/search') ? activeStyles : inactiveStyles)}
                            >
                                <Search className={cn("w-4 h-4 transition-transform group-hover:scale-110", isActive('/search') && "stroke-[3px]")} />
                                <span className="relative">
                                    Search
                                </span>
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </div>
        </NavigationMenu>
    )
}
