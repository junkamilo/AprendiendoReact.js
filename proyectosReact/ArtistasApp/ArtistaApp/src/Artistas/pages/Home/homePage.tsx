"use client"

import { Heart } from "lucide-react"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { ArtistasStats } from "@/Artistas/components/ArtistasStats"
import { ArtistasGrid } from "@/Artistas/components/ArtistasGrid"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs"
import { getHeroesArtistasByPage } from "@/Artistas/actions/get-heroes-artistas-by-page.action"
import { useQuery } from "@tanstack/react-query"
import { useSearchParams } from "react-router"
import { useMemo } from "react"
import { getSummary } from "@/Artistas/actions/get-sumary.action"


export const HomePage = () => {

  const [searchParams, setsearchParams] = useSearchParams();

  const activeTab = searchParams.get('tab') ?? 'all';
  const page = searchParams.get('page') ?? '1';
  const limit = searchParams.get('limit') ?? '6';

  const selecdTab = useMemo(() => {
    const validTab = ['all', 'favorites', 'musica', 'artistas'];
    return validTab.includes(activeTab) ? activeTab : 'all';
  }, [activeTab]);

  // Lógica existente (intacta)

  const { data: heroesArtistas } = useQuery({
    queryKey: ['artistas',{page,limit}],
    queryFn: () => getHeroesArtistasByPage(+page, +limit),
    staleTime: 1000 * 60 * 5
  });

      const {data: summary} = useQuery({
          queryKey:['summary-information'],
          queryFn: () => getSummary(),
          staleTime: 1000 * 60 * 5
      });

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

  return (
    <>


      {/* Sección Superior */}
      <section className="space-y-6">
        <CustomJumbotron
          title="Universo de los Artistas"
          description="Descubre y explora tus Artistas favoritos"
        />
        <CustomBreadcrumbs currentPage="Todos los artistas" />
        <ArtistasStats />
      </section>

      {/* Sección de Navegación (Tabs) */}
      <section>
        <Tabs value={selecdTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-muted/50 p-1 gap-2 text-slate-600">

            <TabsTrigger
              onClick={() => setsearchParams((prev) => {
                prev.set('tab', 'all');
                return prev;
              })}
              value="all"
              className="flex items-center justify-center data-[state=active]:text-black font-medium"
            >
              All Characters ({summary?.totalHeroes})
            </TabsTrigger>

            <TabsTrigger
              onClick={() => setsearchParams((prev) => {
                prev.set('tab', 'favorites');
                return prev;
              })}
              value="favorites"
              className="flex items-center justify-center gap-2 data-[state=active]:text-black font-medium"
            >
              <Heart className="h-4 w-4" />
              Favorites (3)
            </TabsTrigger>

            <TabsTrigger
              onClick={() => setsearchParams((prev) => {
                prev.set('tab', 'musica');
                return prev;
              })}
              value="musica"
              className="flex items-center justify-center data-[state=active]:text-black font-medium"
            >
              musica ({summary?.heroCount})
            </TabsTrigger>

            <TabsTrigger
              onClick={() => setsearchParams((prev) => {
                prev.set('tab', 'artistas');
                return prev;
              })}
              value="artistas"
              className="flex items-center justify-center data-[state=active]:text-black font-medium"
            >
              artistas ({summary?.heroCount})
            </TabsTrigger>
          </TabsList>

          {/* Contenedores de Contenido */}
          <div className="mt-8 min-h-[300px]">

            <TabsContent value="all" className="space-y-4">
              {/* Forcé el color negro en los títulos */}
              <h2 className="text-2xl font-bold text-black">Todos los Personajes</h2>
              <ArtistasGrid artitas={filteredHeroes} />
            </TabsContent>

            <TabsContent value="favorites" className="space-y-4">
              <h2 className="text-2xl font-bold text-black">Tus Favoritos</h2>
              <ArtistasGrid artitas={filteredHeroes} />
            </TabsContent>

            <TabsContent value="artistas" className="space-y-4">
              <h2 className="text-2xl font-bold text-black">Artistas</h2>
              <ArtistasGrid artitas={filteredHeroes} />
            </TabsContent>

            <TabsContent value="musica" className="space-y-4">
              <h2 className="text-2xl font-bold text-black">Música</h2>
              <ArtistasGrid artitas={filteredHeroes} />
            </TabsContent>

          </div>

        </Tabs>
      </section>
      <CustomPagination totalPage={heroesArtistas?.pages ?? 0} />
    </>
  )
}

