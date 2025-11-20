import { Mic2, Music4, Trophy, Users } from "lucide-react"
import { HeroStatCard } from "./HeroStatCard"
import { useArtistasSummary } from "../Hooks/useArtistasSummary";

export const ArtistasStats = () => {

    const { data: summary } = useArtistasSummary();

    const total = summary?.totalHeroes || 0;

    return (
        <div className="grid grid-cols-2 gap-3 w-full">

            <HeroStatCard
                label="Total Artistas"
                value={total.toString()}
                trend="+12%"
                icon={<Users className="h-5 w-5 text-blue-600" />}
                colorClass="bg-blue-500/10 text-blue-600 border-blue-200/50"
            />

            <HeroStatCard
                label="Solistas"
                value={(summary?.heroCount || 0).toString()}
                trend="Top Tier"
                icon={<Mic2 className="h-5 w-5 text-purple-600" />}
                colorClass="bg-purple-500/10 text-purple-600 border-purple-200/50"
            />

            <HeroStatCard
                label="Bandas"
                value={(summary?.villainCount || 0).toString()}
                trend="En alza"
                icon={<Music4 className="h-5 w-5 text-pink-600" />}
                colorClass="bg-pink-500/10 text-pink-600 border-pink-200/50"
            />

            <HeroStatCard
                label="Ranking Global"
                value="#1"
                trend="Bad Bunny"
                icon={<Trophy className="h-5 w-5 text-emerald-600" />}
                colorClass="bg-emerald-500/10 text-emerald-600 border-emerald-200/50"
            />

        </div>
    )
}
