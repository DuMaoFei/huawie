$(function(){
	$(window).scroll(function(event) {
		if ($(this).scrollTop()>500){
			$('.tool-nav li:last').css('display', 'block');
		} else {
			$('.tool-nav li:last').css('display', 'none');
		}
	});
	$('.tool-nav .tool-nav-backtop').click(function(event) {
		if ($(window).scrollTop()>0) {
			$('html,body').animate({scrollTop: '0px'},800);
		}
	});
	$('.tool-nav li').hover(function() {
		$(this).find('i').css('display', 'block');
	}, function() {
		$(this).find('i').css('display', 'none');
	});
})