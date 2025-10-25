//como base principal el array si puede aceptar valores de diferentes tipos pero mas adelante puede causar conflicto
//declaramos el array de tipo number
const Myarray: number[] = [1,2,3,4,4,5,6,7,8,];

//agregamos dos string al array
//Myarray.push('11');
//Myarray.push('12');

//le pasamos cada valor del arreglo al array dos
const MyArrayDos = [...Myarray]
MyArrayDos.push(1);
console.log({MyArrayDos});


for(let Element of Myarray) {
    //en este caso aca causa conflicto ya que estamos sumando cada elemento pero no se puede ya que no suma datos de tipo number con string
    console.log(Element + 1);
}

console.log(Myarray);
