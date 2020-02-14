const validator = {
  
    isValid(cardNum){
      
      let arrayIngresado = Array.from(cardNum);
            let arrayNew = [];
            
                 if(cardNum == false){
                       alert("Campo obligatorio");
                 } else {
                       for ( let i= arrayIngresado.length -1 ; i>=0 ; i-- ){
                             arrayNew = arrayNew + arrayIngresado[i];
                       }
                     
                     console.log(arrayNew)
           }
           
            let arrayNew1 = Array.from(arrayNew);
            let sum=0;
            let arrayPar=[];
            let sumLong=0;
           
           
            for(let i=0; i<=arrayNew1.length-1; i++)
            {
              
                 if ( i%2 !== 0){
                   arrayPar.push(arrayNew1[i])
                      
                 } else {
                   sum= sum + parseInt(arrayNew1[i])
                   console.log(sum)   
                 }
               
            }
           
               for ( let j=0; j<arrayPar.length; j++){
           
                 if(parseInt(arrayPar[j])*2<10){
                 sum+=parseInt(arrayPar[j])*2
               }
               else if(parseInt(arrayPar[j])*2>=10){
                 var valor=parseInt(arrayPar[j])*2
                 var valortext=valor.toString()
                 for(var k=0;k<valortext.length;k++){
                   sumLong +=parseInt(valortext[k]);
                 }
               }
           
               }
           sum+=sumLong
             if(sum %10==0){
              alert("tarjeta valida");
             }
             else{
               alert("esa tarjeta es invalida")
             }
    }
    ,
    maskify(cardNum){

      let output = '';
      let lastFour = cardNum.slice(-4, cardNum.length);

            if (cardNum.length <= 4) {
                return cardNum;
            } else {
              for (let i = 0; i < cardNum.length -4; i++) {
              output += '#';
            }
            }
      
      let hola = output + lastFour;
      alert(hola);
            
    }
}

export default validator;
