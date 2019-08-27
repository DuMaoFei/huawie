$(function(){
	//热销推荐滑动效果
	var step = $('.hot-goods-r').width();//div容器的宽就是步长
	var item_width = $('.hot-goods-r li').eq(0).outerWidth();//获取每个li的宽度
	var i = 0;//变量i控制margin-left来移动图片
	//可视容器内显示的商品个数
	var num = parseInt(step / item_width);
	//获取li个数
	var count = $('.hot-goods-r li').length;
	//求出i可以取得的最大值
	var i_max = parseInt(count / num);
	//默认左箭头不能点击
	$('.hot-goods-r .ar-left').css('cursor', 'not-allowed');
	$('.hot-goods-r .ar-left').click(function(event) {
		$('.hot-goods-r .ar-right').css('cursor', 'pointer');
		if (i==0) {
			event.preventDefault();
			$(this).css('cursor','not-allowed');
			return;
		}
		i--;
		$('.hot-goods-r ul').animate({'margin-left':-step*i},300);
		
		
	});
	$('.hot-goods-r .ar-right').click(function(event) {
		$('.hot-goods-r .ar-left').css('cursor', 'pointer');
		i++;
		if (i>=i_max) {
			$(this).css('cursor', 'not-allowed');
			event.preventDefault();
			i=i_max;
		}
		$('.hot-goods-r ul').animate({'margin-left':-step*i},300);
	});
})