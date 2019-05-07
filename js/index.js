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
  var img_mask = $("section .show-case-img-box .img .img-mask");
  var img_mask_h = img_mask.css('height');
  img_mask.css("line-height",img_mask_h)
  img_mask.parent().mouseover(function(){
    var h = $(this).css("height")
    var w = $(this).css("width")
    $(this).find(".img-mask").css({
      "height":"100%",
      "line-height":h,
      "text-align":"center",
      "font-size":"4em"
    }
    )
    $(this).find("button").css({
      "display":"inline-block",
      "width":"120px",
      "font-size":"20px"
    }
    )
  }).mouseout(function() {
    var h = $(this).css("height")
    $(this).find(".img-mask").css({
      "height":"20%",
      "line-height":parseInt(h)*0.2+'px',
      "text-align":"left",
      "font-size":"2em"
    }
    )
    $(this).find(".img-mask-season").css({
      "height":"0",
      "line-height":parseInt(h)*0.2+'px',
      "text-align":"left",
      "font-size":"2em"
    }
    )
    $(this).find("button").css({
      "display":'none',
    })
  });
  var show_case = $(".show-case")
  // console.log(show_case);
  var wh = $(window).height();
  $(window).scroll(function(){
    show_case.each(function(i) {
        if($(this).offset().top < $(window).scrollTop()+wh){
          // console.log('test');
          // console.log($(this));
          $(this).find(".left-aline").css("width","100%")
          $(this).find(".right-aline").css("width","100%")
        }
      });
  }); 
})