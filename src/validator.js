
const validator = {

    isValid : (cardNum) =>{
        
        const array= Array.from(cardNum);
        let arrayNew=[];
        let sumTotal=0;
        

          for(let i=array.length-1; i>=0 ;i--){
            arrayNew.push(array[i]);
          } 

          for(let j=0; j<=arrayNew.length-1; j++){

            if(j%2==0){
              sumTotal+= parseInt(arrayNew[j]);
                
            }else if(parseInt(arrayNew[j])*2<10){
              sumTotal+= parseInt(arrayNew[j])*2;
             
            }else {
               let paresM= parseInt(arrayNew[j])*2;
               let inText= paresM.toString();
               for(let k=0; k<inText.length; k++){
                 sumTotal+=parseInt(inText[k]);
               }
            } 
          }
        

      
          if(sumTotal%10==0){
                return true;
          
        } else{
          
          return false;
        }
                  
    }
    ,
    
    maskify: (cardNum) =>{

      
      let after= "";
      let post= cardNum.slice(-4);
      
      for( let i=0; i<cardNum.length-4; i++){
        after += "#";
      }
      
      return after + post;
      
    }
}

export default validator;
