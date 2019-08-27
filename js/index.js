$(function(){
	//大轮播
	var timer;
	var i = 0;
	var lis = $('.lunbo .lunbo-pic li');
	var ols = $('.lunbo ol li');
	autoPlay();
	lis.mouseenter(function(event) {
		clearInterval(timer);
	});
	lis.mouseleave(function(event) {
		autoPlay();
	});
	ols.mouseenter(function(event) {
		i = $(this).index();
		changeImgPoint(i);
		autoPlay();
	});
	// 点击按钮显示左边的图片 对应的小圆点变白
	$('.lunbo .left-btn').click(function(event) {
		clearInterval(timer);
		i--;
		if (i<0) {
			i = lis.length-1;
		}
		changeImgPoint(i);
	});
	// 点击按钮显示右边的图片 对应的小圆点变白
	$('.lunbo .right-btn').click(function(event) {
		clearInterval(timer);
		i++;
		if (i>lis.length-1) {
			i = 0;
		}
		changeImgPoint(i);
	});
	// 改变显示的图片及圆点样式
	function changeImgPoint(i){
		lis.eq(i).stop().animate({opacity:1},500);
		lis.eq(i).siblings().stop().animate({opacity:0},500);
		ols.eq(i).addClass('current');
		ols.eq(i).siblings().removeClass('current');
	}
	// 定时器轮播
	function autoPlay(){
		clearInterval(timer);
		timer = setInterval(function(){
			// 图片播放
			i++;
			if (i>lis.length-1) {
				i = 0;
			}
			changeImgPoint(i);
		},4000);
	}
	//公告小轮播
	var timer2;
	var j=0;
	var step = $('.home-channel .info-box').height();
	var notice_ul = $('.home-channel .notice-info');
	autoPlayNotice();
	notice_ul.children('li').mouseenter(function(event) {
		clearInterval(timer2);
	});
	notice_ul.children('li').mouseleave(function(event) {
		autoPlayNotice();
	});
	function autoPlayNotice(){
		timer2 = setInterval(function(){
		j++;
		if (j>4) {
			j = 0;
		}
		notice_ul.animate({'margin-top':-step*j+'px'},500);
	},3000);
	}
	//精品推荐
	var k = 0;
	var step2 = 1210;
	$('.recommend .arrow-left').click(function(event) {
		$('.recommend .arrow-right').css('display', 'block');
		k--;
		if (k==0) {
			$(this).css('display', 'none');
		}
		$(this).parent().animate({'margin-left':-step2*k+'px'},400);
	});
	$('.recommend .arrow-right').click(function(event) {
		$('.recommend .arrow-left').css('display', 'block');
		k++;
		if (k>1) {
			$(this).css('display', 'none');
		}
		$(this).parent().animate({'margin-left':-step2*k+'px'},400);
	});
	//精品推荐下方轮播
	var timer3;
	var m=0;
	var mid_lis = $('.middle-banner ul li');
	var mid_ol = $('.middle-banner ol li');
	autoPlayMid();
	mid_ol.mouseover(function(event) {
		var m_index = $(this).index();
		m = m_index;
		changeMid(m);
		autoPlayMid();
	});
	mid_lis.mouseenter(function(event) {
		clearInterval(timer3);
	});
	mid_lis.mouseleave(function(event) {
		autoPlayMid();
	});
	function autoPlayMid(){
		clearInterval(timer3);
		timer3 = setInterval(function(){
		m++;
		if (m>mid_lis.length-1) {
			m = 0;
		}
		changeMid(m);
		},5000);
	}
	function changeMid(m){
		mid_lis.eq(m).stop().animate({'opacity':1},500);
		mid_lis.eq(m).siblings().stop().animate({'opacity':0},500);
		mid_ol.eq(m).addClass('current');
		mid_ol.eq(m).siblings().removeClass('current');
	}
	//楼梯导航
	//出现时在窗口的竖直方向上居中
	//先获取高度 设置margin-top为-(高度/2) css中设置top:50%
	var lift_h = $('.lift').height();
	$('.lift').css('margin-top', -lift_h/2);
	/*页面滚动到一定的距离显示*/
	 // 视口的高度
    var vpHeight = $(window).height();
    // 视口高度的一半
    var halfVpHeight = vpHeight/2;
	//获取每种商品的标题栏距离页面顶部的高度
	var phoneTop = $('#phone').offset().top;
	var watchTop = $('#watch').offset().top;
	var lapTop = $('#laptop').offset().top;
	var tabletTop = $('#tablet').offset().top;
	// 为窗口添加滚动事件响应函数 
    // 声明事件响应函数
    function onScroll(){
    	var st = $(this).scrollTop();

    	// 求出商品标题栏与视口顶部之间的距离tx
    	var t1 = phoneTop - st;
    	var t2 = watchTop - st;
    	var t3 = lapTop - st;
    	var t4 = tabletTop - st;
    	//滚动到一定距离就显示出来
	    if (t1<=halfVpHeight) {
	    	// 显示，执行动画前，推荐先暂停所有正在执行的动画
	    	$('.lift').stop().fadeIn(300);
	    	$('.lift li').eq(0).addClass('curr').siblings().removeClass('curr');
	    } else{
	    	$('.lift').stop().fadeOut(300);
	    }
	    if (t2<=halfVpHeight){
	    	$('.lift li').eq(1).addClass('curr').siblings().removeClass('curr');
	    }
	     if (t3<=halfVpHeight){
	    	$('.lift li').eq(2).addClass('curr').siblings().removeClass('curr');
	    }
	     if (t4<=halfVpHeight){
	    	$('.lift li').eq(3).addClass('curr').siblings().removeClass('curr');
	    }
    }
    
   
    // 为窗口添加滚动事件响应函数
    $(window).scroll(onScroll);
	//点击 1.样式改变 2.跳转到相应的位置
	$('.lift li').click(function(event) {
		// 用off方法把滚动事件响应函数解绑
		$(window).off('scroll');
		// 被单击那个按钮（li）添加curr类，兄弟元素移除curr类
		$(this).addClass('curr').siblings().removeClass('curr');
		//跳转
		if ($(this).index()==0) {
			$('html,body').stop().animate({'scrollTop':phoneTop},600,function(){
				// 滚屏结束后，重新把滚动事件响应函数绑定
				$(window).scroll(onScroll);
			});
		}
		if ($(this).index()==1) {
			$('html,body').stop().animate({'scrollTop':watchTop},600,function(){
				// 滚屏结束后，重新把滚动事件响应函数绑定
				$(window).scroll(onScroll);
			});
		}
		if ($(this).index()==2) {
			$('html,body').stop().animate({'scrollTop':lapTop},600,function(){
				// 滚屏结束后，重新把滚动事件响应函数绑定
				$(window).scroll(onScroll);
			});
		}
		if ($(this).index()==3) {
			$('html,body').stop().animate({'scrollTop':tabletTop},600,function(){
				// 滚屏结束后，重新把滚动事件响应函数绑定
				$(window).scroll(onScroll);
			});
		}

	});

});
