//aca creamos una interfaz de la agregamos al objeto people
interface NombreObjeto  {
    cosas: string;
}

//creamos una interfaces lo cual va hacer un cascaron en lo cual se le dira al objeto los tipos de datos que debe manejar cada propiedad
interface People {
    FirstName: string,
    LastName: string,
    Age: number,
    city: string,
    phone: string,
    email: string
    objetos : NombreObjeto,
}



//si nos paramos encima del name de la variable y le damos (F2) se cambia en todos lados el nombre de esa variable
//en este caso le decimos al objeto Person que como modela y interfas a people lo cual estrictamente las propiedades deben tener ese tipo de valor
const Person : People = {
    FirstName: 'Juan',
    LastName: 'Beltran',
    Age: 22,
    //si lo coloco de esta manera me va a decir que hubo un error
    //Age: '22',
    city: 'Giron',
    phone: '3013183474',
    email: 'juan@gmail.com',
    //lo agregamos como creamos las interfaces
    objetos: {
    cosas: "casa"
  }
}

//al agregar esta variable el objeto persona le estamos pasando todo su contenido en memoria y no sus propiedades lo cual el valor que le a esa constante no va acmabiar va hacer el mismo del objeto
//const PersonDos = Person;

//De esta manera si podemos agregar solo las propiedas del objeto a la variable
const PersonDos = structuredClone(Person);

PersonDos.FirstName = "Camila";
PersonDos.LastName = "Vesga";
PersonDos.Age = 20;
PersonDos.city = "Bucaramanga";
PersonDos.phone = '301325396';
PersonDos.email = "camila@gamil.com";

//Aca cambiamos las properties del objeto User lo cual si se puede reasignar
Person.FirstName = 'Julian';
Person.LastName = "Orozco";
console.log(Person, PersonDos);

//lo que no se podria reasignar seria el objeto Ejemplo:
// User = {
//     number : 1
// }
