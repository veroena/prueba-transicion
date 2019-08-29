'use strict';

// const wrapperAll = document.querySelector('.wrapper-all');
// const btnFormacion = document.querySelector('.btn-formacion');
// const btnSocial = document.querySelector('.btn-social');

// const bye = () => {
//   wrapperAll.classList.add('transition');
//   wrapperAll.classList.remove('transition-back');
// }
// const hi = () => {
//   wrapperAll.classList.add('transition-back');
//   wrapperAll.classList.remove('transition');
// }

// btnFormacion.addEventListener('click', bye);
// btnSocial.addEventListener('click', hi);


const bannerTopFormacion = document.querySelector('.banner-top-formacion');
const portletAnidadoFormacion = document.querySelector('.portlet-anidado-formacion');
const bannerBottomFormacion = document.querySelector('.banner-bottom-formacion');
const bannerTopSocial = document.querySelector('.banner-top-social');
const portletAnidadoSocial = document.querySelector('.portlet-anidado-social');
const bannerBottomSocial = document.querySelector('.banner-bottom-social');

const btnFormacion = document.querySelector('.btn-formacion');
const btnSocial = document.querySelector('.btn-social');

const bye = () => {
  bannerTopFormacion.classList.add('transition');
  bannerTopFormacion.classList.remove('transition2');
  portletAnidadoFormacion.classList.add('transition');
  portletAnidadoFormacion.classList.remove('transition2');
  bannerBottomFormacion.classList.add('transition');
  bannerBottomFormacion.classList.remove('transition2');

  bannerTopSocial.classList.add('transition-back');
  bannerTopSocial.classList.remove('transition2-back');
  portletAnidadoSocial.classList.add('transition-back');
  portletAnidadoSocial.classList.remove('transition2-back');
  bannerBottomSocial.classList.add('transition-back');
  bannerBottomSocial.classList.remove('transition2-back');
}
const hi = () => {
  bannerTopFormacion.classList.add('transition2');
  bannerTopFormacion.classList.remove('transition2-back');
  portletAnidadoFormacion.classList.add('transition2');
  portletAnidadoFormacion.classList.remove('transition2-back');
  bannerBottomFormacion.classList.add('transition2');
  bannerBottomFormacion.classList.remove('transition2-back');

  bannerTopSocial.classList.add('transition2-back');
  bannerTopSocial.classList.remove('transition2');
  portletAnidadoSocial.classList.add('transition2-back');
  portletAnidadoSocial.classList.remove('transition2');
  bannerBottomSocial.classList.add('transition2-back');
  bannerBottomSocial.classList.remove('transition2');
}

btnFormacion.addEventListener('click', bye);
btnSocial.addEventListener('click', hi);