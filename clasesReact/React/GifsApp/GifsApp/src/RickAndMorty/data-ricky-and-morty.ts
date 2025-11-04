export const dataRickyAndMorty = async () => {
    try {
        const dataPersonaje = await fetch('https://rickandmortyapi.com/api/character');
        const data = await dataPersonaje.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}
