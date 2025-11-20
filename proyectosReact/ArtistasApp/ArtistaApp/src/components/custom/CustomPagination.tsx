import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "../ui/button"
import { useSearchParams } from "react-router";

interface Props {
    totalPage: number;
}

export const CustomPagination = ({ totalPage }: Props) => {

    const [searchParams, setsearchParams] = useSearchParams();

    const queryPage = searchParams.get('page') ?? '1';
    const page = isNaN(+queryPage) ? 1 : +queryPage;

    const handledPageChange = (newPage: number) => {
        if (newPage < 1 || newPage > totalPage) return;

        const params = new URLSearchParams(searchParams);
        params.set('page', newPage.toString());

        setsearchParams(params);
    };

    return (
        <div className="flex items-center justify-center space-x-2">

            <Button
                onClick={() => handledPageChange(page - 1)}
                disabled={page === 1}
                variant="outline"
                size="sm"
            >
                <ChevronLeft className="h-4 w-4" />
                Anteriores
            </Button>

            {Array.from({ length: totalPage }).map((_, index) => (
                <Button
                    key={index}
                    onClick={() => handledPageChange(index + 1)}
                    variant={page === index + 1 ? 'default' : 'outline'}
                    size="sm"
                >
                    {index + 1}
                </Button>
            ))}

            <Button
                onClick={() => handledPageChange(page + 1)}
                disabled={page === totalPage}
                variant="outline"
                size="sm"
            >
                Siguientes
                <ChevronRight className="h-4 w-4" />
            </Button>

        </div>
    );
};

