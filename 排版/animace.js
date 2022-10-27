var bannerArr = [
  {
    src: "../imgs/德凯奥特曼.png",
    title: "剧情质量太硬啦，和我家的煎饼一样硬"
  },
  {
    src: "../imgs/街角魔族2.png",
    title: "想成为魔法少女是很正常的事吧"
  },
  {
    src: "../imgs/百妖谱.png",
    title: "妖生百态",
  }
]

var popular_reads = [
  "../imgs/德凯奥特曼.png",
  "../imgs/街角魔族2.png",
  "../imgs/DAOKO.jpg",
  "../imgs/紫罗兰花园.jpg",
  "../imgs/fragtime.jpg",
  "../imgs/悠久之翼.jpg",
  "../imgs/魔法骑士.jpg",
  "../imgs/天气之子.jpg",
  "../imgs/国家队.jpg",
  "../imgs/EVA.jpg",
  "../imgs/fateHF.jpg",
]

$(".menuList label div").click(function () {
  // console.log($(this).hasClass("night"));
  if ($("body").hasClass("night")) {
    $("body").removeClass("night")
    
  } else {
    $("body").addClass("night")
  }
});

$.each(bannerArr, function (index) {
  if (index == 0) {
    $(".flexet").append('<div class="col-xs-12 col-md-6"><div class= "slider"><div class="slider-mask"></div><img src="' + bannerArr[bannerArr.length - 1].src + '" alt=""><div class="slider-info"><h4>' + bannerArr[bannerArr.length - 1].title + '</h4><a href="#">前往观看</a></div></div></div>');
  }
  $(".flexet").append('<div class="col-xs-12 col-md-6"><div class= "slider"><div class="slider-mask"></div><img src="' + bannerArr[index].src + '" alt=""><div class="slider-info"><h4>' + bannerArr[index].title + '</h4><a href="#">前往观看</a></div></div></div>');
  if (index == bannerArr.length - 1) {
    $(".flexet").append('<div class="col-xs-12 col-md-6"><div class= "slider"><div class="slider-mask"></div><img src="' + bannerArr[0].src + '" alt=""><div class="slider-info"><h4>' + bannerArr[0].title + '</h4><a href="#">前往观看</a></div></div></div>');
  }
})

$.each(popular_reads, function (index) {
  $(".main-item-right").append('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"><div class="card"><div class="col-xs-4 col-sm-4 col-md-4 col-lg-4"><img src="' + popular_reads[index] + '" alt=""></div><div class="col-xs-8 col-sm-8 col-md-8 col-lg-8"><h6>诶嘿嘿嘿</h6><div class="inline"><i class="fa fa-commenting-o"></i>一百年 前</div></div></div></div>');
})

var index = 1;

$(".just-for-you .title #title-left").click(_.throttle(function () {
  index--;
  if (innerWidth > 991) {
    if (index < 1) {
      setTimeout(function () {
        index = $(".flexet>div").length - 2;
        $(".just-for-you .flexet").css({
          transform: "translate(" + -50 * index + "%)",
          transition: "none",
        })
      }, 500)
    }
    $(".just-for-you .flexet").css({
      transform: "translate(" + -50 * index + "%)",
      transition: "all .5s",
    })
  } else {
    if (index < 1) {
      setTimeout(function () {
        index = $(".flexet>div").length - 2;
        $(".just-for-you .flexet").css({
          transform: "translate(" + -100 * index + "%)",
          transition: "none",
        })
      }, 500)
    }
    $(".just-for-you .flexet").css({
      transition: "all .5s",
      transform: "translate(" + -100 * index + "%)",
    })
  }
}, 500));

$(".just-for-you .title #title-right").click(_.throttle(function () {
  index++;
  if (innerWidth > 991) {
    if (index > $(".flexet>div").length - 3) {
      setTimeout(function () {
        index = 0;
        $(".just-for-you .flexet").css({
          transform: "translate(" + -50 * index + "%)",
          transition: "none",
        })
      }, 500)
    }
    $(".just-for-you .flexet").css({
      transform: "translate(" + -50 * index + "%)",
      transition: "all .5s",
    })
  } else {
    if (index >= $(".flexet>div").length - 1) {
      setTimeout(function () {
        index = 1;
        $(".just-for-you .flexet").css({
          transform: "translate(" + -100 * index + "%)",
          transition: "none",
        })
      }, 500)
    }
    $(".just-for-you .flexet").css({
      transition: "all .5s",
      transform: "translate(" + -100 * index + "%)",
    })
  }
}, 500))