// 获取元素
var $carousel = $("#carousel");
var $unit = $("#unit");
var $leftBtn = $("#leftBtn");
var $rightBtn = $("#rightBtn");
var $circles = $("#circles ol li");
var amount = $circles.length;
var width=$(window).width();
console.log(width);
console.log($("#unit li a img"));
$("#unit li").each(function(){
	$(this).css({'width':width});
})
$("#unit li a img").each(function(){
	$(this).css({'width':width,'height':'514px'});
})
// 信号量
var idx = 0;

// 克隆第一张图片clone()。
// 追加猫腻图到unit的节点上appendTo()。
$unit.children("li:first").clone().appendTo($unit);

// 定时器
var timer = setInterval(rightFun, 2000);
// 鼠标进入清除定时器
$carousel.mouseenter(function() {
	clearInterval(timer);
});

// 鼠标离开开始定时器
$carousel.mouseleave(function() {
	// 设表先关
	clearInterval(timer);
	timer = setInterval(rightFun, 2000);
});

// 右按钮的点击事件
//$rightBtn.click(rightFun);
// 函数声明
function rightFun() {
	// 防流氓
	if($unit.is(":animated")) {
		return;
	}
	// 先拉动再验证
	// 信号量改变
	idx++;
	$unit.animate({
		"left": -width * idx
	}, 400, function() {
		if(idx > amount - 1) {
			idx = 0;
			// 瞬移
			$unit.css("left", 0);
		}
	});

	// 小圆点改变
	// 有一瞬间idx = 5,奇迹上就是猫腻图片，也就是让小圆点去idx = 0
	var i = idx <= amount - 1 ? idx : 0;
	$circles.eq(i).addClass("cur").siblings().removeClass("cur");

}

// 左按钮的点击事件
// 编程思想先验证后拉动
//$leftBtn.click(function() {
//	// 防流氓
//	if($unit.is(":animated")) {
//		return;
//	}
//	// 信号量的改变
//	idx--;
//	// 先验证
//	if(idx < 0) {
//		idx = amount - 1;
//		// 瞬移到猫腻图
//		$unit.css("left", -560 * amount);
//	}
//	$unit.animate({
//		"left": -560 * idx
//	}, 500);
//	// 小圆点
//	$circles.eq(idx).addClass("cur").siblings().removeClass("cur");
//});

// 小圆点事件
$circles.mouseenter(function() {
	// 信号量改变
	idx = $(this).index();
	$unit.stop(true).animate({
		"left": -width * idx
	}, 500);
	// 小圆点改变
	$(this).addClass("cur").siblings().removeClass("cur");
});