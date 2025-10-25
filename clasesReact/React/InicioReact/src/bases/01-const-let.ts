let Firstname = "juan camilo";
let Lastname = "beltran campo";
const diceNumber = 22;
const InformaTion = [{
    Firstname,
    diceNumber,    
}];
//Ya la variable no se puede cambiar a numero ya que la asignamos antes como String
//Lastname = 10;

//con el metodo include(), verificamos si la variable Lastname contiene la letras h lo cual devuelve un boolean en este caso devuelve "false"
const ContieneLetter = Lastname.includes('h');
console.log(Firstname,Lastname);
console.log(ContieneLetter);

//como es un array con objetos, primero obtenemos su posicion en este caso [0] y luego ingresamos al objeto con . eso nos retornara el nombre y la edad;
console.log(`Tu nombre es: ${InformaTion[0].Firstname} y tienes ${InformaTion[0].diceNumber} Años`);
