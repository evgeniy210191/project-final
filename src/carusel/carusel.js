export const buttons = document.querySelectorAll('.slid-link');
const canvas = document.querySelector('.review');
const conteinerElements = document.querySelector('.reviews-container');

export const carusel = {
  position: 0,
  step: canvas.getBoundingClientRect().width + 30,
  scrollSlide(evt) {
    evt.preventDefault();
    if (evt.target.dataset.atribut === 'step') {
      const clickedButton = Object.values(buttons);
      position = Math.abs(clickedButton.indexOf(evt.target) * carusel.step);
      canvas.querySelector('.active').classList.remove('active');
      evt.target.className = 'active';
      // moving = setTimeout(movingElement, 20);
      conteinerElements.style.right = `${position}px`;
    }
  },
};
function movingElement() {}

return new Promise(res => {
  if (carusel.position === position) {
    clearInterval(moving);
  } else {
    res(carusel.position++);
    conteinerElements.style.right = `${carusel.position}px`;
  }
});
