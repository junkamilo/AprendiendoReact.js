import { CardPost } from './components/cardPost';
import { Header } from './components/Header';


export const Postmain = () => {

    return (
        <div className="app-container">
            {/* Podrías añadir un header principal aquí si quisieras */}
            <Header/>
            <CardPost />
        </div>
    );
};

