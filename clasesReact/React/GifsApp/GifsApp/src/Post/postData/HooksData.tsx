import { useEffect, useState } from "react";
import { getPostData, type Post } from "./postData";

export const HooksData = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function load() {
            const data = await getPostData();
            setPosts(data);   //React renderiza cuando llegan los datos
            setLoading(false);
        }
        load();
    }, []);

    return {
        //values
        posts,
        loading
    }
}
