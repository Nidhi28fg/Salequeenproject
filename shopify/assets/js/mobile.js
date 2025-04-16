document.addEventListener("DOMContentLoaded", function () {
    const sec1 = document.getElementById("sec_1");
  
    let scrollInterval = null; // Variable to store interval
    let scrollAmount = 1; // Pixels to scroll in each interval
  
    function startAutoScroll() {
      if (window.innerWidth <= 1150) {
        scrollInterval = setInterval(() => {
          sec1.scrollLeft += scrollAmount;
          if (sec1.scrollLeft + sec1.clientWidth >= sec1.scrollWidth || sec1.scrollLeft <= 0) {
            scrollAmount *= -1; // Reverse scroll direction
          }
        }, 20); // Adjust this value for speed
      }
    }
  
    function stopAutoScroll() {
      clearInterval(scrollInterval);
    }
  
    // Start scroll on load
    startAutoScroll();
  
    // Pause scrolling on hover
    sec1.addEventListener("mouseenter", stopAutoScroll);
    sec1.addEventListener("mouseleave", startAutoScroll);
  
    // Re-check on window resize
    window.addEventListener("resize", () => {
      stopAutoScroll();
      startAutoScroll();
    });
  });
  