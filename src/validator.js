const validator = {
  // ...
  arrcardnumbers:[],

  isValid: function(creditCardNumber){
    // invierto el arreglo en arrcardnumbers ya seran numeros
    let old=15;
    let producto=0;
    let caracter;
    let suma=0;
    for (let i = 0; i <= 15; i = i + 1) {
      arrcardnumbers[i]= creditCardNumber[old]*1;
      old=old-1;
     } 
    //multiplico x 2 las ubicaciones pares
    for (let j = 1; j <= 15; j = j + 2) {
      producto=arrcardnumbers[i]*2;
      if (producto>9){
        caracter=producto-10;
        arrcardnumbers[i]=(caracter*1)+1;
      }
    }
    // sumo a todos
    for (let i = 0; i <= 15; i = i + 1) {
      suma = suma+arrcardnumbers[i];
    }  
    if (suma%10){
      return true;
    else 
      return false;
    }
  }
};




const F1Race = {
  drivers: [
    'Alonso',
    'Vettel',
    'Button',
    'Massa'
  ],
  init: function () {
    console.log('Los siguientes pilotos van a comenzar la carrera:', this.drivers);
    setTimeout((function () {
      console.log('El ganador es', randomWinner(this.drivers));
    }), 1000);
  }
};

export default validator;
