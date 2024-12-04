let lastScrollY = window.scrollY; // Initialize scroll position
const imageElement = document.getElementById('scroll-image');

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  // Change image based on scroll direction
  if (currentScrollY > lastScrollY) {
    imageElement.src = 'Images/hip-right.png'; // Change to right image on scroll down
  } else if (currentScrollY < lastScrollY) {
    imageElement.src = 'Images/hip-left.png'; // Change to left image on scroll up
  }

  // Update scroll position
  lastScrollY = currentScrollY;
});
