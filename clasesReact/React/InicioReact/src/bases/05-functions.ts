//creamos una funcion
//aca al pasar el parametro a la funcion le decimos de que tipo va a recibir el parametro
function Saludo(name:string):string {
    return `Hola ${name} te saluda TS`
}

//creamos funciones de flecha
//cuando creamos una arrawfuction no se podra cambiar su valor a lo contrario cuando la creamos con function normal
const greet2 = (name:string) =>{
    return name
}
const goku = greet2("goku");
console.log(goku);


//aca la pasamos de tipo string 
const Name = Saludo("juan camilo");
console.log(Name);

//creamos una interfas
interface User{
    id: string,
    username: string
}

//funcion normal y le pedimos que se comporte como User que fue la interfas que se creo
function getUser():User {
    return{
        id: "123",
        username: "juan camilo"
    }
}
const user = getUser();
console.log(user);

//arrayfunction sin el return
const userGet = () =>
    ({
        id: "123",
        username:"juan valdez"
    });

const user2 = userGet();
console.log(user2);




