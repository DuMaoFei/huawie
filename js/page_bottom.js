$(function(){
	var step =$('.link-dl').width();
	var i=0;
	var left = $('.service-left .link-dl #left');
	var right = $('.service-left .link-dl #right');
	var dd = $('.link-dd');
	left.click(function(event) {
		if (i==0) {
			event.preventDefault();
			// $(this).css('cursor', 'not-allowed');
		} else{
			i++;
			dd.animate({'margin-left':step*i+'px'},400);
			right.css('cursor', 'pointer');	
		 	// dd.css('margin-left', step*i+'px');
		 	if (i==0) {
				left.css('cursor', 'not-allowed');
			}
		}
		 
	});
	right.click(function(event) {
		 if (i==-2) {
		 	event.preventDefault();
		 	// $(this).css('cursor', 'not-allowed');
		 } else {
		 	 i--;
		 	 dd.animate({'margin-left':step*i+'px'},400);
		 	// dd.css('margin-left',step*i+'px');
		 	left.css('cursor', 'pointer');
		 	if (i==-2) {
				right.css('cursor', 'not-allowed');
			} 	
		 }
	});
})