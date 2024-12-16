$(document).ready(function () {
    $('.navbar-toggler-icon').click(function () { $('.sidebar').toggleClass('sidebar-width'); $('.close-overlay').addClass('open-overlay') })
    $('.close-side').click(function () { $('.sidebar').removeClass('sidebar-width'); $('.close-overlay').removeClass('open-overlay'); jQuery('.site-search').removeClass('open') })
    $('.close-overlay').click(function () { $('.sidebar').removeClass('sidebar-width'); $(this).removeClass('open-overlay') })
    $('.mynav .nav-link').click(function () {
        $('.mynav .nav-link').removeClass('active')
        $(this).addClass('active')
    })
    $('.sidebar li.menu-item-has-children').click(function () { $(this).siblings().find('ul.sub-menu').slideUp(); $(this).find('ul.sub-menu').toggle() })
    $('.my-account').click(function () { $(this).find('ul').toggle() })
    $('select').niceSelect(); wow = new WOW(); wow.init(); $('.sidebar .nav-item').click(function () { if ($(this).hasClass('active')) { $(this).removeClass('active') } else { $('.sidebar .nav-item').removeClass('active'); $(this).addClass('active') } }); jQuery('.btnSearch').click(function () { jQuery('.site-search').addClass('open') })
    jQuery('.site-search-close').click(function () { jQuery('.site-search').removeClass('open') }).children().click(function (e) { }); $('.counter').counterUp({ delay: 10, time: 2000 }); $(".slider-home").owlCarousel({ items: 1, dots: !0, animateOut: 'fadeOut', animateIn: 'fadeIn', nav: !0, navText: ["<i class='fal fa-angle-left'></i>", "<i class='fal fa-angle-right'></i> "], loop: !0, margin: 0, autoplayTimeout: 3000 }); $('.card-slider').owlCarousel({ loop: !0, margin: 10, nav: !0, dots: !1, navText: ["<i class='la la-arrow-left'></i> ", " <i class='la la-arrow-right'></i> "], responsive: { 0: { items: 1 }, 600: { items: 1 }, 1000: { items: 3 } } })
    $('.article-slider').owlCarousel({ loop: !0, margin: 10, nav: !0, dots: !1, navText: ["<i class='la la-arrow-left'></i> ", " <i class='la la-arrow-right'></i> "], responsive: { 0: { items: 1 }, 600: { items: 1 }, 1000: { items: 3 } } })
    $('.offer-slider').owlCarousel({ loop: !0, margin: 10, nav: !1, dots: !1, navText: ["<i class='la la-arrow-left'></i> ", " <i class='la la-arrow-right'></i> "], responsive: { 0: { items: 1 }, 600: { items: 1 }, 1000: { items: 2 } } })
    $('.heart-icone').click(function () { $(this).find('i').toggleClass('fas') })
    $(document).on('change', ':file', function () { var input = $(this), numFiles = input.get(0).files ? input.get(0).files.length : 1, label = input.val().replace(/\\/g, '/').replace(/.*\//, ''); input.trigger('fileselect', [numFiles, label]) }); $(':file').on('fileselect', function (event, numFiles, label) { var input = $(this).parents('.input-group').find(':text'), log = numFiles > 1 ? numFiles + ' files selected' : label; if (input.length) { input.val(log) } else { } }); $('.form-control').focus(function () { $(this).parents('.form-group').addClass('focused') }); $('.form-control').blur(function () { var inputValue = $(this).val(); if (inputValue == "") { $(this).removeClass('filled'); $(this).parents('.form-group').removeClass('focused') } else { $(this).addClass('filled') } }); $(document).on('change', '.btn-file :file', function () { var fileName = $('#uploadfile').val(); $('.filename').val(fileName) }); $(".toggle-password").click(function () { $(this).toggleClass("fa-eye fa-eye-slash"); var input = $($(this).attr("toggle")); if (input.attr("type") == "password") { input.attr("type", "text") } else { input.attr("type", "password") } }); $('.accordian-item').click(function () {
        $('.accordian-item').removeClass('active')
        $(this).addClass('active')
    })
    $('.owl-navigation  .owl-carousel').owlCarousel({ items: 1, loop: !1, center: !0, dots: !1, margin: 10, URLhashListener: !0, autoplayHoverPause: !0, startPosition: 'URLHash' }); $('.owl-navigation  .owl-carousel.last').owlCarousel({ items: 4, loop: !1, center: !0, dots: !1, margin: 10, URLhashListener: !0, autoplayHoverPause: !0, startPosition: 'URLHash' }); $('.sponser-slider').owlCarousel({ loop: !0, margin: 10, navText: ["<i class='fal fa-arrow-circle-left'></i> ", " <i class='fal fa-arrow-circle-right'></i> "], nav: !1, dots: !1, autoplay: !0, responsive: { 0: { items: 1 }, 600: { items: 3 }, 1000: { items: 6 } } })
    $('[data-fancybox="gallary2"]').fancybox(); $('.slider-for').slick({ slidesToShow: 1, slidesToScroll: 1, arrows: !1, fade: !0, dots: !0, asNavFor: '.slider-nav' }); $('.slider-nav').slick({ slidesToShow: 3, slidesToScroll: 1, vertical: !0, asNavFor: '.slider-for', dots: !1, focusOnSelect: !0, verticalSwiping: !0, responsive: [{ breakpoint: 992, settings: { vertical: !0, } }, { breakpoint: 768, settings: { vertical: !0, } }, { breakpoint: 580, settings: { vertical: !1, slidesToShow: 3, } }, { breakpoint: 380, settings: { vertical: !0, slidesToShow: 3, verticalSwiping: !0 } }] })
})