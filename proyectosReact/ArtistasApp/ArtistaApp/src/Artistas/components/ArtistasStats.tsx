import { Badge } from "@/components/ui/badge"
import { Trophy} from "lucide-react"
import { HeroStatCard } from "./HeroStatCard"
import { getSummary } from "../actions/get-sumary.action";
import { useQuery } from "@tanstack/react-query";

export const ArtistasStats = () => {

    const {data: summary} = useQuery({
        queryKey:['summary-information'],
        queryFn: () => getSummary(),
        staleTime: 1000 * 60 * 5
    });

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <HeroStatCard musica="10 canciones" name="Bad bunny" genero="Regueton" incon={<Trophy className="h-4 w-4 text-muted-foreground" />}>
            {/* aca pegamos el children */}
                <div className="flex gap-1 mt-2">
                    <Badge variant="secondary" className="text-xs">
                        {summary?.heroCount} Heroes
                    </Badge>
                    <Badge variant="destructive" className="text-xs">
                        {summary?.villainCount} Villains
                    </Badge>
                </div>
            </HeroStatCard>

            <HeroStatCard musica="10 canciones" name="Bad bunny" genero="Regueton" incon={<Trophy className="h-4 w-4 text-muted-foreground" />}>
            </HeroStatCard>

            <HeroStatCard musica="10 canciones" name="Bad bunny" genero="Regueton" incon={<Trophy className="h-4 w-4 text-muted-foreground" />}>
            </HeroStatCard>

            <HeroStatCard musica="10 canciones" name="Bad bunny" genero="Regueton" incon={<Trophy className="h-4 w-4 text-muted-foreground" />}>
            </HeroStatCard>
        </div>
    )
}
