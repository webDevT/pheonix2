$(function(){
$(".tab").click(function() {
	
	$(".tab").removeClass("active").eq($(this).index()).addClass("active");
 	$(".tab-item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");


});