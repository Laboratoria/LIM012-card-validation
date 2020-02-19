
const validator = {

    isValid : (cardNum) =>{
      
      // if(cardNum !== "" && cardNum.length<=16){
       
        let array= Array.from(cardNum);
        let arrayNew=[];
        let sumTotal=0;
        let sum=0;
        

          for(let i=array.length-1; i>=0 ;i--){
            arrayNew.push(array[i]);
          }

          for(let j=0; j<=arrayNew.length-1; j++){

            if(j%2==0){
              sumTotal+= parseInt(arrayNew[j]);
                
            }else if(parseInt(arrayNew[j])*2<10){
              sumTotal+= parseInt(arrayNew[j])*2;
             
            }else {
               let mixer= parseInt(arrayNew[j])*2;
               let inText= mixer.toString();
               for(let k=0; k<inText.length; k++){
                 sum+=parseInt(inText[k]);
               }
            } 
          }
        sumTotal+=sum;

        // if(sumTotal%10==0 && sumTotal!==0){
          if(sumTotal%10==0){
                return true;
          // alert("tarjeta valida")
        } else{
          // alert("tarjeta invalida")
          // return isValid();
          return false;
        }
    
      //  }else{
      //    alert("Campo obligatorio, Ingrese 16 dígitos")
      //    return isValid();
      //    return false;
      //  }
      
      
            
    }
    ,
    
    maskify: (cardNum) =>{

      let output = '';
      let lastFour = cardNum.slice(-4, cardNum.length);

            if (cardNum.length <= 4) {
                return cardNum;
            } else {
              for (let i = 0; i < cardNum.length -4; i++) {
              output += '#';
            }
            }
      return output + lastFour;
      // let hola = output + lastFour;
      // return hola;
            
    }
}

export default validator;
