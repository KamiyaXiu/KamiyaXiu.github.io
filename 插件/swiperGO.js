function swiperGO(arr, title, width, height) {
  $("#swiper .list").css({
    left: -width,
  })

  $("#swiper").css({
    width: width,
    height: height,
  })

  $.each(arr, function (index, value) {
    if (index == 0) {
      $(".list").append('<li><a href=""><img src=' + arr[arr.length - 1] + ' alt=""></a></li>');
      $("#swiper .titles").append("<span>" + title[0] + "</span>");
    }

    $(".list").append('<li><a href=""><img src=' + value + ' alt=""></a></li>');
    if (index == arr.length - 1) {
      $(".list").append('<li><a href=""><img src=' + arr[0] + ' alt=""></a></li>');
    }

    $("#swiper .list li").css({
      width: width,
      height: height * 0.8,
    })

    $("#swiper .list li a img").css({
      width: width,
      height: height * 0.8,
    });
  })

  $.each(arr, function (index) {
    $(".dots").append("<i></i>");
    if (index == 1) {
      $(".dots i").removeClass("active").eq(0).addClass("active");
    }
  })

  var index = 1;
  var size = $(".list").children().length;

  function imgMove(indexImg) {

    var imgChange = -width * indexImg;
    $(".list").css({
      left: imgChange + "px",
      transition: "all .3s",
    })

    if (indexImg < size - 1) {
      $(".dots i").removeClass("active").eq(indexImg - 1).addClass("active");
    } else if (indexImg == size - 1) {
      $(".dots i").removeClass("active").eq(0).addClass("active");
    }

    if (indexImg >= size - 1) {
      index = 1;
      setTimeout(function () {
        $(".list").css({
          left: -width,
          transition: "none",
        })
      }, 300)
    }

    if (index <= 0) {
      index = (size - 2);
      setTimeout(function () {
        $(".list").css({
          left: -width * (size - 2),
          transition: "none",
        })
      }, 300)
    }
    $("#swiper .titles").html("");
    $("#swiper .titles").append("<span>" + title[index - 1] + "</span>");
  }

  $(".dots i").click(function () {
    $(this).prev().addClass("active").siblings().removeClass("active");
    imgMove($(this).index() + 1);
    index = $(this).index() + 1;

    $("#swiper .titles").html("");
    $("#swiper .titles").append("<span>" + title[index - 1] + "</span>");
  })

  $(".left").click(_.throttle(function () {
    imgMove(--index);
  }, 350))

  $(".right").click(_.throttle(function () {
    imgMove(++index);
  }, 350))

  var run = setInterval(function () {
    index++;
    imgMove(index);
  }, 2000);

  $("#swiper").hover(
    function () {
      clearInterval(run);
    },
    function () {
      run = setInterval(function () {
        index++;
        imgMove(index);
      }, 2000);
    });

}