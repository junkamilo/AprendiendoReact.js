import type { CSSProperties } from "react";

const firstName = "Juan Beltran";
const lastName = "Campo";

const favoriteGames = ['One piece','Dragon ball','brawl start','basketball'];
const isActive = true;

const addres = {
    zipCode: 'ABC-123',
    country: 'Canada',
}

const myStyles: CSSProperties = {
    backgroundColor: '#fafafa',
    borderRadius: 20,
    padding: 10,
    marginTop: 30
}

export const MyAwesomeApp = () =>{
    return(
        <>
            <h1>{firstName}</h1>
            <h3>{lastName}</h3>

            <p>{favoriteGames}</p>
            <p>{2+2}</p>

            <h1>{isActive ? 'Activo':'No activo'}</h1>

            <p style={myStyles}>{JSON.stringify(addres)}</p>
        </>
    );
};