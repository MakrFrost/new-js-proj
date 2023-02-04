let slideIndex = 0;
let timer;
let slides = document.getElementsByClassName("slides");
let dots = document.getElementsByClassName("dot");
function plusSlides(n) {
  showSlides((slideIndex += n));
  clearTimeout(timer);
  timer = setTimeout(carouselSlide, 7000);
}
function currentSlide(n) {
  showSlides((slideIndex = n));
  clearTimeout(timer);
  timer = setTimeout(carouselSlide, 7000);
}
function showSlides(n) {
  let i;
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
function carouselSlide() {
  let i;
  let slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  timer = setTimeout(carouselSlide, 7000);
}
carouselSlide();
showSlides(slideIndex);

// !

$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});
