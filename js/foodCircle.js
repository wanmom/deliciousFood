$(function(){
	// var a_herf = $(".about-nav .navs .a-herf:not(:last-child)")
	// a_herf.mouseover(function(event) {
	// 	$(this).css({
	// 		"backgroundColor":"#EA8823"
	// 	});
	// }).mouseout(function(event) {
	// 	$(this).css({
	// 		"backgroundColor":"#EA7323"
	// 	});
	// });

	var a = $('.a-herf a');
	a.click(function(event){
		a.parent().removeClass('bgc');
		$(this).parent().addClass('bgc');
	})

	$.ajax({
		url:"http://127.0.0.1/deliciousFood/user.json",
		success:function(data){
			var user = data.user[0].xiaokeai
			var header_img_src = user.head_img
			var fansnum = user.fansnum
			var notedate = user.notedate
			var restaurant = user.restaurant
			var restaurantWant = user.restaurant_want
			var restaurantLike = user.restaurant_like
			var caipu = user.gailan;
			var my_caidan = user.my_caidan
			var shoucan = user.shoucan

			console.log(notedate.src);

			// 发布按钮
			$(".release").click(function(){

				$('.content').empty()
				$(".content").html(`<div class="content-top">
						<h3>发现身边最好吃的餐厅</h3>
					</div>

					<div>
						<div class="content-left">
							<h3>推荐餐厅</h3>
						</div>

						<div class="content-right">
							<h3>本周热门餐厅</h3>
						</div>
					</div>`);
				for(var i =0; i<8;i++){
					var img = $(`<div class="img"><img src="${notedate[2].src}"></div>`);
					$('.content-top').append(img);
				}
				// 热门餐厅
				for(var i =0 ;i<4 ;i++){
					var lii = $(`
								<div class="res-want">
									<p>${restaurantWant[i].name}</p>
									<p>地址：${restaurantWant[i].address}</p>
									<p>电话：${restaurantWant[i].tel}</p>
									<p>菜系：${restaurantWant[i].caixi}</p>
									<img src="${restaurantWant[i].image}" alt="" />
									<div class="person-consume">
										<div>人均</div>
										<div>${restaurantWant[i].money}</div>
									</div>
								</div>`
								)
					$('.content-right').append(lii)
					// console.log(restaurantWant[i]);
				}
				// 推荐餐厅
				for(var i =0;i<3;i++){
					var lii = $('<div class="res-ago">\
									<p>'+restaurant[i].name+'</p>\
									<p>说明：'+restaurant[i].explain+'</p>\
									<p>地址：'+restaurant[i].address+'</p>\
									<p>人均：<span>'+restaurant[i].money+'</span></p>\
								</div>')
						var res_food_img = $('<div class="res-food-img"></div>')
						for(var j in restaurant[i].image){
							var ll = $('<div class="food-img">\
											<div class="img-mask">\
												这是一道菜\
											</div>\
											<img src="'+restaurant[i].image[j]+'" alt="" />\
										</div>')
							res_food_img.append(ll)
						}
					$('.content-left').append(lii)
					$('.content-left').append(res_food_img)

				}
				var img_mask = $(".img-mask")
						img_mask.parent().mouseover(function(event) {
							console.log('test');
							$(this).find('.img-mask').css({
								"line-height":"3em",
								"height":"3em"
							})
						}).mouseout(function(event) {
							$(this).find('.img-mask').css({
								"line-height":"0",
								"height":"0"
							})
				});
				$('.content').removeClass('content-diplay')
				$('.content-left').css({'width':'48%','margin':'0 auto'})
				$('.content-right').css({'width':'48%','margin':'auto'})
			})
			$(".release").click();


			// 晒一晒按钮
			$('.share').click(function(){


				$('.content').empty()
				$(".content").html(`
						<div class="content-left">

						</div>
						<div class="content-right">

						</div>
					`);

				var dateleft=(`
					<div class="share-content">
						<div class="share-time">
							<span>十二月</span>
							<span>23</span>
							<span>2017</span>
						</div>
						<div class="share-img">
							<div>
								<img src="image/personalCenter/riji/note_06.png" alt="" />
							</div>
							<div>
								<h4>日式米饭丸子</h4>
								<div>原材料：剩米饭、淀粉</div>
								<div>调料：料酒、酱油、白糖、陈醋、番茄酱、植物油、熟白芝麻</div>
							</div>
						</div>
					</div>
				`)
				var dateright=(`
					<div class="share-content">
						<div class="share-img">
							<div>
								<img src="image/personalCenter/riji/note_06.png" alt="" />
							</div>
							<div>
								<h4>日式米饭丸子</h4>
								<div>原材料：剩米饭、淀粉</div>
								<div>调料：料酒、酱油、白糖、陈醋、番茄酱、植物油、熟白芝麻</div>
							</div>
						</div>
						<div class="share-time">
							<span>十二月</span>
							<span>23</span>
							<span>2017</span>
						</div>
					</div>
				`)
				$('.content-left').append(dateleft);
				$('.content-left').append(dateright);
				$('.content-left').append(dateleft);
				$('.content-left').append(dateright);
				$('.content-left').append(dateleft);
				$('.content-left').append(`
						<div class="comment">
							<div>
								<h3>评论</h3>
								<textarea></textarea>
								<button class="btn">评论</button>
							</div>
							<div>
								<div>的萨芬（给对方）给对方 <button>回复</button></div>
								<h4>看着挺简单的</h4>
							</div>
							<div>
								<div>的萨芬（给对方）给对方 <button>回复</button></div>
								<h4>看着挺简单的</h4>
							</div>
						</div>

						`);
				$('.content-left').append(`<div class="page-number">
				<form>
					<input type="button" value="1" class='page-btn'>
					<input type="button" value="2" class='page-btn'>
					<input type="button" value="3" class='page-btn'>
					<input type="button" value="4" class='page-btn'>
					<input type="button" value="&middot;&middot;&middot;" class='page-btn'>
					<input type="button" value="下一页">
					<input type="button" value="尾页">
				</form>
			</div>`)


				$('.content-right').append(
					`<div class="right-four">
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
									<img src="image/personalCenter/push/oatmealCookies_little.png">
									<img src="image/personalCenter/push/oatmealCookies_little.png">
									<img src="image/personalCenter/push/oatmealCookies_little.png">
									<img src="image/personalCenter/push/oatmealCookies_little.png">
									<img src="image/personalCenter/push/oatmealCookies_little.png">
									<img src="image/personalCenter/push/oatmealCookies_little.png">
									<img src="image/personalCenter/push/oatmealCookies_little.png">
									<img src="image/personalCenter/push/oatmealCookies_little.png">
								</div>
					</div>`)

					$(".content-right").append(`
							<div class="more">
								<div class="more-title">
									<h3>更多推荐</h3>
									<a href="">更多>></a>
								</div>

							</div>`)
						for(var i=0;i<3;i++){
							$('.more').append(`
										<div class="more-info">
											<img src="${notedate[0].src}">
											<h4>香酥脆燕麦饼干【改版燕麦饼干】</h4>
											<h6>燕麦饼干</h6>
										</div>`)
					}

				$('.content').addClass('content-diplay')
				$('.content-left').css({'width':'58%'})
				$('.content-right').css({'width':'40%','display':'flex','flex-direction':'column'})

			})

			// 主题站按钮
			$('.topic').click(function(){
				$('.content').empty()
				$(".content").html(`
						<div class="content-left">

						</div>
						<div class="content-right">

						</div>
					`);
				$('.content-left').html(`<div class="title">
							<h3>全部主题帖</h3>
							<a href="">更多>></a>
						</div>`)
					var order= (`
						<div class="rank">
							<div class="rank-img">
								<img src="image/personalCenter/caidan/caidan_03.png" alt="" />
								<div>
									<h4>生活小窍门</h4>
									<h6>分享生活智慧的结晶</h6>
								</div>
							</div>
							<div class="rank-order">
								<ul>
									<li class="select"><b></b> 小窍门 <span>|</span> 童年记忆不变色，多彩过六一</li>
									<li class="select"><b></b> 小窍门 <span>|</span> 无辣不欢大胆吃，这样吃辣不爆痘</li>
									<li class="select"><b></b> 小窍门 <span>|</span> 童年记忆不变色，多彩过六一</li>
									<li><b></b> 小窍门 <span>|</span> 无辣不欢大胆吃，这样吃辣不爆痘</li>
									<li><b></b> 小窍门 <span>|</span> 童年记忆不变色，多彩过六一</li>
									<li><b></b> 小窍门 <span>|</span> 无辣不欢大胆吃，这样吃辣不爆痘</li>
								</ul>
							</div>
						</div>
					`)
					for(var i =0;i<5;i++){
						$('.content-left').append(order)
					}
					var num = $('.rank-order ul b');
					// console.log(num);
					for(var i=0;i<5;i++){//设置序号
						for(var j=1;j<7;j++){
							var n= i*6+j;
							num.eq(n-1).text(j);
						}

					}

					$('.content-left').append(`<div class="page-number">
					<form>
						<input type="button" value="1" class='page-btn'>
						<input type="button" value="2" class='page-btn'>
						<input type="button" value="3" class='page-btn'>
						<input type="button" value="4" class='page-btn'>
						<input type="button" value="&middot;&middot;&middot;" class='page-btn'>
						<input type="button" value="下一页">
						<input type="button" value="尾页">
					</form>
				</div>`)

				$(".content-right").append(`
						<div class="more">
							<div class="more-title">
								<h3>更多推荐</h3>
								<a href="">更多>></a>
							</div>

						</div>`)
					for(var i=0;i<3;i++){
						$('.more').append(`
									<div class="more-info">
										<img src="${notedate[0].src}">
										<h4>香酥脆燕麦饼干【改版燕麦饼干】</h4>
										<h6>燕麦饼干</h6>
									</div>`)
				}

				$('.content').addClass('content-diplay')
				$('.content-left').css({'width':'58%'})
				$('.content-right').css({'width':'38%','display':'flex'})
			})

		}
	})

})
