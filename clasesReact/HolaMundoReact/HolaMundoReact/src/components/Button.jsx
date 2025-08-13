import "../components/Button.css"
import { useState } from "react"; //estados de componentes
const Button = () =>{
    //creamos el estado del componente que por defecto esta en false
    const  [ isFollowing , setIsFollowing] = useState(false);
    //una calback que hace la funcion de click
    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }
    //cambiamos el estado de texto
    const text = isFollowing ? 'Siguiendo' : 'Seguir ';
    //cambiamos el estilo del boton
    const buttonClasName = isFollowing ? 'infollow-button' : 'follow-button';
    return(
        <button className={buttonClasName} onClick={handleClick}>{text}</button>
    );
}
export default Button; 