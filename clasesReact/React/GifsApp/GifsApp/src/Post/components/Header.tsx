import { PerfilLogo } from "./PerfilLogo";
import { PreviouSearch } from "./PreviouSearch";
import { Search } from "./Search";
import { SearchIcon } from "./SearchIcon";
import { ButtonBuscar } from "./buttons";

interface HeaderProps {
  searchTerm: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBuscar: () => void;
  previousTerms: string[];
  handleTermClicked: (term: string) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const Header = ({ searchTerm, handleChange, handleBuscar, previousTerms, handleTermClicked, handleKeyDown, }: HeaderProps) => {
  return (
    <header className="main-header">
      <div className="header-content-wrapper">

        <div className="header-left">
          <a href="/" className="site-logo">Publicaciones</a>

          <div className="search-bar">
            <span className="search-icon-wrapper">
              <SearchIcon />
            </span>

            <Search
              searchTerm={searchTerm}
              handleChange={handleChange}
              hanledKeyDown={handleKeyDown}
            />

            <ButtonBuscar text="Buscar" onClick={handleBuscar} />
          </div>
        </div>

        <PreviouSearch
          searches={previousTerms}
          onLabelClicked={handleTermClicked}
        />

        <div className="header-right">
          <PerfilLogo />
        </div>

      </div>
    </header>
  );
};
