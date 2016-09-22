$(document).ready(function(){
	//alert("Hello Big Daddy JT!");
	//Using # because im using IDs to identify in the HTML code
	$("#hide").click(function(){
		$("#image").hide();
	});	

	$("#show").click(function(){
		$("#image").show();
	});

	$("#fadeIn").click(function(){
		$("#image").fadeIn(5000);
	});

	$("#fadeOut").click(function(){
		$("#image").fadeOut(5000);
	});

	$("#explode").click(function(){
		$("#image").hide("explode",{pieces:120}, 5000);
	});

	$("#slideUp").click(function(){
		$("#image").slideUp(2000).slideDown(1000).hide("explode",{pieces:120}, 5000);
	});

	$("#pulse").click(function(){
		$("#image").toggle("pulsate",(5000));
	})

});		