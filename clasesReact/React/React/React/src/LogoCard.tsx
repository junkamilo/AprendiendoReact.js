import type { CSSProperties } from "react";

const Name = "juan camilo";
const lastName = "Beltran campo";
const favoritePersonajes = ['luffy', 'zoro', 'nami', 'usoop', 'frankly', 'shopper', 'robbin'];
const userActive = true;
const address = {
    zipCode: 'ABC-123',
    country: 'Canada'
}

//el :CSSProperties es una libreria de ract para ayudarnos a identicar que son propiedades de css
const myStyles: CSSProperties = {
    //aca le agregamos un boolean para cambiar el fondo de pantalla
    backgroundColor: userActive ? 'green' : 'red',
    border: '1px solid black',
    borderRadius: '1rem',
    padding: '1rem'
}

export const LogoCard = () => {
    return (
        <div className="ContentLogo">
            <div className="Logo"></div>
            <h3 className="ContentName">{Name} {lastName}</h3>
            <p style={{
                //aca le agregamos un boolean para cambiar el fondo de pantalla
                backgroundColor: userActive ? 'green' : 'red',
                border: '1px solid black',
                borderRadius: '1rem',
                padding: '1rem'
            }}
            >{favoritePersonajes.join(', ')}</p>
            <h1>{userActive ? 'Activo' : 'No Activo'}</h1>
            //lo agregamos con css propierties
            <p style={myStyles}>{JSON.stringify(address)}</p>
        </div>
    )
}