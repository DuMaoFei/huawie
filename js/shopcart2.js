$(function(){
	//设置服务提示
	$('.part1 .serivce-main').hover(function() {
		$(this).addClass('current');
		$(this).siblings('div').attr('style', 'display:block');
		$(this).siblings('div').mouseover(function(event) {
			$(this).attr('style', 'display:block');
			$(this).siblings('div').addClass('current');
		});
	}, function() {
		$(this).siblings('div').mouseout(function(event) {
			$(this).attr('style', 'display:none');
			$(this).siblings('div').removeClass('current');
		});
		$(this).removeClass('current');
		$(this).siblings('div').attr('style', 'display:none');
	});
	//选择的商品总数
	var totalNum = 0;
	//所有配件的总价钱
	var ppTotal = 0;
	//点击checkbox样式变化
	$('.checkbox input').click(function(event) {
		$(this).toggleClass('checked');
	});
	
	//单选按钮 单选全部选上 全选按钮也要打钩
	$('.cart-item-main .checkbox input').click(function(event) {
		if ($(this).hasClass('checked') || $(this).parents('.cart-item').siblings('.cart-item').find('.checkbox input').hasClass('checked')) {
			$('#checkAll,#checkAll2').addClass('checked');
		} else{
			$('#checkAll,#checkAll2').removeClass('checked')
		}
		//被选中时获取当前商品数量 更新商品总数量 +=赋值
		if ($(this).hasClass('checked')) {
			var each_num = parseInt($(this).parents('.check-img-box').siblings('ul').find('#count').val());
			totalNum += each_num;
			//更新所有商品的总数量
			$('.pay .bottom em').text(totalNum);
			//获取小计
			var mini_sum = parseInt($(this).parents('.cart-item-main').children('ul').children('.total').children('span').text());
			//小计加上配件价格=总价
			$('.pay-info .pay-money span').html(mini_sum+ppTotal);
		} else {
		//取消选中状态 获取当前商品数量 更新商品总数量 -=赋值
			var each_num = parseInt($(this).parents('.check-img-box').siblings('ul').find('#count').val());
			totalNum -= each_num
			$('.pay .bottom em').text(totalNum);
			$('.pay-info .pay-money span').html(0);

		}
		
	});
	//全选
	$('#checkAll,#checkAll2').click(function(event) {
		if ($(this).hasClass('checked')) {
			$('.cart-item-main .checkbox input').addClass('checked');
			$('#checkAll,#checkAll2').addClass('checked');
			$('.pay .bottom em').text($('.cart-item-main #count').val());
			var all_price = parseInt($('.total span').text())+ppTotal
			$('.pay-info .pay-money span').html(all_price);
			return;
		}
			$('.cart-item-main .checkbox input').removeClass('checked');
			$('#checkAll,#checkAll2').removeClass('checked');
			$('.pay .bottom em').text(0);
			$('.pay-info .pay-money span').html(0);
	});
	//获取商品单价
	var per_price=parseInt($('.per-price span').text());
	/*设置商品数量*/
	$('.count-area #subtract').css('cursor', 'not-allowed');
	$('.count-area #subtract').click(function(event) {
		//获取当前商品的数量
		var count = parseInt($(this).parent().siblings().val());
		//初始数量为1 “－”不能点击
		if (count==1) {
			event.preventDefault();
			$(this).css('cursor', 'not-allowed');
			return;
		}
		//可以点击 数量减一
		count--;
		$(this).parent().siblings().val(count);
		//每一项商品的小计
		$(this).parents('li').siblings('.total').children('span').text(count*per_price);
		//点了减就能点加
		$(this).siblings('#add').css('cursor','pointer');
		
		if ($(this).parents('ul').siblings('.check-img-box').find('.single-box').hasClass('checked')) {
			totalNum = count;
			$('.pay .bottom em').text(totalNum);
			//更新购物车商品总价
			$('.pay-info .pay-money span').html(count*per_price+ppTotal);
		}
	});

	$('.count-area #add').click(function(event) {
		//获取当前商品的数量
		var count = parseInt($(this).parent().siblings().val());
		if (count==20) {
			event.preventDefault();
			$(this).css('cursor', 'not-allowed');
			alert("本产品限购20件！")
			return;
		}
		count++;
		$(this).parent().siblings().val(count);
		//每一项商品的小计
		$(this).parents('li').siblings('.total').children('span').text(count*per_price);
		//点了+就能点减
		$(this).siblings('#subtract').css('cursor','pointer');
		
		if ($(this).parents('ul').siblings('.check-img-box').find('.single-box').hasClass('checked')) {
			totalNum = count;
			$('.pay .bottom em').text(totalNum);
			//更新购物车商品总价
			$('.pay-info .pay-money span').html(count*per_price+ppTotal);
		}
	});

	//添加搭配
	$('.add-btn').click(function(event) {
		//获取当前点击搭配物件的信息 价格&名称&图片
		//获取图片路径
		var d_src = $(this).parents('li').children('img').attr('src');
		//获取搭配物件的名称
		var d_name = $(this).parent().siblings('a').text();
		//获取搭配物件的价格
		var d_price = parseInt($(this).siblings('span').children().text());

		//创建ul节点
		var ul = $("<ul class='clearfix'></ul>");
		// 创建li节点 
		var firstLi = $("<li></li>");
		var secondLi = $("<li>"+d_name+"</li>");
		var thirdLi = $("<li style='color:#ca141d'>￥<span class='pp'>"+d_price+"</span></li>");
		var fourLi = $("<li><a href='javascript:void(0)' class='hh'>删除</a></li>");
		var liImg = $("<img src="+d_src+">")
		firstLi.append(liImg);
		//把li添加到ul中
		ul.append(firstLi);
		ul.append(secondLi);
		ul.append(thirdLi);
		ul.append(fourLi);
		$(this).parents('.dapei').siblings('.cart-item2').find('.part2').append(ul);
		
		//配件的总价格
		var pp = $('.pp');
		var p_total = 0;
		for (var i = 0; i < pp.length; i++) {
			p_total+=parseInt(pp.eq(i).text());
		}
		//商品的总价加上当前配件的价格
		var new_sum = parseInt($('.pay-info .pay-money span').text())+parseInt($(this).siblings('span').children('i').text());
		$('.pay-info .pay-money span').text(new_sum);
		ppTotal = p_total;
		//删除搭配
		$('.hh').click(function(event) { 
			$(this).parents('ul').remove();
			new_sum -= parseInt($(this).parents('ul').children('li').children('.pp').text());
			ppTotal -= parseInt($(this).parents('ul').children('li').children('.pp').text());
			$('.pay-info .pay-money span').text(new_sum);
		});
	});
		//删除商品 购物车为空
		$('#del-all').click(function(event) {
			/* 全选选上 点击删除按钮删除全部 */
			if ($('#checkAll2').hasClass('checked') || $('#checkAll').hasClass('checked')) {
				$('#hasCart').css('display', 'none');
				$('#emptyCart').css('display', 'block');
			}
		});
		$('#del-item').click(function(event) {
			/* 删除当前商品*/
			if ($(this).parents('ul').siblings('.check-img-box').find('.single-box').hasClass('checked')) {
				$('#hasCart').css('display', 'none');
				$('#emptyCart').css('display', 'block');
			}
		});
	//结算
	//选择商品的件数:选择商品和增加商品数量都会更新
	//商品总价
	//获取所有商品的小计
	//配件的价格
	//推荐搭配选择商品样式
	$('.sm-img').click(function(event) {
		var src = $(this).children().attr('src');
		$(this).parents('div').siblings().attr('src', src);
	});
})