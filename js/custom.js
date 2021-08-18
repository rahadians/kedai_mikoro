(function ($) {
	"use strict";

	/* ..............................................
	Loader 
		................................................. */

	$(window).on("load", function () {
		$(".preloader").fadeOut();
		$("#preloader").delay(550).fadeOut("slow");
		$("body").delay(450).css({ overflow: "visible" });
	});

	/* ..............................................
		Fixed Menu
		................................................. */

	$(window).on("scroll", function () {
		if ($(window).scrollTop() > 50) {
			$(".top-header").addClass("fixed-menu");
		} else {
			$(".top-header").removeClass("fixed-menu");
		}
	});

	/* ..............................................
		Gallery
		................................................. */

	$("#slides").superslides({
		inherit_width_from: ".cover-slides",
		inherit_height_from: ".cover-slides",
		play: 5000,
		animation: "fade",
	});

	$(".cover-slides ul li").append("<div class='overlay-background'></div>");

	/* ..............................................
		Map Full
		................................................. */

	$(document).ready(function () {
		$(window).on("scroll", function () {
			if ($(this).scrollTop() > 100) {
				$("#back-to-top").fadeIn();
			} else {
				$("#back-to-top").fadeOut();
			}
		});
		$("#back-to-top").click(function () {
			$("html, body").animate({ scrollTop: 0 }, 600);
			return false;
		});
	});

	/* ..............................................
		Special Menu
		................................................. */

	var Container = $(".container");
	Container.imagesLoaded(function () {
		var portfolio = $(".special-menu");
		portfolio.on("click", "button", function () {
			$(this).addClass("active").siblings().removeClass("active");
			var filterValue = $(this).attr("data-filter");

			$grid.isotope({
				filter: filterValue,
			});
		});
		var $grid = $(".special-list").isotope({
			itemSelector: ".special-grid",
		});
	});

	/* ..............................................
		BaguetteBox
		................................................. */

	baguetteBox.run(".tz-gallery", {
		animation: "fadeIn",
		noScrollbars: true,
	});

	/* ..............................................
		Datepicker
		................................................. */

	// $('.datepicker').pickadate();

	// $('.time').pickatime();

	// form order

	$(document).on("click", ".send_form", function () {
		var input_blanter = document.getElementById("wa_number");

		/* Whatsapp Settings */
		var walink = "https://web.whatsapp.com/send",
			phone = "6281210010055",
			walink2 = "Halo Kitchen Nona saya ingin order ",
			text_yes = "Terkirim.",
			text_no = "Isi semua Formulir lalu klik Send.";

		/* Smartphone Support */
		if (
			/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
				navigator.userAgent
			)
		) {
			var walink = "whatsapp://send";
		}

		if ("" != input_blanter.value) {
			/* Call Input Form */
			var input_select1 = $("#wa_select :selected").text(),
				input_name1 = $("#wa_name").val(),
				input_number1 = $("#wa_number").val(),
				input_email1 = $("#wa_email").val(),
				input_url1 = $("#wa_url").val(),
				input_textarea1 = $("#wa_textarea").val();

			/* Final Whatsapp URL */
			var blanter_whatsapp =
				walink +
				"?phone=" +
				phone +
				"&text=" +
				walink2 +
				"%0A%0A" +
				"*Name* : " +
				input_name1 +
				"%0A" +
				"*Input Number* : " +
				input_number1 +
				"%0A" +
				// "*Email Address* : " +
				// input_email1 +
				// "%0A" +
				// "*Select Option* : " +
				// input_select1 +
				// "%0A" +

				// "*URL/Link* : " +
				// input_url1 +
				// "%0A" +
				"*Description* : " +
				input_textarea1 +
				"%0A";

			/* Whatsapp Window Open */
			window.open(blanter_whatsapp, "_blank");
			document.getElementById("text-info").innerHTML =
				'<span class="yes">' + text_yes + "</span>";
		} else {
			document.getElementById("text-info").innerHTML =
				'<span class="no">' + text_no + "</span>";
		}
	});
})(jQuery);
