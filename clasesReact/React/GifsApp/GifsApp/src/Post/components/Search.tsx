import { HooksBuscador } from "../postData/HooksBuscador";

export const Search = () => {
    const {searchTerm,handleChange} = HooksBuscador();
    return (
        <input
            type="search"
            placeholder="Buscar en publicaciones..."
            className="search-input"
            onChange={handleChange}
            value={searchTerm}
        />
    )
}
