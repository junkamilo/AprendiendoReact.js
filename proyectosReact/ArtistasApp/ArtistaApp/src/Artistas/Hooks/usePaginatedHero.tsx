import { useQuery } from "@tanstack/react-query";
import { getHeroesArtistasByPage } from "../actions/get-heroes-artistas-by-page.action";

export const usePaginatedHero = (page:number,limit:number, category='all') => {
  return useQuery({
    queryKey: ['artistas',{page,limit, category}],
    queryFn: () => getHeroesArtistasByPage(+page, +limit , category),
    staleTime: 1000 * 60 * 5
  });
}
