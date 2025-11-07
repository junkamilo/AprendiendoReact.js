import { CardPost } from './components/cardPost';
import { Header } from './components/Header';
import { HooksBuscador } from './postData/HooksBuscador';
import { HooksData } from './postData/HooksData';


export const Postmain = () => {
    const { posts } = HooksData();

    const buscador = HooksBuscador(posts);

    return (
        <div className="app-container">
            <Header
                searchTerm={buscador.searchTerm}
                handleChange={buscador.handleChange}
                handleBuscar={buscador.handleBuscar}
                previousTerms={buscador.previousTerms}
                handleTermClicked={buscador.handleTermClicked}
                handleKeyDown={buscador.handleKeyDown}
            />
            <CardPost posts={buscador.filteredPosts} />
        </div>
    );
};

