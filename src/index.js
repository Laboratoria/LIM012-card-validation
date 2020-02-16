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
            document.getElementById("pag3").style.display="none";
            document.getElementById("pag2").style.display="";
            document.getElementById("public").style.display="none";
       }
});


let boton1= document.getElementById("myBtn1");
let valid = ()=> {
  let numIngresado = document.getElementById("numCard").value;
  let cardNum = validator.isValid(numIngresado);
  document.getElementById("pag2").style.display="none";
  document.getElementById("pag3").style.display="";

}
boton1.addEventListener("click", valid);

let boton2= document.getElementById("myBtn2");

let maskid = ()=>{
  let numIngresado = document.getElementById("numCard").value;
  let cardNum = validator.maskify(numIngresado);
  document.getElementById("demo2").innerHTML = validator.maskify(cardNum);
 
}
boton2.addEventListener("click",maskid);


$(document).ready(function(){

  let banner={
    padre : $("#banner"),
    numSlides: $("#banner").children(".anuncio").length,
    posicion: 1
  }
  
  banner.padre.children(".anuncio").first().css({
    "left": 0
  });
  
  let altoBanner = function() {
    let alto = banner.padre.children(".anuncio").outerHeight();
    banner.padre.css({
      "height": alto + "px"
    });
  }
  
  altoBanner();
  
  $("#next").on("click", function(e){
    e.preventDefault();
    if(banner.posicion<banner.numSlides){
      banner.padre.children().not(".active").css({
      "left":"100%"
       });
      $("#banner .active").removeClass("active").next().addClass("active").animate({
      "left": "0"
    });
  
    $("#banner .active").prev().animate({
      "left" : "-100%"
    });
  
    banner.posicion = banner.posicion + 1;
    } else {
      $("#banner .active").animate({
        "left": "-100%"
      });
      banner.padre.children().not(".active").css({
        "left":"100%"
         });
      $("#banner .active").removeClass("active");
      banner.padre.children(".anuncio").first().addClass("active").animate({
        "left" :"0"
      });
      banner.posicion= 1;
    }
  });

  $("#preview").on("click",function(e){
    e.preventDefault();
    
    if(banner.posicion>1){
      banner.padre.children().not(".active").css({
        "left": "-100%"
      });
      $("#banner .active").animate({
        "left" : "100%"
      });
      $("#banner .active").removeClass("active").prev().addClass("active").animate({
        "left" : "0"
      });
      banner.posicion = banner.posicion - 1;
    }else {
      banner.padre.children().not(".active").css({
        "left" : "-100%"
      });
      $("#banner .active").animate({
        "left": "100%"
      });
      $("#banner .active").removeClass("active");
      banner.padre.children().last().addClass("active").animate({
        "left" : "0"
      });
      banner.posicion= banner.numSlides;
    }    
  });  
  });







console.log(validator);