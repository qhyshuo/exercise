/**
 * Created by lenovo on 2017/3/7.
 */
$(function () {
    /*大头像切换*/
    $('#personal_img').hover(function () {
        $('#img2').show().siblings().hide();
    }, function () {
        $('#img1').show().siblings().hide();
    });
    /*顶部标题文字切换*/
    $("#header_p").on('mouseover',function () {
        $("#header_p1").html("职位");
        $("#header_p2").html("前端工程师");
    }).mouseout(function () {
        $("#header_p1").html("于硕");
        $("#header_p2").html("个人网站");
    });
});