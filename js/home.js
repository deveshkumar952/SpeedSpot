$(document).ready(function () {

    $('.slider-img').slick({

        dots: true,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });


    $('.customer-box-grp').slick({
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 300,
        prevArrow: false,
        nextArrow: false,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    // $('.channelsGenre').slick({
    //     dots: false,
    //     arrow: true,
    //     infinite: false,
    //     speed: 300,
    //     slidesToShow: 7,
    //     slidesToScroll: 1,
    //     responsive: [{
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 3,
    //                 infinite: true,
    //             }
    //         },
    //         {
    //             breakpoint: 600,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2
    //             }
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ]
    // });

    if ($(window).width() <= 768) {
        $('.feature-box-grp').slick({
            dots: true,
            arrow: false,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: false,
            nextArrow: false,
        });
    }

    // blog slider on mobile

    $('#blogsection').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: false,
        nextArrow: false,
        responsive: [

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});


$('#video-reviews-slider').slick({
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 300,
    prevArrow: false,
    nextArrow: false,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,

            }
        },
    ]
});

if ($(window).width() <= 768) {
    $('.quickBar ul').slick({
        dots: false,
        arrow: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: false,
        nextArrow: false,
    });
}






// search modal popup 

// var searchmodal = document.getElementById("searchmodal");
// var btnsearch = document.getElementById("mysearch");
// var btnsearch1 = document.getElementById("mysearch1");

// var spansearch = document.getElementById("searchclose");
// btnsearch.onclick = function () {

//     searchmodal.style.display = "block";

// }
// btnsearch1.onclick = function () {

//     searchmodal.style.display = "block";
//     userModal.style.display = "none";
// }
// spansearch.onclick = function () {
//     console.log("close");
//     searchmodal.style.display = "none";
// }




// app download modal popup
var appModal = document.getElementById("appModal");
var myAppbtn = document.getElementById("myApp");
var spanapp = document.getElementById("appclose");
myAppbtn.onclick = function () {
    appModal.style.display = "block";
    userModal.style.display = "none";

}
spanapp.onclick = function () {
    appModal.style.display = "none";
}
$('.modalClose').on('click',function(){
    $(this).closest('.modal').hide();
    $('body').css('overflow','auto')
})

// // city  modal popup
// var cityModal = document.getElementById("cityModal");
// var mycitybtn = document.getElementById("mycity");
// var mycity1btn = document.getElementById("mycity1");
// var spancity = document.getElementById("cityclose");
// mycitybtn.onclick = function () {
//     cityModal.style.display = "block";
//     userModal.style.display = "none";
// }
// mycity1btn.onclick = function () {
//     cityModal.style.display = "block";
//     userModal.style.display = "none";
// }
// spancity.onclick = function () {
//     cityModal.style.display = "none";
// }


// user  modal popup
// var myUser = document.getElementById("myUser");
// var userModal = document.getElementById("userModal");

// userModal.style.display = "none";

// myUser.onclick = function () {

//     if (userModal.style.display === "none") {
//         userModal.style.display = "block";


//     } else {
//         userModal.style.display = "none";
//     }
// }








// Footer accordian 


$('.accordion').click(function () {
    $(this).parent().siblings().find("ul.panel").removeClass("footerActive");
    $(this).parent().siblings().find("p.accordion > i").removeClass('fa-xmark');
    $(this).next().toggleClass("footerActive");
    $(this).children().toggleClass('fa-xmark');
    $("div").find("span")
});


// var acc = document.getElementsByClassName("accordion");

// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {    
//     var panel = this.nextElementSibling;
//     this.firstElementChild.classList.toggle('fa-xmark');
//     console.log(this.parentElement.nextElementSibling);  
//     panel.classList.toggle("footerActive");

//   });
// }

// navbar on mobile close icon


$('.icon').click(function () {
    $('.icon > i').toggleClass("fa-xmark");
    userModal.style.display = "none";
    $('.navshowlist li input').prop('checked', false);
    $('.navshowlist li label i').removeClass('fa-angle-up').addClass('fa-angle-down');
    $(".navshowlist li label").removeClass('redorder');
});

$("ul.navshowlist > li > span").on("click", function () {
    if ($(this).siblings("ul").hasClass("active")) {
        $(this).siblings("ul").slideUp(200).removeClass("active");
        $(this).siblings("a").removeClass("redorder");
    } else {
        $("ul.navshowlist > li > span").siblings("ul").slideUp(200).removeClass("active");
        $("ul.navshowlist > li > span").siblings("a").removeClass("redorder");
        $(this).siblings("ul").slideDown(200).addClass("active");
        $(this).siblings("a").addClass("redorder");
    }
});


