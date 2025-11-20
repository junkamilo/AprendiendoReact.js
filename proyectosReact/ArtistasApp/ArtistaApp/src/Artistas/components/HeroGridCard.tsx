import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Activity, Brain, Heart, PlayCircle, Shield, Zap } from "lucide-react"
import type { Hero } from "../types/artistas-interfaces"
import { useNavigate } from "react-router"


interface Props {
    arts: Hero;
}

export const HeroGridCard = ({ arts }: Props) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/artistas/${arts.slug}`);
    }

    const {
        name,
        image,
        universe,
        powers,
        strength,
        intelligence,
        speed,
        durability,
        team
    } = arts;

    return (
        <div
            onClick={handleClick}
            className="group relative h-[420px] w-full overflow-hidden rounded-3xl cursor-pointer shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20"
        >
            {/* 1. IMAGEN DE FONDO (Full Height) */}
            <div className="absolute inset-0 h-full w-full bg-slate-900">
                <img
                    src={image}
                    alt={name}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                {/* Overlay Gradiente Oscuro (Siempre visible abajo para texto) */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
            </div>

            {/* 2. BADGES SUPERIORES (Flotantes) */}
            <div className="absolute top-4 left-4 z-20 flex gap-2">
                <Badge variant="secondary" className="bg-white/20 text-white backdrop-blur-md border-0 hover:bg-white/30 font-medium tracking-wide">
                    {universe}
                </Badge>
            </div>

            <div className="absolute top-4 right-4 z-20">
                <Button size="icon" variant="ghost" className="rounded-full bg-black/20 text-white backdrop-blur-md hover:bg-red-500 hover:text-white transition-colors">
                    <Heart className="h-5 w-5" />
                </Button>
            </div>

            {/* 3. CENTRO: Botón de "Play/Ver" (Aparece en Hover) */}
            <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100 scale-90 group-hover:scale-100">
                <PlayCircle className="h-16 w-16 text-white drop-shadow-lg fill-white/20" strokeWidth={1} />
            </div>

            {/* 4. PANEL DE INFORMACIÓN (Bottom) */}
            <div className="absolute bottom-0 w-full p-6 z-20 translate-y-14 transition-transform duration-500 ease-out group-hover:translate-y-0">

                {/* Header: Nombre y Equipo */}
                <div className="mb-4">
                    <h3 className="text-2xl font-black text-white tracking-tight drop-shadow-md leading-none mb-1">
                        {name}
                    </h3>
                    <p className="text-sm font-medium text-slate-300 flex items-center gap-2">
                        <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        {team || "Artista Solitario"}
                    </p>
                </div>

                {/* Contenido Oculto (Aparece al subir el panel) */}
                <div className="space-y-4 opacity-0 transition-opacity duration-500 delay-100 group-hover:opacity-100">

                    {/* Stats Minimalistas */}
                    <div className="grid grid-cols-4 gap-2 p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/10">
                        <StatItem icon={<Zap className="h-3 w-3 text-yellow-400" />} value={strength} />
                        <StatItem icon={<Brain className="h-3 w-3 text-blue-400" />} value={intelligence} />
                        <StatItem icon={<Activity className="h-3 w-3 text-green-400" />} value={speed} />
                        <StatItem icon={<Shield className="h-3 w-3 text-purple-400" />} value={durability * 10} />
                    </div>

                    {/* Tags de Poderes (Limitados a 2 para no saturar) */}
                    <div className="flex flex-wrap gap-1.5">
                        {powers.slice(0, 3).map((p, i) => (
                            <span key={i} className="text-[10px] font-bold uppercase tracking-wider text-white/80 bg-white/10 px-2 py-1 rounded-md border border-white/5">
                                {p}
                            </span>
                        ))}
                        {powers.length > 3 && (
                            <span className="text-[10px] text-white/60 px-2 py-1">+more</span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

/** COMPONENTE AUXILIAR */
const StatItem = ({ icon, value }: { icon: React.ReactNode, value: number }) => (
    <div className="flex flex-col items-center gap-1">
        {icon}
        <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
            <div 
                className="h-full bg-white/80 rounded-full" 
                style={{ width: `${Math.min(value, 100)}%` }} 
            />
        </div>
    </div>
);

