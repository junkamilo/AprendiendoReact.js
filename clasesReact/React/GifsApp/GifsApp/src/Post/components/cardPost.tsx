import type { Post } from "../postData/postData";
import { SinglePostCard } from "./SingletoCard";

interface CardPostProps {
    posts: Post[];
}

export const CardPost = ({ posts }:CardPostProps) => {
    return (
        <div className="contentCards">
            {posts.map(post => (
                <SinglePostCard key={post.id} post={post} />
            ))}
        </div>
    );
};
