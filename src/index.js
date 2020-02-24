import validator from './validator.js';

// console.log(validator.isValid)
// // function getCardInput(){
// //     const cardNumInput = document.getElementById('creditCardNumber');
// //     return cardNumInput.value;  
// // }

// let currentCardNumber = '';
// let maskedCardNumber = '';

const btn1 = document.getElementById('btn1'); // BOTÓN FORMULARIO 'inicio'
    btn1.addEventListener('click', () => {
    const email = document.getElementById('email').value;
        if (email == "") {
            document.getElementById('email').focus();
        } else {
          console.log(email + "");
        document.getElementById('email').focus();
        document.getElementById('inicio').style.display='none';
        document.getElementById('segundo').style.display='block';
        }
});

const btn2 = document.getElementById('btn2'); // BOTÓN FORMULARIO 'segundo'
    btn2.addEventListener('click', () => {

    const numeroTarjeta = document.getElementById('creditCardNumber');
    const isValidCardNumber = validator.isValid(numeroTarjeta.value);
    console.log(isValidCardNumber);

    const numeroTarjetaEncriptado = validator.maskify(numeroTarjeta.value);
    numeroTarjeta.value = numeroTarjetaEncriptado;
    console.log(numeroTarjeta.value);

    const status1 = document.getElementById('status1');
    if (isValidCardNumber === true) {
        status1.innerHTML = 'Tarjeta válida';
    }
    const status2 = document.getElementById('status2');
    if (isValidCardNumber === false) {
        status2.innerHTML = 'Tarjeta inválida';
    }

});

console.log(validator);




