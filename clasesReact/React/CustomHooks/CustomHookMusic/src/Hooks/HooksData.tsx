import { useEffect, useState } from "react";
import { getMusic } from "../getData/getdataMusic";
import type { PropsMusic } from "../props/props";

export const HooksData = () => {
    const [music, setMusic] = useState<PropsMusic[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMusic = async () => {
            const data = await getMusic();
            setMusic(data || []);
            setLoading(false);
        };

        fetchMusic();
    }, []);


    return {
        //values
        music,
        loading

    }
}