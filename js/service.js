/**
 * Created by 左江涛 on 2017/3/10.
 */

$(document).ready(function () {
    $('.nav-tab').find('li').on({
        click:function () {
            $(this).addClass('tab-link-sel').siblings().removeClass('tab-link-sel');
            $(this).find('span').show().parent().siblings().find('span').hide();
            var i = $(this).index();
            $('.tab-con').eq(i).show().siblings('.tab-con').hide();

            var s_text = $(this).find('label').text();
            $('#sec-con-c').text(function () {
                return s_text;
            });
        }
    });


});
