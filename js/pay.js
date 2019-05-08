$(function(){
	var pay_num_key = "num"
	var pay_num = localStorage.getItem(pay_num_key)
	console.log(pay_num);
	$(".pur-nums").val(pay_num)
	var shop_price_ap = $(".shop-price").text()
	// console.log(shop_price_ap);
	var all_num = pay_num*shop_price_ap
	$('.shop-num').text(all_num)
	$(".calculation-info").text(all_num)
	$(".may-pay").text(all_num)




	for(var i = 0;i < localStorage.length;i++){
		if(localStorage.key(i).slice(0,4) == "addr"){
			  var key = localStorage.key(i);
			  var val = localStorage.getItem(key);
			  var li = `<li>
							<input type="radio" name="address-choiced" id="">
							<p class="address ${key}">${val}</p>
						 </li>`
			  $(".address-info-li ul").append(li)
		}
	  
	}

	$('.shop-sum [type=button]').click(function(event) {
		var num = parseInt($(this).parent().find('.pur-nums').val());
		console.log(num);
		if($(this).val()=='-' && num){
			$(this).parent().find('.pur-nums').val(--num)
		}
		if($(this).val()=='+' &&　num<999){
			$(this).parent().find('.pur-nums').val(++num)
		}
		var shop_price = $(this).parent().parent().find('.shop-price').text();
		// console.log(shop_price);
		$(this).parent().parent().find('.shop-num').text(num*shop_price)
		$(".calculation-info").text(num*shop_price)
		$(".may-pay").text(num*shop_price)
	});
	$('#myModal').modal({
	  backdrop: "static",
	  show:false
	})
	

	$('.saveBtn').click(function() {
		var t = "addr" + new Date().getTime();
		var address_info = $("#province1 option:selected").val() +"  " + $("#city1 option:selected").val() +"  " + $("#district1 option:selected").val()+'  '+$('#minu-add').val()+'  '+$('#consignee-person').val()+'  '+$('#consignee-phone').val()
		console.log(address_info);
		localStorage.setItem(t,address_info);
		var li = `<li>
					<input type="radio" name="address-choiced" id="">
					<p class="address ${t}">${address_info}</p>
				  </li>`
		$(".address-info-li ul").append(li)
		// console.log('test');
		
		// loadAll();

	});





	$('.pay').click(function(){
		localStorage.setItem("num",$(".pur-nums").val());
		localStorage.setItem("mustmoney",$(".may-pay").text());
		location.href="http://127.0.0.1/deliciousFood/confirmOrder.html"
	})
})