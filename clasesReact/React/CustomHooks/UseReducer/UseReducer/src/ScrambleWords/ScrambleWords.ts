//utilizamos el zod para validar que la data que se encuentra en la localstore o sesion store
//no venga manipulada y contenga los datos requeridos correctamente.
import * as z from "zod/v4";

// --- Interfaces del juego ---

// Definimos la estructura que tendrá nuestro estado global del juego
export interface GameState {
    words: string[];          // Palabras disponibles en la partida
    currentWord: string;      // Palabra actual
    scrambledWord: string;    // Palabra actual desordenada
    guess: string;            // Entrada del jugador
    points: number;           // Puntos obtenidos
    errorCounter: number;     // Errores cometidos
    maxAllowErrors: number;   // Máximo de errores permitidos
    skipCounter: number;      // Saltos realizados
    maxSkips: number;         // Máximo de saltos permitidos
    isGameOver: boolean;      // Indicador de fin del juego
}

// --- Tipos de acciones que puede manejar el reducer ---
export type GameAction =
    | { type: "SET_GUESS"; payload: string }   // Actualizar el texto ingresado
    | { type: "SUBMIT_GUESS"; payload: string } // Validar palabra ingresada
    | { type: "SKIP_WORD" }                     // Saltar palabra
    | { type: "NEXT_WORD" }                     // Pasar a la siguiente palabra
    | { type: "PLAY_AGAIN" };                   // Reiniciar el juego

// --- Esquema de validación con Zod ---
// Validamos que la estructura del estado cumpla con lo esperado
const GameSchema = z.object({
    words: z.array(z.string()),
    currentWord: z.string(),
    scrambledWord: z.string(),
    guess: z.string(),
    points: z.number(),
    errorCounter: z.number(),
    maxAllowErrors: z.number(),
    skipCounter: z.number(),
    maxSkips: z.number(),
    isGameOver: z.boolean(),
});

// --- Palabras iniciales del juego ---
export const GAME_WORDS = [
    "REACT",
    "JAVASCRIPT",
    "TYPESCRIPT",
    "HTML",
    "ANGULAR",
    "SOLID",
    "NODE",
    "VUEJS",
    "SVELTE",
    "EXPRESS",
    "MONGODB",
    "POSTGRES",
    "DOCKER",
    "KUBERNETES",
    "WEBPACK",
    "VITE",
    "TAILWIND",
];

// --- Funciones auxiliares ---

// Mezcla los elementos de un arreglo (sin mutarlo)
const shuffleArray = (array: string[]) => [...array].sort(() => Math.random() - 0.5);

// Mezcla las letras de una palabra
const scrambleWord = (word: string = "") =>
    word.split("").sort(() => Math.random() - 0.5).join("");

// Avanza a la siguiente palabra (quita la actual del arreglo)
const nextWord = (state: GameState) => {
    const [, ...rest] = state.words;
    if (rest.length === 0) {
        // No hay más palabras → fin del juego
        return { words: [], currentWord: "", scrambledWord: "", isGameOver: true };
    }
    return {
        words: rest,
        currentWord: rest[0],
        scrambledWord: scrambleWord(rest[0]),
        isGameOver: false,
    };
};

// --- Estado inicial del juego (validado con Zod) ---
export const getInitialGameState = (): GameState => {
    const localStorageState = localStorage.getItem("scramble-game-state");

    if (!localStorageState) {
        const shuffled = shuffleArray(GAME_WORDS);
        return {
            words: shuffled,
            currentWord: shuffled[0],
            scrambledWord: scrambleWord(shuffled[0]),
            guess: "",
            points: 0,
            errorCounter: 0,
            maxAllowErrors: 3,
            skipCounter: 0,
            maxSkips: 3,
            isGameOver: false,
        };
    }

    // Validamos que la data almacenada cumpla con el esquema
    const result = GameSchema.safeParse(JSON.parse(localStorageState));

    if (result.error) {
        console.error("Error validando estado:", result.error);
        const shuffled = shuffleArray(GAME_WORDS);
        return {
            words: shuffled,
            currentWord: shuffled[0],
            scrambledWord: scrambleWord(shuffled[0]),
            guess: "",
            points: 0,
            errorCounter: 0,
            maxAllowErrors: 3,
            skipCounter: 0,
            maxSkips: 3,
            isGameOver: false,
        };
    }

    return result.data;
};

// --- Reducer principal del juego ---
export const ScrambleWordsReducer = (
    state: GameState,
    action: GameAction
): GameState => {
    switch (action.type) {

        case "SET_GUESS":
            return { ...state, guess: action.payload };

        case "SUBMIT_GUESS": {
            if (state.isGameOver) return state;

            const normalizedGuess = action.payload.trim().toUpperCase();

            if (normalizedGuess === state.currentWord) {
                // ✅ Acierto
                const next = nextWord(state);
                return {
                    ...state,
                    ...next,
                    guess: "",
                    points: state.points + 1,
                };
            } else {
                // ❌ Error
                const nextError = state.errorCounter + 1;
                return {
                    ...state,
                    guess: "",
                    errorCounter: nextError,
                    isGameOver: nextError >= state.maxAllowErrors,
                };
            }
        }

        case "SKIP_WORD": {
            if (state.isGameOver || state.skipCounter >= state.maxSkips) return state;
            const next = nextWord(state);
            return {
                ...state,
                ...next,
                skipCounter: state.skipCounter + 1,
            };
        }

        case "NEXT_WORD": {
            return { ...state, ...nextWord(state) };
        }

        case "PLAY_AGAIN": {
            const shuffled = shuffleArray(GAME_WORDS);
            return {
                words: shuffled,
                currentWord: shuffled[0],
                scrambledWord: scrambleWord(shuffled[0]),
                guess: "",
                points: 0,
                errorCounter: 0,
                maxAllowErrors: 3,
                skipCounter: 0,
                maxSkips: 3,
                isGameOver: false,
            };
        }

        default:
            return state;
    }
};

