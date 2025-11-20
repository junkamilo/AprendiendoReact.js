"use client"

import { Heart } from "lucide-react"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { ArtistasStats } from "@/Artistas/components/ArtistasStats"
import { ArtistasGrid } from "@/Artistas/components/ArtistasGrid"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs"
import { useState } from "react"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs"


export const HomePage = () => {
  // Lógica existente (intacta)
  const [active, setActive] = useState<'all' | 'favorites' | 'artistas' | 'musica'>('all')

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
        <Tabs value={active} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-muted/50 p-1 gap-2 text-slate-600">

            <TabsTrigger
              onClick={() => setActive('all')}
              value="all"
              className="flex items-center justify-center data-[state=active]:text-black font-medium"
            >
              All Characters (16)
            </TabsTrigger>

            <TabsTrigger
              onClick={() => setActive('favorites')}
              value="favorites"
              className="flex items-center justify-center gap-2 data-[state=active]:text-black font-medium"
            >
              <Heart className="h-4 w-4" />
              Favorites (3)
            </TabsTrigger>

            <TabsTrigger
              onClick={() => setActive('musica')}
              value="musica"
              className="flex items-center justify-center data-[state=active]:text-black font-medium"
            >
              musica (12)
            </TabsTrigger>

            <TabsTrigger
              onClick={() => setActive('artistas')}
              value="favorites"
              className="flex items-center justify-center data-[state=active]:text-black font-medium"
            >
              artistas (2)
            </TabsTrigger>
          </TabsList>

          {/* Contenedores de Contenido */}
          <div className="mt-8 min-h-[300px]">

            <TabsContent value="all" className="space-y-4">
              {/* Forcé el color negro en los títulos */}
              <h2 className="text-2xl font-bold text-black">Todos los Personajes</h2>
              <ArtistasGrid />
            </TabsContent>

            <TabsContent value="favorites" className="space-y-4">
              <h2 className="text-2xl font-bold text-black">Tus Favoritos</h2>
              <ArtistasGrid />
            </TabsContent>

            <TabsContent value="artistas" className="space-y-4">
              <h2 className="text-2xl font-bold text-black">Artistas</h2>
              <ArtistasGrid />
            </TabsContent>

            <TabsContent value="musica" className="space-y-4">
              <h2 className="text-2xl font-bold text-black">Música</h2>
              <ArtistasGrid />
            </TabsContent>

          </div>

        </Tabs>
      </section>
      <CustomPagination totalPage={8} />
    </>
  )
}

