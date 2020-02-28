const validator = {
  isValid : (cardNumber)=>{
      let reverseNum = Array.from(cardNumber).reverse();
      let suma = 0;
      let estado = true; 
      for (let i = 0; i < reverseNum.length; i++) {
      
        // Verificar si la posición es par
        if ((i + 1) % 2 == 0) {
            reverseNum[i] = reverseNum[i] * 2;
            // Si es >= 10, usar truco del 9.
            if (reverseNum[i] > 9) {
            reverseNum[i] = reverseNum[i] - 9;
            }
        }
        //suma numeros pares e impares, sin el parseInt aparece como NaN
        suma += parseInt(reverseNum[i]);
      }
        
      if (suma % 10 == 0 ){
        estado == true; 
      }
      else {
        estado = false; 
      }    
      
      
      return estado;
  },

  maskify : (cardNumber)=>{
      //convierto en un array y separo
      let card = Array.from(cardNumber);
        
        for (let i = 0; i <=card.length; i++) {
            //no toca los ultimos 4 digitos independientemente de la cantidad de numeros que haya
            if (i<card.length-4){
                card[i]="#";
            }
    
        }
    
        return card.join("");
        //elimina las comas 
  }

};

export default validator;