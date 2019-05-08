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
		url:"http://127.0.0.1/deliciousFood/caipu.json",
		dataType:'json',
		success:function(data){
			var src = data.caipu[0].little_src;
			var name = data.caipu[0].title;
			var time = data.caipu[0].time;
			var liulanshu = data.caipu[0].lioulanshu;
			var shoucangshu = data.caipu[0].shoucangshu;
			var shijishijian = data.caipu[0].shijishijian;
			var peicainandu = data.caipu[0].peicainandu;
			var autho_words = data.caipu[0].autho_words;


			var content=('<div class="content"><div><img src="'+src+'"></div>\
				<div>\
					<h4>'+name+'</h4>\
					<h6>'+autho_words+'</h6>\
					<a class="btn btn-default" href="worksDetails.html">查看更多</a>\
				</div>\
				<div><img src="'+src+'"></div>\
				<div>\
					<h4>'+name+'</h4>\
					<h6>'+autho_words+'</h6>\
					<a class="btn btn-default" href="worksDetails.html">查看更多</a>\
				</div></div>');

			var contentc=('<div class="contentc">\
					<div>\
						<h4>'+name+'</h4>\
						<h6>'+autho_words+'</h6>\
						<a class="btn btn-default" href="worksDetails.html">查看更多</a>\
					</div>\
					<div><img src="'+src+'"></div>\
					<div>\
						<h4>'+name+'</h4>\
						<h6>'+autho_words+'</h6>\
						<a class="btn btn-default" href="worksDetails.html">查看更多</a>\
					</div>\
					<div><img src="'+src+'"></div></div>');
			$('.section-center').append(content);
			$('.section-center').append(contentc);
			$('.section-center').append(content);
			$('.section-center').append(contentc);
			$('.section-center').append(content);
			$('.section-center').append(contentc);





		}
	})





})
