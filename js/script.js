$(function()
{
    'use strict'
    
    //Smooth Scroll
    
    $(document).on('click', 'a[href^="#"]:not([data-toggle])', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 103
    }, 500);
    });
    
    //Navbar Fix
    
    $(window).on('scroll', function()
    {
        if($(this).scrollTop() > 0)
        {
            $('.custom_nav').css({'background': 'rgba(0,0,0,.9)'});
        }
        else
        {
            $('.custom_nav').css({'background': 'transparent'});
        }
        
    });
    
    //Slick Slider
    
    $('.services_slides_parent').slick(
    {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '.services_prev_arrow',
        nextArrow: '.services_next_arrow',
        autoplay: true,
        autoplaySpeed: 2500,
        responsive:
        [
            {
                breakpoint: 992,
                settings:
                {
                    slidesToShow: 1
                }
            }
        ]
    });
    
    $('.testimonial_slides_parent').slick(
    {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '.testimonial_prev_arrow',
        nextArrow: '.testimonial_next_arrow',
        autoplay: true,
        autoplaySpeed: 2500,
        responsive:
        [
            {
                breakpoint: 992,
                settings:
                {
                    slidesToShow: 1
                }
            }
        ]
    });
    
    //Filterizr
    
    var filterizd = $('.filtr-container').filterizr();
    
    $('.portfolio_filter_nav_ul li').on('click', function()
    {
        $('.portfolio_filter_nav_ul li').removeClass('portfolio_filter_nav_li_active');
        $(this).addClass('portfolio_filter_nav_li_active');
    });
    
    $('.portfolio_all_button div').on('click', function()
    {
        $('.portfolio_filter_nav_ul li').removeClass('portfolio_filter_nav_li_active');
    });
    
    //Fancybox
    
    $('[data-fancybox]').fancybox(
    {
        loop: true,
        buttons:['close']
    });
    
});