var svgCircle = document.getElementById("svgCircle");
var step1 = document.getElementById("step1");
var step2 = document.getElementById("step2");
var step3 = document.getElementById("step3");
var step4 = document.getElementById("step4");
var step5 = document.getElementById("step5");
var step6 = document.getElementById("step6");
var covid19 = document.getElementsByClassName("covid19")[0];
var avoids = document.getElementById("avoids");

covid19.style.backgroundImage = "url(./img/webdesign/wearmask.svg)";

step1.addEventListener("mouseover", () => {
  svgCircle.style.strokeDashoffset = "1465";
  covid19.style.backgroundImage = "url(./img/webdesign/washinghands.svg)";
  avoids.style.top = "-400px";
  step1.style.background = "#ffbd00";
});
step2.addEventListener("mouseover", () => {
  svgCircle.style.strokeDashoffset = "1172";
  covid19.style.backgroundImage = "url(./img/webdesign/keepdistence.svg)";
  avoids.style.top = "-900px";
  step2.style.background = "#ffbd00";
});
step3.addEventListener("mouseover", () => {
  svgCircle.style.strokeDashoffset = "879";
  covid19.style.backgroundImage = "url(./img/webdesign/Donttouch.svg)";
  avoids.style.top = "-1400px";
  step3.style.background = "#ffbd00";
});
step4.addEventListener("mouseover", () => {
  svgCircle.style.strokeDashoffset = "586";
  covid19.style.backgroundImage = "url(./img/webdesign/cleanitem.svg)";
  avoids.style.top = "-1900px";
  step4.style.background = "#ffbd00";
});
step5.addEventListener("mouseover", () => {
  svgCircle.style.strokeDashoffset = "293";
  covid19.style.backgroundImage = "url(./img/webdesign/stayhome.svg)";
  avoids.style.top = "-2400px";
  step5.style.background = "#ffbd00";
});
step6.addEventListener("mouseover", () => {
  svgCircle.style.strokeDashoffset = "0";
  covid19.style.backgroundImage = "url(./img/webdesign/wearmask.svg)";
  avoids.style.top = "110px";
  step6.style.background = "#ffbd00";
});

//EYESBALL MOVING

document.querySelector("body").addEventListener("mousemove", eyeball);
function eyeball() {
  var eye = document.querySelectorAll(".eye");
  eye.forEach(function (eye) {
    let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
    let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rot = radian * (180 / Math.PI) * -1 + 270;
    eye.style.transform = "rotate(" + rot + "deg)";
  });
}
