export interface DatoUsers {
    name: string,
    edad: number,
    NumberIdentidad: number
    TipoIdentidad: Identidad
}

export enum Identidad {
    TI = "Tarjeta Identidad",
    CC = "Cedula"
}

 export const users: DatoUsers[] = [
{
        name: 'Juan Camilo',
        edad: 22,
        NumberIdentidad: 123456789,
        TipoIdentidad: Identidad.CC
    },
    {
        name: 'Sebastián Ramos',
        edad: 25,
        NumberIdentidad: 987654321,
        TipoIdentidad: Identidad.CC
    },
    {
        name: 'María López',
        edad: 19,
        NumberIdentidad: 112233445,
        TipoIdentidad: Identidad.TI
    },
    {
        name: 'Carlos Pérez',
        edad: 30,
        NumberIdentidad: 554433221,
        TipoIdentidad: Identidad.CC
    },
    {
        name: 'Ana Gómez',
        edad: 27,
        NumberIdentidad: 778899665,
        TipoIdentidad: Identidad.TI
    },
    {
        name: 'Luis Hernández',
        edad: 23,
        NumberIdentidad: 445566778,
        TipoIdentidad: Identidad.CC
    },
    {
        name: 'Valentina Ruiz',
        edad: 21,
        NumberIdentidad: 998877664,
        TipoIdentidad: Identidad.TI
    },
    {
        name: 'Daniel Torres',
        edad: 28,
        NumberIdentidad: 665544332,
        TipoIdentidad: Identidad.CC
    },
    {
        name: 'Sara Martínez',
        edad: 24,
        NumberIdentidad: 223344556,
        TipoIdentidad: Identidad.CC
    },
    {
        name: 'Tomás Herrera',
        edad: 26,
        NumberIdentidad: 334455667,
        TipoIdentidad: Identidad.CC
    }
];


