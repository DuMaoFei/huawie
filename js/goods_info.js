window.onload=function(){
    var dropdown=document.getElementsByClassName('s-dropdown');
for (var i = 0; i < dropdown.length; i++) {
    dropdown[i].onmouseenter=function(){
        this.children[1].style.display="block";
    }
    dropdown[i].onmouseleave=function(){
        this.children[1].style.display="none";
    }
}
}    
$(function(){
    $('.text').blur(function(){
        $('.searchBar-key').css({
            display:"block"
        })
    })
    $('.text').focus(function(){
        $('.searchBar-key').css({
            display:"none"
        })
    })

    var i=0;
    $('.tab-coupon .top a').click(function(){
        i++;
        if(i%2==0){
            $(this).children('i').css({
            "background-position": "-22px -8px "
        })
        $(this).html('收起<i></i>');
       $('.tab-coupon .p-list').slideDown();
        }else{
            $(this).children('i').css({
            "background-position": "-22px 0px "
        })
            $(this).html('展开<i></i>');
        $('.tab-coupon .p-list').slideUp();
        }
       
    })
    var timer;
    var a=0;
    var b;
    var num=0;
    $('.btn').click(function(){
        $(this).addClass('bg_btn');
        clearInterval(timer);
        timer=setInterval(function(){
            num++;
            b=parseInt(Math.random()*10)+20;
            $('#uls li').eq(a).addClass('active');
            $('#uls li').eq(a).siblings('li').removeClass('active');
            a++;
            if(a>$('#uls li').length){
                a=0;
            }
            if(num>b){
                clearInterval(timer);
                $('.btn').removeClass('bg_btn');
                num=0;
                a=0;
            }
        },200)
       
    })
    $('.mod-award .award-more').click(function(){
        $('.award-mores-bg').css({display:"block"});
    })
    $('.mores-close').click(function(){
        $('.award-mores-bg').css({display:"none"});
    })
    $('.mores-btn').click(function(){
        $('.award-mores-bg').css({display:"none"});
    })
    var bms=137;
    var timers;
    clearInterval( timers);
    timers=setInterval(() => {
        var lis=$('<li>13458*****抽中<span> 荣耀5元券</span></li>');
        $(".award-bottom ul").append(lis);
        bms--;
        $('.award-bottom ul').css({
            transform: "translate(0px,"+bms+"px)",
        })
      
        
    }, 10);
  
    $('.award-bottom ul').hover(function () { 
        clearInterval( timers);
    },function(){
        clearInterval( timers);
        timers=setInterval(() => {
            bms--;
            $('.award-bottom ul').css({
                transform: "translate(0px,"+bms+"px)",
            })
           
        }, 10);
    });
   
})
$(function(){
    $('.naver-list-li').hover(function(){
        $(this).children('.naver-info').stop().slideDown(500);
        $(this).siblings().children('.naver-info').css({
            display: "none"
        })
    },function(){
        $(this).children('.naver-info').stop().slideUp();
    })
    $(' .content-left-list li').mouseenter(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        var index=$(this).index();
         $('.content-left .show img').eq(index).addClass('active-img');
         $('.content-left .show img').eq(index).siblings().removeClass('active-img');
         var attrs=$('.content-left .show img').eq(index).attr('src');
         $('.magnify').css({
            background: "url("+attrs+") no-repeat"
         })
         $('.magnify-bg').css({
            "background-color": "#fff"
         })

    })
    var lefts=0;
    $('.lun-btn-rigth').click(function(){
        if(lefts<=(($(".content-left-list li").length-1)-5)){
            $(".content-left-list").css({
            left:-68*(++lefts)+"px"
        })
        }
       
    })
    $('.lun-btn-left').click(function(){
        if(lefts>0){
            $(".content-left-list").css({
            left:-68*(--lefts)+"px"
        })
        }
    })
    var x=0;
    var y=0;
    $('.content-left .show').hover(function(){
        $('.content-left .show').mousemove(function(e){
            x=e.clientX-$('.show-chunk').width()-15;
            y=e.clientY-$('.show-chunk').height()-50;
            if(x<0){
                x=0;
            }else if(x>($('.content-left .show').width()-$('.show-chunk').width())){
                x=$('.content-left .show').width()-$('.show-chunk').width();
            }
            if(y<0){
                y=0;
            }else if(y>($('.content-left .show').height()-$('.show-chunk').height())){
                y=$('.content-left .show').height()-$('.show-chunk').height();
            }
            $('.content-left .show .show-chunk').css({
                top:y+"px",
                left:x+"px",
                display:"block"
            })
            var a=x;
            var b=y;
            if(a<0){
                a-=200;
            }else if(a>100){
                a+=100;
            }
            if(b<0){
                b-=200;
            }else if(b>200){
                b+=200;
            }
            $('.magnify').css({
                display:'block',
                "background-position-x":-a+"px",
                "background-position-y":-b+"px",
            })
    })
   
    },function(){
        $('.content-left .show .show-chunk').css({
                display:"none"
            })
        $('.magnify').css({
            display:"none"
        })    
    })
    $('.val-1-value tr td').click(function(){
        var html=$(this).html();
        $('.val-1').html(html);
    })
    $('.pro-skus li').click(function(){
        $(this).addClass('active-color');
        $(this).siblings('li').removeClass('active-color');
    })
    function fontText(a){
        $(".font-text:nth-of-type("+a+") span").click(function(){
        $(this).addClass('active-font-color');
        $(this).siblings().removeClass('active-font-color');
        })
    }
    fontText(1);
    fontText(2);
    fontText(4);
    fontText(5);
    var btn_a=1;
    $('.buy-btn .btn-a:first').click(function(){
            btn_a++;
            $('.buy input').val(btn_a);
            if(btn_a>1){
                $('.buy-btn .btn-a:last').removeClass('disabled');
            }
           
    })
    $('.buy-btn .btn-a:last').click(function(){
            btn_a--;
            if( btn_a<1){
            $(this).addClass('disabled');
            btn_a=1;    
            }
            $('.buy input').val(btn_a);
    })
    $('.particulars-nav li').click(function(){
        $(this).addClass('active-font');
        $(this).siblings('li').removeClass('active-font');
    })
    $('.hide-img .btn-hide').click(function(){
        $('.hide-img ').css('display','none');
        $('.hide').css('display','block');
        $('.show-img .btn-show').show();
    })
    $('.show-img .btn-show').click(function(){
        $('.hide-img ').css('display','block');
        $('.hide').css('display','none');
        $(this).hide();
    })
    var nav_top=$('.particulars-nav').offset().top;
    $(window).scroll(function(){
        if($(this).scrollTop()>nav_top){
          $('.nav-particulars').addClass('fixeds');
          $('.buy .both:first').addClass('fixed-btn');
          $('.to-top').css("display","block");
        }else{
            $('.nav-particulars').removeClass('fixeds');
            $('.buy .both:first').removeClass('fixed-btn');
            $('.to-top').css("display","none");
        }
    })
    $('.to-top').click(function(){
        $('html,body').animate({
            "scrollTop":"0px"
        },500)
    })

    $('.particulars-nav li.skip').click(function(){
        
        $('html,body').animate({
            "scrollTop":($('.skips').offset().top-80)+"px"
        },500)
    })

    $('.particulars-nav li.skip1').click(function(){
        
        $('html,body').animate({
            "scrollTop":($('.product-title').offset().top-160)+"px"
        },500)
    })
   
})