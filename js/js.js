$(document).ready(function(){

    var section1 = $('.sc1').offset().top;
    var section2 = $('.sc2').offset().top;
    var section4 = $('.sc4 .category').offset().top;
    var section5 = $('.sc5').offset().top;

    $('.sc1 .view_btn').mouseenter(function(){
        $('.view_btn .hoverbg').stop().animate({'width': '100%'}, 300);
        $('.view_btn').css({'color': 'white'}, 300);
    });
    $('.sc1 .view_btn').mouseleave(function(){
        $('.view_btn .hoverbg').stop().animate({'width': '0%'}, 300);
        $('.view_btn').css({'color': '#2C3A3A'}, 300);
    });

    $(window).scroll(function () {
        var scrollY = ($(window).scrollTop() / ($(document).height() - $(window).height()) * 100).toFixed(3);
        $(".sc_color").css({"width": scrollY + "%"});
      });

    $(document).scroll(function(){
        
        $('.nav_a').removeClass('on');
        var scrollTop = $(document).scrollTop();
        
        if (scrollTop > 0) {
            $('.header').addClass('fixed');
        }else{
            $('.header').removeClass('fixed');
        }

        if(scrollTop > section5 - 50) {
            $('.nav_a').addClass('white');
        }else{
            $('.nav_a').removeClass('white');
        }

        if(scrollTop > section5 - 60){
            $('.nv4').addClass('on');

        }else if(scrollTop > $('.sc4').offset().top - 50){
            $('.nv3').addClass('on');

        }else if(scrollTop > section2 - 60){
            $('.nv2').addClass('on');

        }else if(scrollTop > section1){
            $('.nv1').addClass('on');

        }else if(scrollTop == '0'){
            $('.nav_a').removeClass('on');
        }

    });

    $('.header .logo_a').click(function(){
        $('body, html').stop().animate({scrollTop: '0'}, 500);
        return false;
    });

    $('.header .nav_li').click(function(){
        var idx = $(this).index();


        if(idx == '0'){
            $('body, html').stop().animate({scrollTop: 0}, 500);
        }else if(idx == '1'){
            $('body, html').stop().animate({scrollTop: section2 - 50 + 'px'}, 500);
        }else if(idx == '2'){
            $('body, html').stop().animate({scrollTop: section4 - 120 + 'px'}, 500);
        }else if(idx == '3'){
            $('body, html').stop().animate({scrollTop: section5 - 50 + 'px'}, 500);
        }

        return false;
    });

    $('.sc1 .view_btn').click(function(){
        $('body, html').stop().animate({scrollTop: section4 - 120 + 'px'}, 1000);
    });


    $('.sc4 .port_box .btn').mouseenter(function(){
        $(this).find('.bar').stop().animate({'width': '55%'}, 300);
    });
    $('.sc4 .port_box .btn').mouseleave(function(){
        $(this).find('.bar').stop().animate({'width': '0%'}, 300);
    });


    $('.port_box .img_area, .port_box .text_area').click(function(){
        if($(this).parent().hasClass('exit')){
            location.href='exit.html';
        }
        else if($(this).parent().hasClass('nest')){
            location.href='nest.html';
        }
        else if($(this).parent().hasClass('medifine')){
            location.href='medifine.html';
        }
        else if($(this).parent().hasClass('lawpaper')){
            location.href='lawpaper.html';
        }
        else if($(this).parent().hasClass('smmakers')){
            location.href='smmakers.html';
        }
        else if($(this).parent().hasClass('moja')){
            location.href='moja.html';
        }
        else if($(this).parent().hasClass('incom')){
            location.href='incom.html';
        }
        else if($(this).parent().hasClass('gain')){
            location.href='gain.html';
        }
        else if($(this).parent().hasClass('trip')){
            location.href='trip.html';
        }

        return false;
    });

    $('.sc4 .category .cate_a').click(function(){
        
        $('.cate_a').removeClass('on');
        $(this).addClass('on');
        var idx = $(this).parent().index();

        $('.sc4 .port_box').removeClass('on');

        if(idx == '0'){
            $('.sc4 .port_wrap .cate1').addClass('on');
            $('.sc4 .port_wrap .cate2').addClass('on');
        }
        else if(idx == '1'){
            $('.sc4 .port_wrap .cate1').addClass('on');
        }
        else if(idx == '2'){
            $('.sc4 .port_wrap .cate2').addClass('on');
        }

        return false
    });
    

    var winW = $(window).innerWidth();
    var footer = parseInt($('.footer').innerHeight());
    
    detectBottom();

    $(document).scroll(function(){
        detectBottom();
    });

    $(window).resize(function(){
        detectBottom();
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