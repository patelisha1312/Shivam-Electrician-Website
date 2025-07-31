 let currentIndex = 0;
  const slides = document.querySelectorAll('.banner-slide');
  const dots = document.querySelectorAll('.dot');

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      dots[i].classList.remove('active');
    });
    slides[index].classList.add('active');
    dots[index].classList.add('active');
  }

  function changeSlide(n) {
    currentIndex = (currentIndex + n + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  function currentSlide(n) {
    currentIndex = n;
    showSlide(currentIndex);
  }

  // Auto-slide
  setInterval(() => changeSlide(1), 7000);