//4083952015263
import validator from './validator.js';

const btnValidar = document.getElementById('btn');
const primeraVista = document.getElementById("primeraparte");
const segundaVista = document.getElementById("segundaparte");

segundaVista.style.display = 'none';
//document.addEventListener("DOMContentLoaded", function () {
btnValidar.addEventListener('click', () => {
let numeroTarjeta = document.getElementById("tarjeta").value;
let name = document.getElementById('nombre').value;

//Validar el input del numero de tarjeta
const expresion = /[^0-9]/;

if(numeroTarjeta === "") {

  document.getElementById("mensaje1").innerHTML = 'Este campo es obligatorio';
} else if (expresion.test(numeroTarjeta)) {
  document.getElementById("mensaje1").innerHTML= 'Debe ingresar solo 16 numeros';
} else {

//Algoritmo de luhm
//if (numeroTarjeta.length==16) {

  //const mensajito = document.getElementById('mensaje');
  //mensajito.innerHTML = resultado;
 const resultado = validator.isValid(numeroTarjeta);
 const ocultar = validator.maskify(numeroTarjeta);

    if (resultado==true){
      primeraVista.style.display = 'none';
      segundaVista.style.display = 'block';
       const mensajeResultadoValido = document.getElementById("mensaje2");
       mensajeResultadoValido.innerHTML= (name+'tu tarjeta'+ ocultar + ' '+'es valida');
    }else {
        const mensajeResultadoInvalido = document.getElementById("mensaje1");
       mensajeResultadoInvalido.innerHTML= (name+'tu tarjeta'+ ' '+ocultar + ' '+'es invalida'+' '+'no se ejecuto tu pago');
     document.getElementById("mensaje1").style.display = "block";
            }
//}else {
  //alert('no valido');
//}
}
});

//});
