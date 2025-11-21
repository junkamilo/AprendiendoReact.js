import { describe, test } from 'vitest';
import { getHeroesArtistasByPage } from './get-heroes-artistas-by-page.action';
import AxiosMockAdapter from 'axios-mock-adapter';
import { heroArtistas } from '../api/Artistas.api';


describe('gte artistas page action',()=>{
 
    const ArtistasApimok = new AxiosMockAdapter(heroArtistas);

 test('should return default artista',async()=>{
    ArtistasApimok.onGet('/').reply(200);

    const summary = await getHeroesArtistasByPage(1);
    console.log(summary);
    
 })
})