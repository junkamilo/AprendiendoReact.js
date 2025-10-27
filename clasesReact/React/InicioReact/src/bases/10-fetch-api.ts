const URL = `https://jsonplaceholder.typicode.com/comments`

// const getComentd = fetch(URL);
// getComentd.then((response)=>{
//     response.json().then((data)=>{
//         console.log(data);
//     });
// }).catch((err)=>{
//     console.error(err)
// }).finally(()=>{
//     console.log("Ejecutandose...");
// });

const getComment = async ()=>{
    const Datacoment = await fetch(URL);
    const comment = await Datacoment.json();
    return comment;
}
const resultComment = await getComment();
console.log(resultComment);



