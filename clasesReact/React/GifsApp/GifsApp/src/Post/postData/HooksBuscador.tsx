import { useEffect, useRef, useState } from "react";
import type { Post } from "./postData";

// Hook encargado de manejar búsqueda, filtrado y términos previos.
// Recibe la lista completa de posts para trabajar sobre ella.
export const HooksBuscador = (posts: Post[]) => {

    // Valor actual escrito por el usuario
    const [searchTerm, setSearchTerm] = useState("");

    // Historial de términos buscados
    const [previousTerms, setPreviousTerms] = useState<string[]>([]);

    // Lista que se muestra en pantalla
    const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);

    // Caché de resultados: evita recalcular búsquedas repetidas
    const postCache = useRef<Record<string, Post[]>>({});


    // Cuando llegan los posts iniciales, se muestra toda la lista
    useEffect(() => {
        setFilteredPosts(posts);
    }, [posts]);


    // Maneja lo que el usuario escribe en tiempo real
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.toLowerCase().trim();
        setSearchTerm(value);

        // Input vacío → mostrar todo
        if (value.length === 0) {
            setFilteredPosts(posts);
            return;
        }

        // Si ya está en caché, úsalo
        if (postCache.current[value]) {
            setFilteredPosts(postCache.current[value]);
            return;
        }

        // Filtrar normalmente
        const results = posts.filter(post =>
            post.title.toLowerCase().includes(value)
        );

        // Guardar en caché
        postCache.current[value] = results;

        // Actualizar resultados en pantalla
        setFilteredPosts(results);
    };


    // Ejecuta la búsqueda manual (click en botón o Enter)
    const handleBuscar = (query?: string) => {
        if (typeof query !== "string") {
            query = undefined;
        }
        const term = (query ?? searchTerm).trim().toLowerCase();

        if (!term) return; // vacío → no buscar

        // Si está en caché → úsalo
        if (postCache.current[term]) {
            setFilteredPosts(postCache.current[term]);
        } else {
            // Filtrar y guardar en caché
            const results = posts.filter(post =>
                post.title.toLowerCase().includes(term)
            );

            postCache.current[term] = results;
            setFilteredPosts(results);
        }

        // Actualizar historial sin duplicados
        setPreviousTerms(prev => {
            if (prev.includes(term)) return prev;
            return [term, ...prev].slice(0, 7);
        });
    };


    // Cuando el usuario da clic a un término previo
    const handleTermClicked = (term: string) => {
        setSearchTerm(term);
        handleBuscar(term);
    };


    // Detecta Enter dentro del input
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            event.preventDefault();
            handleBuscar();
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






