import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy } from "lucide-react"
import type { JSX, PropsWithChildren } from "react";

//utilizamos PropsWithChildren para agregar children a los elementos padres
interface Props extends PropsWithChildren {
    musica:string;
    name:string;
    genero:string;
    incon: JSX.Element;
}

//aca colocamos el children
export const HeroStatCard = ({musica,name,genero,incon,children}:Props) => {
    return (
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{musica}</CardTitle>
                    {incon}
                </CardHeader>
                <CardContent>
                    <div className="text-lg font-bold">{name}</div>
                    <p className="text-xs text-muted-foreground">{genero}</p>
                </CardContent>
                {children}
            </Card>
        
    )
}
