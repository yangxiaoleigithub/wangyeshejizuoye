(function() {
    var dxg = {};
    dxg.getScrollTop = function() {
        var top = document.body.scrollTop || document.documentElement.scrollTop;
        return top;
    }


    window.dxg = dxg;

})();

//niceScroll
$(document).ready(function() {
    $("html").niceScroll({
        touchbehavior: false, // 是否在触摸屏下使用
        // cursorcolor: "#866550", // 滚动条颜色
        cursoropacitymax: 1, // 滚动条是否透明
        cursorwidth: 0, // 滚动条宽度
        horizrailenabled: false, // 是否水平滚动
        cursorborderradius: 1, // 滚动条是否圆角大小
        // autohidemode: false, // 是否隐藏滚动条
        cursorborder: 0 // 滚动条边框大小
    });
});

$(document).ready(function() {
    var $WinW = window.innerWidth,
        $WinH = window.innerHeight;


    //背景滚动
    // $(window).scroll(function() {
    //     var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    //     $(".greet").css({
    //         marginTop: parseInt(scrollTop * 0.7) + 10 + "px"
    //     });
    //     $("#area1").css({
    //         backgroundPosition: "center " + parseInt(-(scrollTop + 200) * 0.2 + 50) + "px"
    //     });
    //     $("#area2").css({
    //         backgroundPosition: "center " + parseInt(-(scrollTop - 458 * 2) * 0.2 + 50) + "px"
    //     });
    //     $("#area3").css({
    //         backgroundPosition: "center " + parseInt(-(scrollTop - 458 * 3) * 0.2 + 100) + "px"
    //     });
    //     $("#area4").css({
    //         backgroundPosition: "center " + parseInt(-(scrollTop - 458 * 5) * 0.2 + 150) + "px"
    //     });
    //     $("#area5").css({
    //         backgroundPosition: "center " + parseInt(-(scrollTop - 458 * 5) * 0.2) + "px"
    //     });
    // });
    $(window).scroll(function() {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if(scrollTop >= 100){
            $(".greet").addClass("trigger");
        }
    });    

});

//loading
$(document).ready(function() {

    $("#welcome .greet a").bind("click", function(e) {
        document.body.scrollTop = $WinH;
        e.preventDefault();
    });

    var getRandomStr = function() {
        var str = "",
            max = 10,
            min = 0;
        for (var i = 0; i < max; i++) {
            var n = Math.floor(Math.random() * 100 + 1);
            str += n;
        }
        return str;
    }
    var rollImg = $(".area");


    (function() {
        var mark = new Image();
        mark.src = "images/back6.jpg?";
        document.body.scrollTop = 0;
        mark.onload = function() {
            document.body.scrollTop = 0;
            $("#loadDisk img").animate({
                width: "100px",
                height: "100px",
            }, 1000);
            $("#loadDisk").animate({
                marginLeft: "-55px",
                marginTop: "0",
                top: "10px"
            }, 1000);
            $("#loading").fadeOut(1000, function() {
                // $(".greet").animate({
                //     marginTop: "-400px"
                // }, 2000);
            });
        };
    })();
});



(function() {
    function Actions() {

    }
})();
