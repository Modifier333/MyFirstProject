var slides = document.querySelectorAll('.slide');
var currentSlide = 0;

function showSlide(index) {
  slides[currentSlide].style.opacity = 0;
  slides[index].style.opacity = 1;
  currentSlide = index;
}

function nextSlide() {
  var nextIndex = currentSlide + 1;
  if (nextIndex >= slides.length) {
    nextIndex = 0;
  }
  showSlide(nextIndex);
}

// Change slides automatically
setInterval(nextSlide, 3000); // Adjust the timing (in milliseconds) as needed

// Show the initial slide
showSlide(0);
