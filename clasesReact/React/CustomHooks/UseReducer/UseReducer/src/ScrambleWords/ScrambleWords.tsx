import React, { useReducer, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { SkipForward, Play } from "lucide-react";
import {
    GAME_WORDS,
    ScrambleWordsReducer,
    getInitialGameState,
} from "./ScrambleWords.ts";

export const ScrambleWords = () => {
    const [state, dispatch] = useReducer(ScrambleWordsReducer, getInitialGameState());

    // Persistir estado del juego
    useEffect(() => {
        localStorage.setItem("scramble-game-state", JSON.stringify(state));
    }, [state]);

    const handleGuessSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (state.isGameOver) return;
        dispatch({ type: "SUBMIT_GUESS", payload: state.guess });
    };

    const handleSkip = (e: React.FormEvent) => {
        e.preventDefault();
        if (state.isGameOver) return;
        dispatch({ type: "SKIP_WORD" });
    };

    const handlePlayAgain = () => dispatch({ type: "PLAY_AGAIN" });

    if (state.isGameOver || state.words.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100 p-4">
                <div className="w-full max-w-md">
                    <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
                        Palabras desordenadas
                    </h1>
                    <p className="text-center text-gray-600 mb-6">Juego terminado 🎯</p>

                    <div className="text-center space-y-2 mb-6">
                        <div>Puntaje: {state.points}</div>
                        <div>Errores: {state.errorCounter}</div>
                        <div>Saltos: {state.skipCounter}</div>
                    </div>

                    <Button onClick={handlePlayAgain} className="w-full">
                        Jugar de nuevo
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                        Palabras desordenadas
                    </h1>
                    <p className="text-gray-600">
                        Desordena las letras para encontrar la palabra!
                    </p>
                </div>

                <Card className="backdrop-blur-sm bg-white/80 border-0 shadow-xl">
                    <CardContent className="p-8">
                        <div className="mb-8 text-center">
                            <h2 className="text-sm text-gray-500 uppercase mb-4">
                                Palabra Desordenada
                            </h2>
                            <div className="flex justify-center gap-2 mb-6">
                                {state.scrambledWord.split("").map((letter, i) => (
                                    <div
                                        key={i}
                                        className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg"
                                    >
                                        {letter}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <form onSubmit={handleGuessSubmit} className="mb-6">
                            <Input
                                type="text"
                                value={state.guess}
                                onChange={(e) =>
                                    dispatch({
                                        type: "SET_GUESS",
                                        payload: e.target.value.toUpperCase().trim(),
                                    })
                                }
                                placeholder="Ingresa tu palabra..."
                                className="text-center text-lg font-semibold h-12 border-2 border-indigo-200 focus:border-indigo-500 transition-colors"
                                disabled={state.isGameOver}
                            />
                            <Button
                                type="submit"
                                className="w-full mt-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 rounded-lg shadow-lg"
                                disabled={!state.guess.trim() || state.isGameOver}
                            >
                                Enviar Adivinanza
                            </Button>
                        </form>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="bg-green-50 rounded-lg p-4 text-center border border-green-200">
                                <div className="text-2xl font-bold text-green-600">
                                    {state.points} / {GAME_WORDS.length}
                                </div>
                                <div className="text-sm text-green-700 font-medium">Puntos</div>
                            </div>
                            <div className="bg-red-50 rounded-lg p-4 text-center border border-red-200">
                                <div className="text-2xl font-bold text-red-600">
                                    {state.errorCounter}/{state.maxAllowErrors}
                                </div>
                                <div className="text-sm text-red-700 font-medium">Errores</div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <Button
                                onClick={handleSkip}
                                variant="outline"
                                className="border-2 border-gray-300 hover:bg-gray-50 flex items-center justify-center gap-2"
                                disabled={state.isGameOver || state.skipCounter >= state.maxSkips}
                            >
                                <SkipForward className="w-4 h-4" />
                                Saltar ({state.skipCounter} / {state.maxSkips})
                            </Button>
                            <Button
                                onClick={handlePlayAgain}
                                variant="outline"
                                className="border-2 border-indigo-300 hover:bg-indigo-50 text-indigo-600 flex items-center justify-center gap-2"
                            >
                                <Play className="w-4 h-4" />
                                Reiniciar
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

