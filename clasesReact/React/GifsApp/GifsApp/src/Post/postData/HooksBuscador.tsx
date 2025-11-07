import { useEffect, useState } from "react";
import type { Post } from "./postData";

// Hook encargado de manejar búsqueda, filtrado y términos previos.
// Recibe la lista completa de posts para trabajar sobre ella.
export const HooksBuscador = (posts: Post[]) => {

    // Valor actual que el usuario escribe en el input
    const [searchTerm, setSearchTerm] = useState("");

    // Historial de términos buscados anteriormente
    const [previousTerms, setPreviousTerms] = useState<string[]>([]);

    // Lista filtrada que se mostrará en pantalla
    const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);


    // Cuando llegan los posts desde la API, inicializa el listado filtrado
    useEffect(() => {
        setFilteredPosts(posts); // Muestra todas las cards al inicio
    }, [posts]);


    // Maneja los cambios en el input mientras el usuario escribe
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.toLowerCase().trim();

        // Actualiza el texto que hay en el input
        setSearchTerm(value);

        // Si el input queda vacío, restauramos toda la lista
        if (value.length === 0) {
            setFilteredPosts(posts);
            return;
        }

        // Filtrado directo según el contenido del título
        const results = posts.filter(post =>
            post.title.toLowerCase().includes(value)
        );

        // Actualizamos los resultados filtrados
        setFilteredPosts(results);
    };


    // Ejecuta la búsqueda cuando presionan Enter o dan click en el botón
    const handleBuscar = () => {
        const term = searchTerm.trim().toLowerCase();

        // Si el término está vacío, no ejecutamos la búsqueda
        if (!term) return;

        // Filtra los posts según el término de búsqueda
        const results = posts.filter(post =>
            post.title.toLowerCase().includes(term)
        );

        // Actualizamos los resultados
        setFilteredPosts(results);

        // Agrega el término al historial evitando duplicados
        setPreviousTerms(prev => {
            if (prev.includes(term)) return prev; // si ya existe no lo agrega
            return [term, ...prev].slice(0, 7); // máximo 7 elementos
        });
    };


    // Se ejecuta cuando el usuario hace clic en un término previo
    const handleTermClicked = (term: string) => {
        // Coloca el término en el input
        setSearchTerm(term);

        // Ejecuta la búsqueda con ese mismo término
        handleBuscar();
    };


    // Detecta cuando el usuario presiona Enter dentro del input
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            event.preventDefault(); // evita recargar la página
            handleBuscar();        // ejecuta la búsqueda
        }
    };


    return {
        searchTerm,
        previousTerms,
        filteredPosts,
        handleChange,
        handleBuscar,
        handleTermClicked,
        handleKeyDown
    };
};





