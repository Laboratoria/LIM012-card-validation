
const validator={
isValid : (numeroTarjeta)=>{
  //if (numeroTarjeta.length==16) {
    let array=[];
    for(let i = numeroTarjeta.length-1; i>=0; i--){
      array= array + numeroTarjeta[i];
    }

    let array2=[];
      for (let i = 1, l = array.length; i < l; i=i+2) {
        array2.push(parseInt(array[i]*2));
      }

      let   posicion=0;
      let array3=[];
     for (let i =0; (array.length-1)/2 >i;i++){
         if (array2[i]>9){
       posicion   =(parseInt(array2[i])%10)+Math.floor(parseInt(array2[i])/10);
       array3.push(parseInt(posicion.toString()));
        }else{
          posicion =array3.push(parseInt(array2[i]));
            }
      }

      for (let i = 0; i <  array.length; i=i+2) {
        array3.push(parseInt(array[i]));
      }

      let sumaarray = 0;
      for (let i = 0; i < array3.length; i++){
        sumaarray=sumaarray+parseInt(array3[i]);
      }

      if (sumaarray%10==0){
        return true
      } else{
        return false
    }

},

maskify : (numeroTarjeta)=>{

  let array= numeroTarjeta.split('')


  let arraymask=''
  for (let i = 0; i < array.length; i++){
    if ( i < (array.length-4) ){
    arraymask+= '#' ;
    }else{
    arraymask+=numeroTarjeta[i] ;
    }
  }
  return arraymask;
}

};

export default validator ;