// $('.navshowlist li input').click(function () {

//     let checkLabel = $(this).attr('id');

//     $(".navshowlist li input:not(#" + checkLabel + ")").prop('checked', false); /* close other menu on target item  */

//     $(".navshowlist li label[for!=" + checkLabel + "] i").removeClass('fa-angle-up').addClass('fa-angle-down'); /* for carot icon open-close */
//     $(".navshowlist li label[for!=" + checkLabel + "]").removeClass('redorder');

//     $(" .navshowlist li label[for=" + checkLabel + "] i").toggleClass('fa-angle-up');
//     $(" .navshowlist li label[for=" + checkLabel + "]").toggleClass('redorder');

// });




// about page tabing 

$(function () {
    $('.tabs-nav a').click(function () {

        // Check for active
        $('.tabs-nav li').removeClass('active');
        $(this).parent().addClass('active');

        // Display active tab
        let currentTab = $(this).attr('href');
        $('.tabs-content .tabstage').hide();
        $(currentTab).show();
        return false;
    });
});

// about page tabing 

// // gst page accordion 
$(".gstMain .accordion-list .top-head").on("click", function () {
    if ($(this).siblings().hasClass("active")) {
        $(this).siblings().slideUp(200).removeClass("active");
    } else {
        $(".gstMain .accordion-list .top-head").siblings().slideUp(200).removeClass("active");
        $(this).siblings().slideDown(200).addClass("active");
    }
});

// gst page accordion

$(".officerDetails .accordion-list .top-head").on("click", function () {
    if ($(this).siblings().hasClass("active")) {
        $(this).siblings().slideUp(200).removeClass("active");
    } else {
        $(".officerDetails .accordion-list .top-head").siblings().slideUp(200).removeClass("active");
        $(this).siblings().slideDown(200).addClass("active");
    }
});

$(".digitalFaq ul .head").on("click", function () {
    if ($(this).siblings().hasClass("active")) {
        $(this).siblings().slideUp(200).removeClass("active");
    } else {
        $(".digitalFaq ul .head ").siblings().slideUp(200).removeClass("active");
        $(this).siblings().slideDown(200).addClass("active");
    }
});

$(".installationDetail .provisions-apply").on("click", function () {
    if ($(this).siblings().hasClass("active")) {
        $(this).siblings().slideUp(200).removeClass("active");
        $(this).removeClass("active");
    } else {
        $(".installationDetail .provisions-apply").siblings().slideUp(200).removeClass("active");
        $(this).siblings().slideDown(200).addClass("active");
        $(this).addClass("active");
    }
});

// moreless btn js


$('.moreless-button').click(function () {
    $(this).siblings('.moretext').slideToggle();
    if (($(this).text() == "Read less")) {
        $(this).text("Read more");
        // $(this).addClass("active");
    } else {
        $(this).text("Read less");
        // $(this).removeClass("active");
    }
});
// moreless btn js

var btn = $('.pagescrollbtn');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '300');
});


$('.exclusive-channel').slick({
    prevArrow: false,
    nextArrow: false,
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});


$('.key-features').slick({

    dots: true,
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});


if ($(".hathwayBouquet ul li").length > 0) {
    $(".stepbar ul li a").click(function (e) {
        e.preventDefault();
        $(this).parent().addClass("active");
        $(this).parent().removeClass("visitedList");
        $(this).parent().prevAll().addClass("visitedList");
        $(this).parent().nextAll().removeClass("visitedList");
        $(this).parent().siblings().removeClass("active");
        var currentTab = $(this).attr("href");
        $(this).parents(".hathwayBouquet").find(".tabContent").not(currentTab).css("display", "none");
        $(currentTab).css("display", "block");
    });

    $(".stepbar ul li:first-child a").each(function () {
        $(this).trigger('click');
    });
}


$(".hathwayBouquet .stepbar ul li").click(function () {
    $('.channelsGenre').slick('refresh');
});

// $(".hathwayBouquet .channelCat .channelacc .topHead .channelCatName a").on("click", function () {
//     if ($(this).parent().parent().parent().siblings().hasClass("active")) {
//         $(this).parent().parent().parent().siblings().slideUp(200).removeClass("active");
//     } else {
//         $(".hathwayBouquet .channelCat .channelacc .topHead .channelCatName a").parent()
//             .parent().parent().siblings().slideUp(200).removeClass("active");
//         $(this).parent().parent().parent().siblings().slideDown(200).addClass("active");
//     }
// });

