

//menue
const menuToggle = document.querySelector('#menu-toggle');
const navLinks = document.querySelector('#nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});


//slider
  const slider = document.querySelector(".slider");
  const dots = document.querySelectorAll(".dot");
  const totalSlides = dots.length;
  let currentIndex = 0;
  let autoplayInterval;

  function updateSlider(index) {
    const slideWidth = slider.querySelector(".testimonial_card").offsetWidth;
    slider.style.transform = `translateX(-${index * slideWidth}px)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");

    currentIndex = index;
  }

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      clearInterval(autoplayInterval);
      const index = parseInt(dot.getAttribute("data-index"));
      updateSlider(index);
      startAutoplay();
    });
  });

  function startAutoplay() {
    autoplayInterval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % totalSlides;
      updateSlider(nextIndex);
    }, 3000);
  }

  window.addEventListener("load", () => {
    updateSlider(0);
    startAutoplay();
  });


//Faq

let accordions = document.querySelectorAll(".accordion");

accordions.forEach((each) => {
  each.addEventListener("click", () => {
    each.nextElementSibling.classList.toggle("show")
  });
});
