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
    src: "../imgs/紫罗兰花园.jpg",
    title: "追寻爱的路途"
  }
]

$(".flexet").append('<div class="col-xs-12 col-md-6"><div class= "slider"><div class="slider-mask"></div><img src="' + bannerArr[0].src + '" alt=""><div class="slider-info"><h4>' + bannerArr[0].title + '</h4><a href="#">前往观看</a></div></div></div>');

var index = 0;

$(".just-for-you .title #title-left").click(function () {
  index--;
  if (innerWidth > 991) {
    $(".just-for-you .flexet").css({
      transform: "translate(" + -50 * index + "%)",
    })
  } else {
    $(".just-for-you .flexet").css({
      transform: "translate(" + -100 * index + "%)",
    })
  }
});

$(".just-for-you .title #title-right").click(function () {
  index++;
  if (innerWidth > 991) {
    $(".just-for-you .flexet").css({
      transform: "translate(" + -50 * index + "%)",
    })
  } else {
    $(".just-for-you .flexet").css({
      transform: "translate(" + -100 * index + "%)",
    })
  }
})