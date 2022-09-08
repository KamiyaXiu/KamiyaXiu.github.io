$("nav").ready(function () {
    $("nav").css({
        "padding-bottom": 0,
        height: "5rem",
    })
    $("footer").css({
        "padding-top": 0,
        height: "5rem",
    })
});

var arr = [
    "../imgs/magic-loading.png",
    "../imgs/3D图表.png",
    "../imgs/纯css开关.png",
    "../imgs/无缝轮播图.png",
    "../imgs/360极速.png",
    "../imgs/轮盘抽奖.png",
    "../imgs/扫雷.png",
    "../imgs/翻牌游戏.png",
    "../imgs/放大镜.png",
]
var title = [
    "黑魔法阵loading",
    "3D图表",
    "纯css开关",
    "仿bilibili无缝轮播图",
    "仿360极速浏览器页面",
    "轮盘抽奖",
    "扫雷",
    "记忆游戏",
    "放大镜",
]
var srcarr = [
    "./奇奇怪怪的效果/magic-loading.html",
    "./奇奇怪怪的效果/3D图表.html",
    "./奇奇怪怪的效果/纯css开关.html",
    "./插件/无缝轮播图.html",
    "./排版/360极速2.0.html",
    "./js/转盘抽奖.html",   
    "./js/扫雷.html",
    "./js/翻牌游戏.html",
    "./js/放大镜2.0.html",
]

$.each(arr, function (index, value) {
    if (index == 0) {
        $(".list").append('<li><a href=' + srcarr[0] + ' target="_blank"><img src=' + arr[arr.length - 1] + ' alt=""></a></li>');
        $("#swiper .titles").append("<span>" + title[0] + "</span>");
    }

    $(".list").append('<li><a  href=' + srcarr[index] + ' target="_blank"><img src=' + value + ' alt=""></a></li>');
    
    if (index == arr.length - 1) {
        $(".list").append('<li><a href=""><img src=' + arr[0] + ' alt=""></a></li>');
    }
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

    var imgChange = -43 * indexImg;
    console.log(imgChange);
    var num = -43;
    if (innerWidth < 900) {
        imgChange = -90 * indexImg;
        num = -90;
    }
    $(".list").css({
        left: imgChange + "rem",
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
                left: num + "rem",
                transition: "none",
            })
        }, 300)
    }

    if (index <= 0) {
        index = (size - 2);
        setTimeout(function () {
            $(".list").css({
                left: num * (size - 2) + "rem",
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

var bannerrightArr = [
    "../imgs/百妖谱.png",
    "../imgs/创作充电计划.png",
    "../imgs/嘻嘻嘻.png",
    "../imgs/原创短片.png",
]

var bannerrightTitle = [
    "百妖谱",
    "创作充电计划",
    "嘻嘻嘻",
    "原创短片",
]

$.each(bannerrightArr, function (index) {
    $(".banner-right").append("<div><span>" + bannerrightTitle[index]
     + "</span><img src=" + bannerrightArr[index] + "><div class='mask'>" + bannerrightTitle[index] + "</div></div>");
})

$(".banner-right").on("mouseover", "img", function () {
    $(this).css({
        transform: "scale(1.1)",
    })
    $(this).siblings("div.mask").css({
        opacity: 0.6,
    })
    $(this).siblings("span").css({
        "z-index": 0,
    })
}).on("mouseout", "img", function () {
    $(this).css({
        transform: "scale(1)",
    })
    $(this).siblings("div.mask").css({
        opacity: 0,
    })
    $(this).siblings("span").css({
        "z-index": 1,
    })
})
