export const Buttonagregar = () => {
    const handleClick = () => {
        console.log('¡Se hizo clic en el botón!');
    };
    return (
        <button onClick={handleClick}>Agregar</button>
    )
}