const validator = {
  // objeto validator contiene isvalid y maskify
  isValid:(creditCardNumber)=> {
    // invierto el arreglo en arrinvertido ya seran numeros
    creditCardNumber=creditCardNumber.trim();
    let arrinvertido=[];
    let largo=creditCardNumber.length-1;
    let idxreverse=largo;
    let producto=0;
    let caracter;
    let suma=0;
    let respuesta=false;
    for (let i = 0; i <= largo; i = i + 1) {
      arrinvertido[i]= creditCardNumber[idxreverse]*1;
      idxreverse=idxreverse-1;
    }
    //multiplico x 2 las ubicaciones pares
    for (let j = 1; j <= largo; j = j + 2) {
      producto=arrinvertido[j]*2;
      if (producto>9){
        caracter=producto-10;
        arrinvertido[j]=(caracter*1)+1;
       } else {
        arrinvertido[j]=producto;
      }
    }
    // sumo a todos
    for (let i = 0; i <= largo; i = i + 1) {
      suma = suma+arrinvertido[i];
    }
    // envio la respuesta
    if ((suma%10)===0){
       respuesta=true;
    }else {
       respuesta=false;
    }
    return respuesta;
  }, // fin de metodo isvalid
  maskify:(creditCardNumber)=>{
    // cantidad de caracteres a mostrar
    creditCardNumber=creditCardNumber.trim();    
    let QshowCar=4;   
    let largo=creditCardNumber.length; 
    if (largo>QshowCar) {
      creditCardNumber='#'.repeat(largo-QshowCar)+creditCardNumber.substring(largo-QshowCar);
    }
    return creditCardNumber;
  }// fin maskify
}; // fin de objeto validator

export default validator;
