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

			// var center = $(".center");

			// var box=$('<div class="picture">\
			// 				<div class="pic-left"></div>\
			// 				<div class="pic-center"></div>\
			// 				<div class="pic-right"></div>\
			// 			</div>');


			// center.append(box);
			// center.append(box);


			var left = $(".pic-left");
			var center = $(".pic-center");
			var right = $(".pic-right");

			left.html('<img src="'+picf+'" alt="" />');
			var title =$("<h4>美味的日本寿司</h4>\
						<h6>深蓝小米粥</h6>");
			left.append(title);

			center.html('<img src="'+picc+'" alt="" />');
			var title =$("<h4>美味的日本寿司</h4>\
						<h6>深蓝小米粥</h6>");
			center.append(title);

			right.html('<img src="'+picr+'" alt="" />');
			var title =$("<h4>美味的日本寿司</h4>\
						<h6>深蓝小米粥</h6>");
			right.append(title);


		}
	})



})
