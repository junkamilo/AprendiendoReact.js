const URL_USER = `https://jsonplaceholder.typicode.com/users`;

const GetUser = async () => {
    try {
        const dataUser = await fetch(URL_USER);
        const users = await dataUser.json()
        return users;
    } catch (err) {
        return err;
    } finally {
        console.log("Ejecutandose");
    }
}
const resultaData = await GetUser();
console.log(resultaData);
