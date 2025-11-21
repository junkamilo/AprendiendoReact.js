import { describe, expect, test } from 'vitest';
import { getArtistas } from './get-artistas';

describe('get ArtistaAction', () => {
    test('should fetch hero data and return with complete image url', async () => {
        //validamos que ese cantante venga con esa data
        const result = await getArtistas('michael-jackson');
        //la data que tendra que venir ese cantante
        expect(result).toStrictEqual({
            id: '1',
            name: 'Michael Jackson',
            slug: 'michael-jackson',
            alias: 'Rey del Pop',
            powers: [
                'Moonwalk',
                'Thriller',
                'Billie Jean',
                'Voz de tenor',
                'Baile robótico',
                'Smooth Criminal'
            ],
            description: 'Cantante, compositor y bailarín estadounidense, considerado una de las figuras culturales más importantes del siglo XX.',
            strength: 10,
            intelligence: 9,
            speed: 10,
            durability: 8,
            team: 'The Jackson 5',
            image: 'http://localhost:3001/images/1.jpeg',
            firstAppearance: '1964',
            status: 'Deceased',
            category: 'Soloist',
            universe: 'Pop'
        }
        );

    });
    test('should throw an error if hero is not found',async () => {
    const idSlug = 'michael-jackson';
    await getArtistas(idSlug).catch(error =>{
      expect(error).toBeDefined();
      expect(error.message).toBe('Request failed with status code 404');
    });
    expect(idSlug).toBeUndefined();
    });
})
