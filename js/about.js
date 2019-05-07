$(function(){
	var img_mask = $("section .find-food .find-food-img .img-mask");
	img_mask.parent().mouseover(function(){
	  var h = $(this).css("height")
	  var w = $(this).css("width")
	  $(this).find(".img-mask").stop().animate({
	  	"height":"100%",
	  	"padding-top":"50px"
	  	},
	  	1000, function() {
	  	/* stuff to do after animation is complete */
	  });
	}).mouseout(function() {
	  $(this).find(".img-mask").stop().animate({
	  	"height":"0",
	  	"padding-top":"0"
	  	},
	  	1000, function(){});
	});
	var a_herf = $(".about-nav .navs .a-herf:not(:first-child)")
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