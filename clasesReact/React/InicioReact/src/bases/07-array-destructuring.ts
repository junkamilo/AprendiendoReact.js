const namePersonajes = ['luffy','zoro','chopper','nami','robin','usoop','frankly'];
//unas de las maneras de destructurar un arreglo
//imprimimos a nami en la posicion 3 , la coma(,) nos da espacios para llegar a una posicion
 const [ p1 , , , p4 ] = namePersonajes;
 console.log({p1 , p4});

 const returnArray = ()=>{
    return ['ABC',123] as const;
 }

 const [letters , number] = returnArray();
 console.log(number + 100);
 console.log(letters);
 
 
 