import validator from './validator.js';
//import {isValid} from './validator.js';

//console.log(validCard);

document.getElementById("ingresoTarjeta").style.display="none";
document.getElementById("validacionTarjeta").style.display="none";
document.getElementById("validacionTarjeta1").style.display="none";
document.getElementById("bienvenida").style.display="none";
document.getElementById("bienvenida2").style.display="none";
document.getElementById("bienvenida3").style.display="none";
document.getElementById("bienvenida4").style.display="none";
document.getElementById("bienvenida5").style.display="none";
document.getElementById("formulario").style.display="none";
document.getElementById("confirmar").style.display="none";
document.getElementById("final").style.display="none";



document.getElementById("msj1").style.display="none";

//Botón Nosotros
document.getElementById("nosotros").addEventListener("click", ()=>{
    
    document.getElementById("bienvenida4").style.display="block";
    document.getElementById("bienvenida1").style.display="none";
    
});
//Botón volver NOSOTROS
document.getElementById("volver").addEventListener("click", ()=>{
    
    document.getElementById("bienvenida4").style.display="none";
    document.getElementById("bienvenida1").style.display="block";
    
});

//Botón Servicios
document.getElementById("servicios").addEventListener("click", ()=>{
    
    document.getElementById("bienvenida5").style.display="block";
    document.getElementById("bienvenida1").style.display="none";
    
});

//Botón volver VOLVER SERVICIOS
document.getElementById("volver1").addEventListener("click", ()=>{
    
    document.getElementById("bienvenida5").style.display="none";
    document.getElementById("bienvenida1").style.display="block";
    
});

//Botón Reservación
document.getElementById("reservaciones").addEventListener("click", ()=>{
    
    document.getElementById("bienvenida").style.display="block";
    document.getElementById("bienvenida1").style.display="none";
   
    
});
//Botón PAGO EFECTIVO
document.getElementById("btnPagoEfectivo").addEventListener("click", ()=>{

    document.getElementById("bienvenida2").style.display="block";
    document.getElementById("msj1").style.display="block";
    document.getElementById("bienvenida1").style.display="none";
    document.getElementById("bienvenida").style.display="none";  
    document.getElementById("msjPagoEfectivo").innerHTML = "Estamos trabajando para aceptar pago efectivo. Tendrás noticias pronto!";
});

//Botón  VOLVER PAGO EFECTIVO
document.getElementById("volver2").addEventListener("click", ()=>{
    
    document.getElementById("bienvenida2").style.display="none";
    document.getElementById("bienvenida").style.display="block";
    
});

//Botón PAGO CON TARJETA

document.getElementById("btnPagoTarjeta").addEventListener("click", ()=>{
    document.getElementById("bienvenida3").style.display="block";
    document.getElementById("ingresoTarjeta").style.display="block";
    document.getElementById("bienvenida").style.display="none";
    document.getElementById("bienvenida1").style.display="none";
});

//Botón volver PAGO NO VALIDO
document.getElementById("volver3").addEventListener("click", ()=>{
    document.getElementById("bienvenida3").style.display="block";
    document.getElementById("ingresoTarjeta1").style.display="block";
    document.getElementById("validacionTarjeta").style.display="none";
    document.getElementById("ingresoTarjeta").style.display="none";
    
});

//Botón CONTINUAR PAGO VALIDO
document.getElementById("continuar").addEventListener("click", ()=>{
    document.getElementById("formulario").style.display="block";
    document.getElementById("bienvenida3").style.display="block";
    document.getElementById("confirmar").style.display="block";
    document.getElementById("validacionTarjeta1").style.display="none";
    document.getElementById("ingresoTarjeta2").style.display="none";

});

//Botón CONFIRMAR FORMULARIO
document.getElementById("confirmar").addEventListener("click", ()=>{
    document.getElementById("formulario").style.display="none";
    document.getElementById("bienvenida3").style.display="block";
    document.getElementById("final").style.display="block";
    document.getElementById("confirmar").style.display="none";
    document.getElementById("validacionTarjeta1").style.display="none";
    document.getElementById("ingresoTarjeta2").style.display="none";

});

//Botón INICIO RESERVA
document.getElementById("inicio").addEventListener("click", ()=>{
    document.getElementById("formulario").style.display="none";
    document.getElementById("bienvenida1").style.display="block";
    document.getElementById("final").style.display="none";
    document.getElementById("confirmar").style.display="none";
    document.getElementById("validacionTarjeta1").style.display="none";
    document.getElementById("ingresoTarjeta2").style.display="none";
    document.getElementById("bienvenida3").style.display="none";


});


//Botón validar tarjeta

document.getElementById("btnValidar").addEventListener("click", ()=>{
    
    document.getElementById("ingresoTarjeta").style.display="none";
    document.getElementById("ingresoTarjeta1").style.display="none";
    document.getElementById("bienvenida3").style.display="none";
    document.getElementById("bienvenida1").style.display="none";
    document.getElementById("bienvenida").style.display="none";
    document.getElementById("validacionTarjeta").style.display="none";
    document.getElementById("validacionTarjeta1").style.display="none";
    //document.getElementById("cardNumberAsterisco").innerHTML = numeroTarjeta;

    
    const numeroTarjeta = document.getElementById("ingresoCardNumber").value;
    
    let estadoTarjeta = true;
    let asterisco;
    //4557880967583844
    

    estadoTarjeta = validator.isValid(numeroTarjeta);

    if (numeroTarjeta.length == 0 ) {
        alert("Debes llenar el campo");
         document.getElementById("validacionTarjeta").style.display="none";
         document.getElementById("ingresoTarjeta1").style.display="block";
         document.getElementById("bienvenida3").style.display="block";
      }

    else{

        if (estadoTarjeta == false) {
        asterisco= validator.maskify(numeroTarjeta);
        
        document.getElementById("bienvenida3").style.display="none";
        document.getElementById("validacionTarjeta").style.display="block";
        document.getElementById("ingresoTarjeta").style.display="block";
        document.getElementById("cardNumberAsterisco").innerHTML ="NO VALIDO";
        document.getElementById("numeroAsterisco").innerHTML =asterisco;
        }
  
        else {
            asterisco= validator.maskify(numeroTarjeta);
            document.getElementById("bienvenida3").style.display="none";
            document.getElementById("validacionTarjeta1").style.display="block";
            document.getElementById("ingresoTarjeta2").style.display="block";
            document.getElementById("cardNumberAsterisco1").innerHTML = asterisco;
        }
    }

    
    

    
});
