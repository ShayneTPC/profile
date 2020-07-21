//選項顯色
$(function () {
  $(".theme .list").click(function () {
    $(this).siblings("div").removeClass("active");
    $(this).addClass("active");
  });
});
//畫面切換顯示
$("#co19").click(function () {
  $("#covid19box").removeClass("disappear");
  $("#thaibox").addClass("disappear");
  $("#app119box").addClass("disappear");
});
$("#thai").click(function () {
  $("#covid19box").addClass("disappear");
  $("#thaibox").removeClass("disappear");
  $("#app119box").addClass("disappear");
});
$("#app119").click(function () {
  $("#covid19box").addClass("disappear");
  $("#thaibox").addClass("disappear");
  $("#app119box").removeClass("disappear");
});
