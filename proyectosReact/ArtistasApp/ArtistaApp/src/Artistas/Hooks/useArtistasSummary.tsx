import { useQuery } from "@tanstack/react-query";
import { getSummary } from "../actions/get-sumary.action";

export const useArtistasSummary = () => {
    return useQuery({
        queryKey: ['summary-information'],
        queryFn: () => getSummary(),
        staleTime: 1000 * 60 * 5
    });
}
