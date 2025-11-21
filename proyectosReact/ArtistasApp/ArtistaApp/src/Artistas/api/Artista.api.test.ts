import { describe, expect, test } from 'vitest';
import { heroArtistas } from './Artistas.api';

const BASE_URL = import.meta.env.VITE_API_URL;

//haciendo testing a la pi de artistas
describe('ArtistaApi',()=>{
 test('should be configure pointing to the testing server',()=>{
    expect(heroArtistas).toBeDefined();
    //validamos la url que sea esa
    expect(heroArtistas.defaults.baseURL).toBe(`${BASE_URL}/api/heroes`);
    //validamos que este corriento por ese puerto
    expect(BASE_URL).toContain('3001');
 })
})