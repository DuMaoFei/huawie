$(function(){
	// 广告关闭
	$('#close-ad').click(function(){
		$(this).parent().parent().css('display','none');
	});
	// 搜索框获取或失去焦点，提示文字的消失和出现及其他样式的变化
	$('#search-input').focus(function(){
		$(this).siblings('div').css('display','none');
		$(this).parent().siblings('div').removeClass('hide');
	});
	$('#search-input').blur(function(event) {
		$(this).siblings('div').css('display', 'block');
		$(this).parent().siblings('div').addClass('hide');
	});
	//点击搜索按钮进行搜索
	$('.s-btn').click(function(event) {
		var s_text=$(this).siblings('input').val();
		if (s_text==''||s_text==null) {
			// event.e.preventDefault();
		} else {
			// $(window).attr('location', 'https://www.vmall.com/search?keyword='+s_text);
			window.open('https://www.vmall.com/search?keyword='+s_text);
		}
	});
	// 鼠标移入头部logo旁边的导航
	// $('.naver').find('li').mouseenter(function(evnet) {
	// 	var index = $(this).index();
	// 	var nav_sub = $(this).parents('.naver').siblings('.nav-sub');
	// 	// nav_sub.css('display', 'block');
	// 	// nav_sub.children().eq(index).css('display', 'block');
	// 	nav_sub.slideDown(200);
	// 	nav_sub.children().eq(index).css('display', 'block');
	// 	nav_sub.children().eq(index).siblings().css('display', 'none');
	// });
	// $('.nav-sub').mouseleave(function(event){
	// 	$(this).slideUp(200);
	// });
	$('.naver').find('li').hover(function() {
		var index = $(this).index();
		var nav_sub = $(this).parents('.naver').siblings('.nav-sub');
		nav_sub.stop().slideDown(200);
		nav_sub.children().eq(index).css('display', 'block');
		nav_sub.children().eq(index).siblings().css('display', 'none');
		nav_sub.mouseenter(function(event) {
			$(this).css('display', 'block');
		});
	}, function() {
		var index = $(this).index();
		var nav_sub = $(this).parents('.naver').siblings('.nav-sub');
		nav_sub.css('display', 'none');
		nav_sub.mouseleave(function(event) {
			$(this).stop().slideUp(200);
		});
	});
});
