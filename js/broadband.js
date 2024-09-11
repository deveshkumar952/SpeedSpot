if ($(window).width() < 960) {
    $('.business-broadband-grp').slick({
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,

    });
}
$(document).ready(function () {
    $(".accordian-toggle > .accordian-title").on("click", function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).siblings(".accordian-content").slideUp(200);
        } else {
            $(".accordian-toggle > .accordian-title").removeClass("active");
            $(this).addClass("active");
            $(".accordian-content").slideUp(200);
            $(this).siblings(".accordian-content").slideDown(200);
        }
    });
});
$(function () {
    $('.tabs-nav a').click(function () {

        // Check for active
        $('.tabs-nav li').removeClass('active');
        $(this).parent().addClass('active');

        // Display active tab
        let currentTab = $(this).attr('href');
        $('.tabstage').hide();
        $(currentTab).show();

        return false;
    });
});