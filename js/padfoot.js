// Add extra padding when the footer isn't on the bottom of the screen
window.addEventListener('load', adjustFooterPadding);
window.addEventListener('resize', adjustFooterPadding); // Adjust on resize too

function adjustFooterPadding() {
  const footer = document.querySelector('.foot');
  const footerRect = footer.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (footerRect.bottom < windowHeight) {
    // Footer is not at the bottom, add padding to the top
    footer.style.paddingTop = `${(windowHeight - footerRect.bottom) * 0.95}px`; // Adjust this value as needed
  } else {
    // Footer is at the bottom, remove any extra padding
    footer.style.paddingTop = '0';
  }
}
