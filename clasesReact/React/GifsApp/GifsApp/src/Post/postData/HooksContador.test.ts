import { describe, expect, test } from "vitest";
import { HooksContador } from "./HooksContador";
import { renderHook } from "@testing-library/react";
import { act } from "react";

describe('useCounter', () => {
    //validams el inicializador empieza por 0
    test('Provando inicializador del contador 0', () => {
        const { result } = renderHook(() => HooksContador());
        expect(result.current.first).toBe(0);
    });
    //validamos que el contador like aumente
    test('Incrementa el contador con contadorLike', () => {
        const { result } = renderHook(() => HooksContador());

        /**act() es una función que le dice a React:
            “Voy a hacer un cambio de estado.
            Espera a que todo se actualice antes de continuar con la prueba.” */
        act(() => {
            result.current.contadorLike();
        });

        expect(result.current.first).toBe(1);
    });

    //validamos que el contador Dislike disminuya
    test('disminuye el contador con contadorLike', () => {
        const { result } = renderHook(() => HooksContador());

        act(() => {
            result.current.contadorDislike();
        });

        expect(result.current.first).toBe(-1);
    });

    //validamos que el contador compartir aumente
    test('Incrementa el contador compartir con campartir', () => {
        const { result } = renderHook(() => HooksContador());

        act(() => {
            result.current.contarCompartir();
        });

        expect(result.current.first).toBe(0);
    });
});