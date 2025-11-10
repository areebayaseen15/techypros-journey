const carousel = document.getElementById('carousel');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

rightArrow.addEventListener('click', () => {
  carousel.scrollBy({
    left: 500,
    behavior: 'smooth'
  });
});

leftArrow.addEventListener('click', () => {
  carousel.scrollBy({
    left: -500,
    behavior: 'smooth'
  });
});
