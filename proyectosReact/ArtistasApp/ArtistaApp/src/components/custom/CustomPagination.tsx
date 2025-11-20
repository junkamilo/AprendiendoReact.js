import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "../ui/button"

interface Props {
    totalPage: number;
}

export const CustomPagination = ({ totalPage }: Props) => {
    const page = 1 as number;

    return (
        <div className="flex items-center justify-center space-x-2">
            <Button 
            disabled={page === 1}
            variant="outline" size="sm">
                <ChevronLeft className="h-4 w-4" />
                Anteriores
            </Button>

            {
                Array.from({ length: totalPage }).map((_, index) => (
                    <Button 
                    key={index}
                    variant={
                        page === index + 1 ? 'default' : 'outline'
                    } size="sm" >
                        {index + 1}
                    </Button>
                ))
            }

            <Button 
            disabled={page === totalPage}
            variant="outline" size="sm">
                Siguientes
                <ChevronRight className="h-4 w-4" />
            </Button>
        </div>
    )
}
