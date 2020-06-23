$(document).ready(function () {
    var $preview = $("<p id='preview'><img src='' alt='Image preview' /><span></span></p>");
    $("body").append($preview);
    $preview.hide();
});

$("body").click(function (e) {
    var isImgClicked = $(e.target).is("img")

    // if there is click event outside IMG then close the #preview box
    if (!isImgClicked)
        $("#preview").fadeOut();
});

$("a.preview").click(function (e) {
    // prevent default click behaviour
    e.preventDefault();

    // get variables
    var title = $(this).attr("title");
    var href = $(this).attr('href')
    var c = (title != "") ? "<br/>" + title : "";
    var status = $("#preview").data("visible");

    // set its location and do show
    $("#preview").css("top", (e.pageY) + "px").css("left", (e.pageX) + "px")
    $("#preview").fadeIn();

    // set #preview content
    $("#preview span").text(title);
    $("#preview img").attr('src', href);

});




//var total = images.length - 1, /* images total number */
//    current = 0,               /* image's index */
//    startX = '',               /* touchstart X coordinate */
//    startY = '',               /* touchstart Y coordinate */
//    endX = '',                 /* touchend X coordinate */
//    endY = '';                 /* touchend Y coordinate */
//swipeDuration = 1000,      /* max touch duration */
//    swipeDistanceX = 50,       /* X-axis min touch distance */
//    swipeDistanceY = 50,       /* Y-axis min touch distance */
//    thresholdX = 30,           /* X-axis max touch displacement */
//    thresholdY = 30;           /* Y-axis max touch displacement */


//$(document).on("pageinit", "#gallery", function () {
//    $.each(images, function (i, src) {
//        $("<div class='holder hidden'><img src=" + src + " /></div>").appendTo(".inner");
//    });
//    $(".inner .holder:first-child").toggleClass("visible hidden");
//});

//$(document).on("touchstart", ".inner", function (e, ui) {
//    startX = e.originalEvent.touches[0].pageX;
//    startY = e.originalEvent.touches[0].pageY;
//    start = new Date().getTime(); /* touch start */
//}).on("touchmove", ".inner", function (e, ui) {

//    /* prevent page from scrolling */
//    e.preventDefault();

//}).on("touchend", ".inner", function (e, ui) {
//    endX = e.originalEvent.changedTouches[0].pageX;
//    endY = e.originalEvent.changedTouches[0].pageY;
//    end = new Date().getTime(); /* touch end */
//    if ((end - start) < swipeDuration) {
//        if (startX > endX && Math.abs(startY - endY) <= thresholdY && Math.abs(startX - endX) >= swipeDistanceX) {
//            showImg(current, "left");
//        } else if (startX < endX && Math.abs(startY - endY) <= thresholdY && Math.abs(startX - endX) >= swipeDistanceX) {
//            showImg(current, "right");
//        } else if (startY > endY && Math.abs(startX - endX) <= thresholdX && Math.abs(startY - endY) >= swipeDistanceY) {
//            showImg(current, "up");
//        } else if (startY < endY && Math.abs(startX - endX) <= thresholdX && Math.abs(startY - endY) >= swipeDistanceY) {
//            showImg(current, "down");
//        }
//    }
//});

//function showImg(index, type) {
//    if (type == "left") {
//        current = index;
//        if (current >= 0 && current < total) {
//            current++;
//            var distance = $(".visible").width();
//            $(".inner .holder").eq(current).css({
//                left: distance
//            }).toggleClass("in hidden");

//            $(".visible").animate({
//                left: "-" + distance + "px",
//                opacity: 0
//            }, 600, function () {
//                $(this).toggleClass("visible hidden").css({
//                    top: "auto",
//                    left: "auto"
//                });
//            });

//            $(".in").animate({
//                left: 0,
//                opacity: 1
//            }, 500, function () {
//                $(this).toggleClass("in visible");
//            });
//        }
//    }

//    if (type == "up") {
//        current = index;
//        if (current >= 0 && current < total) {
//            current++;
//            var distance = $(".visible").height();
//            $(".inner .holder").eq(current).css({
//                top: distance + "px"
//            }).toggleClass("in hidden");

//            $(".visible").animate({
//                top: "-" + distance + "px",
//                opacity: 0
//            }, 600, function () {
//                $(this).toggleClass("visible hidden").css({
//                    top: "auto",
//                    left: "auto"
//                });
//            });

//            $(".in").animate({
//                top: 0,
//                opacity: 1
//            }, 500, function () {
//                $(this).toggleClass("in visible");
//            });
//        }
//    }

//    if (type == "right") {
//        current = index;
//        if (current > 0 && current <= total) {
//            current--;
//            var distance = $(".visible").width();
//            $(".inner .holder").eq(current).css({
//                left: "-" + distance + "px"
//            }).toggleClass("in hidden");

//            $(".visible").animate({
//                left: distance + "px",
//                opacity: 0
//            }, 600, function () {
//                $(this).toggleClass("visible hidden").css({
//                    top: "auto",
//                    left: "auto"
//                });
//            });

//            $(".in").animate({
//                left: 0,
//                opacity: 1
//            }, 500, function () {
//                $(this).toggleClass("in visible");
//            });
//        }
//    }

//    if (type == "down") {
//        current = index;
//        if (current > 0 && current <= total) {
//            current--;
//            var distance = $(".holder").height();
//            $(".inner .holder").eq(current).css({
//                top: "-" + distance + "px"
//            }).toggleClass("in hidden");

//            $(".visible").animate({
//                top: distance + "px",
//                opacity: 0
//            }, 600, function () {
//                $(this).toggleClass("visible hidden").css({
//                    top: "auto",
//                    left: "auto"
//                });
//            });

//            $(".in").animate({
//                top: 0,
//                opacity: 1
//            }, 500, function () {
//                $(this).toggleClass("in visible");
//            });
//        }
//    }
//}


