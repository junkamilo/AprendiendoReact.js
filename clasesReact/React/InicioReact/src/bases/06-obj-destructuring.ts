interface Hero {
    name: string,
    age: number,
    key: string,
    //(?) signo significa que cuando estamos creando un objeto se puede agregar esa propiedad del objeto o no, es opcional
    rank?: string
}
const person = {
    name : "juan camilo",
    age: 22,
    key: "luffy"
}

//aca hacemos destructuracion de la interfaces y retornamos los valores.
const useContext = ({name , age , key, rank}: Hero) =>{
    return {
        key,
        person:{
            name,
            age
        },
        rank
    }
}

//esta es unas de las maneras que podemos tambien destructurar un objeto 
const { name:personName , age , key:Keyname } = person;
console.log(`name: ${personName} age: ${age} key: ${Keyname}`);
//const name = person.name;
//const age = person.age;
//const key = person.key;

const {rank , key, person:{name}} = useContext(person);
console.log({rank,key,name});



