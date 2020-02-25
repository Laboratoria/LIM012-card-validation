import validator from './validator.js';

// declaracion
const datos=document.getElementById('datos');
const resultado=document.getElementById('resultado');
const mensaje=document.getElementById('mensaje');
const creditCardNumber=document.getElementById('cardcli');
const namecli=document.getElementById('namecli');
const form = document.querySelector('form');
const showcli=document.getElementById('showcli');
const showcard=document.getElementById('showcard');
const btnback=document.getElementById('btnback');

mensaje.innerHTML= '¡Bienvenido!';

// volver para intentar nuevamente
btnback.addEventListener('click',()=>{
  resultado.classList.add("hide");
  datos.classList.remove("hide");
  mensaje.innerHTML= '¡Bienvenido!';
})
// validar el ingreso de solo numeros para la tarjeta
creditCardNumber.addEventListener('keydown',(event)=> {
  if((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105) && event.keyCode !==190  && event.keyCode !==110 && event.keyCode !==8 && event.keyCode !==9  ){
    event.preventDefault();
  }
})

//  datos del formulario
form.addEventListener('submit',(event)=> {
    event.preventDefault();
    let cardNumber=creditCardNumber.value;

    datos.classList.add("hide");   
    resultado.classList.remove("hide");

    if (validator.isValid(cardNumber)) {
      mensaje.innerHTML= 'Nro. de Tarjeta valida';
    } else {
      mensaje.innerHTML= 'Nro. de Tarjeta no valida';
    }
    showcli.innerHTML=namecli.value;  
    showcard.innerHTML=validator.maskify(cardNumber);
  
  }
);
