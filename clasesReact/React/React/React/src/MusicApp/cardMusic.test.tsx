import { describe, expect, test } from "vitest";
import { CardArtista } from "./cardMusic";
import { fireEvent, render, screen } from "@testing-library/react";

describe('CardArtista', () => {

    //probaremos que el content artista no esté vacío
    test('content Artista no debe estar vacío', () => {
        const { container } = render(<CardArtista />);
        screen.debug();

        // IMPORTANTE:
        // Las clases CSS no se seleccionan así: 'CardMusicaContainer'
        // Debes usar '.CardMusicaContainer'
        const containerArtista = container.querySelector('.CardMusicaContainer');

        expect(containerArtista).not.toBeNull();
        expect(containerArtista?.children.length).toBeGreaterThan(0);
    });

    test('cada card tiene botón y recibe click', () => {
        const { container } = render(<CardArtista />);
        screen.debug();

        //1. Obtener todos los botones "Agregar"
        const botones = screen.getAllByRole('button', { name: /agregar/i });

        //2. Validar que exista al menos uno
        expect(botones.length).toBeGreaterThan(0);

        //3. Obtener todas las cards usando querySelectorAll
        const cards = container.querySelectorAll('.CardMusica');

        //4. Validar que haya un botón por cada card
        expect(botones.length).toBe(cards.length);

        
        //5. Simular click en cada botón
        botones.forEach((boton) => fireEvent.click(boton));
    });


    //probaremos que el content género no esté vacío
    test('content Genero no debe estar vacío', () => {
        const { container } = render(<CardArtista />);

        const containerGenero = container.querySelector('.CardMusicaContainer');

        expect(containerGenero).not.toBeNull();
        expect(containerGenero?.children.length).toBeGreaterThan(0);
    });

    //probaremos que el content música no esté vacío
    test('content Música no debe estar vacío', () => {
        const { container } = render(<CardArtista />);

        const containerMusica = container.querySelector('.CardMusicaContainer');

        expect(containerMusica).not.toBeNull();
        expect(containerMusica?.children.length).toBeGreaterThan(0);
    });
});