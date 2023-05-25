export const buttons = document.querySelectorAll('.slid-link');
const canvas = document.querySelector('.review');
const conteinerElements = document.querySelector('.reviews-container');

export const carusel = {
  position: 0,
  step: canvas.getBoundingClientRect().width + 100,
  scrollSlide(evt) {
    // evt.preventDefault();
    if (evt.target.dataset.atribut === 'step') {
      const clickedButton = Object.values(buttons);
      const position = Math.abs(
        clickedButton.indexOf(evt.target) * carusel.step
      );
      canvas.querySelector('.active').classList.remove('active');
      evt.target.className += ' active';
      conteinerElements.style.left = `-${position}px`;
    }
  },
};
