'use strict';
import { carusel } from './carusel/carusel';

const [btn, menu, body, buttons] = [
  '.modal-menu',
  '.mobile-menu',
  'body',
  '.slid',
].map(item => document.querySelector(item));
const list = menu.querySelector('ul');
buttons.addEventListener('click', carusel.scrollSlide);

function addClassBtn() {
  btn.classList.toggle('is-open');
  menu.classList.toggle('is-open');
  body.classList.toggle('not-scroll');
}

function removeClassBtn(e) {
  if (e.target.localName === 'a') {
    btn.classList.remove('is-open');
    menu.classList.remove('is-open');
    body.classList.remove('not-scroll');
  }
}

function toggleModal(event) {
  if (event.target.localName === 'button') {
    if (event.target.dataset.atribut === 'close') {
      document.querySelector('.backdrop.is-open').classList.remove('is-open');
      body.classList.remove('not-scroll');
    }
    if (
      event.target.hasAttribute('data-atribut') &&
      event.target.dataset.atribut !== 'close'
    ) {
      document
        .querySelector(`.${event.target.dataset.atribut}`)
        .classList.add('is-open');
      body.classList.add('not-scroll');
    }
  }
}
body.addEventListener('click', toggleModal);
btn.addEventListener('click', addClassBtn);
list.addEventListener('click', removeClassBtn);
