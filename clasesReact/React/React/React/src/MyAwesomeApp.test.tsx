import { describe, expect, test } from "vitest";
import { MyAwesomeApp } from "./MyAwesomeApp";
import { render, screen } from '@testing-library/react';

describe('MyAwesomeApp',()=>{
    test('shoul render firstName And LastName',()=>{
        /**se puede renderizar de esta manera */
        /**const { container } = render(<MyAwesomeApp/>);
        console.log(container.innerHTML);*/

        /**pero esta es la forma mas visual que podemos renderizar de un fragmento */
        const { container } = render(<MyAwesomeApp/>);
        screen.debug();

        const h1 = container.querySelector('h1');
        const h3 = container.querySelector('h3');

        expect(h1?.innerHTML).toContain('Juan Beltran');
        expect(h3?.innerHTML).toContain('Campo');
    
    });
    test('shoul render firstName And LastName-screen',()=>{
        /**se puede renderizar de esta manera */
        /**const { container } = render(<MyAwesomeApp/>);
        console.log(container.innerHTML);*/

        /**pero esta es la forma mas visual que podemos renderizar de un fragmento */
        render(<MyAwesomeApp/>);
        screen.debug();

        // const h1 = screen.getByRole('heading',{
        //     level:1,
        // });
        // console.log(h1.innerHTML);

        const h1 = screen.getByTestId('first-name-title');
        expect(h1.innerHTML).toContain('Juan Beltran');
        
    });
    test('should match snapshot',()=>{
        /**Hacemos  una copia del html para asegurarnos que no se va a modificar, si deceamos los cambios tendremos que darle en u en consola*/
        const { container } = render(<MyAwesomeApp/>);
        expect(container).toMatchSnapshot();
        
    });
});