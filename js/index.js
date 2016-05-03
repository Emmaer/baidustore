// $(function(){
// 	var $imgsW=$('.bannerL').width();
// 	var $imgs=$('.bannerL img')
// 	var $span=$('.quan span')

// 	var now=0;
// 	var next=0;
// 	console.log($span)
// 	$imgs.css("left",$imgsW).first().css("left",0)

// 	setInterval(function(){
// 		next++;
// 		if(next>=$imgs.length){
// 			next=0
// 		}
// 		$imgs.eq(next).css({left:$imgsW})
// 		$imgs.eq(now).animate({left:-$imgsW},300)
// 		$imgs.eq(next).animate({left:0},300)
// 		$span.removeClass("hot").eq(next).addClass("hot")
// 		now=next;
// 	},1000)
// })