$(".hathwayBouquet .channelCat .channelacc .topHead .channelCatName a").on("click", function () {
    if ($(this).parents(".topHead").siblings().hasClass("active")) {
        $(this).parents(".topHead").siblings().slideUp(200).removeClass("active");
    } else {
        $(".hathwayBouquet .channelCat .channelacc .topHead .channelCatName a")
            .parents(".topHead").siblings().slideUp(200).removeClass("active");
        $(this).parents(".topHead").siblings().slideDown(200).addClass("active");
    }
});

$(".genreAcc .tophead").on("click", function () {
    if ($(this).siblings().hasClass("active")) {
        $(this).siblings().slideUp(200).removeClass("active");
        $(this).removeClass("active");
    } else {
        $(".genreAcc .tophead").siblings().slideUp(200).removeClass("active");
        $(".genreAcc .tophead").removeClass("active");
        $(this).siblings().slideDown(200).addClass("active");
        $(this).addClass("active");
    }
});


// viewShowcart popup start here 

$(".viewShowcart").on("click", function () {
    $("#viewCart").show();
    $("body").css("overflow" , "hidden");
});
$("#viewCart .close").on("click", function () {
    $("#viewCart").hide();
    $("body").css("overflow" , "auto");
});



// viewShowcart popup end here 


// infoimage view image start

$("#infoimage .viewbtn").click(function (e) {
    e.preventDefault();
    $('.fullViewImage').attr("src", $(this).attr("href"));
    $(".infograph").hide();
    $(".infographFullView").show();
    $(window).scrollTop(0);

});

$(".infographFullView #btnBack").click(function (e) {
    e.preventDefault();
    $(".infograph").show();
    $(".infographFullView").hide();
});

// infoimage view image end

// plan page slider 

$('.fiberPlan-slider').slick({

    dots: true,
    arrows: true,
    autoplay: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },

        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
}).on("setPosition", function () {
    resizeSlider();
});

$(window).on("resize", function (e) {
    resizeSlider();
});

var slickHeight = $(".slick-track").outerHeight();

var slideHeight = $(".slick-track").find(".slick-slide").outerHeight();

function resizeSlider() {
    $(".slick-track")
        .find(".slick-slide .slide-wrap")
        .css("height", slickHeight + "px");
}

// Quaterly Page Select Filter and Blog listing

$(document).on('change', '.select-year', function () {
    var target = $(this).data('target');
    var show = $("option:selected", this).data('show');
    $(target).children().addClass('hide');
    $(show).removeClass('hide');
});

$(document).ready(function () {
    $('.select-year').trigger('change');
});

$(document).on('change', '.select-quater', function () {
    var target = $(this).data('target');
    var show = $("option:selected", this).data('show');
    $(target).children().addClass('hide');
    $(show).removeClass('hide');
});
$(document).ready(function () {
    $('.select-quater').trigger('change');
});



//  Social Blog Detail page 
setShareLinks();

function socialWindow(url) {
    var left = (screen.width - 570) / 2;
    var top = (screen.height - 570) / 2;
    var params = "menubar=no,toolbar=no,status=no,width=570,height=570,top=" + top + ",left=" + left;
    // Setting 'params' to an empty string will launch
    // content in a new tab or window rather than a pop-up.
    // params = "";
    window.open(url, "NewWindow", params);
}

function setShareLinks() {
    var pageUrl = encodeURIComponent(document.URL);
    var tweet = encodeURIComponent($("meta[property='og:description']").attr("content"));

    $(".social-share.facebook").on("click", function () {
        url = "https://www.facebook.com/sharer.php?u=" + pageUrl;
        socialWindow(url);
    });

    $(".social-share.twitter").on("click", function () {
        url = "https://twitter.com/intent/tweet?url=" + pageUrl + "&text=" + tweet;
        socialWindow(url);
    });

    $(".social-share.linkedin").on("click", function () {
        url = "https://www.linkedin.com/sharing/share-offsite/?url=" + pageUrl;
        socialWindow(url);
    })
    $(".social-share.instagram").on("click", function () {
        url = "https://www.instagram.com?url=" + pageUrl;
        socialWindow(url);
    })

    $(".social-share.whatsapp").on("click", function () {
        url = "https://api.whatsapp.com/send?text=" + pageUrl;
        socialWindow(url);
    })

}

// Common Modal JS

$('[data-toggle="modal"]').on('click',function(){
    const modalID = $(this).attr('data-target')
    $(modalID).show();
    $('body').css('overflow','hidden');
})

$('[data-dismiss="modal"]').on('click',function(){
    const modalID = '#'+$(this).closest('.modal').attr('id');
    $(modalID).hide();
    $('body').css('overflow','auto');
})
// video popup iframe url 
$('.video-card [data-toggle="modal"]').on('click',function(){
    const videoURL = $(this).attr('data-url');
    $('#video-modal #video-frame').attr('src',videoURL)
})

