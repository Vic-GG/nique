//scroll lateral slider
const scrollContainer = document.querySelector("main");
scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
});

//Lenis
 document.addEventListener('DOMContentLoaded', () => {
  const lenis = new Lenis({
    duration: 1.2, 
    easing: (t) => t, 
    smooth: true, 
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
});