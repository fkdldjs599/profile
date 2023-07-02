$(document).ready(function(){
    parallex();
    portSlide();
})

function parallex(){
    var section = $('section')
    var menu = $('.gnb').children()
    var contentArr;
    var windowH = $(window).innerHeight()

    setPos();

    $(window).on('resize', setPos)
    function setPos(){
        contentArr=[]
        section.each(function(index){
            contentArr.push(section.eq(index).offset().top)
        })
        //console.log(contentArr)
    }
    $(document).on('scroll', onScroll)
    function onScroll(){
        var scrollH = $(document).scrollTop()
        activation(scrollH)
    }
    function activation(scrollH){
        menu.each(function(index){
            if(scrollH >= contentArr[index] - 300){
                menu.removeClass('active')
                menu.eq(index).addClass('active')
            }
        })
    }

    menu.on('click', menuActive)
    function menuActive(e){
        e.preventDefault();
        var menuNum = menu.index($(this))
        //console.log(menuNum)
        var target = menu.eq(menuNum).children().attr('href')
        //console.log(target)
        var targetPos = $(target).offset().top;
        //console.log(targetPos)

        $('body,html').stop().animate({'scroll-top':targetPos},500)
    }

    section.on('wheel', onWheel)
    function onWheel(e){
        if(windowH > 800){
            if(e.originalEvent.deltaY < 0){
                if($(this).index()!=0){
                    var item = $(this).index()
                    //console.log(section.size())
                    $('body,html').stop().animate({'scroll-top':contentArr[item-1]},500)
                }
            }else{
                if($(this).index() != section.size()-1){
                    var item = $(this).index()
                    moveScroll(item+1)
                }
            }
        }
    }
    function moveScroll(item){
        $('body,html').stop().animate({'scroll-top':contentArr[item]},500)
    }
}

function portSlide(){
    var ulList = $('.port-wrap')
    var portList = ulList.children();
    var timer
    
    ulList.css({'width': 353 * portList.size() + (20 * (portList.size() - 1))})

    ulList.children().last().prependTo(ulList)
    ulList.css({'margin-left':-portList.width() - 20})

    autoPlay();

    function autoPlay(){
        timer = setInterval(nextSlide,5000)
    }
    function nextSlide(){
        ulList.stop().animate({'margin-left':-(portList.width() * 2) - 40},500,function(){
        ulList.children().first().appendTo(ulList);
        ulList.css({'margin-left': -portList.width() - 20})
        })
    }
}