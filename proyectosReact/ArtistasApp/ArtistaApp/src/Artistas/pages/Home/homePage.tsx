"use client"

import { Heart, Mic, Music, Sparkles, Users } from "lucide-react"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { ArtistasStats } from "@/Artistas/components/ArtistasStats"
import { ArtistasGrid } from "@/Artistas/components/ArtistasGrid"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs"
import { useSearchParams } from "react-router"
import { useMemo } from "react"
import { useArtistasSummary } from "@/Artistas/Hooks/useArtistasSummary"
import { usePaginatedHero } from "@/Artistas/Hooks/usePaginatedHero"


export const HomePage = () => {

  const triggerStyles = "flex-1 gap-2 rounded-full px-6 py-3 text-sm font-bold text-slate-600 transition-all duration-200 hover:bg-white/50 hover:text-slate-900 data-[state=active]:bg-white data-[state=active]:text-slate-950 data-[state=active]:shadow-md data-[state=active]:ring-1 data-[state=active]:ring-black/5";

  // --- LÓGICA ORIGINAL (INTACTA) ---
  const [searchParams, setsearchParams] = useSearchParams();

  const activeTab = searchParams.get('tab') ?? 'all';
  const page = searchParams.get('page') ?? '1';
  const limit = searchParams.get('limit') ?? '6';
  const category = searchParams.get('category') ?? 'all';

  const selecdTab = useMemo(() => {
    const validTab = ['all', 'favorites', 'musica', 'artistas'];
    return validTab.includes(activeTab) ? activeTab : 'all';
  }, [activeTab]);

  // Custom Hooks
  const { data: heroesArtistas } = usePaginatedHero(+page, +limit, category);
  const { data: summary } = useArtistasSummary();

  const filteredHeroes = useMemo(() => {
    if (!heroesArtistas?.heroes) return [];

    switch (selecdTab) {
      case 'favorites':
        return heroesArtistas.heroes.filter(h => h.category === 'favorites');
      case 'musica':
        return heroesArtistas.heroes.filter(h => h.category === 'musica');
      case 'artistas':
        return heroesArtistas.heroes.filter(h => h.category === 'artista');
      default:
        return heroesArtistas.heroes;
    }
  }, [heroesArtistas, selecdTab]);

  // --- RENDERIZADO CON NUEVO DISEÑO VISUAL ---
  return (
    <div className="space-y-10 pb-12">

      {/* 1. SECCIÓN HERO: Diseño de tarjeta unificada con cristal */}
      <section className="relative overflow-hidden rounded-3xl border border-white/40 bg-white/30 p-8 shadow-2xl shadow-indigo-500/10 backdrop-blur-md transition-all hover:bg-white/40">
        {/* Decoración de fondo sutil */}
        <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-purple-400/20 blur-3xl" />

        <div className="relative z-10 grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
          <div className="space-y-4">
            {/* Breadcrumbs estilizados */}
            <div className="inline-flex items-center rounded-full bg-white/60 px-3 py-1 text-xs font-medium text-slate-600 backdrop-blur-sm">
              <Sparkles className="mr-2 h-3 w-3 text-purple-500" />
              <CustomBreadcrumbs currentPage="Explorar" />
            </div>

            <CustomJumbotron
              title="Universo de los Artistas"
              description="Descubre y explora tus Artistas favoritos en una experiencia inmersiva."
            />
          </div>

          {/* Stats flotando a la derecha o abajo */}
          <div className="rounded-2xl bg-white/50 p-6 shadow-sm ring-1 ring-black/5 backdrop-blur-sm">
            <ArtistasStats />
          </div>
        </div>
      </section>


      {/* 2. SECCIÓN DE NAVEGACIÓN Y CONTENIDO */}
      <section className="space-y-8">
        <Tabs value={selecdTab} className="w-full space-y-8">

          {/* TABS LIST: Aumenté la opacidad del fondo (bg-white/60) para que el texto se lea mejor */}
          <div className="flex justify-center">
            <TabsList className="inline-flex h-auto w-full max-w-4xl items-center justify-center rounded-full border border-white/50 bg-white/60 p-1.5 shadow-lg shadow-purple-900/5 backdrop-blur-2xl">

              {/* Tab: All */}
              <TabsTrigger
                onClick={() => setsearchParams((prev) => {
                  prev.set('tab', 'all');
                  prev.set('category', 'all');
                  prev.set('page', '1');
                  return prev;
                })}
                value="all"
                className={triggerStyles} // <--- Usando la constante corregida
              >
                <Users className="h-4 w-4" />
                <span className="hidden sm:inline">Todos</span>
                <span className="ml-1 rounded-md bg-slate-200/50 px-1.5 py-0.5 text-xs font-extrabold text-slate-700 group-data-[state=active]:bg-slate-900 group-data-[state=active]:text-white">
                  {summary?.totalHeroes}
                </span>
              </TabsTrigger>

              {/* Tab: Favoritos */}
              <TabsTrigger
                onClick={() => setsearchParams((prev) => {
                  prev.set('tab', 'favorites');
                  return prev;
                })}
                value="favorites"
                className={triggerStyles} // <--- Usando la constante corregida
              >
                {/* Agregué clases de color al icono para que resalte más */}
                <Heart className="h-4 w-4 group-hover:text-red-500 group-data-[state=active]:fill-red-500 group-data-[state=active]:text-red-600" />
                <span className="hidden sm:inline">Favoritos</span>
                <span className="ml-1 text-xs opacity-70 font-semibold">(3)</span>
              </TabsTrigger>

              {/* Tab: Música */}
              <TabsTrigger
                onClick={() => setsearchParams((prev) => {
                  prev.set('tab', 'musica');
                  return prev;
                })}
                value="musica"
                className={triggerStyles} // <--- Usando la constante corregida
              >
                <Music className="h-4 w-4 group-hover:text-purple-500 group-data-[state=active]:text-purple-600" />
                <span className="hidden sm:inline">Música</span>
                <span className="ml-1 text-xs opacity-70 font-semibold">({summary?.heroCount})</span>
              </TabsTrigger>

              {/* Tab: Artistas */}
              <TabsTrigger
                onClick={() => setsearchParams((prev) => {
                  prev.set('tab', 'artistas');
                  prev.set('category', 'artistas');
                  prev.set('page', '1');
                  return prev;
                })}
                value="artistas"
                className={triggerStyles} // <--- Usando la constante corregida
              >
                <Mic className="h-4 w-4 group-hover:text-blue-500 group-data-[state=active]:text-blue-600" />
                <span className="hidden sm:inline">Artistas</span>
                <span className="ml-1 text-xs opacity-70 font-semibold">({summary?.heroCount})</span>
              </TabsTrigger>

            </TabsList>
          </div>

          {/* CONTENIDO */}
          <div className="min-h-[300px]">
            {['all', 'favorites', 'artistas', 'musica'].map((val) => (
              <TabsContent
                key={val}
                value={val}
                className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500"
              >
                <div className="flex items-center justify-between px-2">
                  <h2 className="text-3xl font-extrabold tracking-tight text-slate-900"> {/* Texto sólido más legible */}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600">
                      {val === 'all' && 'Todos los Personajes'}
                      {val === 'favorites' && 'Tus Favoritos'}
                      {val === 'artistas' && 'Directorio de Artistas'}
                      {val === 'musica' && 'Catálogo Musical'}
                    </span>
                  </h2>
                  <span className="text-sm font-medium text-slate-500 italic">
                    Mostrando resultados
                  </span>
                </div>

                {/* Fondo del grid más opaco para contrastar con las cards de artistas */}
                <div className="rounded-2xl border border-white/60 bg-white/40 p-6 shadow-sm backdrop-blur-md">
                  <ArtistasGrid artitas={filteredHeroes} />
                </div>
              </TabsContent>
            ))}
          </div>

        </Tabs>
      </section>

      {/* 3. PAGINACIÓN */}
      <div className="flex justify-center pt-4">
        <div className="rounded-2xl bg-white/50 p-2 backdrop-blur-md">
          <CustomPagination totalPage={heroesArtistas?.pages ?? 0} />
        </div>
      </div>

    </div>
  )
}

