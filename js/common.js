/**
 * Created by 左江涛 on 2017/3/11.
 */

(function ($) {
    //头部跳转
    $('.header').find('li:eq(0)').on('click',function () {
        window.location.href = '../index.html';
    });
    $('.header').find('li:eq(1)').on('click',function () {
        window.location.href = 'service-basis.html';
    });
    $('.header').find('li:eq(2)').on('click',function () {
        window.location.href = 'service-financial.html';
    });
    $('.header').find('li:eq(3)').on('click',function () {
        window.location.href = 'service-about.html';
    });
    $('.header').find('li:eq(4)').on('click',function () {
        window.location.href = 'advisory.html';
    });
    $('.header').find('img').on('click',function () {
        window.location.href = '../index.html';
    });
    $('.header').find('li:eq(5)').hover(function () {
            $(this).find('#login-reg').show();
            $(this).find('#login-reg>button:last-child').on('click',function () {
                window.location.href = 'reg.html';
            });
        },function () {
            $(this).find('#login-reg').hide();
        }
    );
    $('#login-reg').find('button:first-child').on({
        mouseover:function () {
            $(this).find('img').attr('src','../res/index/login.png');
        },
        mouseout:function () {
            $(this).find('img').attr('src','../res/index/login-red.png');
        }
    });
    $('#login-reg').find('button:last-child').on({
        mouseover:function () {
            $(this).find('img').attr('src','../res/index/reg-icon.png');
        },
        mouseout:function () {
            $(this).find('img').attr('src','../res/index/reg-icon-red.png');
        }
    });

    //底部跳转
    $('.top').find('ul:first-child>li').on('click',function () {
        window.location.href = 'service-about.html';
    });
    $('.top').find('ul:nth-child(2)>li:nth-child(2)').on('click',function () {
        window.location.href = 'service-basis.html';
    });
    $('.top').find('ul:nth-child(2)>li:nth-child(3)').on('click',function () {
        window.location.href = 'service-financial.html';
    });
    $('.top').find('ul:nth-child(3)>li:nth-child(3)').on('click',function () {
        window.location.href = 'news.html';
    });

    //顶部导航悬浮
    $(window).scroll(function () {
        var h = $(this).scrollTop();
        if (h > 200){
            $('.hd').css({
                'position':'fixed',
                'top':'0',
                'background':'#2A363A',
                'color':'#FFFFFF',
                'opacity':'0.8'
            });
            $('.header>img').attr('src','../res/common/LOGO-2.png');
        }else {
            $('.hd').css({
                'position':'static',
                'background':'transparent',
                'color':'#2A363A'
            });
            $('.header>img').attr('src','../res/common/LOGO-1.png');
        }
    });
})(jQuery);
