import { HooksContador } from "../postData/HooksContador";
import type { Post } from "../postData/postData";
import { ButtonLike, ButtonDislike } from "./buttons";
import { Contador } from "./contador";

interface PropsSinglePostCard {
  post: Post;
}


export const SinglePostCard = ({ post }: PropsSinglePostCard) => {
    const { first, contadorLike, contadorDislike } = HooksContador();

    return (
        <div className="contentCard">
            <div className="contentTitulo">
                <h3>{post.title}</h3>
            </div>

            <div className="contentBody">
                <p>{post.body}</p>
            </div>

            {/* Pasamos las funciones como props */}
            <ButtonLike text="Like" onClick={contadorLike} />
            <ButtonDislike text="Dislike" onClick={contadorDislike} />

            <Contador contador={first} />
        </div>
    );
};

