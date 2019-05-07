$(function(){
	var a_herf = $(".about-nav .navs .a-herf:not(:nth-child(2))")
	a_herf.mouseover(function(event) {
		$(this).css({
			"backgroundColor":"#EA8823"
		});
	}).mouseout(function(event) {
		$(this).css({
			"backgroundColor":"#EA7323"
		});
	});
})