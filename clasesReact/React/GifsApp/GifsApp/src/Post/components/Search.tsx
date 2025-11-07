interface PropsSearch {
    searchTerm: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    hanledKeyDown:(event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const Search = ({ searchTerm, handleChange,hanledKeyDown }: PropsSearch) => {
    return (
        <input
            type="search"
            placeholder="Buscar en publicaciones..."
            className="search-input"
            onChange={handleChange}
            value={searchTerm}
            onKeyDown={hanledKeyDown}
        />
    );
};

