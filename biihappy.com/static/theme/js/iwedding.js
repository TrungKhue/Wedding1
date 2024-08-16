(function($) {
    "use strict";
    var isMobile = function() {
        return (/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera);
    }

    var wpt_MobileMenu = function() {
        var wpt_is_small_screen = function() {
            if (matchMedia('only screen and (max-width: 991px)').matches) {
                return true;
            } else {
                return false;
            }
        };
        $(window).on('load resize', function() {
            if (wpt_is_small_screen()) {
                var _wpt_main_menu_mobi = $('#mainnav').attr('id', 'main-menu-mobi');
                $('#header').after(_wpt_main_menu_mobi);
                $('#main-menu-mobi').hide();
                // $('#main-menu-mobi').find('li:has(ul) >a').after('<span class="btn-dropdown"></span>');
            } else {
                var _menu = $('#main-menu-mobi');
                _menu.attr('id', 'mainnav').removeAttr('style');
                // _menu.find('.btn-dropdown').remove();
                $('#header').find('.nav-wrap').prepend(_menu);
            }
            $('.mainnav').removeClass('d-none');
        });

        $('.btn-menu').on('click', function(e) {
            $('#main-menu-mobi').slideToggle('open');
        });

        $(document).on('click', '#main-menu-mobi .btn-dropdown', function() {
            $(this).toggleClass('active').next('ul').slideToggle(300);
        });

        $('.close-menu').on('click', function() {
            $(this).toggleClass('active');
            $('.layout-theme').find('#main-menu-mobi').removeClass('open');
            $('.modal-backdrop.fade.show').remove();
        });
    };

    var wpt_headerFixed = function() {
        $(window).scroll(function() {
            if ($(window).scrollTop() >= 200) {
                $('#header').addClass('sticky');
            } else {
                $('#header').removeClass('sticky');
            }
        });
    };

    var wpt_Accordion = function() {
        $('.content-entry .article-title.open').siblings('.accordion-content').show();
        $('.accordion-content').hide();
        $('.content-entry .article-title').on('click', function() {
            if (!$(this).is('.open')) {
                $(this).closest('#accordion').find('.article-title.open').toggleClass('open').next().slideToggle(400);
                $(this).toggleClass('open');
                $(this).next().slideToggle(400);
            } else {
                $(this).toggleClass('open');
                $(this).next().slideToggle(400);
            }
        }); // accordion
    }

    $(document).ready(function() {
        wpt_MobileMenu();
        wpt_headerFixed();
        wpt_Accordion();
    });
})
(jQuery);