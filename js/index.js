$(document).ready(function () {
  $(".img").click(function () {
    $(this).parent().toggleClass("customClass");
    $(this).parent().addClass("display-grid");
  });
});
