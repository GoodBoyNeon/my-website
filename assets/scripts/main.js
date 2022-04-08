const stars = document.getElementById("stars");
const moon = document.getElementById("moon");
const mtBehind = document.getElementById("mt-behind");
const text = document.getElementById("text");
const btn = document.getElementById("btn");
const mtFront = document.getElementById("mt-front");
const main = document.getElementsByClassName("main");

window.addEventListener("scroll", function () {
  const value = window.scrollY;

  stars.style.left = value * 0.25 + "px";
  moon.style.top = value * 1.05 + "px";
  mtBehind.style.top = value * 0.5 + "px";
  mtFront.style.top = value * 0 + "px";
  text.style.marginRight = value * 4 + "px";
  text.style.marginTop = value * 1.5 + "px";
  btn.style.marginTop = value * 1.5 + "px";
  main.style.top = value * 0.5 + "px";
});
