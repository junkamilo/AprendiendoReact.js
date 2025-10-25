interface Game {
    nombre : string,
    categoria : string,
    precio : number,
    calificaciones : number[]
}

const Juegos: Game[] = [
    {
        nombre: "Trone",
        categoria: "Gore",
        precio: 120000,
        calificaciones: [2, 4, 1, 5, 1]
    },
    {
        nombre: "Galactic Warriors",
        categoria: "Acción",
        precio: 180000,
        calificaciones: [4, 5, 5, 4, 3]
    },
    {
        nombre: "Mystic Forest",
        categoria: "Aventura",
        precio: 150000,
        calificaciones: [5, 4, 4, 5, 5]
    },
    {
        nombre: "Rally Nitro",
        categoria: "Carreras",
        precio: 130000,
        calificaciones: [3, 4, 4, 2, 3]
    },
    {
        nombre: "Mind Hacker",
        categoria: "Puzzle",
        precio: 90000,
        calificaciones: [4, 3, 5, 4, 4]
    },
    {
        nombre: "Zombie District",
        categoria: "Terror",
        precio: 110000,
        calificaciones: [2, 3, 4, 2, 3]
    },
    {
        nombre: "Cyber Tennis",
        categoria: "Deporte",
        precio: 100000,
        calificaciones: [5, 5, 4, 4, 5]
    },
    {
        nombre: "Kitchen Frenzy",
        categoria: "Simulación",
        precio: 85000,
        calificaciones: [3, 4, 4, 3, 4]
    },
    {
        nombre: "Empire of Kings",
        categoria: "Estrategia",
        precio: 160000,
        calificaciones: [5, 5, 4, 5, 5]
    },
    {
        nombre: "Pixel Hero",
        categoria: "Plataformas",
        precio: 95000,
        calificaciones: [4, 4, 3, 5, 4]
    }
];

function obtenerPromedio(calificaciones: number[]): number {
  const suma = calificaciones.reduce((acc, n) => acc + n, 0);
  return parseFloat((suma / calificaciones.length).toFixed(1));
}

function clasificarJuego(promedio: number): string {
  return promedio >= 4
    ? "Juego recomendado ✅"
    : "Juego poco recomendado ❌";
}

const mostrarDataJuegos = (juegos: Game[]): void => {
  juegos.forEach(({ nombre, categoria, precio, calificaciones }) => {
    const promedio = obtenerPromedio(calificaciones);
    const estado = clasificarJuego(promedio);

    console.log(`
Juego: ${nombre}
Categoría: ${categoria}
Precio: $${precio}
Calificación promedio: ${promedio}
Estado: ${estado}
------------------------------
    `);
  });
};

mostrarDataJuegos(Juegos);
