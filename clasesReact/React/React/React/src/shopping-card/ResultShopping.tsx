interface ResultShoppingProps {
  contador: number;
}
//le agregamos al componente un parametro que lo recibira desde la main, lo cual es el conrtador del boton cuando se le da click
//le agregamos tambien un interfas lo cual indica que el contador es un numero
export const ResultShopping = ({ contador }:ResultShoppingProps) => {
    return (
        <div className="Content-result">
            <p className="Result">Productos agregados: {contador}</p>
        </div>
    );
};