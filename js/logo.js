$(function(){
	$(".x").hide();
	$(".user").on({
		focusin:function(){
			$(".x").show();
			
		},
		focusout:function(){
			$(".x").hide();
		}
	})
	$(".xx").hide();
	$(".pwd").on({
		focusin:function(){
			$(".xx").show();
		},
		focusout:function(){
			$(".xx").hide();
		}
	})
	$(".xxx").hide();
	$(".yzm").on({
		focusin:function(){
			$(".xxx").show();
		},
		focusout:function(){
			$(".xxx").hide();
		}
	})
	$(".ii").click(function(){
		$(this).toggleClass("iii");
	})
})
