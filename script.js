let lastScrollY = window.scrollY; // Initialize scroll position
const imageElement = document.getElementById('scroll-image');

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  // Check if we're scrolling down or up
  if (currentScrollY > lastScrollY) {
    // If we scroll down, show hip-right.png
    imageElement.src = 'Images/hip-right.png';
  } else if (currentScrollY < lastScrollY) {
    // If we scroll up, show hip-left.png
    imageElement.src = 'Images/hip-left.png';
  }

  // Update the last scroll position for next comparison
  lastScrollY = currentScrollY;
});

