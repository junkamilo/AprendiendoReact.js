export interface Hero {
    id: number,
    name: string,
    //asignamos a owner nuestro tipo de Owner
    owner: Owner
}
//aca creamos nuestros tipos de datos
//type Owner = 'DC' | 'Marvel';

export enum Owner {
    DC = 'DC', //0
    Marvel = 'Marvel' //1
}
//paar esxportar archivos utilizamos la palabra export 
export const heroes: Hero[] = [
    {
        id: 1,
        name: 'Batman',
        owner: Owner.DC,
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: Owner.Marvel,
    },
    {
        id: 3,
        name: 'Superman',
        owner: Owner.DC,
    },
    {
        id: 4,
        name: 'Flash',
        owner: Owner.DC,
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: Owner.Marvel,
    },
    {
        name: 'Juan',
        id: 6,
        //aca nos apaeceran solo dos valores que fue nuestro tipos que creamos
        owner: Owner.DC
    }
];

//podemos usar tambien
//export default heroes;