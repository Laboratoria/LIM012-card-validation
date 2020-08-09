import validator from './validator.js';

const page1 = document.querySelector('#page1');
const page2 = document.querySelector('#page2');
const page3 = document.querySelector('#page3');
const form = document.querySelector('#login-form');
const nameInput = form.querySelector('#name-input');
const emailInput = form.querySelector('#email-input');
const foneInput = form.querySelector('#fone-input');
const dniInput = form.querySelector('#dni-input');
const numCard = document.querySelector('.numCard');
const textResult = document.querySelector('.text-result');
const twoButtons = document.querySelector('.two-buttons');
const leftButton = twoButtons.querySelector('.fa-arrow-circle-left');
const rightButton = twoButtons.querySelector('.fa-arrow-circle-right');
page2.classList.add('hide');
page3.classList.add('hide');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  page1.classList.add('hide');
  page2.classList.remove('hide');
});

leftButton.addEventListener('click', () => {
  page1.classList.remove('hide');
  page2.classList.add('hide');
});

const modal = (name, email, phone, dni, card) => {
  const message = document.createElement('div');
  message.setAttribute('class', 'content-modal');
  const information = `
    <div class='internal-content'>
      <i class="fas fa-times" id="exit"></i>
      <img src="./imagenes/confirmed.jpg">
      <div class= 'description'>
        <p class="state">TARJETA VÁLIDA</p>
        <div class='main-information'>
          <p>${card}</p>
          <p><span>Nombre:</span>${name}</p>
          <p><span>Email:</span>${email}</p>
          <p><span>Teléfono:</span>${phone}</p>
          <p><span>DNI:</span>${dni}</p>
          <p>Confirme su información</p>
        </div>
        <a href="https://www.apple.com/apple-music/" class="open-music">ACEPTAR</a>
      </div>
    </div>
  `;
  message.innerHTML = information;
  return message;
};

rightButton.addEventListener('click', () => {
  const numberCard = numCard.value;
  const regNum = /^([0-9])*$/;
  const cardMaskify = validator.maskify(numberCard)

  if (!regNum.test(numberCard)) {
    textResult.textContent = '*No está permitido ingresar letras';
  } else if (validator.isValid(numberCard)) {
    page3.innerHTML='';
    page3.classList.remove('hide');
    page3.appendChild(modal(nameInput.value, emailInput.value, foneInput.value, dniInput.value, cardMaskify))
    page3.querySelector('#exit').addEventListener('click', () => {
      page3.classList.add('hide');
    })
    textResult.textContent = '';
  } else {
    textResult.textContent = '*El número de tarjeta ingresada es inválida';
  }
});


// console.log(validator);
// 4557880573586785
