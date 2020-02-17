import validator from './validator.js';
console.log(validator);

// declaracion
const datos=document.getElementById('datos');
const resultado=document.getElementById('resultado');
const mensaje=document.getElementById('mensaje');
const btnsend=document.getElementById('btnsend');
const creditCardNumber=document.getElementById('cardcli');
const form = document.querySelector('form');

// primera pantalla
datos.style.display='block';
resultado.style.display='none';
mensaje.innerHTML= 'Gracias por elegirnos';

// evaluar tarjeta 4137894711755904
form.onsubmit = function(e) {
  e.preventDefault();
  let cardNumber=creditCardNumber.value;
  datos.style.display='none';
  resultado.style.display='block';
  if (validator.isValid(cardNumber)) {
    mensaje.innerHTML= 'Nro. de Tarjeta valida';
  } else {
    mensaje.innerHTML= 'Nro. de Tarjeta no valida, verifique porfavor';
  }
  
}

const cardValid = () => {
    let cardNumber=creditCardNumber.value;
    datos.style.display='none';
    resultado.style.display='block';
//    mensaje.innerHTML=validator.isValid(cardNumber));
    if (validator.isValid(cardNumber)) {
      mensaje.innerHTML= 'Comprobante y muestra tarjeta XXXXXX9999';
    } else {
      mensaje.innerHTML= 'tarjeta no valida';
    }
};
//onclick

//btnsend.addEventListener('onclick', cardValid);

//document.getElementById('btnsend').addEventListener('click',validar);

 //btnsend.onclick = function(){
//    datos.style.display='none';
//    resultado.style.display='block';
//    mensaje.innerHTML= 'Comprobante y muestra tarjeta XXXXXX9999';
//  };
