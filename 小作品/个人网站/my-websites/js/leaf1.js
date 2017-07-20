define(function (require, exports, module) {
    function Leaf(options) {
        this.width = options.width;
        this.left = options.left;
        this.oImg = new Image();
        this.oImg.src = "my-websites/img/" + parseInt(Math.random() * 4 + 1) + ".png";
        this.oImg.width = this.width;
        this.oImg.style.left = this.left + "px";
        options.container.appendChild(this.oImg);
    }

    Leaf.prototype.fall = function () {
        var that = this;
        setInterval(function () {
            var iTop=(Math.random()+1)*20;
            var ileft=Math.random() * 300 - 150;
            $(that.oImg).animate({
                top:'+='+iTop,
                left: '+='+ileft
            },2000);
            if(that.oImg.offsetLeft>=document.documentElement.clientWidth-100||that.oImg.offsetLeft<=100||that.oImg.offsetTop>=document.documentElement.clientHeight-100){
                $(that.oImg).remove();
            }
        }, Math.random() * 1500);

    };
    module.exports = Leaf;
});