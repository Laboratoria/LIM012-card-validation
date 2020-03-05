import validator from './validator.js';

const btn1 = document.getElementById('btn1'); // BOTÓN FORMULARIO 'inicio'
    btn1.addEventListener('click', () => {
    const email = document.getElementById('email').value;
        if (email === '') {
            document.getElementById('email').focus();
        } else {
        document.getElementById('email').focus();
        document.getElementById('inicio').style.display='none';
        document.getElementById('segundo').style.display='block';
        }
});

const btn2 = document.getElementById('btn2'); // BOTÓN FORMULARIO 'segundo'
    btn2.addEventListener('click', () => {

    const creditCardNumber = document.getElementById('creditCardNumber').value;
    const nameCliente = document.getElementById('nameCliente').value;
    
    if (creditCardNumber === '' && nameCliente === '') {
        document.getElementById('status1').innerHTML= 'Ingresar datos requeridos';
        } else {
        const numeroTarjeta = document.getElementById('creditCardNumber');
        const isValidCardNumber = validator.isValid(numeroTarjeta.value);

        const numeroTarjetaEncriptado = validator.maskify(numeroTarjeta.value);
        numeroTarjeta.value = numeroTarjetaEncriptado;
            
        if (isValidCardNumber === true) {
            document.getElementById('tarjeta válida').innerHTML= 'Tarjeta ingresada válida';
            document.getElementById('status1').style.display='none';
            document.getElementById('status2').style.display='block';
            setTimeout('document.location.reload()',20000);
            } else {
            document.getElementById('tarjeta inválida').innerHTML= 'Tarjeta ingresada inválida';
            document.getElementById('status1').style.display='none';
            document.getElementById('status3').style.display='block';
            setTimeout('document.location.reload()',10000);
            }
    
        }


    });





    
