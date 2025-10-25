const useState = (name:string) =>{
    //en ste caso retornamos un string y una funcion anonima de flecha
    return [name,(newValue:string)=>{
        console.log(newValue);
    }] as const; 
}

//destrtucturamos un arreglo y le pasamos un string a la funcion
const [name , setName] = useState('goku');
console.log(name);
//elegimos la segunda posicion y mandamos a imprimir el nombre que es el valor que recibe la fucnion anonima que se encuentra en la funcion useState
setName('Vegeta');


