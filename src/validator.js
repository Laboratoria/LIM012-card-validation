const validator = {
  // ...
    isValid: function(creditCardNumber){
    // invierto el arreglo en arrinvertido ya seran numeros
    let arrinvertido=[];
    let idxreverse=15;
    let producto=0;
    let caracter;
    let suma=0;
    let respuesta=false;
    for (let i = 0; i <= 15; i = i + 1) {
      arrinvertido[i]= creditCardNumber[idxreverse]*1;
      idxreverse=idxreverse-1;
     }
  //   console.log(arrinvertido);
  //multiplico x 2 las ubicaciones pares
    for (let j = 1; j <= 15; j = j + 2) {
    producto=arrinvertido[j]*2;
      if (producto>9){
        caracter=producto-10;
        console.log(caracter);
        arrinvertido[j]=(caracter*1)+1;
      } else {
        arrinvertido[j]=producto;
      }
    }
  //  console.log(arrinvertido);
  // sumo a todos
    for (let i = 0; i <= 15; i = i + 1) {
      suma = suma+arrinvertido[i];
    }
    //console.log(suma);
  // envio la respuesta
    //console.log (!suma%10);
    if ((suma%10)===0){
       respuesta=true;
    }else {
       respuesta=false;
    }
    return respuesta;
  } // fin de metodo isvalid
}; // fin de objeto validator

export default validator;
