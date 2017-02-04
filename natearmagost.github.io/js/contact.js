/* Contact Form Map */
$(window).load(function () {
	function initialize() {
		var latlng = new google.maps.LatLng(44.97, -93.26), myopts = {
			zoom: 10,
			center: latlng,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}, map = new google.maps.Map(document.getElementById('m'), myopts);
	}
	initialize();
});

/* Very Crappy Contact Form Functionality */
$(document).ready(function () {
	$('#contact').attr('action', blog + '/sendmail.php');
	function validateEmail(email) { 
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return email.match(re);
	}
	$("#send").removeAttr("disabled");
	$("#contact .text").removeAttr("disabled");
	$("#send").click(function () {
		$("#alert").html("");
		var admin = $("#admin");
		var url = $("#url");
		var name = $("#name");
		var email = $("#email");
		var subject = $("#subject");
		var message = $("#message");
		var city = $("#city");
		var errors = 0;
		if ((message.val().indexOf(' seo') >= 0) || (message.val().indexOf('Marketing') >= 0) || (message.val().indexOf(' SEO') >= 0) || (message.val().indexOf('marketing') >= 0)) {
			message.addClass("highlight");
			$("#alert").html('<div class="notification"><p>This submission contains words flagged as spam.</p></div>').fadeIn();
		} else {
		if (name.val() == "") {
			name.addClass("highlight");
			errors++;
		} else {
			name.removeClass("highlight");
		}
		if (email.val() == "") {
			email.addClass("highlight");
			errors++;
		} else {
			email.removeClass("highlight");
		}
		if (!validateEmail(email.val())) {
			email.addClass("highlight");
			errors++;
		} else {
			email.removeClass("highlight");
		}
		if (message.val() == "") {
			message.addClass("highlight");
			errors++;
		} else {
			message.removeClass("highlight");
		}
		if ((city.val() != "7") && (city.val() != "seven") && (city.val() != "Seven")) {
			city.addClass("highlight");
			errors++;
		} else {
			city.removeClass("highlight");
		}
		if (errors > 0) {
			$("#alert").html('<div class="notification"><p>An error occurred. Please correct the issues below.</p></div>').fadeIn();
		} else {
			var data = "&name=" + name.val() + "&admin=" + admin.val() + "&url=" + url.val() + "&email=" + email.val() + "&subject=" + subject.val() + "&city=" + city.val() + "&message="  + encodeURIComponent(message.val());
			$("#send").addClass("disabled").attr("disabled", "true");
			$("#contact .text").addClass("disabled").attr("disabled", "true");
			$.ajax({
				type: "POST",
				url: blog + "/process.php",
				data: data,
				cache: false,
				success: function (html) {
					if (html == "true") {
						$("#send").removeAttr("disabled").removeClass("disabled");
						$("#contact .text").removeAttr("disabled").removeClass("disabled");
						name.val("");
						email.val("");
						subject.val("");
						message.val("");
						city.val("");
						$("#alert").html('<div class="success"><p>Your message was sent. Thank you.</p></div>');
						setTimeout(function () {
							$("#alert div").fadeOut(1000);
						}, 9000);
						setTimeout(function () {
							$("#alert").html('<p>Please fill out the form below. Required fields are marked with an asterisk. Please note that I may not be able to respond to individual requests for help regarding zAccordion.</p>');
						}, 10000);
					} else {
						$("#send").removeAttr("disabled").removeClass("disabled");
						$("#contact .text").removeAttr("disabled").removeClass("disabled");
						city.val("");
						$("#alert").html('<div class="notification"><p>Sorry, an unexpected error occurred. Please try again later.</p></div>');
					}
				}      
			});
		}
	}
		return false;
	});
});