//scroll lateral slider
const scrollContainer = document.querySelector("main");
scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
});