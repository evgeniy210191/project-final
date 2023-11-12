'use strict';
import { carusel } from './carusel/carusel';

const [btn, menu, body, buttons, wrapper] = [
  '.modal-menu',
  '.mobile-menu',
  'body',
  '.slid',
  '.wrapper',
].map(item => document.querySelector(item));
const list = menu.querySelector('ul');

const lockPaddingValue = window.innerWidth - wrapper.offsetWidth;
buttons.addEventListener('click', carusel.scrollSlide);

function openMenu() {
  btn.classList.toggle('is-open');
  menu.classList.toggle('is-open');
  body.classList.toggle('not-scroll');
  wrapper.style.paddingRight = lockPaddingValue;
}

function closeMenu(event) {
  if (event.target.localName === 'a') {
    btn.classList.remove('is-open');
    menu.classList.remove('is-open');
    body.classList.remove('not-scroll');
    wrapper.style.paddingRight = 0;
  }
}

function toggleModal(event) {
  if (event.target.localName === 'button') {
    if (event.target.dataset.atribut === 'close') {
      document.querySelector('.backdrop.is-open').classList.remove('is-open');
      setTimeout(() => {
        body.classList.remove('not-scroll');
        wrapper.style.paddingRight = 0 + 'px';
      }, 500);
    }
    if (
      event.target.hasAttribute('data-atribut') &&
      event.target.dataset.atribut !== 'close'
    ) {
      document
        .querySelector(`.${event.target.dataset.atribut}`)
        .classList.add('is-open');
      body.classList.add('not-scroll');
      wrapper.style.paddingRight = lockPaddingValue + 'px';
    }
  }
}
body.addEventListener('click', toggleModal);
btn.addEventListener('click', openMenu);
list.addEventListener('click', closeMenu);
