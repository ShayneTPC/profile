//inf more btn
var Ope = document.getElementsByClassName("open-inf")[0];
var oDiv = document.getElementsByClassName("inf")[0];
Ope.onclick = function (e) {
  //點擊出现
  oDiv.style.display = "block";
  e.stopPropagation(); //阻止冒泡
};
// 點擊空白消失
document.onclick = function (e) {
  oDiv.style.display = "none";
};

//點擊縮小關閉
var Clo = document.getElementsByClassName("close-inf")[0];
Clo.onclick = function () {
  oDiv.style.display = "none";
};

//languages audio
function play(sound) {
  var audio = document.getElementById("audio");
  audio.setAttribute("src", sound);
  audio.play();
}
//笑臉動畫
//chinese
var ch1 = document.getElementById("facech");
var ch2 = document.getElementById("facech");
ch1.onmousemove = function () {
  ch1.src = "./img/home/face-chinese2.svg";
};
ch2.onmouseout = function () {
  ch2.src = "./img/home/face-chinese1.svg";
};
//taiwanese
var ta1 = document.getElementById("faceta");
var ta2 = document.getElementById("faceta");
ta1.onmousemove = function () {
  ta1.src = "./img/home/face-taiwanese2.svg";
};
ta2.onmouseout = function () {
  ta2.src = "./img/home/face-taiwanese1.svg";
};
//english
var en1 = document.getElementById("faceen");
var en2 = document.getElementById("faceen");
en1.onmousemove = function () {
  en1.src = "./img/home/face-english2.svg";
};
en2.onmouseout = function () {
  en2.src = "./img/home/face-english1.svg";
};
//thai
var tha1 = document.getElementById("facetha");
var tha2 = document.getElementById("facetha");
tha1.onmousemove = function () {
  tha1.src = "./img/home/face-thai2.svg";
};
tha2.onmouseout = function () {
  tha2.src = "./img/home/face-thai1.svg";
};
//veitnamese
var ve1 = document.getElementById("faceve");
var ve2 = document.getElementById("faceve");
ve1.onmousemove = function () {
  ve1.src = "./img/home/face-veitnamese2.svg";
};
ve2.onmouseout = function () {
  ve2.src = "./img/home/face-veitnamese1.svg";
};
//japanese
var jp1 = document.getElementById("facejp");
var jp2 = document.getElementById("facejp");
jp1.onmousemove = function () {
  jp1.src = "./img/home/face-japanese2.svg";
};
jp2.onmouseout = function () {
  jp2.src = "./img/home/face-japanese1.svg";
};
