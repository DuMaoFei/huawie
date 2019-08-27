
$(function(){
	var timer;
	var picIndex=0;
	var videoList=[
		"http://1251250874.vod2.myqcloud.com/8f7784c2vodgzp1251250874/ea9aadb05285890790252483248/DspFe9CqnTEA.mp4",
		"https://1251250874.vod2.myqcloud.com/439f276avodtransgzp1251250874/5be5440b5285890787231462054/v.f20.mp4",
		"http://1251250874.vod2.myqcloud.com/439f276avodtransgzp1251250874/c82986695285890792112237742/v.f20.mp4",
		"http://1251250874.vod2.myqcloud.com/8f7784c2vodgzp1251250874/1e96cf745285890791721272578/XwjuQhfqtNIA.mp4",
		"http://1251250874.vod2.myqcloud.com/8f7784c2vodgzp1251250874/cd3c7aab5285890792112490158/MDwcEphVi0MA.mp4",
		"http://1251250874.vod2.myqcloud.com/8f7784c2vodgzp1251250874/7f7a69ed5285890788204320098/2jO3JfEURccA.mp4",
		"http://1251250874.vod2.myqcloud.com/8f7784c2vodgzp1251250874/cf5be6665285890792112561172/Jva7D4VBo8IA.mp4"
		];
	function skip(){
		$('.top_adv_item').removeClass('img_showed');
		$('.top_adv_item').eq(picIndex).addClass('img_showed');
		$('.pointer').removeClass('pointer_showed');
		$('.pointer').eq(picIndex).addClass('pointer_showed');		
	}
	
	function autoRun(){
		clearInterval(timer);
		timer=setInterval(function(){
			picIndex++;
			if(picIndex>$('.top_adv_item').length-1) picIndex=0;
			skip();
		},1000)
	}
	$('.topAdv').hover(function(){
		clearInterval(timer);
	},function(){
		autoRun();
	});
	$('.pointer').mouseenter(function(){
		picIndex=$(this).index();
		skip();
	})
	autoRun();
	$(window).scroll(function(e){

		
		var minTop=$('.topAdv').offset().top+$('.topAdv').height();
		var minTop2=$('.choice').offset().top+50;
		if($(this).scrollTop()>minTop){
			$('.scrollTop_nav').addClass('fixed_nav');			
		}
			else
				{
				$('.scrollTop_nav').removeClass('fixed_nav');		
			}
		if($(this).scrollTop()>minTop2){
			$('.fixed_r_adv').show();	
			$('.r_adv').hide()
		}
			else
				{
				$('.fixed_r_adv').hide();
				$('.r_adv').show();	
			}					
	})
	
	$('.scrollTop_nav li').eq(0).click(function(){
		if($('.scrollTop_nav').hasClass('fixed_nav')){
			$('html').animate({'scrollTop':$('.phoneBox .title').offset().top-$('.phoneBox .title').height()+'px'},250);		
		}
		else {
			$('html').animate({'scrollTop':$('.phoneBox .title').offset().top-$('.phoneBox .title').height()-$('.scrollTop_nav').height()+'px'},250);			
		}

	})
	
	$('.scrollTop_nav li').eq(1).click(function(){
		if($('.scrollTop_nav').hasClass('fixed_nav')){
			$('html').animate({'scrollTop':$('.lapBox .title').offset().top-$('.lapBox .title').height()+'px'},250);		
		}
		else {
			$('html').animate({'scrollTop':$('.lapBox .title').offset().top-$('.lapBox .title').height()-$('.scrollTop_nav').height()+'px'},250);			
		}

	})
	
	$('.scrollTop_nav li').eq(2).click(function(){
		if($('.scrollTop_nav').hasClass('fixed_nav')){
			$('html').animate({'scrollTop':$('.watchBox .title').offset().top-$('.watchBox .title').height()+'px'},250);		
		}
		else {
			$('html').animate({'scrollTop':$('.watchBox .title').offset().top-$('.watchBox .title').height()-$('.scrollTop_nav').height()+'px'},250);			
		}

	})
	
	$('.scrollTop_nav li').eq(3).click(function(){
		if($('.scrollTop_nav').hasClass('fixed_nav')){
			$('html').animate({'scrollTop':$('.furnitureBox .title').offset().top-$('.furnitureBox .title').height()+'px'},250);		
		}
		else {
			$('html').animate({'scrollTop':$('.furnitureBox .title').offset().top-$('.furnitureBox .title').height()-$('.scrollTop_nav').height()+'px'},250);			
		}

	})
	
	$('.scrollTop_nav li').eq(4).click(function(){
		if($('.scrollTop_nav').hasClass('fixed_nav')){
			$('html').animate({'scrollTop':$('.partsBox .title').offset().top-$('.partsBox .title').height()+'px'},250);		
		}
		else {
			$('html').animate({'scrollTop':$('.partsBox .title').offset().top-$('.partsBox .title').height()-$('.scrollTop_nav').height()+'px'},250);			
		}
	})
	$('.scrollTop_nav li').eq(5).click(function(){
		if($('.scrollTop_nav').hasClass('fixed_nav')){
			$('html').animate({'scrollTop':$('.video_dis .title').offset().top-$('.video_dis .title').height()-50+'px'},250);		
		}
		else {
			$('html').animate({'scrollTop':$('.video_dis .title').offset().top-$('.video_dis .title').height()-$('.scrollTop_nav').height()-50+'px'},250);			
		}
	})
	for(var k=0;k<$('.aside_adv').length;k++)
	$('.aside_adv').eq(k).children('ul').children('li').eq(1).click(function(){
		if($('.scrollTop_nav').hasClass('fixed_nav')){
			$('html').animate({'scrollTop':$('.warehouse').offset().top-$('.warehouse .title').height()-50+'px'},250);		
		}
		else {
			$('html').animate({'scrollTop':$('.warehouse .title').offset().top-$('.warehouse .title').height()-$('.scrollTop_nav').height()-50+'px'},250);			
		}		
	})
	function pictureRoll(i){
		$('.roll_r').eq(i).click(function(){
			if(!$(this).hasClass('roll_disable')){
				var lis=$('.other_area ul').eq(i);
				var chil=lis.children('.item');
				lis.css('margin-left',-(chil.length-5)*240+'px');
				$(this).addClass('roll_disable');
				$('.roll_l').eq(i).removeClass('roll_disable');
			}});
		$('.roll_l').eq(i).click(function(){
				if(!$(this).hasClass('roll_disable')){
				var lis=$('.other_area ul').eq(i);
				lis.css('margin-left',0);
				$(this).addClass('roll_disable');
				$('.roll_r').eq(i).removeClass('roll_disable');											
			}});									
		
		
	}
	for(var i=0;i<$('.other_area').length;i++)
		pictureRoll(i);
	
	$('.other_area .item').hover(
		function(){
			$(this).siblings().removeClass('scale_item');
			$(this).addClass('scale_item');
		},
		function(){
			$(this).removeClass('scale_item');
		}
	)	
	
	for(var j=0;j<$('.video_item').length;j++){
		$('.video_item').eq(j).attr('idx',j);
		$('.video_item').eq(j).click(function(){
			$('#video-playing').attr('src',videoList[$(this).attr('idx')]);
			$('.video_area').show();
			$('#video-playing')[0].play();
		})		
	}
	$('.video_off').click(function(){
		$('#video-playing')[0].pause();
		$('.video_area').hide();
	})
	
	$('.receive').click(function(){
		$('.ticket_board').show();
	})
	$('.ticket_off').click(function(){
		$('.ticket_board').hide();		
	})
	
})


