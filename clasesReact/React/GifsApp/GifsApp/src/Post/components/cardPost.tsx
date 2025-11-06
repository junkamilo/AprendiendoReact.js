import { HooksData } from "../postData/HooksData";
import { SinglePostCard } from "./SingletoCard";

export const CardPost = () => {
    const { posts } = HooksData();

    return (
        <div className="contentCards">
            {posts.map(post => (
                <SinglePostCard key={post.id} post={post} />
            ))}
        </div>
    );
};
