
!function(){function e(){var e=!1;e&&c("keydown",a),v.keyboardSupport&&!e&&u("keydown",a)}function t(){if(document.body&&!is_touch_device()){var t=document.body,r=document.documentElement,o=window.innerHeight,a=t.scrollHeight;if(S=document.compatMode.indexOf("CSS")>=0?r:t,x=t,e(),k=!0,top!=self)b=!0;else if(a>o&&(t.offsetHeight<=o||r.offsetHeight<=o)&&(r.style.height="auto",setTimeout(refresh,10),S.offsetHeight<=o)){var n=document.createElement("div");n.style.clear="both",t.appendChild(n)}v.fixedBackground||g||(t.style.backgroundAttachment="scroll",r.style.backgroundAttachment="scroll")}}function r(e,t,r,o){if(o||(o=1e3),d(t,r),1!=v.accelerationMax){var a=+new Date,n=a-z;if(n<v.accelerationDelta){var i=(1+30/n)/2;i>1&&(i=Math.min(i,v.accelerationMax),t*=i,r*=i)}z=+new Date}if(C.push({x:t,y:r,lastX:0>t?.99:-.99,lastY:0>r?.99:-.99,start:+new Date}),!T){var l=e===document.body,u=function(a){for(var n=+new Date,i=0,c=0,s=0;s<C.length;s++){var d=C[s],f=n-d.start,h=f>=v.animationTime,m=h?1:f/v.animationTime;v.pulseAlgorithm&&(m=p(m));var w=d.x*m-d.lastX>>0,g=d.y*m-d.lastY>>0;i+=w,c+=g,d.lastX+=w,d.lastY+=g,h&&(C.splice(s,1),s--)}l?window.scrollBy(i,c):(i&&(e.scrollLeft+=i),c&&(e.scrollTop+=c)),t||r||(C=[]),C.length?K(u,e,o/v.frameRate+1):T=!1};K(u,e,0),T=!0}}function o(e){k||t();var o=e.target,a=l(o);if(!a||e.defaultPrevented||s(x,"embed")||s(o,"embed")&&/\.pdf/i.test(o.src))return!0;var n=e.wheelDeltaX||0,i=e.wheelDeltaY||0;return n||i||(i=e.wheelDelta||0),!v.touchpadSupport&&f(i)?!0:(Math.abs(n)>1.2&&(n*=v.stepSize/120),Math.abs(i)>1.2&&(i*=v.stepSize/120),r(a,-n,-i),void e.preventDefault())}function a(e){var t=e.target,o=e.ctrlKey||e.altKey||e.metaKey||e.shiftKey&&e.keyCode!==M.spacebar;if(/input|textarea|select|embed/i.test(t.nodeName)||t.isContentEditable||e.defaultPrevented||o)return!0;if(s(t,"button")&&e.keyCode===M.spacebar)return!0;var a,n=0,i=0,u=l(x),c=u.clientHeight;switch(u==document.body&&(c=window.innerHeight),e.keyCode){case M.up:i=-v.arrowScroll;break;case M.down:i=v.arrowScroll;break;case M.spacebar:a=e.shiftKey?1:-1,i=-a*c*.9;break;case M.pageup:i=.9*-c;break;case M.pagedown:i=.9*c;break;case M.home:i=-u.scrollTop;break;case M.end:var d=u.scrollHeight-u.scrollTop-c;i=d>0?d+10:0;break;case M.left:n=-v.arrowScroll;break;case M.right:n=v.arrowScroll;break;default:return!0}r(u,n,i),e.preventDefault()}function n(e){x=e.target}function i(e,t){for(var r=e.length;r--;)A[N(e[r])]=t;return t}function l(e){var t=[],r=S.scrollHeight;do{var o=A[N(e)];if(o)return i(t,o);if(t.push(e),r===e.scrollHeight){if(!b||S.clientHeight+10<r)return i(t,document.body)}else if(e.clientHeight+10<e.scrollHeight&&(overflow=getComputedStyle(e,"").getPropertyValue("overflow-y"),"scroll"===overflow||"auto"===overflow))return i(t,e)}while(e=e.parentNode)}function u(e,t,r){window.addEventListener(e,t,r||!1)}function c(e,t,r){window.removeEventListener(e,t,r||!1)}function s(e,t){return(e.nodeName||"").toLowerCase()===t.toLowerCase()}function d(e,t){e=e>0?1:-1,t=t>0?1:-1,(y.x!==e||y.y!==t)&&(y.x=e,y.y=t,C=[],z=0)}function f(e){if(e){e=Math.abs(e),H.push(e),H.shift(),clearTimeout(E);var t=H[0]==H[1]&&H[1]==H[2],r=h(H[0],120)&&h(H[1],120)&&h(H[2],120);return!(t||r)}}function h(e,t){return Math.floor(e/t)==e/t}function m(e){var t,r,o;return e*=v.pulseScale,1>e?t=e-(1-Math.exp(-e)):(r=Math.exp(-1),e-=1,o=1-Math.exp(-e),t=r+o*(1-r)),t*v.pulseNormalize}function p(e){return e>=1?1:0>=e?0:(1==v.pulseNormalize&&(v.pulseNormalize/=m(1)),m(e))}var w={frameRate:150,animationTime:400,stepSize:120,pulseAlgorithm:!0,pulseScale:8,pulseNormalize:1,accelerationDelta:20,accelerationMax:1,keyboardSupport:!0,arrowScroll:50,touchpadSupport:!0,fixedBackground:!0,excluded:""},v=w,g=!1,b=!1,y={x:0,y:0},k=!1,S=document.documentElement,x,D,H=[120,120,120],M={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},v=w,C=[],T=!1,z=+new Date,A={};setInterval(function(){A={}},1e4);var N=function(){var e=0;return function(t){return t.uniqueID||(t.uniqueID=e++)}}(),E,K=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(e,t,r){window.setTimeout(e,r||1e3/60)}}(),L=/chrome/i.test(window.navigator.userAgent),q="onmousewheel"in document;q&&L&&(u("mousedown",n),u("mousewheel",o),u("load",t))}();

