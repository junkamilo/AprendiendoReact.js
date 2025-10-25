//creamos la interfas que son los valores que debe contener el array de objeto
interface player {
    nombre: string,
    edad: number,
    puntaje: number[]
}

//creamos el array con los objetos y le asignamos la interface
const Jugadores: player[] = [
    {
        nombre: "Juan",
        edad: 20,
        puntaje: [10, 20, 50, 60]
    },
    {
        nombre: "Sebas",
        edad: 22,
        puntaje: [0, 10, 20, 90]
    },
    {
        nombre: "Carlos",
        edad: 25,
        puntaje: [30, 15, 75, 50]
    },
    {
        nombre: "Andrés",
        edad: 19,
        puntaje: [20, 40, 60, 80]
    },
    {
        nombre: "Felipe",
        edad: 21,
        puntaje: [5, 55, 70, 90]
    },
    {
        nombre: "Luis",
        edad: 23,
        puntaje: [12, 22, 32, 42]
    },
    {
        nombre: "Mateo",
        edad: 24,
        puntaje: [0, 100, 45, 75]
    },
    {
        nombre: "Daniel",
        edad: 20,
        puntaje: [25, 35, 45, 95]
    },
    {
        nombre: "Julián",
        edad: 18,
        puntaje: [50, 60, 70, 80]
    },
    {
        nombre: "Tomás",
        edad: 26,
        puntaje: [10, 90, 85, 95]
    },
];

const promedioPuntaje = (puntaje: number[]): number => {
  return puntaje.reduce((acc, n) => acc + n, 0) / puntaje.length;
};

const validarPromedio = (prom: number): string => {
  return prom >= 50 ? "Jugador ganó el juego" : "Jugador perdió el juego";
};

const mostrarResultados = (Jugadores: player[]): void => {
  Jugadores.forEach(({ nombre, edad, puntaje }) => {
    const promedio = promedioPuntaje(puntaje);
    const estado = validarPromedio(promedio);

    console.log(`
      Jugador: ${nombre}
      Edad: ${edad}
      Puntajes: ${puntaje.join(", ")}
      Promedio: ${promedio}
      Resultado: ${estado}
    `);
  });
};

mostrarResultados(Jugadores);
