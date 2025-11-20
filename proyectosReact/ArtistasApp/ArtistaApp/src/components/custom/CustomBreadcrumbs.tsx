import { Home, ChevronRight } from "lucide-react";
import { Link } from "react-router";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "../ui/breadcrumb"

interface BreadcrumbItemData {
    label: string;
    to: string;
}

interface Props {
    currentPage: string;
    breadcrumbs?: BreadcrumbItemData[];
}

export const CustomBreadcrumbs = ({ currentPage, breadcrumbs = [] }: Props) => {
    return (
        <Breadcrumb>
            {/* Ajustamos gap-1.5 para que sea compacto y se vea bien dentro de la "píldora" del HomePage */}
            <BreadcrumbList className="gap-1.5 sm:gap-2 text-slate-500">

                {/* 1. Home como Icono */}
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link 
                            to="/" 
                            className="flex items-center gap-1 transition-colors hover:text-purple-600"
                            title="Ir al inicio"
                        >
                            <Home className="h-4 w-4" />
                            {/* Opcional: Ocultar texto 'Home' en móviles para ahorrar espacio */}
                            <span className="sr-only sm:not-sr-only text-xs font-medium">Home</span>
                        </Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>

                {/* Separador Inicial */}
                {(breadcrumbs.length > 0 || currentPage) && (
                    <BreadcrumbSeparator>
                        <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
                    </BreadcrumbSeparator>
                )}

                {/* 2. Breadcrumbs Intermedios (Dinámicos) */}
                {breadcrumbs.map((crumb, index) => (
                    <div key={index} className="flex items-center gap-1.5 sm:gap-2">
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link 
                                    to={crumb.to}
                                    className="text-xs font-medium transition-colors hover:text-purple-600"
                                >
                                    {crumb.label}
                                </Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator>
                             <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
                        </BreadcrumbSeparator>
                    </div>
                ))}

                {/* 3. Página Actual (Destacada) */}
                <BreadcrumbItem>
                    <BreadcrumbPage className="text-xs font-bold text-slate-800">
                        {currentPage}
                    </BreadcrumbPage>
                </BreadcrumbItem>

            </BreadcrumbList>
        </Breadcrumb>
    );
};
