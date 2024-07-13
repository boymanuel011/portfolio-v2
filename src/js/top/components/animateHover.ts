/**
 * Animation on hover
 */
const animateOnHover = () => {
  const LetterAnimate = document.querySelectorAll('.portfolio__mv-title-animate');

  if (LetterAnimate) {
    for (let i = 0; i <= LetterAnimate.length; i++) {
      LetterAnimate[i].addEventListener('animationend', () => {
        LetterAnimate[i].classList.remove('on-hover');
      });
  
      LetterAnimate[i].addEventListener('mouseover', () => {
        LetterAnimate[i].classList.add('on-hover');
      });
    }
  }
};

export default animateOnHover;