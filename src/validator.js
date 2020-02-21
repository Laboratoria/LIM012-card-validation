
const validator = {

    isValid : (cardNum) =>{
        
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

      
          if(sumTotal%10==0){
                return true;
          
        } else{
          
          return false;
        }
                  
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
      
    }
}

export default validator;
