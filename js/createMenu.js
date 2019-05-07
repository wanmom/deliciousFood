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
		success:function(data){
			var src = data.caipu[0].little_src;
			var title = data.caipu[0].title;
			var time = data.caipu[0].time;
			var title_out = data.caipu[0].title_out;
			var liulanshu = data.caipu[0].lioulanshu;
			var shoucangshu = data.caipu[0].shoucangshu;
			var shijishijian = data.caipu[0].shijishijian;
			var peicainandu = data.caipu[0].peicainandu;
			
			var desc = data.caipu[0].desc;
			var zhuliao = data.caipu[0].shicai.zhuliao;
			var fuliao = data.caipu[0].shicai.fuliao;
			var buzhou = data.caipu[0].buzhou;
			var xiaotieshi = data.caipu[0].xiaotieshi;
			var pinlun = data.caipu[4].pinlun;
			
			$(".content-right").html(`
						<div class="more">
							<div class="more-title">
								<h3>更多推荐</h3>
								<a href="">更多>></a>
							</div>
							
						</div>`)
				for(var i=0;i<3;i++){
					$('.more').append(`
								<div class="more-info">
									<img src="${src}">
									<h4>${title_out}</h4>
									<h6>${title}</h6>
								</div>`)
			}

		}
	})

	


	
})