import validator from './validator.js';

  document.getElementById("pag2").style.display="none";
  document.getElementById("pag3").style.display="none";
  const nombreCompleto = document.getElementById("nombreCompleto");
  const correoElectrónico = document.getElementById("correoElectrónico");
  const númeroTeléfono  = document.getElementById("númeroTeléfono");
  const dni  = document.getElementById("dni");

const boton= document.getElementById("myBtn");
boton.addEventListener("click", ()=> {

  const nombre_Completo = nombreCompleto.value;
  const correo_Electrónico = correoElectrónico.value;
  const número_Teléfono  = númeroTeléfono.value;
  const dni_  = dni.value;

       if(nombre_Completo === '' || correo_Electrónico === '' || número_Teléfono === '' || dni_ === ''){
             alert("Todos los campos son obligatorios");
       } else {
            document.getElementById("contenedor1").style.display="none";
            document.getElementById("pag2").style.display="";
            document.getElementById("public").style.display="none";
            document.getElementById("piePagina").style.display="none";
       }
});


const boton1= document.getElementById("myBtn1");
const valid = ()=> {
  const numIngresado = document.getElementById("numCard").value;
  
  if (numIngresado !==""){
    
    if(validator.isValid(numIngresado) == true && numIngresado!=="0"){
      
      document.getElementById("demo").innerHTML= "No olvide corroborar su información, si es correcta dale siguiente:"
      document.getElementById("demo1").innerHTML= validator.maskify(numIngresado);
      document.getElementById("demo2").innerHTML= "Nombre    : " +  nombreCompleto.value
      document.getElementById("demo3").innerHTML= "E-mail    : " +  correoElectrónico.value
      document.getElementById("demo4").innerHTML= "Teléfono  : " +  númeroTeléfono.value
      document.getElementById("demo5").innerHTML= "DNI       : " +  dni.value
      document.getElementById("pag2").style.display="none";
      document.getElementById("pag3").style.display="";
      document.getElementById("redesSociales").style.display="";
      
    } else{
      
      alert("Tarjeta inválida")
     
    }
    
  } else{
        alert("Campo Obligatorio")
  }
}
boton1.addEventListener("click", valid);


const back= document.getElementById("preview");
back.addEventListener("click", ()=>{
  document.getElementById("pag2").style.display="";
  document.getElementById("pag3").style.display="none";
})




// console.log(validator);