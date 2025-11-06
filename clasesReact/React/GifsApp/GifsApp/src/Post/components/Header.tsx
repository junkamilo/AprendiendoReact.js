import { useState } from "react";
import { PerfilLogo } from "./PerfilLogo";
import { PreviouSearch } from "./PreviouSearch";
import { Search } from "./Search";
import { SearchIcon } from "./SearchIcon";

export const Header = () => {
  const [previuosTerms, setPreviuosTerms] = useState(['Resultados previous']);
  const handleTermClicked = (term:string) =>{
    console.log({term});
    
  }
  
return (
    <header className="main-header">
      <div className="header-content-wrapper">
        
        {/* Lado Izquierdo: Logo del Sitio y Buscador */}
        <div className="header-left">
          <a href="/" className="site-logo">
            Publicaciones
          </a>
          <div className="search-bar">
            <span className="search-icon-wrapper">
              <SearchIcon />
            </span>
            <Search/>
          </div>
        </div>

        {/**previous search */}
        <PreviouSearch searches={previuosTerms} onLabelClicked={handleTermClicked} />
        
        {/* Lado Derecho: Logo de Perfil */}
        <div className="header-right">
          <PerfilLogo />
        </div>

      </div>
    </header>
  );
};
