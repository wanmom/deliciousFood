$(function(){
	$(window).resize(function(){
		var img_h = parseInt($('.img-info img').css("height"))
		var fonts_h = parseInt(img_h*0.43)
		$(".fonts-info").css("height",fonts_h)

		var detail_img_h = parseInt($('.detail-img-info-box .img-box img').css("height"))
		$('.detail-img-info-box table').css("height",detail_img_h)
	})
	$(window).resize();

	$('.little-img').click(function(event) {
		let src = $(this).find('img').attr("src")
		$(".img-info img").attr("src",src)
	});
	$('#share-3').share();

	$('.sum [type=button]').click(function(event) {
		var num = parseInt($('.pur-nums').val());
		console.log(num);
		if($(this).val()=='-' && num){
			$('.pur-nums').val(--num)
		}
		if($(this).val()=='+' &&　num<999){
			$('.pur-nums').val(++num)
		}
	});
	$(".buy-now").click(function(event) {
		/* Act on the event */
		localStorage.setItem("num",$('.pur-nums').val());
		location.href="http://127.0.0.1/deliciousFood/pay.html"	
	});

})