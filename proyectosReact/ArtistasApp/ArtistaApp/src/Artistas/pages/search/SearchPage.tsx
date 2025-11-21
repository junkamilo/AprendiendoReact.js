import { ArtistasStats } from "@/Artistas/components/ArtistasStats";
import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";
import { SearchIcon, Sparkles, Telescope } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { searchArtistAction } from "@/Artistas/actions/search-artist-action";
import { ArtistasGrid } from "@/Artistas/components/ArtistasGrid";

export const SearchPage = () => {

  const [searchParams] = useSearchParams();
  const name = searchParams.get('name') ?? undefined;

  const { data = [] } = useQuery({
    queryKey: ['search', { name }],
    queryFn: () => searchArtistAction({ name }),
    staleTime: 1000 * 60 * 5
  })

  const hasResults = Array.isArray(data) && data.length > 0;
  const isSearching = hasResults || !!name;

  return (
    <div className="space-y-8 pb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">

      {/* 1. HEADER UNIFICADO (Glass Card) */}
      {/* Usamos un diseño similar al Home para consistencia, pero con tonos más azules/fríos para denotar "Búsqueda" */}
      <section className="relative overflow-hidden rounded-3xl border border-white/40 bg-white/30 p-8 shadow-xl shadow-blue-900/5 backdrop-blur-md transition-all hover:bg-white/40">

        {/* Decoración de fondo específica para Search (Círculo Azul) */}
        <div className="absolute -left-10 -top-10 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">

          <div className="space-y-4 lg:flex-1">
            {/* Breadcrumbs encapsulados */}
            <div className="inline-flex items-center rounded-full bg-white/60 px-3 py-1 text-xs font-medium text-slate-600 backdrop-blur-sm mb-2">
              <SearchIcon className="mr-2 h-3 w-3 text-blue-500" />
              <CustomBreadcrumbs
                currentPage="Búsqueda"
                breadcrumbs={[
                  { label: "Inicio", to: "/" }
                ]}
              />
            </div>

            <CustomJumbotron
              title="Buscador de Artistas"
              description="Encuentra exactamente lo que buscas filtrando por nombre, poder o universo."
            />
          </div>

          {/* Stats integrados a la derecha, más compactos */}
          <div className="w-full lg:w-auto lg:min-w-[400px] rounded-2xl bg-white/50 p-4 shadow-sm ring-1 ring-black/5 backdrop-blur-sm">
            <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
              <Sparkles className="h-3 w-3" />
              Resumen Global
            </div>
            <ArtistasStats />
          </div>

        </div>
      </section>

      <section className="relative z-20 mt-8">

        {/* Contenedor Principal: Efecto Cristal Unificado */}
        <div className="min-h-[600px] rounded-[2.5rem] border border-white/50 bg-gradient-to-b from-white/60 via-white/40 to-white/10 p-6 md:p-10 shadow-xl shadow-blue-900/5 backdrop-blur-2xl transition-all">

          {/* A. CONTROLES (Sticky opcional si quisieras) */}
          <div className="relative z-30 mb-10">
            <SearchControls />
          </div>

          {/* B. DIVISOR SUTIL (Solo aparece si hay interacción) */}
          <div className="mb-8 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent opacity-50" />

          {/* C. ÁREA DE RESULTADOS */}
          <div className="relative z-20 min-h-[300px]">

            {/* 1. Header de Resultados (Solo si hay datos) */}
            {hasResults && (
              <div className="mb-6 flex items-center justify-between px-2 animate-in fade-in slide-in-from-bottom-2">
                <h3 className="text-lg font-semibold text-slate-700 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-blue-500" />
                  Resultados encontrados
                </h3>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">
                  {data.length} Artistas
                </span>
              </div>
            )}

            {/* 2. Renderizado Condicional de la Grid */}
            {hasResults ? (
              <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
                <ArtistasGrid artitas={data} />
              </div>
            ) : (
              /* 3. ESTADO VACÍO (Empty State) - Diseño Ilustrativo */
              <div className="flex h-[400px] flex-col items-center justify-center text-center animate-in zoom-in-95 duration-500">
                <div className="relative mb-6">
                  {/* Círculos decorativos de fondo */}
                  <div className="absolute inset-0 animate-pulse rounded-full bg-blue-400/20 blur-xl" />
                  <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-white/50 shadow-inner ring-1 ring-white/60 backdrop-blur-md">
                    {isSearching ? (
                      <Telescope className="h-10 w-10 text-slate-400 animate-bounce" />
                    ) : (
                      <Telescope className="h-10 w-10 text-slate-400" />
                    )}
                  </div>
                </div>

                <h3 className="mb-2 text-xl font-bold text-slate-700">
                  {isSearching ? "Explorando el universo..." : "Comienza tu búsqueda"}
                </h3>
                <p className="max-w-md text-slate-500">
                  {isSearching
                    ? "Estamos buscando en todas las galaxias conocidas."
                    : "Escribe el nombre de un artista, canción o género arriba para encontrar resultados estelares."}
                </p>
              </div>
            )}

          </div>
        </div>
      </section>

    </div>
  )
}

export default SearchPage;
