const validator = {
  isValid : (cardNumber)=>{
      let reverseNum = Array.from(cardNumber).reverse();
      let suma = 0;
      let estado = true; //estado = 0 significa que el dato es valido
      for (let i = 0; i < reverseNum.length; i++) {
      
        // Verificar si la posición es par
        if ((i + 1) % 2 == 0) {
            reverseNum[i] = reverseNum[i] * 2;
            // Si es >= 10, usar truco del 9.
            if (reverseNum[i] > 9) {
            reverseNum[i] = reverseNum[i] - 9;
            }
        }
        suma += parseInt(reverseNum[i]);
      }
        
      if (suma % 10 == 0 ){
        estado == true; //estado = 0 Si el dato es válido
      }
      else {
        estado = false; //estado = 2 Si el dato es no válido
      }    
      
      
      return estado;
  },

  maskify : (cardNumber)=>{
      let card = Array.from(cardNumber);
        
        for (let i = 0; i <=card.length; i++) {
            if (i<card.length-4){
                card[i]="#";
            }
    
        }
    
        return card.join("");
  }

};

export default validator;