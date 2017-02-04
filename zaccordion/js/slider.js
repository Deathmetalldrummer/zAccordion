$(document).ready(function() {
	$("#final").html($("#incomplete").html());
	$("#incomplete").html("")
	$("#cycle").cycle({ 
		timeout: 7500
	});
	$(".fancy").fancybox({
		"titlePosition"	: "inside",
		"opacity"		: true,
		"overlayShow"	: false,
		"transitionIn"	: "elastic",
		"transitionOut"	: "none"
	});
	/*
	$("#name").focus(function(){
		if ($(this).val() == "Name") {
			$(this).val("");
		}
	});
	$("#name").blur(function(){
		if ($(this).val() == "") {
			$(this).val("Name");
		}
	});
	$("#email").focus(function(){
		if ($(this).val() == "Email") {
			$(this).val("");
		}
	});
	$("#email").blur(function(){
		if ($(this).val() == "") {
			$(this).val("Email");
		}
	});
	$("#message").focus(function(){
		if ($(this).val() == "Message") {
			$(this).val("");
		}
	});
	$("#message").blur(function(){
		if ($(this).val() == "") {
			$(this).val("Message");
		}
	});
	*/
});