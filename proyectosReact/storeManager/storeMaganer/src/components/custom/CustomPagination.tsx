import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "../ui/button"
import { useSearchParams } from "react-router";
import { cn } from "@/lib/utils";

interface Props {
    totalPage: number;
}

export const CustomPagination = ({ totalPage }: Props) => {

    const [searchParams, setsearchParams] = useSearchParams();

    const queryPage = searchParams.get('page') ?? '1';
    const page = isNaN(+queryPage) ? 1 : +queryPage;

    const handledPageChange = (newPage: number) => {
        if (newPage < 1 || newPage > totalPage) return;

        const params = new URLSearchParams(searchParams);
        params.set('page', newPage.toString());
        setsearchParams(params);

        // Opcional: Scroll suave hacia arriba al cambiar página
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Si solo hay 1 página, no mostramos nada para mantener el diseño limpio
    if (totalPage <= 1) return null;

    return (
        <nav
            role="navigation"
            aria-label="Pagination"
            className="flex items-center gap-1"
        >
            {/* Botón ANTERIOR */}
            <Button
                onClick={() => handledPageChange(page - 1)}
                disabled={page === 1}
                variant="ghost"
                size="icon" // Importante: size icon para que sea cuadrado/redondo base
                className="h-9 w-9 rounded-full text-slate-500 hover:bg-white/80 hover:text-slate-900 disabled:opacity-30 transition-all duration-300 hover:-translate-x-1"
                title="Anterior"
            >
                <ChevronLeft className="h-5 w-5" />
                <span className="sr-only">Anterior</span>
            </Button>

            {/* NÚMEROS DE PÁGINA */}
            <div className="flex items-center gap-1 px-2">
                {Array.from({ length: totalPage }).map((_, index) => {
                    const pageNumber = index + 1;
                    const isActive = page === pageNumber;

                    return (
                        <Button
                            key={index}
                            onClick={() => handledPageChange(pageNumber)}
                            variant="ghost"
                            size="icon" // Fuerza proporciones cuadradas/redondas
                            className={cn(
                                "h-9 w-9 rounded-full text-sm font-medium transition-all duration-300",
                                isActive
                                    ? "bg-slate-900 text-white shadow-lg shadow-purple-500/30 scale-110 hover:bg-slate-800 hover:scale-105"
                                    : "text-slate-600 hover:bg-white/60 hover:text-slate-900"
                            )}
                        >
                            {pageNumber}
                        </Button>
                    );
                })}
            </div>

            {/* Botón SIGUIENTE */}
            <Button
                onClick={() => handledPageChange(page + 1)}
                disabled={page === totalPage}
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-full text-slate-500 hover:bg-white/80 hover:text-slate-900 disabled:opacity-30 transition-all duration-300 hover:translate-x-1"
                title="Siguiente"
            >
                <ChevronRight className="h-5 w-5" />
                <span className="sr-only">Siguiente</span>
            </Button>

        </nav>
    );
};

