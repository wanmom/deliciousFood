$(function(){
	var money=localStorage.getItem("mustmoney")
	$(".confirm-money-all").text(money)

	$('pay-ok').click(function(event) {
		/* Act on the event */
		location.href="http://127.0.0.1/deliciousFood"
	});
})