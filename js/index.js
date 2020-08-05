$(function() {
	$(".G").mouseenter(function() {
		$(".png").slideDown(1000);
	}).mouseleave(function() {
		$(".png").slideUp(1000);
	});	
	$(".H").mouseenter(function() {
		$(".menu").slideDown(1000);
	}).mouseleave(function() {
		$(".menu").slideUp(1000);
	});
	$("#qg").mouseenter(function() {
		$(".jpg").show(500);
	}).mouseleave(function() {
		$(".jpg").hide(500);
	});
	$(window).scroll(function() {
		if($(this).scrollTop()>1000){
			$(".fpx").show();
		}else{
			$(".fpx").hide();
		}
	})
	var downTime = function() {
		//倒计时时间
		var time = 3 * 60 * 60;
		//时间盒子
		var spans = document.querySelector(".timer").querySelectorAll("span");
		var timer = setInterval(function() {
			time--;
			var h = Math.floor(time / 3600);
			var m = Math.floor(time % 3600 / 60);
			var s = Math.floor(time % 60);
			spans[0].innerHTML = h > 10 ? h : "0" + h;
			spans[2].innerHTML = m > 10 ? m : "0" + m;
			spans[4].innerHTML = s > 10 ? s : "0" + s;
			if(time <= 0) {
				clearInterval(timer);
			}
		}, 1000)
	}
	downTime();

})


