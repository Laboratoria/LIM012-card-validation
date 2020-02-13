import validator from './validator.js';
console.log(validator);

// declaracion 
const datos=document.getElementById('datos');
const resultado=document.getElementById('resultado');
const mensaje=document.getElementById('mensaje');
const btnsend=document.getElementById('btnsend');
const creditCardNumber=getElementById('cardcli');

// primera pantalla
datos.style.display='block';
resultado.style.display='none';
mensaje.innerHTML= 'Gracias por elegirnos';

// evaluar tarjeta

const cardValid = () => {
    let respuesta=Boolean;
    datos.style.display='none';
    resultado.style.display='block';
    respuesta=isValid(creditCardNumber);
    mensaje.innerHTML= 'Comprobante y muestra tarjeta XXXXXX9999';    
};
//onclick

btnsend.addEventListener('click', cardValid);

//document.getElementById('btnsend').addEventListener('click',validar);

 //btnsend.onclick = function(){
//    datos.style.display='none';
//    resultado.style.display='block';
//    mensaje.innerHTML= 'Comprobante y muestra tarjeta XXXXXX9999';    
//  };

  
  
  

