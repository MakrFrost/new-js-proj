const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  freemode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
});
swiper.autoplay.start();

// !

// // ! bayan
// const info = document.querySelector(".footer-info__title");
// const infoList = document.querySelector(".footer-info__list");
// const arrowInfo = document.querySelector(".footer-svg__info");
// const contacts = document.querySelector(".footer-contacts__title");
// const contactsList = document.querySelector(".footer-contacts__list");
// const arrowContacts = document.querySelector(".footer-svg__contacts");

// window.addEventListener("resize", onPageResize);
// info.addEventListener("click", onSectionClick);
// contacts.addEventListener("click", onSectionClick);

// const width = window.innerWidth;

// if (width > 759 || width === 759) {
//   removeHidenEl();
// }
// if (width < 759 || width === 759) {
//   addHidenEl();
// }

// function onPageResize(el) {
//   let windowWidth = el.currentTarget.innerWidth;
//   if (windowWidth > 759 || windowWidth === 759) {
//     removeHidenEl();
//   } else if (windowWidth < 759) {
//     addHidenEl();
//   }
// }
// function onSectionClick(el) {
//   let windowWidth = el.currentTarget.innerWidth;
//   const clickEl = el.currentTarget;
//   const hideEl = clickEl.classList.contains("hide");

//   if (windowWidth > 759) {
//     info.classList.remove("hide");
//     contacts.classList.remove("hide");
//     infoList.classList.remove("footer-info__list-hide");
//     contactsList.classList.remove("footer-contacts__list-hide");
//     info.removeEventListener("click", onSectionClick);
//     contacts.removeEventListener("click", onSectionClick);
//     return;
//   }

//   if (hideEl === false) {
//     clickEl.classList.add("hide");
//     clickEl.style.marginBottom = "0px";
//     if (clickEl.classList.contains("footer-info__title")) {
//       infoList.classList.add("footer-info__list-hide");
//       arrowInfo.style.transform = "rotate(0deg)";
//     } else {
//       contactsList.classList.add("footer-contacts__list-hide");
//       arrowContacts.style.transform = "rotate(0deg)";
//     }
//   } else {
//     clickEl.classList.remove("hide");
//     clickEl.style.marginBottom = "18px";
//     if (clickEl.classList.contains("footer-info__title")) {
//       infoList.classList.remove("footer-info__list-hide");
//       arrowInfo.style.transform = "rotate(180deg)";
//     } else {
//       contactsList.classList.remove("footer-contacts__list-hide");
//       arrowContacts.style.transform = "rotate(180deg)";
//     }
//   }
// }
// function removeHidenEl() {
//   info.classList.remove("hide");
//   contacts.classList.remove("hide");
//   infoList.classList.remove("footer-info__list-hide");
//   contactsList.classList.remove("footer-contacts__list-hide");
//   info.removeEventListener("click", onSectionClick);
//   contacts.removeEventListener("click", onSectionClick);
//   return;
// }
// function addHidenEl() {
//   contacts.classList.add("hide");
//   info.classList.add("hide");
//   infoList.classList.add("footer-info__list-hide");
//   contactsList.classList.add("footer-contacts__list-hide");
//   info.addEventListener("click", onSectionClick);
//   contacts.addEventListener("click", onSectionClick);
//   return;
// }

// ! slider

// let slideIndex = 0;
// let timer;
// let slides = document.getElementsByClassName("slides");
// let dots = document.getElementsByClassName("dot");
// function plusSlides(n) {
//   showSlides((slideIndex += n));
//   clearTimeout(timer);
//   timer = setTimeout(carouselSlide, 7000);
// }
// function currentSlide(n) {
//   showSlides((slideIndex = n));
//   clearTimeout(timer);
//   timer = setTimeout(carouselSlide, 7000);
// }
// function showSlides(n) {
//   let i;
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.animation = "1s nextSlide";
//     slides[i].classList.remove("s-add");
//     slides[i].classList.add("s-remove");
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.animation = "1s prevSlide";
//   slides[slideIndex - 1].classList.remove("s-remove");
//   slides[slideIndex - 1].classList.add("s-add");

//   dots[slideIndex - 1].className += " active";
// }
// function carouselSlide() {
//   let i;
//   for (i = 0; i < slides.length; i++) {
//     slides[i].classList.remove("s-add");
//     slides[i].classList.add("s-remove");
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].classList.remove("s-remove");
//   slides[slideIndex - 1].classList.add("s-add");

//   dots[slideIndex - 1].className += " active";
//   timer = setTimeout(carouselSlide, 7000);
// }
// carouselSlide();
// showSlides(slideIndex);

// !

let slideIndex = 0;
// let timer;
// let slides = document.getElementsByClassName("slides");
// let dots = document.getElementsByClassName("dot");
// function plusSlides(n) {
//   showSlides((slideIndex += n));
//   clearTimeout(timer);
//   timer = setTimeout(carouselSlide, 7000);
// }
// function currentSlide(n) {
//   showSlides((slideIndex = n));
//   clearTimeout(timer);
//   timer = setTimeout(carouselSlide, 7000);
// }
// function showSlides(n) {
//   let i;
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
// }
// function carouselSlide() {
//   let i;
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
//   timer = setTimeout(carouselSlide, 7000);
// }
// carouselSlide();
// showSlides(slideIndex);
