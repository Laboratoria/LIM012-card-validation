import validator from './validator.js';

document.getElementById("pag2").style.display="none";
let boton= document.getElementById("myBtn");
boton.addEventListener("click", nextClick);

function nextClick () {

let nombreCompleto = document.getElementById("nombreCompleto").value;
let correoElectrónico = document.getElementById("correoElectrónico").value;
let númeroTeléfono  = document.getElementById("númeroTeléfono").value;
let dni  = document.getElementById("dni").value;


       if(nombreCompleto == false || correoElectrónico == false || númeroTeléfono == false || dni == false){
             alert("Todos los campos son obligatorios");
       } else {
            document.getElementById("pag1").style.display="none";
            document.getElementById("pag2").style.display="";
            document.getElementById("cuenta").style.display="none";
       }
}

let boton1= document.getElementById("myBtn1");
boton1.addEventListener("click", nextClick1);

function nextClick1 () {
 
let numCard = document.getElementById("numCard").value;
let array = Array.from(numCard);
let arrayNew = [];
      if(numCard == false){
            alert("Campo obligatorio");
      } else {
            for ( let i= array.length -1 ; i>=0 ; i-- ){
                  arrayNew = arrayNew + array[i];
            }
      } 
      document.write(arrayNew); 
}











console.log(validator);
