import validator from './validator.js';

document.getElementById("pag2").style.display="none";
document.getElementById("pag3").style.display="none";



const boton= document.getElementById("myBtn");

boton.addEventListener("click", ()=> {

const nombreCompleto = document.getElementById("nombreCompleto").value;
const correoElectrónico = document.getElementById("correoElectrónico").value;
const númeroTeléfono  = document.getElementById("númeroTeléfono").value;
const dni  = document.getElementById("dni").value;


       if(nombreCompleto == false || correoElectrónico == false || númeroTeléfono == false || dni == false){
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
  
  if (numIngresado !=="" && numIngresado.length<=16){
    
    if(validator.isValid(numIngresado) == true){
      
      document.getElementById("demo").innerHTML= "No olvide corroborar su información, si es correcta dale siguiente:"
      document.getElementById("demo1").innerHTML= validator.maskify(numIngresado);
      document.getElementById("demo2").innerHTML= "Nombre    : " +  document.getElementById("nombreCompleto").value
      document.getElementById("demo3").innerHTML= "E-mail    : " +  document.getElementById("correoElectrónico").value
      document.getElementById("demo4").innerHTML= "Teléfono  : " +  document.getElementById("númeroTeléfono").value
      document.getElementById("demo5").innerHTML= "DNI       : " +  document.getElementById("dni").value
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