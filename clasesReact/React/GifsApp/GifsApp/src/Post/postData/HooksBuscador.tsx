import { useState, type ChangeEvent } from "react";

export const HooksBuscador = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        console.log(event.target.value);
    };

    return {
        //value
        searchTerm,

        //eventos
        handleChange
    }
}
