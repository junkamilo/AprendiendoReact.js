import { heroArtistas } from "../api/Artistas.api"
import type { SummaryInformationResponse } from "../types/summary-information.response";

export const getSummary = async () =>{
    const { data } = await heroArtistas.get<SummaryInformationResponse>('/summary');
    
    return data;
}