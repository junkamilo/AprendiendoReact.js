import type { Hero } from "../types/artistas-interfaces"
import { HeroGridCard } from "./HeroGridCard"

interface Props {
    artitas: Hero[]
}


export const ArtistasGrid = ({ artitas }: Props) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">

            {
                artitas.map(art => (
                    <HeroGridCard
                        key={art.id}
                        arts={art}
                    />
                ))
            }



        </div>
    )
}
