import { describe, expect, test } from 'vitest';
import { add, multiply, subtract } from './math.helper';


//Agrupamos por funcionalidad
describe('Operaciones Matemáticas', () => {

    //SUMA
    describe('add()', () => {
        test('debe devolver la suma correcta de dos números positivos', () => {
            //Arrange
            const a = 5;
            const b = 1;

            //Act
            const result = add(a, b);

            //Assert
            expect(result).toBe(a + b);
        });

        test('debe manejar correctamente números negativos', () => {
            const a = -3;
            const b = 7;
            const result = add(a, b);
            expect(result).toBe(4);
        });
    });

    //RESTA
    describe('subtract()', () => {
        test('debe devolver un número negativo si el segundo es mayor', () => {
            const a = 5;
            const b = 10;
            const result = subtract(a, b);
            expect(result).toBe(a - b);
        });

        test('debe devolver 0 si ambos son iguales', () => {
            const a = 8;
            const b = 8;
            const result = subtract(a, b);
            expect(result).toBe(0);
        });
    });

    // MULTIPLICACIÓN
    describe('multiply()', () => {
        test('debe multiplicar correctamente dos números positivos', () => {
            const a = 10;
            const b = 20;
            const result = multiply(a, b);
            expect(result).toBe(a * b);
        });

        test('debe devolver 0 si alguno de los operandos es 0', () => {
            const result = multiply(0, 5);
            expect(result).toBe(0);
        });
    });
});
