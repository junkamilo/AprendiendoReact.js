//creamos un interfaces
interface BotonComprarProps {
  clickBoton: () => void;
  //A la interfas agregamos un string que lo va a resivir el boton
  firstName : String
}
//le agregamos al componente un parametro que lo recibira desde la main, lo cual es un evento de click.
//le agregamos tambien un interfas lo cual indica que es un calback void
export const BotonComprar = ({firstName ,clickBoton }:BotonComprarProps) => {
    return (
        <div className="Content-button">
            /**el boton recibe el parametro recibido */
            <button className="Button" onClick={clickBoton}>
                {firstName}
            </button>
        </div>
    );
};


