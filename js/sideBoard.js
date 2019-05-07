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
			var name = data.caipu[0].title;
			var time = data.caipu[0].time;
			var liulanshu = data.caipu[0].lioulanshu;
			var shoucangshu = data.caipu[0].shoucangshu;
			var shijishijian = data.caipu[0].shijishijian;
			var peicainandu = data.caipu[0].peicainandu;
			var autho_words = data.caipu[0].autho_words;

			
		}
	})
	
	var num = $('.content-left ul b')//设置序号
	for(var i=0;i<3;i++){
		for(var j=1;j<11;j++){
			var n= i*10+j
			num.eq(n-1).text(j);
		}
	}
	
	

	


	
})