$(document).ready(function(){
    $('.header .nav_a').css({'display': 'none'});
    $('.header .nav_a').css({'opacity': '0'});

    $(document).scroll(function(){
        var subscroll = $(document).scrollTop();

    
        if (subscroll > 0) {
            $('.header').addClass('fixed');
            $('.header .nav_a').css({'display': 'inline-block'});
            $('.header .nav_a').stop().animate({'opacity': '1'}, 300);

        }else{
            $('.header').removeClass('fixed');
            $('.header .nav_a').stop().animate({'opacity': '0'}, 300);

        }
        
    });
    $(window).scroll(function () {
        var scrollY = ($(window).scrollTop() / ($(document).height() - $(window).height()) * 100).toFixed(3);
        $(".sc_color").css({"width": scrollY + "%"});
      });

    $('.header .nav_a').click(function(){
        $('body, html').stop().animate({scrollTop: '0'}, 500);
        return false;
    });

    var winW = $(window).innerWidth();
    var footer = parseInt($('.footer').innerHeight());
    
    if(winW < 768) {
        $('.gotop_area').css({'bottom': footer + parseInt(20) + 'px'});
        $('.gotop_area').css({'right': '16px'});
    }else{
        detectBottom();
        $('.gotop_area').css({'right': '5vw'});
    }

    $(document).scroll(function(){
        if(winW < 768) {
            $('.gotop_area').css({'bottom': footer + parseInt(20) + 'px'});
            $('.gotop_area').css({'right': '16px'});
        }else{
            detectBottom();
            $('.gotop_area').css({'right': '5vw'});
        }
    });

    $(window).resize(function(){
        var changeW = $(window).innerWidth();
        // console.log(changeW)

        if(changeW < 768) {
            $('.gotop_area').css({'bottom': footer + parseInt(20) + 'px'});
            $('.gotop_area').css({'right': '16px'});
        }else{
            detectBottom();
            $('.gotop_area').css({'right': '5vw'});
        }
    });

    $('.gotop').click(function(){
        $('body, html').stop().animate({scrollTop: '0'}, 500);
    });



});

function detectBottom() {
    var scrollTop = $(window).scrollTop();
    var innerHeight = $(window).innerHeight();
    var scrollHeight = $('body').prop('scrollHeight');

    var footer = parseInt($('.footer').innerHeight());

    if (scrollTop + innerHeight >= scrollHeight) {
        $('.gotop_area').css({'bottom': footer + parseInt(50) + 'px'});

    } else {
        $('.gotop_area').css({'bottom': '50px'});
    }
}