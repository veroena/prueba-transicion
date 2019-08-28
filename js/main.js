'use strict';

const wrapperAll = document.querySelector('.wrapper-all');
const btnFormacion = document.querySelector('.btn-formacion');
const btnSocial = document.querySelector('.btn-social');

const bye = () => {
  wrapperAll.classList.add('transition');
  wrapperAll.classList.remove('transition-back');
}
const hi = () => {
  wrapperAll.classList.add('transition-back');
  wrapperAll.classList.remove('transition');
}

btnFormacion.addEventListener('click', bye);
btnSocial.addEventListener('click', hi);


// const body = document.querySelector('#body');
// const btnFormacion = document.querySelector('.btn-formacion');
// const btnSocial = document.querySelector('.btn-social');
// const wrapperFormacion = document.querySelector('.wrapper-formacion');
// const wrapperSocial = document.querySelector('.wrapper-social');

// const transition = () => {
//   wrapperFormacion.classList.add('transition');
// }

// const changeClass = () => {
//   wrapperFormacion.classList.add('hidden');
// }

// const movement = () => {
//   transition();
//   setTimeout(changeClass, 2500);
// }

// btnFormacion.addEventListener('click', movement);
// btnSocial.addEventListener('click', changeClass);


