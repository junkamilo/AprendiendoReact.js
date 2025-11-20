import { ArtistasStats } from "@/Artistas/components/ArtistasStats";
import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";
import { SearchIcon, Sparkles } from "lucide-react";

export const SearchPage = () => {
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

      {/* 2. ZONA DE CONTROL DE BÚSQUEDA */}
      {/* Aquí preparamos el escenario para tu componente SearchControls */}
      <section className="relative z-20">
        {/* Un fondo sutil o contenedor para que los inputs resalten */}
        <div className="min-h-[400px] rounded-3xl border border-white/50 bg-gradient-to-b from-white/40 to-white/10 p-6 shadow-sm backdrop-blur-md">
            <SearchControls />
        </div>
      </section>

    </div>
  )
}

export default SearchPage;
