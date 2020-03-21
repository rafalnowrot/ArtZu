// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.


$('a[href^="#"]').on('click', function (event) {

    var target = $(this.getAttribute('href'));

    if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1030);
    }

});


var myIndex = 0;
var myIndex1 = 0;
carousel();
carousel1();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 9000);
}

function carousel1() {
    var j;
    var y = document.getElementsByClassName("mySlides1");
    for (j = 0; j < y.length; j++) {
        y[j].style.display = "none";
    }
    myIndex1++;
    if (myIndex1 > y.length) { myIndex1 = 1 }
    y[myIndex1 - 1].style.display = "block";
    setTimeout(carousel1, 9000);
}


function willBeSoon() {
    alert("Dostępne wkrótce, zainteresowanych prosimy o kontakt telefoniczny: 5345343");
}