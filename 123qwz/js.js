const images = ["img/image1.png", "img/image2.png"];
let currentImageIndex = 0;

function changeImage(step) {
  currentImageIndex += step;
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  } else if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  document.getElementById("main-image").src = images[currentImageIndex];
}

  
