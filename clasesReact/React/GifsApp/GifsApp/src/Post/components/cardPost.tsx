import type { Post } from "../postData/postData";
import { SinglePostCard } from "./SingletoCard";

interface CardPostProps {
    posts: Post[];
    icon: string | undefined; // o string | null si prefieres
}

export const CardPost = ({ posts , icon}:CardPostProps) => {
    return (
        <div className="contentCards">
            {posts.map(post => (
                <SinglePostCard key={post.id} post={post} icon={icon}/>
            ))}
        </div>
    );
};
