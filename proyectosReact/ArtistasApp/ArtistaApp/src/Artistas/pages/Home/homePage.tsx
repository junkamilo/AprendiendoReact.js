"use client"

import {Heart } from "lucide-react"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { ArtistasStats } from "@/Artistas/components/ArtistasStats"
import { ArtistasGrid } from "@/Artistas/components/ArtistasGrid"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs"


export const HomePage = () => {
  return (
    <>
      <>
        {/* Header */}
        <CustomJumbotron title="Universo de los Artistas" description="Descubre y explora tus Artistas favoritos" />
        {/* Stats Dasboard */}
        <ArtistasStats />

        <Tabs value="all" className="mb-8 text-black">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All Characters (16)</TabsTrigger>
            <TabsTrigger value="favorites" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger value="heroes">Heroes (12)</TabsTrigger>
            <TabsTrigger value="villains">Villains (2)</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <h1>Favoritos</h1>
          </TabsContent>
          <TabsContent value="favorites">
            <h1>Favoritos</h1>
          </TabsContent>
          <TabsContent value="artistas">
            <h1>artistas</h1>
          </TabsContent>
          <TabsContent value="musica">
            <h1>musica</h1>
          </TabsContent>
        </Tabs>

        {/* Hero Cards Grid */}
        <ArtistasGrid />
      </>
    </>
  )
}

