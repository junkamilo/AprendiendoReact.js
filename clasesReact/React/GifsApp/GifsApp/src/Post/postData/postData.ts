//definimos una interfas para validar tipo datos de la peticion fecth
export interface Post {
    id: number;
    title: string;
    body: string;
}

export const getPostData = async (): Promise<Post[]> => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) throw new Error('Fallo la petición');

        const dataPost: Post[] = await response.json();
        return dataPost;

    } catch (error) {
        console.error(error);
        throw error;
    }
};
