$(function(){
	var reg1=/[\u4e00-\u9fa5]/ig;
	$('#log').click(function(e){
		var reg=/^.{4,50}$/ig;
		e.preventDefault();
		$('.log_error').show();


		if(!$('#user').val()){
			$('#error_type').html('请输入您的帐号');
			$('#user').addClass('input_txt_error');
		}
		else if(!reg.test($('#user').val())){
				$('#error_type').html('华为帐号限制在4~50 个字符');
				$('.input_txt').addClass('input_txt_error');				
		}
		else if(!$('#passwd').val()){
			$('#error_type').html('请输入您的密码');
			$('#passwd').addClass('input_txt_error');			
		}
		else{
			$('#error_type').html('帐号或密码错误');
			$('.input_txt').addClass('input_txt_error');						
		}
	})
	$('.input_txt').get(0).oninput=function(){
		$('.input_txt').removeClass('input_txt_error');
		$('.log_error').hide();
		if(reg1.test($(this).val())){
			$(this).val("");
		}
	}
	$('.input_txt').get(1).oninput=function(){
		$('.input_txt').removeClass('input_txt_error');
		$('.log_error').hide();	
	}
	$('.relog').hover(function(){
		$('.retip').show();
	},
	function(){
		$('.retip').hide();	
	});
	$('#way1').click(function(){
		$(this).parent().addClass('active');
		$(this).parent().siblings().removeClass('active');
		$('#log_input').show();
		$('.code_area').hide();
	})
	$('#way2').click(function(){
		console.log("way2");
		$(this).parent().addClass('active');
		$(this).parent().siblings().removeClass('active');
		$('#log_input').hide();
		$('.code_area').show();
	})
	$('#code').mouseenter(function(){
		$(this).addClass('code_active');
		$('#code_phone').fadeIn(500);
	})
	$('.code_box').mouseleave(function(){
		$('#code_phone').fadeOut(500);
		$('#code').removeClass('code_active');
	})
	$('#relog').click(function(){
		$(this).toggleClass('relog_active');
	})
})