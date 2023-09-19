$(document).ready(function(e) {
    $(".mobile-button").click(function(event) {
        $(".navigation_link").toggleClass("mobile-open");
        event.stopPropagation();
    });

    $(document).click(function(event){
        if (!$(event.target).hasClass('link')) {
            $(".navigation_link").removeClass("mobile-open");
        }
    });
});



$('.blogs_slider').owlCarousel({
    loop:true,
    margin:45,
    autoplay:false,
    autoplayTimeout:5000,
    smartSpeed: 800,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:2,
            nav:false,
            loop:true
        }
    }
})
