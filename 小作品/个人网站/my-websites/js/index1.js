require(["./leaf1"], function (Leaf) {
    var winWidth = document.documentElement.clientWidth;
    var oContainer = document.getElementById("container");
    for (var i = 0; i < 5; i++) {
        var iWidth = 20 + parseInt(Math.random() * 11);
        var leaf = new Leaf({
            width: iWidth,
            left: parseInt(Math.random() * (winWidth - iWidth)),
            container: oContainer
        });
        leaf.fall();
    }
    setInterval(function () {
        for (var i = 0; i < 5; i++) {
            var iWidth = 20 + parseInt(Math.random() * 11);
            var leaf = new Leaf({
                width: iWidth,
                left: parseInt(Math.random() * (winWidth - iWidth)),
                container: oContainer
            });
            leaf.fall();
        }
    },10000)
});