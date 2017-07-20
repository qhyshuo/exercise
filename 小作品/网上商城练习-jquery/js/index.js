$(function() {
    //������
    $('#inputSearch').on('focus', function () {
        if ($(this).val() == this.defaultValue) {
            this.value = '';
        }
    }).on('blur', function () {
        if ($(this).val() == '') {
            this.value = this.defaultValue;
        }
    });
    //����
    $('#nav li').hover(function () {
        $(this).children('.jnNav').show();
    }, function () {
        $(this).find('.jnNav').hide();
    });
    //hot
    $(".promoted").append('<s class="hot"></s>');
    //�ֲ�ͼ
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
    //���¶�̬
    function tooltip(selector) {
        $(selector).hover(function (e) {
            this.myTitle = this.title == "" ? this.innerHTML : this.title;
            this.title = "";//��յ�Ŀ���ǲ���ʾĬ�ϵ�tip
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
    //Ʒ�ƻ
    $('#jnBrandTab li a').on('click', function () {
        $(this).parent().addClass('chos').siblings().removeClass('chos');
        var $index = $(this).parent().index();
        $('#jnBrandList').stop().animate({left: -780 * $index + 'px'}, 1000);
    });
    //��ҳ����
        var $li =$("#skin li");
        $li.click(function(){
            switchSkin( this.id );
        });
        var cookie_skin = $.cookie("MyCssSkin");
        if (cookie_skin) {
            switchSkin( cookie_skin );
        }
    function switchSkin(skinName){
        $("#"+skinName).addClass("selected")                //��ǰ<li>Ԫ��ѡ��
            .siblings().removeClass("selected");  //ȥ������ͬ��<li>Ԫ�ص�ѡ��
        $("#cssfile").attr("href","styles/skin/"+ skinName +".css"); //���ò�ͬƤ��
        $.cookie( "MyCssSkin" ,  skinName , {expires: 10 });
    }
});