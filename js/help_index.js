/*
* @Author: admin
* @Date:   2019-08-08 18:55:11
* @Last Modified by:   admin
* @Last Modified time: 2019-08-08 20:00:33
*/
$(function(){
	//轮播
	var timer;
	var i = 0;
	var circle = 0;
	var lis = $('.hot-board .ec-slider li');
	var spans = $('.hot-board .ec-slider span');
	autoPlay();
	$('.hot-board').mouseenter(function(event) {
		clearInterval(timer);
	});
	$('.hot-board').mouseleave(function(event) {
		autoPlay();
	});
	spans.mouseenter(function(event) {
		var index = $(this).index();
		lis.eq(index).animate({'opacity':'1'},600)
		spans.eq(index).addClass('current');
		lis.eq(index).siblings().animate({'opacity':'0'},600);
		spans.eq(index).siblings().removeClass('current');
		i = index;
		circle = index;
		autoPlay();
	});
	function autoPlay(){
		clearInterval(timer);
		timer = setInterval(function(){
			i++;
			if (i>lis.length-1) {
				i = 0;
			}
			lis.eq(i).animate({'opacity':'1'},600);
			lis.eq(i).siblings().animate({'opacity':'0'},600);
			   // lis.eq(i).css('opacity', '1');
			   // lis.eq(i).siblings().css('opacity', '0');
			circle++;
			if (circle>lis.length-1) {
				circle = 0;
			}
			spans.eq(circle).addClass('current');
			spans.eq(circle).siblings().removeClass('current');
		},3000);
	}
	//搜索
	$('#search-btn').click(function(event) {
		var s_text = $(this).siblings().val();
		if (s_text==''||s_text==null) {
			return;
		} else{
			window.open("https://www.vmall.com/help/search?keyword="+s_text);
		}
	});
})