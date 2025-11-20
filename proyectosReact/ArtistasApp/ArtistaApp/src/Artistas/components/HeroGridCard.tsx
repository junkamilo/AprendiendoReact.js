import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Progress } from "@radix-ui/react-progress"
import { Brain, Eye, Gauge, Heart, Shield, Zap } from "lucide-react"
import type { Hero } from "../types/artistas-interfaces"
import { useNavigate } from "react-router"

interface StatProps {
    label: string;
    value: number;
    icon: React.ReactNode;
}

interface Props {
    arts: Hero;
}

export const HeroGridCard = ({ arts }: Props) => {

    const navigate = useNavigate();

    const handleClick = ()=>{
        navigate(`/artistas/${arts.slug}`);
    }

    const {
        name,
        image,
        universe,
        description,
        powers,
        strength,
        intelligence,
        speed,
        durability,
        team
    } = arts;

    return (
        <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50">

            {/* IMG */}
            <div className="relative h-64">
                <img
                    src={image}
                    alt={name}
                    className="object-cover transition-all duration-500 group-hover:scale-110 absolute top-[-30px] w-full h-[410px]"
                    onClick={handleClick}
                />

                {/* Universe */}
                <Badge className="absolute top-3 right-3 text-xs bg-blue-600 text-white">
                    {universe}
                </Badge>

                {/* Favorite */}
                <Button size="sm" variant="ghost" className="absolute bottom-3 right-3 bg-white/90 hover:bg-white">
                    <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                </Button>

                {/* View */}
                <Button
                    size="sm"
                    variant="ghost"
                    className="absolute bottom-3 left-3 bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
                >
                    <Eye className="h-4 w-4 text-gray-600" />
                </Button>
            </div>

            {/* BODY */}
            <CardHeader className="py-3 z-10 bg-gray-100/50 backdrop-blur-sm relative top-1 group-hover:top-[-10px] transition-all duration-300">
                <h3 className="font-bold text-lg">{name}</h3>
                <p className="text-sm text-gray-600">{team}</p>
            </CardHeader>

            <CardContent className="space-y-4">

                {/* Description */}
                <p className="text-sm text-gray-600 line-clamp-2">
                    {description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3">

                    <Stat label="Strength" value={strength} icon={<Zap className="h-3 w-3 text-orange-500" />} />
                    <Stat label="Intelligence" value={intelligence} icon={<Brain className="h-3 w-3 text-blue-500" />} />
                    <Stat label="Speed" value={speed} icon={<Gauge className="h-3 w-3 text-green-500" />} />
                    <Stat label="Durability" value={durability * 10} icon={<Shield className="h-3 w-3 text-purple-500" />} />

                </div>

                {/* Powers */}
                <div className="space-y-2">
                    <h4 className="font-medium text-sm">Poderes</h4>
                    <div className="flex flex-wrap gap-1">
                        {powers.map((p, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                                {p}
                            </Badge>
                        ))}
                    </div>
                </div>

            </CardContent>

        </Card>
    );
};

/** COMPONENTE AUXILIAR */
const Stat = ({ label, value, icon }:StatProps) => (
    <div className="space-y-1">
        <div className="flex items-center gap-1">
            {icon}
            <span className="text-xs font-medium">{label}</span>
        </div>
        <Progress value={value} className="h-2 bg-amber-300" />
    </div>
);

