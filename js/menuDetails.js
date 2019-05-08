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

			console.log(buzhou[0].src);
			console.log(buzhou[0].info);

			$(".top").html(`
					<div class="top-left">
						<img src="${src}">
					</div>
					<div class="top-right">
						<div>
							<h3>燕麦饼干</h3>
							<h6><span>${liulanshu}</span>浏览</h6>
							<h6><span>${shoucangshu}</span>收藏</h6>
						</div>
						<div>
							<form>
								<input  id="btn1" class="btn" type="button" value="分享">
								<input class="btn" type="button" value="收藏">
							</form>
						</div>
						<div class="table">
							<div>难度 <span>||||||||||</span></div>
							<div>${peicainandu}</div>
							<div>时间 <span>||||||||||</span></div>
							<div>${shijishijian}</div>
						</div>
						<div>
							<h6>儿童快乐成长计划</h6>
							<h6>${time}</h6>
						</div>
						<div>
							<form>
								<input class="btn" type="button" value="关注">
								<input class="btn" type="button" value="发私信">
							</form>
						</div>
					</div>`);





			$(".content-left").html(`
						<div>
							<h3>简介</h3>
							<p>${desc}</p>
						</div>

						<div>
							<h3>食材</h3>
							<table class="text-justify">
								<tr>
									<th>主料</th>
									<th></th>
								</tr>
								<tr>
									<td>
										<span>${zhuliao[0].shicai}</span>
										<span>${zhuliao[0].shuliang}</span>
									</td>
									<td>
										<span>${zhuliao[1].shicai}</span>
										<span>${zhuliao[1].shuliang}</span>
									</td>
								</tr>
								<tr>
									<td>
										<span>${zhuliao[2].shicai}</span>
										<span>${zhuliao[2].shuliang}</span>
									</td>
									<td>
										<span>${zhuliao[3].shicai}</span>
										<span>${zhuliao[3].shuliang}</span>
									</td>
								</tr>
								<tr>
									<th>辅料</th>
									<th></th>
								</tr>
								<tr>
									<td>
										<span>${fuliao[0].shicai}</span>
										<span>${fuliao[0].shuliang}</span>
									</td>
									<td>
										<span>${fuliao[1].shicai}</span>
										<span>${fuliao[1].shuliang}</span>
									 </td>
								</tr>
								<tr>
									<td class="text-justify">
										<span>${fuliao[2].shicai}</span>
										<span>${fuliao[2].shuliang}</span>
									</td>
									<td>
										<span>${fuliao[3].shicai}</span>
										<span>${fuliao[3].shuliang}</span>
									</td>
								</tr>
							</table>
						</div>


						<div>
							<h3>步骤</h3>
							<div>
								<div class="content-left-number"><i><span>01</span>number</i><br>${buzhou[0].info}</div>
								<div>
									<img src="${buzhou[0].src}" alt="" />
								</div>
							</div>
							<div>
								<div>
									<img src="${buzhou[1].src}" alt="" />
								</div>
								<div class="content-left-number"><i><span>02</span>number</i><br>${buzhou[1].info}</div>
							</div>
							<div>
								<div class="content-left-number"><i><span>03</span>number</i><br>${buzhou[2].info}</div>
								<div>
									<img src="${buzhou[2].src}" alt="" />
								</div>
							</div>
							<div>
								<div>
									<img src="${buzhou[3].src}" alt="" />
								</div>
								<div class="content-left-number"><i><span>04</span>number</i><br>${buzhou[3].info}</div>
							</div>
							<div>
								<div class="content-left-number"><i><span>05</span>number</i><br>${buzhou[4].info}</div>
								<div>
									<img src="${buzhou[4].src}" alt="" />
								</div>
							</div>
							<div>
								<div>
									<img src="${buzhou[5].src}" alt="" />
								</div>
								<div class="content-left-number"><i><span>06</span>number</i><br>${buzhou[5].info}</div>
							</div>
							<div>
								<div class="content-left-number"><i><span>07</span>number</i><br>${buzhou[6].info}</div>
								<div>
									<img src="${buzhou[6].src}" alt="" />
								</div>
							</div>
							<div>
								<div>
									<img src="${buzhou[7].src}" alt="" />
								</div>
								<div class="content-left-number"><i><span>08</span>number</i><br>${buzhou[7].info}</div>
							</div>
						</div>

						<div>
							<h3>小贴士</h3>
							<div>${xiaotieshi} </div>
							<div>燕麦饼干</div>
							<div>fasd</div>
						</div>
						<div>
							<div>
								<h3>评论</h3>
								<a href="">查看全部评价>></a>
							</div>
							<div>
								<textarea></textarea>
								<input class="btn" type="button" value="评论">
							</div>
						</div>

						<div>
							<div>
								<span>${pinlun.youhu}(${pinlun.city})${pinlun.shijian}</span>
								<button>回复</button>
								<h6>${pinlun.info}</h6>
							</div>
							<div>
								<span>${pinlun.youhu}(${pinlun.city})${pinlun.shijian}</span>
								<button>回复</button>
								<h6>${pinlun.info}</h6>
							</div>
						</div>`);

					$(".content-right").html(`
							<div class="more">
								<h3>更多推荐</h3>
							</div>`)
						for(var i=0;i<4;i++){
							$('.more').append(`
										<div>
											<img src="${src}">
											<h4>${title_out}</h4>
											<h6>${title}</h6>
										</div>`)
						}

		}
	})





})
