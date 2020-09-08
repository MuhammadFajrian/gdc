( function( $ ) {
    'use strict';

    /* --------------------------------------------------
     * counter
     * --------------------------------------------------*/
    var icounter = function () {
        $('.ot-counter[data-counter]').each( function () {
            var scrollTop   = $(document).scrollTop() + $(window).height();
            var counter     = $(this).find('span.num'),
                countTo     = counter.attr('data-to'),
                during      = parseInt( counter.attr('data-time') );

            if ( scrollTop > counter.offset().top + counter.height() ) {
                $(this).removeAttr('data-counter');
                $({
                    countNum: counter.text()
                }).animate({
                    countNum: countTo
                },
                {
                    duration: during,
                    easing: 'swing',
                    step: function() {
                        counter.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        counter.text(this.countNum);
                    }
                });
            }
        });
    };

    var counter = function () {
        icounter();
    };

    /* --------------------------------------------------
    * testimonials
    * --------------------------------------------------*/
    var testimonialSlider = function ($scope, $) {
        $scope.find('.ot-testimonials-slider-s1').each( function () {
            var $selector = $(this),
                $show     = $selector.data('show') ? $selector.data('show') : 3,
                $tshow    = $selector.data('show-tablet') ? $selector.data('show-tablet') : 2,
                $mshow    = $selector.data('show-mobile') ? $selector.data('show-mobile') : 1,
                $scro     = $selector.data('scroll') ? $selector.data('scroll') : 1,
                $tscro    = $selector.data('scroll-tablet') ? $selector.data('scroll-tablet') : 1,
                $mscro    = $selector.data('scroll-mobile') ? $selector.data('scroll-mobile') : 1,
                $nextEl   = $selector.find('.octf-swiper-button-next'),
                $prevEl   = $selector.find('.octf-swiper-button-prev'),
                $pagi     = $selector.find('.octf-swiper-pagination');
            
            new Swiper( $selector, {
                slidesPerView:  1,
                spaceBetween: 30,
                loop: true,
                speed: 800,
                slidesPerGroup: $scro,
                navigation: {
                    nextEl: $nextEl,
                    prevEl: $prevEl,
                },
                pagination: {
                    el: $pagi,
                    clickable: true,
                },
                breakpoints: {
                    360: {
                        slidesPerView: $mshow,
                        slidesPerGroup: $mscro,
                    },
                    768: {
                        slidesPerView: $tshow,
                        slidesPerGroup: $tscro,
                    },
                    1024: {
                        slidesPerView: $show,
                        slidesPerGroup: $scro,
                    },
                }
            });
        });
    };

    /* --------------------------------------------------
    * testimonials 2
    * --------------------------------------------------*/
    var testimonialSlider2 = function ($scope, $) {
        $scope.find('.ot-testimonials-slider-s2').each( function () {
            var $selector = $(this),
                $show     = $selector.data('show') ? $selector.data('show') : 1,
                $tshow    = $selector.data('show-tablet') ? $selector.data('show-tablet') : 1,
                $mshow    = $selector.data('show-mobile') ? $selector.data('show-mobile') : 1,
                $scro     = $selector.data('scroll') ? $selector.data('scroll') : 1,
                $tscro    = $selector.data('scroll-tablet') ? $selector.data('scroll-tablet') : 1,
                $mscro    = $selector.data('scroll-mobile') ? $selector.data('scroll-mobile') : 1,
                $effect   = $selector.data('effect'),
                $pagi     = $selector.find('.octf-swiper-pagination'),
                $nextEl   = $selector.find('.octf-swiper-button-next'),
                $prevEl   = $selector.find('.octf-swiper-button-prev');
            
            new Swiper( $selector, {
                slidesPerView:  1,
                spaceBetween: 30,
                loop: true,
                speed: 800,
                slidesPerGroup: $scro,
                effect: $effect,
                fadeEffect: {
                    crossFade: true,
                },
                pagination: {
                    el: $pagi,
                    clickable: true,
                },
                navigation: {
                    nextEl: $nextEl,
                    prevEl: $prevEl,
                },
                breakpoints: {
                    360: {
                        slidesPerView: $mshow,
                        slidesPerGroup: $mscro,
                    },
                    768: {
                        slidesPerView: $tshow,
                        slidesPerGroup: $tscro,
                    },
                    1024: {
                        slidesPerView: $show,
                        slidesPerGroup: $scro,
                    },
                }
            });
        });
    };

    /* --------------------------------------------------
    * Image Carousel
    * --------------------------------------------------*/
    var imageCarousel = function ($scope, $) {
        $scope.find('.image-carousel').each( function () {
            var $selector  = $(this),
                $show      = $selector.data('show') ? $selector.data('show') : 3,
                $tshow     = $selector.data('show-tablet') ? $selector.data('show-tablet') : 2,
                $mshow     = $selector.data('show-mobile') ? $selector.data('show-mobile') : 1,
                $scro      = $selector.data('scroll') ? $selector.data('scroll') : 1,
                $tscro     = $selector.data('scroll-tablet') ? $selector.data('scroll-tablet') : 1,
                $mscro     = $selector.data('scroll-mobile') ? $selector.data('scroll-mobile') : 1,
                $gaps      = $selector.data('gaps') !== '' ? $selector.data('gaps') : 140,
                $tgaps     = $selector.data('gaps-tablet') !== '' ? $selector.data('gaps-tablet') : $gaps,
                $mgaps     = $selector.data('gaps-mobile') !== '' ? $selector.data('gaps-mobile') : $tgaps,
                $pagi      = $selector.find('.octf-swiper-pagination'),
                $nextEl    = $selector.find('.octf-swiper-button-next'),
                $prevEl    = $selector.find('.octf-swiper-button-prev');
            new Swiper( $selector, {
                slidesPerView:  1,
                spaceBetween: $gaps,
                loop: true,
                speed: 800,
                slidesPerGroup: $scro,
                autoplay: {
                    delay: 6000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: $pagi,
                    clickable: true,
                },
                navigation: {
                    nextEl: $nextEl,
                    prevEl: $prevEl,
                },
                breakpoints: {
                    360: {
                        slidesPerView: $mshow,
                        slidesPerGroup: $mscro,
                        spaceBetween: $mgaps,
                    },
                    768: {
                        slidesPerView: $tshow,
                        slidesPerGroup: $tscro,
                        spaceBetween: $tgaps,
                    },
                    1024: {
                        slidesPerView: $show,
                        slidesPerGroup: $scro,
                        spaceBetween: $gaps,
                    },
                }
            });
        });
    };

    /* --------------------------------------------------
    * team carousel
    * --------------------------------------------------*/
    var teamCarousel = function ($scope, $) {
        $scope.find('.team-slider').each( function () {
            var $selector = $(this),
                $show     = $selector.data('show') ? $selector.data('show') : 2,
                $tshow    = $selector.data('show-tablet') ? $selector.data('show-tablet') : 2,
                $mshow    = $selector.data('show-mobile') ? $selector.data('show-mobile') : 1,
                $scro     = $selector.data('scroll') ? $selector.data('scroll') : 1,
                $tscro    = $selector.data('scroll-tablet') ? $selector.data('scroll-tablet') : 1,
                $mscro    = $selector.data('scroll-mobile') ? $selector.data('scroll-mobile') : 1,
                $gaps     = $selector.data('gaps'),
                $pagi     = $selector.find('.octf-swiper-pagination'),
                $nextEl   = $selector.find('.octf-swiper-button-next'),
                $prevEl   = $selector.find('.octf-swiper-button-prev');
            
            new Swiper( $selector, {
                slidesPerView:  1,
                spaceBetween: $gaps,
                loop: true,
                speed: 800,
                slidesPerGroup: $scro,
                pagination: {
                    el: $pagi,
                    clickable: true,
                },
                navigation: {
                    nextEl: $nextEl,
                    prevEl: $prevEl,
                },
                breakpoints: {
                    360: {
                      slidesPerView: $mshow,
                      slidesPerGroup: $mscro,
                      spaceBetween: $gaps,
                    },
                    768: {
                      slidesPerView: $tshow,
                      slidesPerGroup: $tscro,
                      spaceBetween: $gaps,
                    },
                    1024: {
                        slidesPerView: $show,
                        slidesPerGroup: $scro,
                        spaceBetween: $gaps,
                    },
                }
            });
        });
    };

    /* --------------------------------------------------
    * blog carousel
    * --------------------------------------------------*/

    var blogCarousel = function ($scope, $) {
        $scope.find('.blog-slider').each( function () {
            var selector = $(this),
                show     = selector.data('show') ? selector.data('show') : 3,
                tshow    = selector.data('show-tablet') ? selector.data('show-tablet') : 2,
                mshow    = selector.data('show-mobile') ? selector.data('show-mobile') : 1,
                scro     = selector.data('scroll') ? selector.data('scroll') : 1,
                tscro    = selector.data('scroll-tablet') ? selector.data('scroll-tablet') : 1,
                mscro    = selector.data('scroll-mobile') ? selector.data('scroll-mobile') : 1,
                gaps     = selector.data('gaps') !== '' ? selector.data('gaps') : 30,
                tgaps    = selector.data('gaps-tablet') !== '' ? selector.data('gaps-tablet') : gaps,
                mgaps    = selector.data('gaps-mobile') !== '' ? selector.data('gaps-mobile') : tgaps,
                pagi     = selector.find('.octf-swiper-pagination'),
                nextEl   = selector.find('.octf-swiper-button-next'),
                prevEl   = selector.find('.octf-swiper-button-prev');
            
            new Swiper( selector, {
                slidesPerView:  1,
                spaceBetween: gaps,
                loop: false,
                speed: 800,
                watchOverflow: true,
                slidesPerGroup: scro,
                pagination: {
                    el: pagi,
                    clickable: true,
                },
                navigation: {
                    nextEl: nextEl,
                    prevEl: prevEl,
                },
                breakpoints: {
                    360: {
                      slidesPerView: mshow,
                      slidesPerGroup: mscro,
                      spaceBetween: mgaps,
                    },
                    768: {
                      slidesPerView: tshow,
                      slidesPerGroup: tscro,
                      spaceBetween: tgaps,
                    },
                    1024: {
                        slidesPerView: show,
                        slidesPerGroup: scro,
                        spaceBetween: gaps,
                    },
                }
            });
        });
    };

    /* --------------------------------------------------
    * project carousel
    * --------------------------------------------------*/
    var latestProjectCarousel = function ($scope, $) {
        $scope.find('.project-slider').each( function () {
            var selector = $(this),
                show     = selector.data('show') ? selector.data('show') : 4,
                tshow    = selector.data('show-tablet') ? selector.data('show-tablet') : 2,
                mshow    = selector.data('show-mobile') ? selector.data('show-mobile') : 1,
                scro     = selector.data('scroll') ? selector.data('scroll') : 1,
                tscro    = selector.data('scroll-tablet') ? selector.data('scroll-tablet') : 1,
                mscro    = selector.data('scroll-mobile') ? selector.data('scroll-mobile') : 1,
                gaps     = selector.data('gaps') !== '' ? selector.data('gaps') : 30,
                tgaps    = selector.data('gaps-tablet') !== '' ? selector.data('gaps-tablet') : gaps,
                mgaps    = selector.data('gaps-mobile') !== '' ? selector.data('gaps-mobile') : tgaps,
                pagi     = selector.find('.octf-swiper-pagination'),
                nextEl   = selector.find('.octf-swiper-button-next'),
                prevEl   = selector.find('.octf-swiper-button-prev');
            
            new Swiper( selector, {
                slidesPerView:  show,
                slidesPerGroup: scro,
                loop: false,
                watchOverflow: true,
                autoplay: {
                    delay: 6000,
                    disableOnInteraction: false,
                },
                speed: 800,
                spaceBetween: gaps,
                pagination: {
                    el: pagi,
                    clickable: true,
                },
                navigation: {
                    nextEl: nextEl,
                    prevEl: prevEl,
                },
                breakpoints: {
                    360: {
                        slidesPerView: mshow,
                        slidesPerGroup: mscro,
                        spaceBetween: mgaps,
                    },
                    768: {
                        slidesPerView: tshow,
                        slidesPerGroup: tscro,
                        spaceBetween: tgaps,
                    },
                    1024: {
                        slidesPerView: show,
                        slidesPerGroup: scro,
                        spaceBetween: gaps,
                    },
                }
            });
        });
    };

    /* --------------------------------------------------
    * accordions
    * --------------------------------------------------*/
    var customAccordions = function ($scope, $) {
        $scope.find('.ot-accordions').each( function () {
            var selector = $(this),
                content = selector.find('.acc-content'),
                header  = selector.find('.acc-toggle');

            header.off("click");

            header.each(function(){
                if ($(this).data('default') == 'yes') {
                    $(this).next().addClass('active').slideDown(300);
                    $(this).parent().addClass('current');
                }
            });

            header.on('click', function(e){
                e.preventDefault();
                var $this = $(this);

                $this.next().toggleClass('active').slideToggle(300);
                $this.parent().toggleClass('current');
                content.not($this.next()).slideUp(300);
                header.not($this).parent().removeClass('current');
            });
        });
    };

    /* --------------------------------------------------
    * tabs
    * --------------------------------------------------*/
    var customTabs = function ($scope, $) {

        $scope.find('.ot-tabs').each(function() {
            var selector = $(this),
                tabs     = selector.find('.tabs-heading li'),
                content  = selector.find('.tab-content');
            tabs.first().addClass('current');
            content.first().addClass('current');

            tabs.on( 'click', function(){
                var tab_id = $(this).attr('data-tab');
                $(this).siblings().removeClass('current');
                $(this).parents('.ot-tabs').find('.tab-content').removeClass('current');
                $(this).addClass('current');
                $("#"+tab_id).addClass('current');
            });
        });

        
    };

    /* --------------------------------------------------
    * Process
    * --------------------------------------------------*/
    var processTabs = function ($scope, $) {
        $scope.find('.ot-process[data-tab]').each(function(){
            var selector = $(this);
            selector.find('.process_nav li').first().addClass('current');
            selector.find('.process-des div.process-des-item').hide();
            selector.find('.process-des div.process-des-item').first().show();
            selector.find('.process_nav li').on( 'click', function(){
                $(this).parent().find('li').removeClass('current');
                $(this).addClass('current');
                $(this).parents('.ot-process').find('.process-des div.process-des-item').hide();

                var index = $(this).index();
                $(this).parents('.ot-process').find('.process-des div.process-des-item:eq(' + index + ')').fadeIn(300);
            });
        });
    };

    /* --------------------------------------------------
     * progress bar
     * --------------------------------------------------*/
    function lineProgress() {
        $('.ot-progress:not([data-processed])').each(function() {
            var bar = $(this),
                line = bar.find(".progress-bar"),
                progressEnd = bar.data('percent'),
                percent = bar.find('.ppercent');
            var scrollTop = $(document).scrollTop() + $(window).height();

            if ( scrollTop >  bar.offset().top +  bar.height() ) {
                bar.attr("data-processed", "true");
                line.css("width", (bar.outerWidth() * (progressEnd / 100)) + "px");

                for (var i = 0; i <= 50; i++) {
                    (function (count) {
                        setTimeout(function () {
                            percent.html(Math.round((progressEnd / 50) * count) + "%");
                        }, 30 * count);
                    })(i);
                }
            }
        });
    };

    /* ## Progress bar size */

    function lineProgressSize() {
        $('.ot-progress[data-processed]').each(function () {
            var bar = $(this);
            var line = bar.find(".progress-bar");
            var progressEnd = parseInt(bar.data('percent'));

            line.css("width", (bar.outerWidth() * (progressEnd / 100)) + "px");
        
        });
    }

    function circleProgress() {
        $('.circle-progress:not([data-processed])').each(function() {
            var circle    = $(this),
                bar_color = circle.data('color'),
                bar_hei   = circle.data('height'),
                bar_size  = circle.data('size');
            var scrollTop = $(document).scrollTop() + $(window).height();
            if ( scrollTop >  circle.offset().top +  circle.height() ) {
                circle.attr("data-processed", "true");
                circle.find('.inner-bar').easyPieChart({
                    barColor: bar_color,
                    trackColor: false,
                    scaleColor: false,
                    lineCap: 'square',
                    lineWidth: bar_hei,
                    size: bar_size,
                    animate: 1000,
                    onStart: $.noop,
                    onStop: $.noop,
                    /*easing: 'easeInOut',*/
                    onStep: function(from, to, percent) {
                        $(this.el).find('.percent').text(Math.round(percent) + '%');
                    }
                });
            }
        });
    };
    
    var progressBar = function () {
        lineProgress();
        circleProgress();
    };

    /* --------------------------------------------------
    * message box
    * --------------------------------------------------*/
    var messageBox = function($scope, $){
        $scope.find('.message-box').each( function(){
            var selector = $(this),
                close = selector.find('>i');
            close.on('click', function() {
                $scope.fadeOut();
            });
        });
    };

    /* --------------------------------------------------
    * post grid isotope
    * --------------------------------------------------*/
    var postGrid = function ($scope, $) {   
        $('.blog-grid').each( function(){
            var container = $(this); 
            container.isotope({ 
                itemSelector : '.masonry-post-item', 
                percentPosition: true,
            });
        });        
    };

    /* --------------------------------------------------
	* projects filter isotope
	* --------------------------------------------------*/
    var projectsFilter = function () {
        function updateFilter() {
            $('.project_filters a').each(function() {
                var data_filter = this.getAttribute('data-filter');
                var num = $(this)
                    .closest('.project-filter-wrapper')
                    .find('.project-item')
                    .filter(data_filter).length;
                $(this)
                    .find('.filter-count')
                    .text( num );
            });
        }
        $('.projects-grid').each( function(){
            var $container = $(this); 
            $container.isotope({ 
                itemSelector : '.project-item', 
                animationEngine : 'css',
                masonry: {
                    columnWidth: '.grid-sizer'
                },
                layoutMode: 'fitRows',
            });
    
            var $optionSets  = $(this).closest('.project-filter-wrapper').find('.project_filters'),
                $optionLinks = $optionSets.find('a');
    
            $optionLinks.on('click', function(){
                var $this = $(this);
    
                if ( $this.hasClass('selected') ) {
                    return false;
                }
                var $optionSet = $this.parents('.project_filters');
                    $optionSet.find('.selected').removeClass('selected');
                    $this.addClass('selected');
    
                var selector = $(this).attr('data-filter');
                    $container.isotope({ 
                        filter: selector 
                    });
                return false;
            });
            /* popup gallery */
            if( $container.hasClass('img-popup') ){
                $('.img-popup').lightGallery({
                    selector: '.projects-thumbnail',
                    share: false,
                    pager: false,
                    thumbnail: false
                });
            }
            /* count filters */
            updateFilter();
        });
    };

    /* --------------------------------------------------
	* image gallery
    * --------------------------------------------------*/
    var imageGallery = function ($scope, $) {
        $scope.find('.image-gallery').each( function(){
            var selector = $(this),
                popup   = selector.find('.gallery-icon > a');
            popup.append('<span class="overlay"><i class="ot-flaticon-add"></i></span>');
            selector.lightGallery({
                selector: popup,
                share: false,
                pager: false,
            });
        });
    };

    /* --------------------------------------------------
    * video popup
    * --------------------------------------------------*/
    var videoPopup = function ($scope, $) {
        $scope.find('.video-popup').each( function(){
            var selector = $(this),
                videoItem = selector.find('>div');
            selector.lightGallery({
                selector: videoItem,
            });
        });
    };

    /* --------------------------------------------------
    * image service box popup
    * --------------------------------------------------*/
    var imageServiceBox = function ($scope, $) {
        $scope.find('.service-box').each( function(){
            var selector = $(this),
                imgPopup = selector.find('.image-box > div');
            selector.lightGallery({
                selector: imgPopup,
                share: false,
                pager: false,
            });
        });
    };

    /* --------------------------------------------------
    * coming soon
    * --------------------------------------------------*/
    var countDown = function($scope, $){
        $scope.find('.ot-countdown').each( function(){
            var selector = $(this),
                date     = selector.data('date'),
                zone     = selector.data('zone'),
                day      = selector.data('day'),
                days     = selector.data('days'),
                hour     = selector.data('hour'),
                hours    = selector.data('hours'),
                min      = selector.data('min'),
                mins     = selector.data('mins'),
                second   = selector.data('second'),
                seconds  = selector.data('seconds');
            selector.countdown({
                date: date,
                offset: zone,
                day: day,
                days: days,
                hour: hour,
                hours: hours,
                minute: min,
                minutes: mins,
                second: second,
                seconds: seconds
            }, function () {
                alert('Done!');
            });
        });
    };
    
    /* --------------------------------------------------
    * social team
    * --------------------------------------------------*/
    var socialTeam = function( $scope, $ ){
        $scope.find('.team-wrap').each( function(){
            var selector = $(this).find('.team-social > span');
            selector.on('click', function(){
                $(this).parent().toggleClass('active');
            });
        });
    };

    /* --------------------------------------------------
    * Image Before After
    * --------------------------------------------------*/
    var beforeAfter = function ( $scope , $ ) {
        $scope.find('.twentytwenty-container').each( function(){
            var $selector     = $(this),
                orientation     = $selector.data('orientation'),
                before      = $selector.data('before'),
                after       = $selector.data('after'),
                before_size     = $selector.data('bsize');      
            $selector.twentytwenty({        
                default_offset_pct: before_size, 
                orientation: orientation, 
                before_label: before, 
                after_label: after, 
                no_overlay: false, 
                move_slider_on_hover: false, 
                move_with_handle_only: true, 
                click_to_move: true,
            });     
        }); 
    };

    /* --------------------------------------------------
    * handle after scroll/load/resize
    * --------------------------------------------------*/
    $(window).on('scroll', function() {
        lineProgress();
        circleProgress();
        icounter();
    });
    $(window).on('load', function () {
        lineProgress();
        circleProgress();
        icounter();
    });
    $(window).on('resize', function () {
        lineProgressSize();
    });

    /**
     * Elementor JS Hooks
     */
    $(window).on("elementor/frontend/init", function () {

        /*Counter*/
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/icounter.default",
            counter
        );

        /*Testimonials*/
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/itestimonials.default",
            testimonialSlider
        );

        /*Testimonials 2*/
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/itestimonials2.default",
            testimonialSlider2
        );

        /*Custom accordions*/
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/iaccordions.default",
            customAccordions
        );

        /*Custom tabs*/
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/itabs.default",
            customTabs
        );

        /*Process tabs*/
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/iprocessbox.default",
            processTabs
        );

        /*Progress bar*/
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/iprogress.default",
            progressBar
        );

        /*Image carousel*/
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/theratio-image-carousel.default",
            imageCarousel
        );

        /*Blog carousel*/
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/ipost_carousel.default",
            blogCarousel
        );

        /*Team carousel*/
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/imembercarousel.default",
            teamCarousel
        );
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/imembercarousel.default",
            socialTeam
        );

        /*Latest Project carousel*/
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/irprojects.default",
            latestProjectCarousel
        );

        /*Message box*/
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/imessagebox.default",
            messageBox
        );

        /*Post grid*/
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/ipost_grid.default",
            postGrid
        );

        /*projects filter isotope*/
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/ipfilter.default",
            projectsFilter
        );
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/ipfilter_metro.default",
            projectsFilter
        );

        /*gallery*/
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/igimages.default",
            imageGallery
        );

         /*video popup*/
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/ivideopopup.default",
            videoPopup
        );

        /*Service box*/
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/theratio-service-box.default",
            imageServiceBox
        );

        /*countdown*/
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/icountdown.default",
            countDown
        );

        /*Team*/
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/imember.default",
            socialTeam
        );

        /*Image Before After*/
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/ibeforeafter.default",
            beforeAfter
        );
    });

} )( jQuery );