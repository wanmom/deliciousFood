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
			var title_out = data.caipu[0].title_out;
			var time = data.caipu[0].time;
			var phone = data.caipu[0].phone;

			var liulanshu = data.caipu[0].lioulanshu;
			var shoucangshu = data.caipu[0].shoucangshu;
			var shijishijian = data.caipu[0].shijishijian;
			var peicainandu = data.caipu[0].peicainandu;
			var autho_words = data.caipu[0].autho_words;
			var zuopingshu = data.caipu[0].user.zuopingshu;
			var fensishu = data.caipu[0].user.fensishu;
			var name = data.caipu[0].user.name;

			var pinlun = data.caipu[4].pinlun;
			console.log(pinlun);



			$(".top-top").html(`<div class="top-left">
							<img src="${src}">
						</div>
						<div class="top-right">
							<div class="right-one">
								<h3>香蕉派</h3>
								<div>
									<span>${zuopingshu}</span>作品
									<span>${fensishu}</span>粉丝
								</div>
							</div>
							<div class="right-two">&quot;${autho_words}&quot;</div>
							<div class="right-three">
								<div class="right-three-top">
									<div>
										<img src="image/child.png">
									</div>
									<div>
										<span>儿童快乐成长计划</span>
										<br>
										<span>安徽 合肥</span>
									</div>
									<span>${time}</span>
								</div>
								<form>
									<input type="button" class="btn " value="关注">
									<input type="button" class="btn " value="发私信">
								</form>
							</div>
							<br>
							<div class="right-four">
								<div>
									<div>TA的全部作品</div>
									<div>
										<button>
											<span class="
glyphicon glyphicon-triangle-left"></span>
										</button>
							
										1/67 
										<button>
											<span class="
glyphicon glyphicon-triangle-right"></span>
										</button>
												
									</div>
								</div>
								<div>
									<img src="${src}">
									<img src="${src}">
									<img src="${src}">
									<img src="${src}">
								</div>
							</div>
						</div>`);

			$(".top-bottom").html(`<div class="top-bottom-first">
							<div>
								<span>2017-04-26 12:10发自</span>
								<span>${phone}</span>
							</div>
							<div id="share-3" data-sites="weibo, qq, qzone">分享到：</div>
							
						</div>
						<div>
							<button class="btn ">收藏</button>
						</div>`);
			$('#share-3').share();

			$(".content-left").html(`<div>
							<h3>评论</h3>
							<textarea>
								
							</textarea>
							<button class="btn">评论</button>
						</div>
						
						<div>
							<div>${pinlun.youhu}（${pinlun.city}）${pinlun.shijian}<button>回复</button></div>
							<h4>${pinlun.info}</h4>
						</div>
						<div>
							<div>${pinlun.youhu}（${pinlun.city}）${pinlun.shijian}<button>回复</button></div>
							<h4>${pinlun.info}</h4>
						</div>
						<div>
							<div>${pinlun.youhu}（${pinlun.city}）${pinlun.shijian}<button>回复</button></div>
							<h4>${pinlun.info}</h4>
						</div>
						<div>
							<div>${pinlun.youhu}（${pinlun.city}）${pinlun.shijian}<button>回复</button></div>
							<h4>${pinlun.info}</h4>
						</div>
						<div>
							<div>${pinlun.youhu}（${pinlun.city}）${pinlun.shijian}<button>回复</button></div>
							<h4>${pinlun.info}</h4>
						</div>`);

			$(".content-right").html(`<div class="more">
							<h3>更多推荐</h3>
							<div>
								<img src="${src}">
								<h4>${title_out}</h4>
								<h6>${name}</h6>
							</div>
							<div>
								<img src="${src}">
								<h4>${title_out}</h4>
								<h6>${name}</h6>
							</div>
							<div>
								<img src="${src}">
								<h4>${title_out}</h4>
								<h6>${name}</h6>
							</div>
						</div>`)
			
		}
	})

	


	
})