/* --- */

function is_touch_device() {
    return ('ontouchstart' in document.documentElement);
}
jQuery.exists = function(selector) {
    return (jQuery(selector).length > 0);
};

(function($) {

    $(document).ready(function() {
        mk_animated_contents();
        mk_lightbox_init();
        mk_gallery_lightbox_init();
        mk_backgrounds_parallax();
        mk_flexslider_init();
        mk_event_countdown();
        mk_skill_meter();
        mk_charts();
        mk_milestone();
        mk_swipe_slider();
        mk_ajax_search();
        mk_hover_events();
        mk_portfolio_ajax();
        mk_love_post();
        product_loop_add_cart();
        mk_social_share();
        mk_newspaper_comments_share();
        mk_responsive_fix();
        loop_audio_init();
        mk_portfolio_widget();
        mk_contact_form();
        mk_blog_carousel();
        mk_responsive_nav();
        mk_header_searchform();
        mk_click_events();
        mk_theme_toggle_box();
        mk_google_maps();
        mk_edge_slider_init();
        mk_edge_slider_resposnive();
        mk_smooth_scroll_events();
    });

    $(window).load(function() {
        mk_blur_boxes();
        mk_parallax();
        shop_isotop_init();
        mk_tabs();
        mk_accordion_toggles_tooltip();
        section_to_full_height();
    });


    $(window).on("debouncedresize", function() {
        section_to_full_height();
        mk_responsive_fix();
        setTimeout(function() {
            mk_edge_slider_resposnive();
        }, 200);

    });


    $(window).scroll(function() {
        mk_skill_meter();
        mk_charts();
        mk_milestone();
        mk_animated_contents();
    });



    /* Initialize isiotop for newspaper style */
    /* -------------------------------------------------------------------- */

    function loops_iosotop_init() {

        "use strict";

        $('.loop-main-wrapper').each(function() {
            var $this = $(this),
                $mk_container = $this.find('.mk-theme-loop'),
                $mk_container_item = '.mk-' + $mk_container.attr('data-style') + '-item',
                $load_button = $this.find('.mk-loadmore-button'),
                $pagination_items = $this.find('.mk-pagination');

            $mk_container.isotope({
                itemSelector: $mk_container_item,
                animationEngine: "best-available",
                masonry: {
                    columnWidth: 1
                }

            });


            $load_button.hide();

            if ($this.find('.mk-theme-loop').hasClass('scroll-load-style') || $this.find('.mk-theme-loop').hasClass('load-button-style')) {
                if ($pagination_items.length > 0) {
                    $load_button.css('display', 'block');
                }
                $pagination_items.hide();


                $load_button.on('click', function() {
                    if (!$(this).hasClass('pagination-loading')) {
                        $(this).addClass('pagination-loading');
                    }

                });

                $mk_container.infinitescroll({
                        navSelector: $pagination_items,
                        nextSelector: $this.find('.mk-pagination a:first'),
                        itemSelector: $mk_container_item,
                        bufferPx: 70,
                        loading: {
                            finishedMsg: "",
                            img: mk_images_dir + "/load-more-loading.gif",
                            msg: null,
                            msgText: "",
                            selector: $load_button,
                            speed: 300,
                            start: undefined
                        },
                        errorCallback: function() {

                            $load_button.html(mk_no_more_posts).addClass('disable-pagination');

                        },

                    },

                    function(newElements) {

                        var $newElems = $(newElements);
                        $newElems.imagesLoaded(function() {
                            $load_button.removeClass('pagination-loading');


                            var selected_item = $('#mk-filter-portfolio ul').find('.current').attr('data-filter');

                            $mk_container.isotope('appended', $newElems);
                            $mk_container.isotope({
                                filter: ''
                            });
                            $mk_container.isotope({
                                filter: selected_item
                            });

                            $mk_container.isotope('reLayout');
                            loop_audio_init();
                            mk_portfolio_ajax();
                            mk_newspaper_comments_share();
                            mk_ajax_lightbox_init();
                            mk_ajax_gallery_lightbox_init();
                            mk_social_share();
                            mk_theme_toggle_box();
                        });
                    }

                );



                /* Loading elements based on scroll window */
                if ($this.find('.mk-theme-loop').hasClass('load-button-style')) {
                    $(window).unbind('.infscr');
                    $load_button.click(function() {

                        $mk_container.infinitescroll('retrieve');

                        return false;

                    });
                }

            } else {
                $load_button.hide();
            }
        });
    }


    function mk_edge_slider_resposnive() {

        "use strict";

        $('.mk-edge-slider').each(function() {


            var $this = $(this),
                $items = $this.find('.edge-slider-holder, .swiper-slide'),
                $height = $this.attr('data-height'),
                $fullHeight = $this.attr('data-fullHeight');

            var $window_height = $(window).outerHeight();


            if ($.exists('#wpadminbar')) {
                $window_height = $window_height - $('#wpadminbar').outerHeight();
            }


            if ($.exists('.mk-header-toolbar')) {
                $window_height = $window_height - $('.mk-header-toolbar').outerHeight();
            }


            if ($.exists('.mk-header-inner')) {
                if ($this.parents('#mk-header').length > 0) {
                    var $header_height = $('#mk-header').attr('data-height');
                } else {
                    var $header_height = $('#mk-header').attr('data-sticky-height') - 30;
                }

            } else {
                var $header_height = 0;
            }



            if ($(window).width() < 780) {

                $window_height = 600;

            } else if ($fullHeight == 'true') {

                $window_height = $window_height - $header_height;

            } else {

                $window_height = $height;
            }

            $items.css('height', $window_height);

            $this.find('.swiper-slide').each(function() {


                var $this = $(this),
                    $content = $this.find('.edge-slide-content');

                if ($this.hasClass('left_center') || $this.hasClass('center_center') || $this.hasClass('right_center')) {

                    var $this_height_half = $content.outerHeight() / 2,
                        $window_half = $window_height / 2;

                    $content.css('marginTop', ($window_half - $this_height_half));
                }

                if ($this.hasClass('left_bottom') || $this.hasClass('center_bottom') || $this.hasClass('right_bottom')) {

                    var $distance_from_top = $window_height - $content.outerHeight() - 90;

                    $content.css('marginTop', ($distance_from_top));
                }

            });

            $this.find('.edge-skip-slider').bind("click", function() {
                console.log($window_height);
                $("html, body").stop(true, true).animate({
                    scrollTop: $window_height + 40,
                    easing: "easeInOutExpo"
                }, 500);

            });

        $this.find('.edge-slider-loading').fadeOut();
        });

    }

})(jQuery);