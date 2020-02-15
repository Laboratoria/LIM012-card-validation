import validator from './validator.js';

document.getElementById("pag2").style.display="none";
document.getElementById("pag3").style.display="none";
let boton= document.getElementById("myBtn");

boton.addEventListener("click", ()=> {

let nombreCompleto = document.getElementById("nombreCompleto").value;
let correoElectrónico = document.getElementById("correoElectrónico").value;
let númeroTeléfono  = document.getElementById("númeroTeléfono").value;
let dni  = document.getElementById("dni").value;


       if(nombreCompleto == false || correoElectrónico == false || númeroTeléfono == false || dni == false){
             alert("Todos los campos son obligatorios");
       } else {
            document.getElementById("pag1").style.display="none";
            document.getElementById("pag3").style.display="";
            document.getElementById("pag2").style.display="";
            document.getElementById("cuenta").style.display="none";
       }
});


let boton1= document.getElementById("myBtn1");
let valid = ()=> {
  let numIngresado = document.getElementById("numCard").value;
  let cardNum = validator.isValid(numIngresado);
  // document.getElementById("pag2").style.display="none";
  // document.getElementById("pag3").style.display="";

}
boton1.addEventListener("click", valid);

let boton2= document.getElementById("myBtn2");

let maskid = ()=>{
  let numIngresado = document.getElementById("numCard").value;
  let cardNum = validator.maskify(numIngresado);
 
}
boton2.addEventListener("click",maskid);









//  4551708243730135
console.log(validator);