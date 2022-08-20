// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty("--vh", `${vh}px`);

let container = document.querySelector(".splash-container");
let logo = document.querySelector(".logo-p");
let logospan = document.querySelectorAll(".logo");

export default function Plain() {
  console.log("splash");
  //   logospan.forEach((span, i) => {
  //     setTimeout(() => {
  //       span.classList.add("active");
  //     }, (i + 1) * 300);
  //   }, 0);
  //   setTimeout(() => {
  //     logospan.forEach((span, i) => {
  //       setTimeout(() => {
  //         span.classList.remove("active");
  //         span.classList.add("fade");
  //       }, (i + 1) * 50);
  //     });
  //   }, 2000);
  //   setTimeout(() => {
  //     container.style.opacity = 0;
  //   }, 2300);

  logospan.classList.add("active");
}
