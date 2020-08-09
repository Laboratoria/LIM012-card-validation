import validator from './validator.js';

const page1 = document.querySelector('#page1');
const page2 = document.querySelector('#page2');
const page3 = document.querySelector('#page3');
const form = document.querySelector('#login-form');
const nameInput = form.querySelector('#name-input');
const emailInput = form.querySelector('#email-input');
const foneInput = form.querySelector('#fone-input');
const dniInput = form.querySelector('#dni-input');
// const button = form.getElementsByTagName('button')[0];
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

rightButton.addEventListener('click', () => {
  const numberCard = numCard.value;
  const regNum = /^([0-9])*$/;

  if (!regNum.test(numberCard)) {
    textResult.textContent = 'No está permitido ingresar letras'
  }

  if (validator.isValid(numberCard)) {
    console.log('tu tarjeta es válida')
    textResult.textContent = '';
  }
});
// console.log(validator);
// 4557880573586785
