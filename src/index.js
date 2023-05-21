const btn = document.querySelector('.modal-menu');
const menu = document.querySelector('.mobile-menu');
const list = menu.querySelector('ul');
const body = document.querySelector('body');

function addClassBtn() {
  btn.classList.toggle('is-open');
  menu.classList.toggle('is-open');
}
function removeClassBtn(e) {
  if (e.target.localName === 'a') {
    btn.classList.remove('is-open');
    menu.classList.remove('is-open');
  }
}

function openModal(event) {
  if (event.target.localName === 'button') {
    if (event.target.hasAttribute('data-atribut')) {
      if (event.target.dataset.atribut === 'close') {
        return document
          .querySelector(`.backdrop.is-open`)
          .classList.remove('is-open');
      }

      document
        .querySelector(`.backdrop.${event.target.dataset.atribut}`)
        .classList.add('is-open');
    }
  }
}

body.addEventListener('click', openModal);

btn.addEventListener('click', addClassBtn);
list.addEventListener('click', removeClassBtn);
