import type { Hero } from "../types/artistas-interfaces"
import { HeroGridCard } from "./HeroGridCard"

interface Props {
    artitas: Hero[]
}


export const ArtistasGrid = ({ artitas }: Props) => {
    return (
        // Grid ajustado para posters verticales (aspect ratio)
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            {artitas.map(art => (
                <HeroGridCard
                    key={art.id}
                    arts={art}
                />
            ))}
        </div>
    )
}
