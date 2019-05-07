$(function(){
	var img_mask_info = $(".img-mask-info")
	// console.log(img_mask_info);
	img_mask_info.each(function(index, el) {
		var h = $(this).css("height")
		$(this).parent().parent().fadeOut('slow/400/fast', function() {});
	});
	var img_mask = $(".img-mask")
	img_mask.parent().mouseover(function(event) {
		$(this).find('.img-mask').stop().fadeIn('slow/400/fast', function() {});
	}).mouseout(function(event) {
		$(this).find('.img-mask').stop().fadeOut('slow/400/fast', function() {});
	});
	$(".wares-box .wares-info .wares .title").click(function(event) {
		/* Act on the event */
		location.href="http://127.0.0.1/deliciousFood/Purchases-Info.html"
	});
})