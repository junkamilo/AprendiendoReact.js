import { HooksContador } from "../postData/HooksContador";
import type { Post } from "../postData/postData";
import { ButtonLike, ButtonDislike, ButtonCompartir } from "./buttons";
import { Contador, ConteCompartir } from './contador';
import { Logo } from "./Logo";

interface PropsSinglePostCard {
    post: Post;
}


export const SinglePostCard = ({ post }: PropsSinglePostCard) => {
    const { first, conteoCompartir, contadorLike, contadorDislike, contarCompartir } = HooksContador();

    return (
        <div className="contentCard">
            <div className="card-header">
                <Logo />
                <div className="contentTitulo">
                    <h3>{post.title}</h3>
                </div>
            </div>

            <div className="card-body">
                <div className="contentBody">
                    <p>{post.body}</p>
                </div>
            </div>

            {/* Pasamos las funciones como props */}
            <div className="card-footer">
                <div className="card-stats">
                    <Contador contador={first} />
                    <ConteCompartir contador={conteoCompartir} />
                </div>
                <div className="card-actions">
                    <ButtonLike text="Like" onClick={contadorLike} />
                    <ButtonDislike text="Dislike" onClick={contadorDislike} />
                    <ButtonCompartir text="Compartir" onClick={contarCompartir} />
                </div>
            </div>
        </div>
    );
};

