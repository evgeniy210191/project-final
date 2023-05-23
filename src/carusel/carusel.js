export const buttons = document.querySelectorAll('.slid-link');
const canvas = document.querySelector('.review');
const conteinerElements = document.querySelector('.reviews-container');

export const carusel = {
  step: canvas.getBoundingClientRect().width + 15,
  scrollSlide(evt) {
    evt.preventDefault();
    if (evt.target.dataset.atribut === 'step') {
      const clickedButton = Object.values(buttons);
      carusel.position = Math.abs(
        clickedButton.indexOf(evt.target) * carusel.step
      );
      canvas.querySelector('.active').classList.remove('active');
      conteinerElements.style.right = `${carusel.position}px`;
      evt.target.className = 'active';
    }
  },
};
