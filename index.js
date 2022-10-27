$("nav").ready(function () {

    if (innerWidth < 900) {
        $("nav").css({
            "padding-bottom": 0,
            height: "17rem",
        })
        $("footer").css({
            "padding-top": 0,
            height: "17.5rem",
        })
    } else {
        $("nav").css({
            "padding-bottom": 0,
            height: "5rem",
        })
        $("footer").css({
            "padding-top": 0,
            height: "5.5rem",
        })
    }
})

var arr = [
    "../imgs/magic-loading.png",
    "../imgs/3d图表.png",
    "../imgs/纯css开关.png",
    "../imgs/无缝轮播图.png",
    "../imgs/360极速.png",
    "../imgs/canvas时钟.png",
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
    "canvas时钟",
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
    "./奇奇怪怪的效果/canvas时钟.html",
    "./js/扫雷1.0.html",
    "./js/翻牌游戏1.0.html",
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
    "../imgs/哔哩哔哩漫画.png",
    "../imgs/QQ音乐.png",
    "../imgs/嘻嘻嘻.png",
    "../imgs/原创短片.png",
]

var bannerrightTitle = [
    "哔哩哔哩漫画APP",
    "QQ音乐移动端网页",
    "嘻嘻嘻",
    "原创短片",
]

var bannerrighturl = [
    "../项目/bilibilicomic/index.html",
    "../项目/qqmusic/index.html"
]

