//creamos una promise
//una promesa simepre recibe dos parametro un resolve y un reject
//resolve se ejecuta cuando la promise se resulte con exito
//reject se ejeucta cuando la promesa no se cumple
const myPromise = new Promise((resolve,reject) =>{
setTimeout(() => {
    //aca pasamos un parametro a la resolve de la promise
    resolve(100);
    //aca pasamos un parametro type string al reject
    reject("MI amigo se perdio");
    //se ejecuta la promise luego se pasar 2 segundos
}, 2000);
});

//aca recibimos la respuesta de la promise
myPromise.then((myMOney)=>{
    //si la promise se cumple ingresamos la then y nos imprimira la siguiente linea
    console.log(`Tengo mi dinero ${myMOney}`);
    //si la promise falla ejecutaremos el cath que es para controlar el error que recibimos de la promise
}).catch( reason =>{
    console.warn(reason);
    //si la promise se cumple o no siempre se ejecutara finally
}).finally(()=>{
    console.log("Ha seguir sin mi dinero");
});