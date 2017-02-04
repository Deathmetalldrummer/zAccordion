$(document).ready(function () {
	'use strict';

	/* Tabs */
	(function () {
		$('.tabs-content li').each(function () {
			if (!$(this).hasClass('active')) {
				$(this).css('display', 'none');
			}
		});
		$('.tabs a').click(function () {
			$(this).parent().parent().find('a').removeClass('active');
			$(this).addClass('active');
			$(this).parent().parent().next().find('li').css('display', 'none');
			$($(this).attr('href')).css('display', 'block');
			return false;
		});
	}());

	/* Default Example zAccordion */
	(function () {
		var featured = $('#featured'), defaults = {
			easing: 'easeOutBounce',
			timeout: 5500
		};
		function build(x) {
			var opts, current;
			if (!$.isEmptyObject(featured.data())) {
				current = featured.data('current');
				opts = $.extend({
					startingSlide: current
				}, defaults, x);
				featured.zAccordion('destroy', {
					removeStyleAttr: true,
					removeClasses: true,
					destroyComplete: {
						rebuild: opts
					}
				});
			} else {
				opts = $.extend(defaults, x);
				featured.zAccordion(opts);
			}
		}
		if (featured.length > 0) {
			enquire.register('screen and (min-width: 960px)', {
				match : function () {
					featured.find('img').each(function(){
						$(this).attr('src', $(this).attr('data-src-full'));
						$(this).attr('width', '600');
						$(this).attr('height', '310');
					});
					build({
						slideWidth: 600,
						width: 900,
						height: 310
					});
				}
			}, true).register('screen and (min-width: 768px) and (max-width: 959px)', {
				match : function () {
					featured.find('img').each(function(){
						$(this).attr('src', $(this).attr('data-src-standard'));
						$(this).attr('width', '460');
						$(this).attr('height', '235');
					});
					build({
						slideWidth: 460,
						width: 700,
						height: 235
					});
				}
			}).register('screen and (min-width: 480px) and (max-width: 767px)', {
				match : function () {
					featured.find('img').each(function(){
						$(this).attr('src', $(this).attr('data-src-tablet'));
						$(this).attr('width', '250');
						$(this).attr('height', '125');
					});
					build({
						slideWidth: 250,
						width: 380,
						height: 125
					});
				}
			}).register('screen and (max-width: 479px)', {
				match : function () {
					featured.find('img').each(function(){
						$(this).attr('src', $(this).attr('data-src-mobile'));
						$(this).attr('width', '170');
						$(this).attr('height', '85');
					});
					build({
						slideWidth: 170,
						width: 260,
						height: 85
					});
				}
			}).listen(5);
		}
	}());

	/* Accordion Example 1 - Barebones*/
	(function () {
		if ($('#slideshow').length > 0) {
			$('#slideshow').zAccordion({
				invert: true,
				width: 700,
				height: 310,
				tabWidth: 100
			});
		}
	}());

	/* Accordion Example 2 - An Advanced Example */
	(function () {
		var splash = $('#splash'), defaults = {
			timeout: 4500,
			speed: 500,
			slideClass: 'slide',
			animationStart: function () {
				$('#splash').find('li.slide-previous div').fadeOut();
			},
			animationComplete: function () {
				$('#splash').find('li.slide-open div').fadeIn();
			},
			buildComplete: function () {
				splash.find('li.slide-closed div').css('display', 'none');
				splash.find('li.slide-open div').fadeIn();
			},
			startingSlide: 1
		};
		function build(x) {
			var opts, current;
			if (!$.isEmptyObject(splash.data())) {
				current = splash.data('current');
				opts = $.extend({
					startingSlide: current
				}, defaults, x);
				splash.zAccordion('destroy', {
					removeStyleAttr: true,
					removeClasses: true,
					destroyComplete: {
						rebuild: opts
					}
				});
			} else {
				opts = $.extend(defaults, x);
				splash.zAccordion(opts);
			}
		}
		if (splash.length > 0) {
			$('#controls a.goto').click(function () {
				$('#splash').zAccordion('trigger', 3);
				$('#controls p').html('Switching to Slide 4');
				return false;
			});
			$('#controls a.startstop').click(function () {
				if ($(this).text() === 'Stop') {
					$('#splash').zAccordion('stop');
					$('#controls p').html('Slideshow Stopped');
					$(this).text('Start');
				} else {
					$('#splash').zAccordion('start');
					$('#controls p').html('Slideshow Started');
					$(this).text('Stop');
				}
				return false;
			});
			enquire.register('screen and (min-width: 960px)', {
				match : function () {
					build({
						slideWidth: 600,
						width: 900,
						height: 310
					});
				}
			}, true).register('screen and (min-width: 768px) and (max-width: 959px)', {
				match : function () {
					build({
						slideWidth: 460,
						width: 700,
						height: 235
					});
				}
			}).listen(5);
		}
	}());

	/* Accordion Example 4 - Another Advanced Example */
	(function () {
		var slider = $('#slider'), defaults = {
			tabWidth: 100,
			speed: 650,
			slideClass: 'slider',
			animationStart: function () {
				$('#slider').find('li.slider-open div').css('display', 'none');
				$('#slider').find('li.slider-previous div').css('display', 'none');
			},
			animationComplete: function () {
				$('#slider').find('li div').fadeIn(600);
			}
		};
		function build(x) {
			var opts, current;
			if (!$.isEmptyObject(slider.data())) {
				current = slider.data('current');
				opts = $.extend({
					startingSlide: current
				}, defaults, x);
				slider.zAccordion('destroy', {
					removeStyleAttr: true,
					removeClasses: true,
					destroyComplete: {
						rebuild: opts
					}
				});
			} else {
				opts = $.extend(defaults, x);
				slider.zAccordion(opts);
			}
		}
		if (slider.length > 0) {
			enquire.register('screen and (min-width: 960px)', {
				match : function () {
					build({
						width: 900,
						height: 400
					});
				}
			}, true).register('screen and (min-width: 768px) and (max-width: 959px)', {
				match : function () {
					build({
						width: 700,
						height: 265
					});
				}
			}).listen(5);
		}
	}());

	/* Accordion Example 6 - A Responsive Example using Media Queries */
	(function () {
		var media = $('#media'), defaults = {
			easing: 'easeOutExpo',
			slideClass: 'media',
			buildComplete: function () {
				media.css('visibility', 'visible');
			},
			timeout: 5500
		};
		function build(x) {
			var opts, current;
			if (!$.isEmptyObject(media.data())) { /* If an zAccordion is found, rebuild it with new settings. */
				media.css('visibility', 'hidden');
				current = media.data('current');
				opts = $.extend({
					startingSlide: current
				}, defaults, x);
				media.zAccordion('destroy', {
					removeStyleAttr: true,
					removeClasses: true,
					destroyComplete: {
						afterDestroy: function() {
							try {
								console.log('zAccordion destroyed! Attempting to rebuild...');
							} catch (e) {}
						},
						rebuild: opts
					}
				});
			} else { /* If no zAccordion is found, build one from scratch. */
				media.css('visibility', 'hidden');
				opts = $.extend(defaults, x);
				media.zAccordion(opts);
			}
		}
		if (media.length > 0) {
			/* A unique Media Query is registered for each screen size. */
			enquire.register('screen and (min-width: 960px)', { /* Standard screen sizes and a default build for browsers that are unsupported. */
				match : function () {
					build({
						slideWidth: 600,
						width: 900,
						height: 345
					});
				} /* The *true* value below means this media query will fire by default. */
			}, true).register('screen and (min-width: 768px) and (max-width: 959px)', {
				match : function () {
					build({
						slideWidth: 460,
						width: 700,
						height: 265
					});
				}
			}).register('screen and (min-width: 480px) and (max-width: 767px)', {
				match : function () {
					build({
						slideWidth: 250,
						width: 380,
						height: 145
					});
				}
			}).register('screen and (max-width: 479px)', {
				match : function () {
					if (!$.isEmptyObject(media.data())) {
						media.zAccordion('destroy', {
							removeStyleAttr: true,
							removeClasses: true,
							destroyComplete: {
								afterDestroy: function() {
									try {
										console.log('zAccordion destroyed!');
									} catch (e) {}
								}
							}
						});
					}
				}
			}).listen(5);
		}
	}());

}); /* $(document).ready() */

/* Accordion Example 5 - Fade in the Accordion */
$(window).load(function () {
	'use strict';
	if ($('#slides').length > 0) {
		$('#slides').zAccordion({
			width: 700,
			slideWidth: 400,
			height: 400,
			buildComplete: function () {
				$('#inner').fadeIn(3000);
			}
		});
	}
});

$(window).load(function() {
    $('.accordion-offset').css({
        position: 'static',
        left: 0
    });
});