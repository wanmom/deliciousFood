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
			var user = data.user[0].xiaokeai
			var header_img_src = user.head_img
			var fansnum = user.fansnum
			var notedate = user.notedate
			var restaurant = user.restaurant
			var restaurantWant = user.restaurant_want
			var restaurantLike = user.restaurant_like
			var caipu = user.gailan
			var my_caidan = user.my_caidan
			var shoucan = user.shoucan

			console.log(header_img_src);
			console.log(fansnum);
			console.log(notedate);
			console.log(caipu);

			var person_img = $(".person-img")
			var person_btn = $(".person-btn")
			var person_nav = $(".person-nav")
			var person_fansnum = $(".fansnum")
			var person_caipunum = $(".caipunum")
			var person_notenum = $(".notenum")
			var publicInfo_box = $(".publicInfo-box")
			var push_mess = $(".push-mess")
			var public_nav = $(".public-nav")
			var page_number = $(".page-number")

			var general = $("#general")
			var menu = $("#menu")
			var FoodDiary = $("#FoodDiary")
			var OurWorks = $("#OurWorks")
			var Collection = $("#Collection")
			var LeavingMess = $("#LeavingMess")


			person_fansnum.val("粉丝("+fansnum+")")
			person_caipunum.val("菜谱("+caipu.length+")")
			person_notenum.val("日记("+notedate.length+")")


			$(window).resize(function(){
				var img_w = parseInt(parseInt($(".person-center").css("width"))/6.5)
				var img_w_2 = 0-img_w/2
				var person_h = parseInt($(".person-center").css("height"))/2-img_w_2+20
				console.log(person_h);
				person_img.css({
					"height":img_w,
					"width":img_w,
					"margin-top":img_w_2-30,
					"margin-left":img_w_2,
					"background-image":'url("'+header_img_src+'")',
					"background-size":img_w,
					 "background-position":"center"
				})
				person_btn.css("top",person_h)
				person_nav.css("bottom","0px")
			})
			$(window).resize();


			$.ajax({
				url:"http://127.0.0.1/deliciousFood/caipu.json",
				success:function(data2){
					var push_caipu_list = data2.caipu
					for( var i in push_caipu_list){
						var liii = $('<img src="'+push_caipu_list[i].little_src+'" alt="">\
						<h4>'+push_caipu_list[i].title_out+'</h4>\
						<p>'+push_caipu_list[i].user.name+'</p>')
						push_mess.append(liii)
					}
				}
			})

			var FoodDiary_navs = $('<div class="Diary-btn-box">\
						<input type="button" class="Diary-btn FoodDiary_bottom" value="美食日记('+notedate.length+')">\
						<input type="button" class="Diary-btn WantTores" value="想去的餐厅('+restaurantWant.length+')">\
						<input type="button" class="Diary-btn HaveGores" value="去过的餐厅('+restaurant.length+')">\
						<input type="button" class="Diary-btn Likedres" value="喜欢的餐厅('+restaurantWant.length+')">\
					</div>')
			public_nav.append(FoodDiary_navs)

			/*概览按钮点击事件*/
			general.click(function(event) {

				$(".person-nav input").css("border-bottom","none")
				$(this).css("border-bottom","0.3em solid #EA8823")

				page_number.removeClass('page-number-else')
				publicInfo_box.removeClass('publicInfo-box-else')
				push_mess.removeClass('push-mess-else')
				publicInfo_box.children().first().remove(":not('.page-number')");
				public_nav.empty()

				var li = $('<div class="caipu">\
					</div>')
				publicInfo_box.prepend(li);

				var gailan_caipu = $(".caipu")

				for( var i in caipu){
					console.log(caipu[i]);
					var lii = $('<h3>'+caipu[i].name_tile+'</h3>\
						<img src="'+caipu[i].src+'" alt="">\
						<p><b>'+caipu[i].time+'</b></p>\
						<p class="caipu-info">'+ caipu[i].info+'</p>')
					gailan_caipu.append(lii)
				}
			});
			general.click();

			/*菜单按钮点击事件*/
			menu.click(function(event) {
				$(".person-nav input").css("border-bottom","none")
				$(this).css("border-bottom","0.3em solid #EA8823")

				page_number.removeClass('page-number-else')
				publicInfo_box.removeClass('publicInfo-box-else')
				push_mess.removeClass('push-mess-else')
				publicInfo_box.children().first().remove(":not('.page-number')");
				public_nav.empty()

				var navs = $('<div class="dropdown">\
					  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown">\
					    我的菜单\
					    <span class="caret"></span>\
					  </button>\
					  <ul class="dropdown-menu">\
					    <li><a >Action</a></li>\
					    <li><a >Another action</a></li>\
					    <li><a >Something else here</a></li>\
					  </ul>\
					  <span class="add">创建菜单</span>\
					</div>')
				public_nav.append(navs)

				var li = $('<div class="caimenu">\
									</div>')
				publicInfo_box.prepend(li);

				var caimenu = $(".caimenu")

				for( var i in my_caidan){
					console.log(my_caidan[i]);
					var lii = $('<h3>'+my_caidan[i].title+'</h3>\
						<img src="'+my_caidan[i].src+'" alt="">\
						<p><b>'+my_caidan[i].time+'</b></p>\
						<p class="caipu-info">'+ my_caidan[i].info+'</p>')
					caimenu.append(lii)
				}
			});

			/*美食日记按钮点击事件*/
			$('#FoodDiary').click(function(event) {
				$(".person-nav input").css("border-bottom","none")
				$(this).css("border-bottom","0.3em solid #EA8823")

				page_number.removeClass('page-number-else')
				publicInfo_box.removeClass('publicInfo-box-else')
				push_mess.removeClass('push-mess-else')
				publicInfo_box.children().first().remove(":not('.page-number')");
				public_nav.empty()
				public_nav.append(FoodDiary_navs)

				var li = $('<div class="Food-Diary">\
					</div>')
				publicInfo_box.prepend(li);

				for(var i in notedate){
					var lii = $('<div class="diary-title">\
									<div class="diary-name">'+notedate[i].title+'</div>\
									<div class="diary-time">'+notedate[i].time+'</div>\
								</div>\
								<img src="'+notedate[i].src+'" alt="">\
								<div class="share-nav">\
									<span>短评：</span>\
								 	<input type="text" placeholder="&nbsp;'+notedate[i].duanping+'" >\
								 	<input type="button" value="分享" />\
								</div>')
					$(".Food-Diary").append(lii)
				}


				/*日记*/

				$('.FoodDiary_bottom').click(function(event) {

					$(".Diary-btn").css("color","black")
					$(this).css("color","#EA8823")
					publicInfo_box.children().first().remove();

					var li = $('<div class="Food-Diary">\
						</div>')
					publicInfo_box.prepend(li);

					for(var i in notedate){
						var lii = $('<div class="diary-title">\
										<div class="diary-name">'+notedate[i].title+'</div>\
										<div class="diary-time">'+notedate[i].time+'</div>\
									</div>\
									<img src="'+notedate[i].src+'" alt="">\
									<div class="share-nav">\
										<span>短评：</span>\
									 	<input type="text" placeholder="&nbsp;'+notedate[i].duanping+'" >\
									 	<input type="button" value="分享" />\
									</div>')
						$(".Food-Diary").append(lii)
					}

				});



				/*想去的餐厅*/

				$('.WantTores').click(function(event) {

					$(".Diary-btn").css("color","black")
					$(this).css("color","#EA8823")
					publicInfo_box.children().first().remove();
					var li = $('<div class="res-box"></div>')
					publicInfo_box.prepend(li);

					for(var i in restaurantWant){
						var lii = $('<div class="res-want">\
										<p>'+restaurantWant[i].name+'</p>\
										<p>地址：'+restaurantWant[i].address+'</p>\
										<p>电话：'+restaurantWant[i].tel+'</p>\
										<p>菜系：'+restaurantWant[i].caixi+'</p>\
										<img src="'+restaurantWant[i].image+'" alt="" />\
										<div class="person-consume">\
											<div>人均</div>\
											<div>'+restaurantWant[i].money+'</div>\
										</div>\
									</div>')
						$('.res-box').append(lii)
						// console.log(restaurantWant[i]);
					}
				});


				/*喜欢的餐厅*/

				$('.Likedres').click(function(event) {

					$(".Diary-btn").css("color","black")
					$(this).css("color","#EA8823")
					publicInfo_box.children().first().remove();
					var li = $('<div class="res-box"></div>')
					publicInfo_box.prepend(li);

					for(var i in restaurantWant){
						var lii = $('<div class="res-want">\
										<p>'+restaurantWant[i].name+'</p>\
										<p>地址：'+restaurantWant[i].address+'</p>\
										<p>电话：'+restaurantWant[i].tel+'</p>\
										<p>菜系：'+restaurantWant[i].caixi+'</p>\
										<img src="'+restaurantWant[i].image+'" alt="" />\
										<div class="person-consume">\
											<div>人均</div>\
											<div>'+restaurantWant[i].money+'</div>\
										</div>\
									</div>')
						$('.res-box').append(lii)
						// console.log(restaurantWant[i]);
					}
				});


				/*去过的餐厅*/
				$('.HaveGores').click(function(event) {

					$(".Diary-btn").css("color","black")
					$(this).css("color","#EA8823")
					publicInfo_box.children().first().remove();
					var li = $('<div class="res-box"></div>')
					publicInfo_box.prepend(li);

					for(var i in restaurant){
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
						// lii.after(res_food_img)
						$('.res-box').append(lii)
						$('.res-box').append(res_food_img)
						// console.log(restaurantWant[i]);
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
				});

			});



			/*作品按钮点击事件*/
			OurWorks.click(function(event) {

				$(".person-nav input").css("border-bottom","none")
				$(this).css("border-bottom","0.3em solid #EA8823")

				page_number.removeClass('page-number-else')
				publicInfo_box.removeClass('publicInfo-box-else')
				push_mess.removeClass('push-mess-else')
				publicInfo_box.addClass('publicInfo-box-else')
				push_mess.addClass('push-mess-else')
				publicInfo_box.children().first().remove(":not('.page-number')");
				public_nav.empty()

				var li = $('<div class="our-works-out">\
								<p class="works-year" style="text-align:left">2017年</p>\
								<div class="our-works-box">\
									<div class="time">\
										<div class="work-time">\
											<div class="month">3月</div>\
											<div class="day">08</div>\
										</div>\
									</div>\
									<div class="works-img-info">\
										<div class="img-info-box">\
											<div class="info_box">\
												<div class="img-mask">\
													这是一道菜\
												</div>\
												<img src="image/personalCenter/caipu/概览_03.gif" alt="" />\
											</div>\
											<div class="info_box">\
												<div class="img-mask">\
													这是一道菜\
												</div>\
												<img src="image/personalCenter/caipu/概览_06.gif" alt="" />\
											</div>\
											<div class="info_box">\
												<div class="img-mask">\
													这是一道菜\
												</div>\
												<img src="image/personalCenter/caipu/概览_08.gif" alt="" />\
											</div>\
											<div class="info_box">\
												<div class="img-mask">\
													这是一道菜\
												</div>\
												<img src="image/personalCenter/caipu/概览_06.gif" alt="" />\
											</div>\
											<div class="info_box">\
												<div class="img-mask">\
													这是一道菜\
												</div>\
												<img src="image/personalCenter/caipu/概览_08.gif" alt="" />\
											</div>\
										</div>\
									</div>\
								</div>\
								<div class="our-works-box">\
									<div class="time">\
										<div class="work-time">\
											<div class="month">1月</div>\
											<div class="day">20</div>\
										</div>\
									</div>\
									<div class="works-img-info">\
										<div class="img-info-box">\
											<div class="info_box">\
												<div class="img-mask">\
													这是一道菜\
												</div>\
												<img src="image/personalCenter/caipu/概览_06.gif" alt="" />\
											</div>\
											<div class="info_box">\
												<div class="img-mask">\
													这是一道菜\
												</div>\
												<img src="image/personalCenter/caipu/概览_08.gif" alt="" />\
											</div>\
											<div class="info_box">\
												<div class="img-mask">\
													这是一道菜\
												</div>\
												<img src="image/personalCenter/caipu/概览_03.gif" alt="" />\
											</div>\
											<div class="info_box">\
												<div class="img-mask">\
													这是一道菜\
												</div>\
												<img src="image/personalCenter/caipu/概览_08.gif" alt="" />\
											</div>\
										</div>\
									</div>\
								</div>\
								<p class="works-year" style="text-align:left">2016年</p>\
								<div class="our-works-box">\
									<div class="time">\
										<div class="work-time">\
											<div class="month">11月</div>\
											<div class="day">28</div>\
										</div>\
									</div>\
									<div class="works-img-info">\
										<div class="img-info-box">\
											<div class="info_box">\
												<div class="img-mask">\
													这是一道菜\
												</div>\
												<img src="image/personalCenter/caipu/概览_03.gif" alt="" />\
											</div>\
											<div class="info_box">\
												<div class="img-mask">\
													这是一道菜\
												</div>\
												<img src="image/personalCenter/caipu/概览_06.gif" alt="" />\
											</div>\
											<div class="info_box">\
												<div class="img-mask">\
													这是一道菜\
												</div>\
												<img src="image/personalCenter/caipu/概览_03.gif" alt="" />\
											</div>\
											<div class="info_box">\
												<div class="img-mask">\
													这是一道菜\
												</div>\
												<img src="image/personalCenter/caipu/概览_08.gif" alt="" />\
											</div>\
											<div class="info_box">\
												<div class="img-mask">\
													这是一道菜\
												</div>\
												<img src="image/personalCenter/caipu/概览_03.gif" alt="" />\
											</div>\
										</div>\
									</div>\
								</div>\
								<div class="our-works-box">\
									<div class="time">\
										<div class="work-time">\
											<div class="month">10月</div>\
											<div class="day">22</div>\
										</div>\
									</div>\
									<div class="works-img-info">\
										<div class="img-info-box">\
											<div class="info_box">\
												<div class="img-mask">\
													这是一道菜\
												</div>\
												<img src="image/personalCenter/caipu/概览_06.gif" alt="" />\
											</div>\
											<div class="info_box">\
												<div class="img-mask">\
													这是一道菜\
												</div>\
												<img src="image/personalCenter/caipu/概览_08.gif" alt="" />\
											</div>\
											<div class="info_box">\
												<div class="img-mask">\
													这是一道菜\
												</div>\
												<img src="image/personalCenter/caipu/概览_03.gif" alt="" />\
											</div>\
											<div class="info_box">\
												<div class="img-mask">\
													这是一道菜\
												</div>\
												<img src="image/personalCenter/caipu/概览_08.gif" alt="" />\
											</div>\
										</div>\
									</div>\
								</div>\
							</div>')
				publicInfo_box.prepend(li);

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

			});

			/*收藏按钮点击事件*/
			Collection.click(function(event) {
				$(".person-nav input").css("border-bottom","none")
				$(this).css("border-bottom","0.3em solid #EA8823")

				page_number.addClass('page-number-else')
				publicInfo_box.removeClass('publicInfo-box-else')
				push_mess.removeClass('push-mess-else')
				publicInfo_box.addClass('publicInfo-box-else')
				push_mess.addClass('push-mess-else')
				publicInfo_box.children().first().remove(":not('.page-number')");
				public_nav.empty()

				var li = $('<div class="Collection-menu-box">\
								<h5>收藏的菜谱('+shoucan+')</h5>\
								<div class="collection-Info">\
									<div class="collection-img">\
										<div class="img-mask">\
											吃完胖三百斤的小甜食\
										</div>\
										<img src="image/personalCenter/scj/timg.jpg" alt="" />\
									</div>\
									<div class="collection-img-info">\
										<h6>【提拉米苏（硬身版）】Christophe Felder经典</h6>\
										<p class="repressent">咖啡蛋糕体：蛋黄 低粉 蛋精 淡奶油 白砂糖 速溶咖啡 意大利浓缩咖啡Epresso</p>\
										<p class="repressent">慕斯糊：吉利丁片 淡奶油 白砂糖 水 蛋黄 马斯卡朋奶酪</p>\
										<p class="author">by 糖小饼</p>\
									</div>\
								</div>\
								<div class="collection-Info">\
									<div class="collection-img">\
										<div class="img-mask">\
											吃完胖三百斤的小甜食\
										</div>\
										<img src="image/personalCenter/scj/timg.jpg" alt="" />\
									</div>\
									<div class="collection-img-info">\
										<h6>【提拉米苏（硬身版）】Christophe Felder经典</h6>\
										<p class="repressent">咖啡蛋糕体：蛋黄 低粉 蛋精 淡奶油 白砂糖 速溶咖啡 意大利浓缩咖啡Epresso</p>\
										<p class="repressent">慕斯糊：吉利丁片 淡奶油 白砂糖 水 蛋黄 马斯卡朋奶酪</p>\
										<p class="author">by 糖小饼</p>\
									</div>\
								</div>\
								<div class="collection-Info">\
									<div class="collection-img">\
										<div class="img-mask">\
											吃完胖三百斤的小甜食\
										</div>\
										<img src="image/personalCenter/scj/timg.jpg" alt="" />\
									</div>\
									<div class="collection-img-info">\
										<h6>【提拉米苏（硬身版）】Christophe Felder经典</h6>\
										<p class="repressent">咖啡蛋糕体：蛋黄 低粉 蛋精 淡奶油 白砂糖 速溶咖啡 意大利浓缩咖啡Epresso</p>\
										<p class="repressent">慕斯糊：吉利丁片 淡奶油 白砂糖 水 蛋黄 马斯卡朋奶酪</p>\
										<p class="author">by 糖小饼</p>\
									</div>\
								</div>\
								<div class="collection-Info">\
									<div class="collection-img">\
										<div class="img-mask">\
											吃完胖三百斤的小甜食\
										</div>\
										<img src="image/personalCenter/scj/timg.jpg" alt="" />\
									</div>\
									<div class="collection-img-info">\
										<h6>【提拉米苏（硬身版）】Christophe Felder经典</h6>\
										<p class="repressent">咖啡蛋糕体：蛋黄 低粉 蛋精 淡奶油 白砂糖 速溶咖啡 意大利浓缩咖啡Epresso</p>\
										<p class="repressent">慕斯糊：吉利丁片 淡奶油 白砂糖 水 蛋黄 马斯卡朋奶酪</p>\
										<p class="author">by 糖小饼</p>\
									</div>\
								</div>\
								<div class="collection-Info">\
									<div class="collection-img">\
										<div class="img-mask">\
											吃完胖三百斤的小甜食\
										</div>\
										<img src="image/personalCenter/scj/timg.jpg" alt="" />\
									</div>\
									<div class="collection-img-info">\
										<h6>【提拉米苏（硬身版）】Christophe Felder经典</h6>\
										<p class="repressent">咖啡蛋糕体：蛋黄 低粉 蛋精 淡奶油 白砂糖 速溶咖啡 意大利浓缩咖啡Epresso</p>\
										<p class="repressent">慕斯糊：吉利丁片 淡奶油 白砂糖 水 蛋黄 马斯卡朋奶酪</p>\
										<p class="author">by 糖小饼</p>\
									</div>\
								</div>\
							</div>')
				publicInfo_box.prepend(li);

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
			});


			/*留言按钮点击事件*/
			LeavingMess.click(function(event) {
				$(".person-nav input").css("border-bottom","none")
				$(this).css("border-bottom","0.3em solid #EA8823")

				page_number.addClass('page-number-else')
				publicInfo_box.removeClass('publicInfo-box-else')
				push_mess.removeClass('push-mess-else')
				publicInfo_box.addClass('publicInfo-box-else')
				push_mess.addClass('push-mess-else')
				publicInfo_box.children().first().remove(":not('.page-number')");
				public_nav.empty()

				var li = $('<div class="leaving-box">\
								<div class="user-header-img">\
									<img src="'+header_img_src+'" alt="">\
								</div>\
								<form action="">\
									<textarea name="" id="" placeholder="写下自己对美食的评论吧……"></textarea>\
									<input type="button" value="评论">\
								</form>\
							</div>')
				publicInfo_box.prepend(li);

			});
		}
	})



})
