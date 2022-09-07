$("header .open").click(function () {
  $(".wrap").addClass("active");
  $(".wrap-menu").addClass("active");
})
$(".wrap").click(function(){
  $(".wrap").removeClass("active");
  $(".wrap-menu").removeClass("active");
})