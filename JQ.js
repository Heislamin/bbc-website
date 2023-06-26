function func(){
   $("#yolo").fadeToggle(3000);
};

function func1(){
	$("#getty").css('width','500px');
};

$('document').ready(function(){
	$("#btn1").click(function(){
		$("#cap").hide(2000);
	});
	
	$("#btn2").click(function(){
		$("#cap").show(2000);
	});
	
	$("#btn3").click(function(){
		$("#cap").toggle(3000);
	});
});
