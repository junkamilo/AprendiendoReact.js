import { useEffect, useState } from "react";
import { getImg, getPostData, type Post } from "./postData";

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

export const HooksIcon = () => {
    const [icon, setIcon] = useState<string>();
    const [loadingIcon, setLoadingIcon] = useState(true);

    useEffect(() => {
        async function load() {
            const data = await getImg();
            setIcon(data);
            setLoadingIcon(false);
        }
        load();
    }, []);

    return {
        icon,
        loadingIcon
    }
};

