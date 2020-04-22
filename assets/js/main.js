(function ($) {
	"use strict";
    
// tooltip
    $('[data-toggle="tooltip"]').tooltip()

// Nice Select
    $('select').niceSelect()
// End Nice Select

// Header Right Trigger
    $('.bottom-header-right .cart > a').on('click', function(){
        $('.bottom-header-right .mini-cart').toggleClass('show');
    });
    $('.bottom-header-right .search > a').on('click', function(){
        $('.bottom-header-right .search-form').toggleClass('show');
    });
// Header Right Trigger

// data - background
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });

// Countdown
	$('[data-countdown]').each(function () {
		var $this = $(this), finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function (event) {
			$this.html(event.strftime('<div class="time-count">%D <span>days</span></div><div class="time-count">%H <span>hour</span></div><div class="time-count">%M <span>Min</span></div><div class="time-count">%S <span>Sec</span></div>'));
		});
    });
// Countdown

// Start Slick Nav
    $('#mobile-menu').slicknav({
        prependTo: '.show-mobile-menu',
        allowParentLinks: true,
    });
// End Slick Nav

// Sticky Menu
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 300) {
        $(".header-bottom").removeClass("sticky");
    } else {
        $(".header-bottom").addClass("sticky");
    }
  });
//   Sticky Menu

// WOW active
  var wow = new WOW({
    boxClass:     'wow',      
    animateClass: 'animated', 
    offset:       0,         
    mobile:       true,       
    live:         true,  
});
    wow.init();
//  End Wow 

// Price Range
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 75, 300 ],
        slide: function( event, ui ) {
            $( "#amount" ).val( "£" + ui.values[ 0 ] + " - £" + ui.values[ 1 ] );
        }
    });
    $( "#amount" ).val( "£" + $( "#slider-range" ).slider( "values", 0 ) +
        " - £" + $( "#slider-range" ).slider( "values", 1 ) );
// Price Range 

//  Scroll Up
    $.scrollUp({
        scrollName: 'scrollUp',
        topDistance: '300',
        topSpeed: 300, 
        animation: 'fade', 
        animationInSpeed: 200, 
        animationOutSpeed: 200, 
        scrollText: '<i class="fa fa-arrow-up"></i>', 
        activeOverlay: false, 
    });
//   Scroll Up

// Nivo Slider
    $('#mainslider').nivoSlider({
        effect: 'boxRainGrowReverse',
        slices: 15,
        boxCols: 8,
        boxRows: 4,
        animSpeed: 500,
        pauseTime: 3000,
        startSlide: 0,
        directionNav: false,
        controlNavThumbs: false,
        pauseOnHover: true,
        controlNav: true,
        manualAdvance: false,
    });
//  Nivo Slider

// Start Testimonial Carousel
    $('.testimonial-carousel').owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        thumbs: false,
        nav: false,
        autoplay: true,
                autoplayTimeout:3000,
            autoplayHoverPause:true,
        margin: 0,
    });
// End Testimonial Carousel //

// Start Product Catalog Carousel
    $('.product-catalog-carousel').owlCarousel({
        items: 1,
        loop: false,
        dots: false,
        thumbs: false,
        nav: true,
        navText: ['back','next'],
        autoplay: true,
                autoplayTimeout:3000,
            autoplayHoverPause:true,
        margin: 0,
    });
// End Product Catalog Carousel //

// Start Thumb Carousel
    $('.thumb-carousel').owlCarousel({
        loop: true,
        dots: false,
        thumbs: false,
        nav: true,
        navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
        autoplay: true,
                autoplayTimeout:3000,
            autoplayHoverPause:true,
        margin: 15,
        responsive: {
        0:{
            items:3
        },
        767:{
            items:4
        },
        992:{
            items: 3
        },
        1200:{
            items: 4
        },
    },
    });
// End Thumb Carousel

// Tab With Carousel Activation
    let activeTab = $('#thumbTab a').filter('.active');
    $('#thumbTab a').click(function(e) {
        e.preventDefault();

        activeTab.removeClass('active');
        $(activeTab.attr('href')).removeClass('active');

        activeTab = $(this);

        activeTab.addClass('active');
        $(activeTab.attr('href')).addClass('active');
    })
// Tab With Carousel Activation

// Start Product Carousel
    $('.feature-product-carousel.full-width').owlCarousel({
        loop: true,
        dots: false,
        thumbs: false,
        nav: true,
        navText:['<i class="fa fa-angle-double-left"></i>','<i class="fa fa-angle-double-right"></i>'],
        autoplay: true,
                autoplayTimeout:3000,
            autoplayHoverPause:true,
        margin: 15,
        responsive: {
        0:{
            items:1
        },
        767:{
            items: 1
        },
        992:{
            items: 2
        },
        1200:{
            items: 3
        },
    },
    });
    $('.feature-product-carousel').owlCarousel({
        loop: true,
        dots: false,
        thumbs: false,
        nav: true,
        navText:['<i class="fa fa-angle-double-left"></i>','<i class="fa fa-angle-double-right"></i>'],
        autoplay: true,
                autoplayTimeout:3000,
            autoplayHoverPause:true,
        margin: 30,
        responsive: {
        0:{
            items:1
        },
        767:{
            items: 3
        },
        992:{
            items: 3
        },
        1200:{
            items: 4
        },
    },
    });
// End Feature Product Carousel //

// Start Brand Carousel
    $('.brand-carousel').owlCarousel({
        loop: true,
        dots: false,
        thumbs: false,
        nav: false,
        navText:['<i class="fa fa-angle-double-left"></i>','<i class="fa fa-angle-double-right"></i>'],
        autoplay: true,
                autoplayTimeout:3000,
            autoplayHoverPause:true,
        margin: 30,
        responsive: {
        0:{
            items:2
        },
        767:{
            items: 4
        },
        992:{
            items: 6
        },
    },
    });
// End Brand Carousel //

// Start Blog Carousel
    $('.blog-carousel').owlCarousel({
        loop: true,
        dots: false,
        thumbs: false,
        nav: true,
        navText:['<i class="fa fa-angle-double-left"></i>','<i class="fa fa-angle-double-right"></i>'],
        autoplay: true,
                autoplayTimeout:3000,
            autoplayHoverPause:true,
        margin: 30,
        responsive: {
        0:{
            items:1
        },
        767:{
            items: 2
        },
        992:{
            items: 3
        },
    },
    });
// End Blog Carousel //

// Start Deal Carousel
    $('.deal-carousel').owlCarousel({
        loop: true,
        dots: true,
        thumbs: false,
        nav: false,
        navText:['<i class="fa fa-angle-double-left"></i>','<i class="fa fa-angle-double-right"></i>'],
        autoplay: true,
                autoplayTimeout:3000,
            autoplayHoverPause:true,
        margin: 30,
        responsive: {
        0:{
            items:1
        },
        767:{
            items: 1
        },
        992:{
            items: 2
        },
    },
    });
// End Deal Carousel //

// Start venobox
    $('.venobox').venobox({
        share: []
    }); 
// End venobox

// Quantity Btn 
    $(".qtybtn").on("click", function() {
        var $btn = $(this),
            $oldValue = $btn.parent().find("input").val();
        if ($btn.text() == "+") {
            var $newVal = parseFloat($oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if ($oldValue > 1) {
                var $newVal = parseFloat($oldValue) - 1;
            } else {
                $newVal = 1;
            }
        }
        $btn.parent().find("input").val($newVal);
    });
// Quantity Btn

// Magnific Popup
$(".video-play").magnificPopup({
    type: 'iframe',
});
//   End  Magnific Popup

})(jQuery);
