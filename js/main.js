$(function(){
   var mySwiper = new Swiper('.swiper-container',{
   pagination : '.swiper-pagination',
  paginationClickable :true,
})
	$(window).scroll(function(){
		$(".nav").css({"opacity":"1"});
		/*//获取可视窗口的高度显示返回顶部*/
		if($(window).scrollTop()>$(window).height()){
			$(".top").css({"opacity":1});
		}else if($(window).scrollTop()==0){
			$(".top").css({"opacity":0});
		}
		})
	$(".top").click(function(){
		var timer=setInterval(function(){
			var scr=$(window).scrollTop();
			var speedTop=scr/5;
			$(window).scrollTop()=scr-speedTop;
			if($(window).scrollTop()==0){
				clearInterval(timer);
			}
		},500);
	})
	

})




