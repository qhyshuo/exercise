$(function() {
    //搜索框
    $('#inputSearch').on('focus', function () {
        if ($(this).val() == this.defaultValue) {
            this.value = '';
        }
    }).on('blur', function () {
        if ($(this).val() == '') {
            this.value = this.defaultValue;
        }
    });
    //导航
    $('#nav li').hover(function () {
        $(this).children('.jnNav').show();
    }, function () {
        $(this).find('.jnNav').hide();
    });
    //hot
    $(".promoted").append('<s class="hot"></s>');
    //轮播图
    var index = 0;
    $('#jnImageroll div a').on('mouseover', function () {
        $(this).addClass('chos').siblings().removeClass('chos');
        index = $(this).index();
        $('#JS_imgWrap img').eq(index).stop().fadeIn().parent().siblings().children().stop().fadeOut();
    });
    function timer() {
        run = setInterval(function () {
            index++;
            if (index == $('#jnImageroll div a').size()) {
                index = 0;
            }
            $('#jnImageroll div a').eq(index).addClass('chos').siblings().removeClass('chos');
            $('#JS_imgWrap img').eq(index).stop().fadeIn().parent().siblings().children().stop().fadeOut();
        }, 1000);
    }

    timer();
    $('#jnImageroll').hover(function () {
        if (run) {
            clearInterval(run);
        }
    }, function () {
        timer();
    });
    //最新动态
    function tooltip(selector) {
        $(selector).hover(function (e) {
            this.myTitle = this.title == "" ? this.innerHTML : this.title;
            this.title = "";//清空的目的是不显示默认的tip
            var $div = $("<div id='tooltip'></div>");
            $div.appendTo($("body")).html(this.myTitle).offset({
                top: e.pageY + 15,
                left: e.pageX + 15
            }).show("fast");
        }, function () {
            $("#tooltip").remove();
            this.title = this.myTitle;
        }).on("mousemove", function (e) {
            $("#tooltip").offset({
                top: e.pageY + 15,
                left: e.pageX + 15
            });
        });
    }

    tooltip("#jnNoticeInfo li a");
    tooltip(".jnCatainfo a");
    //品牌活动
    $('#jnBrandTab li a').on('click', function () {
        $(this).parent().addClass('chos').siblings().removeClass('chos');
        var $index = $(this).parent().index();
        $('#jnBrandList').stop().animate({left: -780 * $index + 'px'}, 1000);
    });
    //网页换肤
        var $li =$("#skin li");
        $li.click(function(){
            switchSkin( this.id );
        });
        var cookie_skin = $.cookie("MyCssSkin");
        if (cookie_skin) {
            switchSkin( cookie_skin );
        }
    function switchSkin(skinName){
        $("#"+skinName).addClass("selected")                //当前<li>元素选中
            .siblings().removeClass("selected");  //去掉其他同辈<li>元素的选中
        $("#cssfile").attr("href","styles/skin/"+ skinName +".css"); //设置不同皮肤
        $.cookie( "MyCssSkin" ,  skinName , {expires: 10 });
    }
});