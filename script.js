const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
gsap.from("#page1 h1", {
  y: 100,
  opacity: 0,
  delay: 0.5,
  duration: 0.8,
  stagger: 0.2,
});
gsap.from("#page1 #video-container", {
  y: 150,
  opacity: 0,
  delay: 0.5,
  duration: 1.5,
  stagger: 0.2,
});
// let elem = document.getElementsByClassName("elem");
// elem.addEventListener("mouseover", function run() {
//   alert("mouse on meow");
// });
// let sel = document.getElementById("js");
// sel.addEventListener("mouseover", function run() {
//   alert("teri maa");
// });
