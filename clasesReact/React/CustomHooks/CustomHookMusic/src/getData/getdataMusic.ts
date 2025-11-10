export const getMusic = async() =>{
    try {
        const response = await fetch('/data/music.json');
        if(!response.ok) throw new Error("Dato no cargado");
        const dataMusic = await response.json();
        return dataMusic;
    } catch (error) {
        console.error(error);
    }
}