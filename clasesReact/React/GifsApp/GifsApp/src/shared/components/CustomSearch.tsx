import { useEffect, useState } from "react";
import { PreviouSearches } from "../../gifs/components/PreviouSearches";

interface Props {
    placeholder?: string;
    onQuery: (query: string) => void;
}

export const CustomSearch = ({ placeholder = "Buscar Gif", onQuery }: Props) => {
    const [query, setQuery] = useState<string>("");

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            onQuery(query);
        }, 700);
        return () => {
            clearTimeout(timeoutID);
        };
    }, [query, onQuery]);

    const handleSearch = () => {
        //query = query.trim().toLowerCase();        
       // if (query.length === 0) return;
        //if(PreviouSearches.includes(query)) return;
        onQuery(query);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    }

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder={placeholder}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button onClick={handleSearch}>Buscar</button>
        </div>
    );
};

