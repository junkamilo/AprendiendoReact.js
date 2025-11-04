/**Creamos una interfas lo cual debera seguir esa estructura... */
interface Props {
    placeholder: string;
}

//parametrisamos la buscador lo cual le pasamos la interfas para que solo acepte string
export const CustomBuscador = ({ placeholder }: Props) => {
    return (
        <div className="content-buscador">
            {/**Le pasamos el placeholder al placeholder lo cual lo recibira en el header */}
            <input type="text" placeholder={placeholder} className="BuscadorPersonaje"/>
            <button>Buscar...</button>
        </div>
    );
};