$.each(bannerrightArr, function (index) {
    $(".banner-right").append("<div><a href=" + bannerrighturl[index] + " target='_blank'><span>" + bannerrightTitle[index]
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

$(".content2 div ").on("mouseover", "img", function () {
    $(this).css({
        transform: "scale(1.1)",
    })
    $(this).siblings("div.mask").css({
        opacity: 0.6,
    })
    $(this).siblings("span").css({
        "z-index": -1,
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

setTimeout(function () {
    if (innerWidth < 900) {
        $("nav .logo").addClass("logoactive");
        $("nav .logo .mysg").css({
            transform: "translate(27rem,15rem)",
            opacity: 1,
            "pointer-events": "all",
        })
        $("nav .logo .myindex").css({
            transform: "translate(-27rem,15rem)",
            "pointer-events": "all",
            opacity: 1,
        })
        $("nav .logo .myjg").css({
            transform: "translate(0,28rem)",
            "pointer-events": "all",
            opacity: 1,
        })
    } else {
        $("nav .logo").addClass("logoactive");
        $("nav .logo .mysg").css({
            transform: "translate(7rem,5rem)",
            opacity: 1,
            "pointer-events": "all",
        })
        $("nav .logo .myindex").css({
            transform: "translate(-7rem,5rem)",
            "pointer-events": "all",
            opacity: 1,
        })
        $("nav .logo .myjg").css({
            transform: "translate(0,8rem)",
            "pointer-events": "all",
            opacity: 1,
        })
    }
    setTimeout(function () {
        $("nav .logo").removeClass("logoactive");
        $("nav .logo .mysg").css({
            transform: "translate(0,0)",
            "pointer-events": "none",
            opacity: 0,
        })
        $("nav .logo .myindex").css({
            transform: "translate(0,0)",
            "pointer-events": "none",
            opacity: 0,
        })
        $("nav .logo .myjg").css({
            transform: "translate(0,0)",
            "pointer-events": "none",
            opacity: 0,
        })
    }, 2000);
}, 1000);

function logoclose() {
    $("nav .logo").removeClass("logoactive");
    $("nav .logo .mysg").css({
        transform: "translate(0,0)",
        "pointer-events": "none",
        opacity: 0,
    })
    $("nav .logo .myindex").css({
        transform: "translate(0,0)",
        "pointer-events": "none",
        opacity: 0,
    })
    $("nav .logo .myjg").css({
        transform: "translate(0,0)",
        "pointer-events": "none",
        opacity: 0,
    })
}

function logoopen() {
    if (innerWidth < 900) {
        $("nav .logo").addClass("logoactive");
        $("nav .logo .mysg").css({
            transform: "translate(27rem,15rem)",
            opacity: 1,
            "pointer-events": "all",
        })
        $("nav .logo .myindex").css({
            transform: "translate(-27rem,15rem)",
            "pointer-events": "all",
            opacity: 1,
        })
        $("nav .logo .myjg").css({
            transform: "translate(0,28rem)",
            "pointer-events": "all",
            opacity: 1,
        })
    } else {
        $("nav .logo").addClass("logoactive");
        $("nav .logo .mysg").css({
            transform: "translate(7rem,5rem)",
            opacity: 1,
            "pointer-events": "all",
        })
        $("nav .logo .myindex").css({
            transform: "translate(-7rem,5rem)",
            "pointer-events": "all",
            opacity: 1,
        })
        $("nav .logo .myjg").css({
            transform: "translate(0,8rem)",
            "pointer-events": "all",
            opacity: 1,
        })
    }
}

$("nav .logo").click(function () {
    if ($("nav .logo").hasClass("logoactive")) {
        logoclose();
    } else {
        logoopen();
    }
})
$("nav .logo div").eq(0).addClass("active");
$("nav .logo").on("click", "div", function () {
    var showmain = ".content" + ($(this).index() + 1);
    $("nav").css({
        "padding-bottom": "50vh",
        transition: "all .5s",
    })
    $("footer").css({
        "padding-top": "50vh",
        transition: "all .5s",
    })
    $(this).addClass("active").siblings("div").removeClass("active");
    setTimeout(function () {
        if (innerWidth < 900) {
            $("nav").css({
                "padding-bottom": 0,
                height: "17rem",
            })
            $("footer").css({
                "padding-top": 0,
                height: "17.5rem",
            })
            if (showmain == ".content2") {
                $(showmain).css({
                    display: "flex",
                    "z-index": 0,
                })
                $(".content3").css({
                    "z-index": -1,
                    display: "none",
                })
            } else if (showmain == ".content3") {
                $(showmain).css({
                    display: "flex",
                    "z-index": 0,
                })
                $(".content2").css({
                    "z-index": -1,
                    display: "none",
                })
            }
        } else {
            $("nav").css({
                "padding-bottom": 0,
                height: "5rem",
            })
            $("footer").css({
                "padding-top": 0,
                height: "5.5rem",
            })
            $(showmain).css({
                display: "flex",
                "z-index": 0,
            }).siblings("section").css({
                "z-index": -1,
                display: "none",
            })
        }
    }, 1000)
})

var completeimg1 = [
    "../imgs/magic-loading.png",
    "../imgs/3d图表.png",
    "../imgs/纯css开关.png",
    "../imgs/无缝轮播图.png",
    "../imgs/canvas时钟.png",
    "../imgs/扫雷.png",
    "../imgs/翻牌游戏.png",
    "../imgs/放大镜.png",
    "../imgs/刮刮乐.png",
    "../imgs/环形loading.png",
    "../imgs/手风琴.png",
    "../imgs/转盘抽奖.png",
    "../imgs/bilibili视频预览.png",
]

var completetitle1 = [
    "黑魔法阵loading",
    "3D图表",
    "纯css开关",
    "仿bilibili无缝轮播图",
    "canvas时钟",
    "扫雷",
    "记忆游戏",
    "放大镜",
    "刮刮乐",
    "环形Loading",
    "手风琴",
    "轮盘抽奖",
    "bilibili视频预览"
]

var completeurl1 = [
    "./奇奇怪怪的效果/magic-loading.html",
    "./奇奇怪怪的效果/3D图表.html",
    "./奇奇怪怪的效果/纯css开关.html",
    "./插件/无缝轮播图.html",
    "./奇奇怪怪的效果/canvas时钟.html",
    "./js/扫雷1.0.html",
    "./js/翻牌游戏1.0.html",
    "./js/放大镜2.0.html",
    "./奇奇怪怪的效果/刮刮乐.html",
    "./奇奇怪怪的效果/环状Loading.html",
    "./js/手风琴.html",
    "./js/转盘抽奖.html",
    "./奇奇怪怪的效果/bilibili视频预览.html",
]

var completeimg2 = [
    "../imgs/360极速.png",
    "../imgs/animace.png",
    "../imgs/cloth.png",
    "../imgs/cosmetichospital.png",
]

var completetitle2 = [
    "360极速",
    "animace",
    "cloth",
    "CosmeticHospital"
]

var completeurl2 = [
    "./排版/360极速2.0.html",
    "./排版/animace.html",
    "./排版/cloth2.0.html",
    "./排版/CosmeticHospital.html",
]

$.each(completetitle1, function (index) {
    $(".jg-xal").append("<div><a href=" + completeurl1[index] + " target='_blank'><span>" + completetitle1[index]
        + "</span><img src=" + completeimg1[index] + "><div class='mask'>" + completetitle1[index] + "</div></a></div>");
})
$.each(completetitle2, function (index) {
    $(".jg-pb").append("<div><a href=" + completeurl2[index] + " target='_blank'><span>" + completetitle2[index]
        + "</span><img src=" + completeimg2[index] + "><div class='mask'>" + completetitle2[index] + "</div></a></div>");
})

if (innerWidth < 900) {
    $(".content2 div div span").css({
        display: "none",
    })
}
