// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("active");
//     }
//   });
// });

// const revealTexts = document.querySelectorAll(".intro-text");
// revealTexts.forEach((text) => observer.observe(text));

document.addEventListener('DOMContentLoaded', function() {
  // Your code here
  console.log('Page content has loaded');
  showSlides()
  // This event is fired when the initial HTML document has been completely loaded and parsed,
  // without waiting for stylesheets, images, and subframes to finish loading.
});

let slideIndex = 0;
// showSlides();

// Next/previous controls
function slides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("slides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace("active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }

function showSlides() {
  let i;
  let arr = ["#021651", "#311f15", "#fff", "#000"];
  let slides = document.getElementsByClassName("slides");
  let slidesBg = document.getElementsByClassName("main-pr");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    // slidesBg.style.backgroundColor = arr[i];
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  // slidesBg.style.backgroundColor = arr[slideIndex-1];
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}
