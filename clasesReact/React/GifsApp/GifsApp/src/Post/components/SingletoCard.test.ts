import { describe, test } from "vitest";
import { screen } from "@testing-library/react";

describe("Mi app SingletoCard", () => {

    test("should render the component", () => {
        const fakePost = {
            title: "Post de prueba",
            body: "Contenido del post de prueba"
        };
        
        const fakeIcon = "https://via.placeholder.com/40";

        screen.debug();
    });

});

