document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelector(".slides");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
  
    let currentIndex = 0;
  
    // Move slider to the correct position
    function updateSlider() {
      const slideWidth = slides.querySelector("article").clientWidth;
      slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
  
    // Previous button click
    prevButton.addEventListener("click", () => {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.children.length - 1;
      updateSlider();
    });
  
    // Next button click
    nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex < slides.children.length - 1) ? currentIndex + 1 : 0;
      updateSlider();
    });
  
    // Update slider on window resize to adapt to new widths
    window.addEventListener("resize", updateSlider);
  });
  
  