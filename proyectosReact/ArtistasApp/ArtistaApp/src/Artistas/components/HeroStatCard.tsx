import { Card, CardContent} from "@/components/ui/card"
import { TrendingUp } from "lucide-react";
import type { PropsWithChildren } from "react";

//utilizamos PropsWithChildren para agregar children a los elementos padres
interface Props extends PropsWithChildren {
    label: string;
    value: string;
    trend?: string; // Texto pequeño extra (ej: género, porcentaje)
    icon: React.ReactNode;
    colorClass: string; // Para manejar los colores de fondo del icono
    children?: React.ReactNode;
}

//aca colocamos el children
export const HeroStatCard = ({ label, value, trend, icon, colorClass, children }: Props) => {
    return (
        <Card className="relative overflow-hidden border-0 bg-white/50 shadow-sm transition-all duration-200 hover:bg-white/80 hover:shadow-md">
            <CardContent className="p-4 flex flex-col justify-between h-full gap-3">
                
                {/* Header: Icono y Label pequeño */}
                <div className="flex items-start justify-between">
                    <div className={`rounded-xl p-2.5 ${colorClass}`}>
                        {icon}
                    </div>
                    {/* Si quieres poner el children (badges) aquí flotando */}
                    {children && <div>{children}</div>}
                </div>

                {/* Body: Número grande y descripción */}
                <div>
                    <div className="text-2xl font-extrabold text-slate-900 tracking-tight">
                        {value}
                    </div>
                    <div className="flex items-center justify-between mt-1">
                         <p className="text-xs font-medium text-slate-500 truncate">
                            {label}
                        </p>
                        {trend && (
                            <span className="flex items-center text-[10px] font-bold text-green-600 bg-green-100 px-1.5 py-0.5 rounded-full">
                                <TrendingUp className="h-2 w-2 mr-1" />
                                {trend}
                            </span>
                        )}
                    </div>
                </div>

            </CardContent>
        </Card>
    )
}
