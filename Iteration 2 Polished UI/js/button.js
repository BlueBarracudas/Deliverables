$(document).ready(function(){

	$("#loginBtn").mouseover(function(){
		$("#loginBtn").css("background-color", "rgba(255,82,0, 1)");
		$("#loginBtn").css("border-color", "rgba(255,82,0, 1)");
	});

	$("#loginBtn").mouseout(function(){
		$("#loginBtn").css("background-color", "rgba(255,82,0, 0.95)");
		$("#loginBtn").css("border-color", "rgba(255,82,0, 0.95)");
	});

});