$(document).ready(function(){
    parallex();
    portSlide();
})

function parallex(){
    var section = $('section');
    var menu = $('.gnb').children();
    var contentArr;
    var windowH = $(window).innerHeight();

    setPos();

    //윈도우 resize 될때마다 빈 배열에 각 섹션 top 위치값을 배열에 저장
    $(window).on('resize', setPos);

    function setPos(){
        contentArr=[] //빈 배열
        section.each(function(index){
            contentArr.push(section.eq(index).offset().top); //각 섹션의 top 위치값을 빈 배열에 추가
        });
    }



    $(document).on('scroll', onScroll);

    function onScroll(){
        var scrollH = $(document).scrollTop();
        activation(scrollH);
    }
    function activation(scrollH){
        menu.each(function(index){
            if(scrollH >= contentArr[index] - 300){ //배열의 index번째값 - 300 보다 scrollH 값이 크면
                menu.removeClass('active');
                menu.eq(index).addClass('active'); //index번째 메뉴에 active 활성화
            }
        })
    }

    menu.on('click', menuActive)
    function menuActive(e){
        e.preventDefault(); //a 태그 막음

        var menuNum = menu.index($(this)) //this의 순번
        // console.log(menuNum)
        var target = menu.eq(menuNum).children().attr('href')
        //console.log(target)
        var targetPos = $(target).offset().top; //href의 top위치값
        //console.log(targetPos)

        $('body,html').stop().animate({'scrollTop':targetPos},500);
    }

    // section.on('wheel', onWheel)
    // function onWheel(e){
    //     if(windowH > 800){
    //         if(e.originalEvent.deltaY < 0){
    //             if($(this).index()!=0){
    //                 var item = $(this).index()
    //                 //console.log(section.size())
    //                 $('body,html').stop().animate({'scroll-top':contentArr[item-1]},500)
    //             }
    //         }else{
    //             if($(this).index() != section.size()-1){
    //                 var item = $(this).index()
    //                 moveScroll(item+1)
    //             }
    //         }
    //     }
    // }


    // function moveScroll(item){
    //     $('body,html').stop().animate({'scroll-top':contentArr[item]},500)
    // }
}

function portSlide(){
    var ulList = $('.port-wrap');
    var portList = ulList.children(); //li
    var timer;
    var prev = $('.port').children('.inner').children('.prev');
    var next = $('.port').children('.inner').children('.next');
    
    //슬라이드 전체 길이 길게 넓힘
    ulList.css({'width': 353 * portList.size() + (20 * (portList.size() - 1))});

    //처음 상태에서 prev 누를걸 대비해서 맨앞에 li를 하나 추가해둠
    ulList.children().last().prependTo(ulList);
    ulList.css({'margin-left':-portList.width() - 20});

    prev.on('click', function(){
        prevSlide();
    })
    next.on('click', function(){
        nextSlide();
    })

    autoPlay();

    function autoPlay(){
        timer = setInterval(nextSlide,5000);
    }
    function nextSlide(){
        ulList.stop().animate({'margin-left':-(portList.width() * 2) - 40},500,function(){
            ulList.children().first().appendTo(ulList);
            ulList.css({'margin-left': -portList.width() - 20});
        })
    }
    function prevSlide(){
        ulList.stop().animate({'margin-left':0},500,function(){
            ulList.children().last().prependTo(ulList);
            ulList.css({'margin-left': -portList.width() - 20});
    })

}
}