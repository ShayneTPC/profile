$(document).ready(function () {
  //小屋選單列
  $(function () {
    $(".Wallpaper li img").click(function () {
      var N = $(this).attr("id").substr(2);
      $("#wall01").attr("src", "./img/interior/wallpaper" + N + ".png");
      $("#wall02").attr("src", "./img/interior/wallpaper" + N + ".png");
    });
  });
  $(function () {
    $(".WoodFloor li img").click(function () {
      var N = $(this).attr("id").substr(2);
      $("#flo").attr("src", "./img/interior/floor" + N + ".png");
    });
  });
  $(function () {
    $(".Carpet li img").click(function () {
      var N = $(this).attr("id").substr(2);
      $("#smCarpet").attr("src", "./img/interior/carpet" + N + ".png");
    });
  });
  $(function () {
    $(".Sofa li img").click(function () {
      var N = $(this).attr("id").substr(2);
      $("#smSofa").attr("src", "./img/interior/sofa" + N + ".png");
    });
  });
  $(function () {
    $(".Table li img").click(function () {
      var N = $(this).attr("id").substr(2);
      $("#smTable").attr("src", "./img/interior/table" + N + ".png");
    });
  });
  $(function () {
    $(".Re").click(function () {
      $("#wall01").attr("src", "./img/interior/wallpaper12.png");
      $("#wall02").attr("src", "./img/interior/wallpaper12.png");
      $("#flo").attr("src", "./img/interior/floor21.png");
      $("#smCarpet").attr("src", "./img/interior/carpet33.png");
      $("#smSofa").attr("src", "./img/interior/sofa42.png");
      $("#smTable").attr("src", "./img/interior/table51.png");
    });
  });

  //作品集照片點選
  var Con1 = document.getElementById("content01");
  var Con2 = document.getElementById("content02");
  var Con3 = document.getElementById("content03");
  var Con4 = document.getElementById("content04");
  var in1 = document.getElementById("in01");
  var in2 = document.getElementById("in02");
  var in3 = document.getElementById("in03");
  var in4 = document.getElementById("in04");
  var Clo1 = document.getElementById("clo-in01");
  var Clo2 = document.getElementById("clo-in02");
  var Clo3 = document.getElementById("clo-in03");
  var Clo4 = document.getElementById("clo-in04");
  Con1.onclick = function (e) {
    //點擊出现
    in1.style.display = "block";
    e.stopPropagation(); //阻止冒泡
  };
  Con2.onclick = function (e) {
    //點擊出现
    in2.style.display = "block";
    e.stopPropagation(); //阻止冒泡
  };
  Con3.onclick = function (e) {
    //點擊出现
    in3.style.display = "block";
    e.stopPropagation(); //阻止冒泡
  };
  Con4.onclick = function (e) {
    //點擊出现
    in4.style.display = "block";
    e.stopPropagation(); //阻止冒泡
  };
  Clo1.onclick = function () {
    in1.style.display = "none";
  };
  Clo2.onclick = function () {
    in2.style.display = "none";
  };
  Clo3.onclick = function () {
    in3.style.display = "none";
  };
  Clo4.onclick = function () {
    in4.style.display = "none";
  };
});
$(function () {
  $(".innerbox img").click(function () {
    var colName = $(this).attr("id").substr(0, 2);
    var N = $(this).attr("id").substr(0, 4);
    $("#" + colName + "BIG").attr(
      "src",
      "./img/interior/collections" + colName + "/" + N + ".jpg"
    );
  });
});
