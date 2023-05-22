const btn = document.querySelector('.modal-menu');
const menu = document.querySelector('.mobile-menu');
const list = menu.querySelector('ul');
const body = document.querySelector('body');
const root = document.querySelector('.root');

function addClassBtn() {
  btn.classList.toggle('is-open');
  menu.classList.toggle('is-open');
  body.classList.toggle('is-scroll');
}

function removeClassBtn(e) {
  if (e.target.localName === 'a') {
    btn.classList.remove('is-open');
    menu.classList.remove('is-open');
    body.classList.remove('is-scroll');
  }
}

function closeModal(event) {
  console.log(event.target);
  if (event.target.localName === 'button') {
    if (event.target.hasAttribute('data-atribut')) {
      if (event.target.dataset.atribut === 'close') {
        document.querySelector('.backdrop.is-open').classList.remove('is-open');
        body.classList.remove('is-scroll');
      }
    }
  }
}

function openModal(event) {
  if (event.target.localName === 'button') {
    if (event.target.hasAttribute('data-atribut')) {
      document
        .querySelector(`.backdrop.${event.target.dataset.atribut}`)
        .classList.add('is-open');
      body.classList.add('is-scroll');
      backdrop = document.querySelector('.backdrop.is-open');
    }
  }
}
body.addEventListener('click', openModal);
root.addEventListener('click', closeModal);
btn.addEventListener('click', addClassBtn);
list.addEventListener('click', removeClassBtn);
