$(function(){
	var swiper = new Swiper('.swiper-container', {
  	autoplay:{
  		delay:5000,
  		// stopOnLastSlide: false,
  		// disableOnInteraction:false,
   		// reverseDirection: true,
  	},
    pagination: {
      el: '.swiper-pagination',
    },
    loop:true,
  });
})