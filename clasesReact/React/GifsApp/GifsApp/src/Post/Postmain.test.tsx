import { describe, expect, test } from 'vitest';
import { Postmain } from './Postmain';
import { render } from '@testing-library/react';

describe('Postmain App', () => {
    test('El componente se renderiza sin fallar', () => {
        const { container } = render(<Postmain />);
        //creamos el archivo snapchot que nos muestra como estan renderizado nuestros componente
        expect(container).toBeTruthy();
    });

    test('Snapshot del componente completo', () => {
        const { container } = render(<Postmain />);
        expect(container).toMatchSnapshot();
    });

    test('El Header se muestra en pantalla', () => {
        const { getByText } = render(<Postmain />);

        // Cambia "Buscar" por cualquier texto REAL que aparezca dentro de tu Header
        expect(getByText(/Publicaciones/i)).toBeTruthy();
    });

    test('Se muestran los posts en pantalla', async () => {
        const { findByText } = render(<Postmain />);

        // Espera a que el texto aparezca cuando los posts se carguen
        const postElement = await findByText(/Publicaciones/i);

        expect(postElement).toBeTruthy();
    });

    test('El buscador muestra un input', () => {
        const { getByPlaceholderText } = render(<Postmain />);
        const input = getByPlaceholderText('Buscar en publicaciones...');
        expect(input).toBeTruthy();
    });8
})