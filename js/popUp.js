$(function(){
	var a_herf = $(".about-nav .navs .a-herf:not(:last-child)")
	a_herf.mouseover(function(event) {
		$(this).css({
			"backgroundColor":"#EA8823"
		});
	}).mouseout(function(event) {
		$(this).css({
			"backgroundColor":"#EA7323"
		});
	});
	$.ajax({
		url:"http://127.0.0.1/deliciousFood/user.json",
		dataType:'json',
		success:function(data){
			var user = data.user[0].xiaokeai;
			var my_caidan = user.my_caidan;

			var picf = my_caidan[0].src;
			var picc = my_caidan[1].src;
			var picr = my_caidan[2].src;

			console.log(picf);
			console.log(picc);
			console.log(picf);

			var pic = $(`

				<div class="pic-left">
					<img src="${picf}" alt="" />
					<h4>美味的日本寿司</h4>
					<h6>深蓝小米粥</h6>
				</div>
				<div class="pic-center">
					<img src="${picc}" alt="" />
					<h4>美味的日本寿司</h4>
					<h6>深蓝小米粥</h6>
				</div>
				<div class="pic-right">
					<img src="${picr}" alt="" />
					<h4>美味的日本寿司</h4>
					<h6>深蓝小米粥</h6>
				</div>
			`)

			$('.picture').append(pic);

			$(window).resize(function(){
				var h = $('.picture').outerHeight(true);//获取Picture的高度
				var h1 = $('.top').outerHeight(true);//获取top的高度

				$('.dishes').css('height',2*h+h1);//动态设置弹窗的高度
				console.log(h,h1)
			})
			$(window).resize();

		}
	})

	console.log($('.item1'))
	console.log($('.item1:empty'))

	$('.item').mouseover(function(){
		$(".dishes").removeClass('show-pop');
	}).mouseout(function(){
		$(".dishes").addClass('show-pop');
	})


})
