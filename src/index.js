import validator from './validator.js';
//import {isValid} from './validator.js';

//console.log(validCard);

document.getElementById("ingresoTarjeta").style.display="none";
document.getElementById("validacionTarjeta").style.display="none";
document.getElementById("bienvenida").style.display="none";
document.getElementById("msj1").style.display="none";


//Botón Reservación
document.getElementById("reservaciones").addEventListener("click", ()=>{
    
    document.getElementById("bienvenida").style.display="block";
    document.getElementById("bienvenida1").style.display="none";
   
    
});
//Botón Menor de Edad
document.getElementById("btnMenorDeEdad").addEventListener("click", ()=>{
    
    document.getElementById("bienvenida1").style.display="none";
    document.getElementById("bienvenida").style.display="none";
    document.getElementById("msj1").style.display="block";
    document.getElementById("msjMenorDeEdad").innerHTML = "Aún no puedes hacer reservaciones";
});

//Botón Mayor de edad

document.getElementById("btnMayorDeEdad").addEventListener("click", ()=>{
    document.getElementById("ingresoTarjeta").style.display="block";
    document.getElementById("bienvenida").style.display="none";
    document.getElementById("bienvenida1").style.display="none";
});


//Botón validar tarjeta

document.getElementById("btnValidar").addEventListener("click", ()=>{
    
    document.getElementById("ingresoTarjeta").style.display="none";
    document.getElementById("bienvenida1").style.display="none";
    document.getElementById("bienvenida").style.display="none";
    document.getElementById("validacionTarjeta").style.display="block";
    //document.getElementById("cardNumberAsterisco").innerHTML = numeroTarjeta;

    
    const numeroTarjeta = document.getElementById("ingresoCardNumber").value;
    
    let estadoTarjeta = true;
    let asterisco;
    //4557880967583844
    

    estadoTarjeta = validator.isValid(numeroTarjeta);

    if (numeroTarjeta.length == 0 ) {
        alert("Debes llenar el campo");
         document.getElementById("validacionTarjeta").style.display="none";
         document.getElementById("ingresoTarjeta").style.display="block";
      }

    else{

        if (estadoTarjeta == false) {
        asterisco= validator.maskify(numeroTarjeta);
        document.getElementById("cardNumberAsterisco").innerHTML ="NO VALIDO";
        document.getElementById("numeroAsterisco").innerHTML =asterisco;
        }
  
        else {
            asterisco= validator.maskify(numeroTarjeta);
            document.getElementById("cardNumberAsterisco").innerHTML = asterisco;
        }
    }

    
    

    
});