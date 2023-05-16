const btn = document.querySelector('.modal-menu');
const menu = document.querySelector('.mobile-menu');

function addClassBtn() {
  btn.classList.toggle('is-open');
  menu.classList.toggle('is-open');
}

btn.addEventListener('click', addClassBtn);
