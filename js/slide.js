//3D偏移效果
var transform = function() {
    $(".main").mouseenter(function() {
        var thisPX = $(this).offset().left;
        var thisPY = $(this).offset().top;
        var boxWidth = $(this).innerWidth();
        var boxHeight = $(this).innerHeight();
        $(this).addClass("threeD");
        $(".threeD").mousemove(function(event) {
            var mouseX = event.pageX - thisPX;
            var mouseY = event.pageY - thisPY;
            var X;
            var Y;
            if (mouseX > boxWidth / 2) {
                X = mouseX - boxWidth / 2;
            } else {
                X = mouseX - boxWidth / 2;
            }
            if (mouseY > boxHeight / 2) {
                Y = boxHeight / 2 - mouseY;
            } else {
                Y = boxHeight / 2 - mouseY;
            }
            $(".threeD").css({
                "-webkit-transform": "rotateY(" + X / 40 + "deg) " + "rotateX(" + Y / 20 + "deg)"
            });
        });
    });
    $(".main").mouseleave(function() {
        $(this).removeClass("threeD");
        $(this).css({
            "-webkit-transform": "rotateY(0deg) rotateX(0deg)"
        });
    });
}
var change = function(index) {
        //改变图片
        $('.slide').data('active', index) //设置当前播放图片坐标
        $('.slide-img-active').fadeOut()
        $('.slide-img-active').removeClass('slide-img-active')
        var active = $($('.slide-img')[index])
        active.fadeIn()
        active.addClass('slide-img-active')
            //改变指示器
        $('.slide-indicators-active').removeClass('slide-indicators-active')
        $($('.slide-indicators span')[index]).addClass('slide-indicators-active')
    }
    //通过按钮改变
var play = function(offset) {
    var activeIndex = $('.slide').data('active')
    var imgs = 4
    var index = (activeIndex + imgs + offset) % 4
    change(index)
}
var playPrev = function() {
    play(-1)
}
var playNext = function() {
        play(1)
    }
    // 通过底部原点改变
var indicatorsChange = function() {
        $('.slide-indicators').on('mouseenter', 'span', function(event) {
            var index = $(this).index()
            $('.slide-img').data('active', index)
            change(index)
        })
    }
    //自动轮播
var auto = function() {
        at = setInterval(function() {
            play(1)
        }, 3000)
    }
    //控制轮播
var control = function() {
    $('.slide-img').on('mouseenter', function() {
        clearInterval(at)
    })
    $('.slide-img').on('mouseleave', function() {
        auto()
    })
}
var __main = function() {
        transform()
        indicatorsChange()
        auto()
        control()
    }
    //safafsas
__main()
