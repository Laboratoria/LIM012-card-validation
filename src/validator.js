const isValid = function (creditCardNumber) {
  const reverse = function(array) {
    let newArray = [];
    let size = 16;
    let lastPosition = size - 1;
    for (let i = lastPosition; i >= 0; i--) {
      newArray.push(array[i]);
    }
    return newArray;
  // //   // const arr = Array.from(array);
  // //   // return arr.reverse();
  };
  
  const multiply = function(array) {
    let newArray = [];
    for (let index = 0; index < 16; index++) {
      if (index % 2 !== 0) {
        const castedNumber = Number(array[index]); //arreglo de Strings
        const newNumber = castedNumber * 2;
  
        newArray.push(String(newNumber));
      } else {
        newArray.push(array[index]);
      }
    }
    return newArray;
  };
    
  const sumDigits = function(array) {
    let newArray = [];
    for (let index = 0; index < 16; index++) {
    const temp = Number(array[index]);
      if (temp >= 10) {
        const tempArray = array[index].split(''); //arreglo de Strings
        let sum = 0;
        for (let i = 0; i < tempArray.length; i++) {
          sum += Number(tempArray[i]);
        }
  
        newArray.push(String(sum));
      } else {
        newArray.push(array[index]);
      }
    }
    return newArray;
  };
  
  const sumTotal = function(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += Number(array[i]);
    }
    return sum;
  };

  const reverseCard = reverse(creditCardNumber);
  const multiplyCard = multiply(reverseCard);
  const sumDigitsCard = sumDigits(multiplyCard);
  const suma = sumTotal(sumDigitsCard);
  const isValidCardNumber = suma % 10 === 0;
  return isValidCardNumber;
};

const maskify = function (creditCardNumber) {
  let lastfour = creditCardNumber.length;
  let finalnumber = "";
  for(let i = 0; i < lastfour - 4; i++)
    {
      finalnumber += "#";
    }
    
   return finalnumber + creditCardNumber.substring(lastfour-4,lastfour);

};

const validator = {
  isValid,
  maskify
};


// valid card: 4557880973223823

export default validator;
