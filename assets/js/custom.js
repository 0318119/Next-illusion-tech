
$(".slider-carousel").owlCarousel({
	loop: !0,
	margin: 0,
	nav: !1,
	dots: !1,
	// animateIn: "fadeIn",
	// animateOut: "fadeOut",
	infinite: true,
	speed: 2000,
	autoplay: !0,
	// autoplayTimeout: 3e3,
	// autoplayHoverPause: !1,
	mouseDrag: !1,
	responsive: {
		0: {
			items: 1
		},
		600: {
			items: 1
		},
		1000: {
			items: 1
		}
	}
}), $(".testi-carousel").owlCarousel({
	loop: !0,
	margin: 20,
	nav: !0,
	navText: ['<i class="sprite-home sprite-testimonial-left-btn"></i>', '<i class="sprite-home sprite-testimonial-right-btn"></i>'],
	dots: !1,
	animateIn: "fadeIn",
	animateOut: "fadeOut",
	autoplay: !0,
	autoplayTimeout: 3e3,
	autoplayHoverPause: !0,
	mouseDrag: !0,
	responsive: {
		0: {
			items: 1
		},
		768: {
			items: 2
		},
		1000: {
			items: 3
		}
	}
}),

$(".client-logo-carousel").owlCarousel({
	loop: !1,
	margin: 0,
	nav: !1,
	dots: !1,
	autoplay: !0,
	autoplayTimeout: 3e3,
	autoplayHoverPause: !0,
	mouseDrag: !0,
	responsive: {
		0: {
			items: 1
		},
		600: {
			items: 1
		},
		1000: {
			items: 1
		}
	}
}), 

$(".fancybox").fancybox(), $("#getQuote").on("hidden.bs.modal", function (e) {
	$("body").removeAttr("style")
}),
 $(".formSection .form-control").on("focus", function () {
	$(this).parent(".form-group").addClass("fix-label")
}),
 $(".formSection .form-control").on("blur", function () {
	$(this).val().length > 0 ? $(this).parent(".form-group").addClass("fix-label") : $(this).parent(".form-group").removeClass("fix-label")
}), 
$(".navicon .nav-toggle").on("click", function () {
	$(this).toggleClass("active"), $(".detailHeader").toggleClass("active"), $("body").toggleClass("headerOpen")
});

var t = $("#parent .child").length,
	e = $(".child").height(),
	a = t * e - $("#parent").height();
$(document).on("click", "#down", function () {
		
	var o = $("#parent").scrollTop();
		$("#parent").scrollTop(e + o), o == a ? $(this).hide() : $("#up").show()
	}), $(document).on("click", "#up", function () {
		
		var o = parseInt($("#parent").scrollTop());
		$("#parent").scrollTop(o - e), e + o == e ? $(this).hide() : $("#down").show()
	}), $("#entry-box_close").click(function () {
		$("#entry-popup").fadeOut()
	}),

	function (e) {
		e.fn.countTo = function (o) {
			return o = o || {}, e(this).each(function () {
				var s = e.extend({}, e.fn.countTo.defaults, {
						from: e(this).data("from"),
						to: e(this).data("to"),
						speed: e(this).data("speed"),
						refreshInterval: e(this).data("refresh-interval"),
						decimals: e(this).data("decimals")
					}, o),
					t = Math.ceil(s.speed / s.refreshInterval),
					a = (s.to - s.from) / t,
					i = this,
					l = e(this),
					r = 0,
					n = s.from,
					d = l.data("countTo") || {};

				function p(e) {
					var o = s.formatter.call(i, e, s);
					l.html(o)
				}
				l.data("countTo", d), d.interval && clearInterval(d.interval), d.interval = setInterval(function () {
					r++, p(n += a), "function" == typeof s.onUpdate && s.onUpdate.call(i, n), r >= t && (l.removeData("countTo"), clearInterval(d.interval), n = s.to, "function" == typeof s.onComplete && s.onComplete.call(i, n))
				}, s.refreshInterval), p(n)
			})
		}, e.fn.countTo.defaults = {
			from: 0,
			to: 0,
			speed: 1e3,
			refreshInterval: 100,
			decimals: 0,
			formatter: function (e, o) {
				return e.toFixed(o.decimals)
			},
			onUpdate: null,
			onComplete: null
		}
	}(jQuery), $(function (e) {
		e(".count-number").data("countToOptions", {
			formatter: function (e, o) {
				return e.toFixed(o.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ",")
			}
		}), e(".timer").each(function (o) {
			var s = e(this);
			o = e.extend({}, o || {}, s.data("countToOptions") || {}), s.countTo(o)
		})
	}),$(window).width() <= 567 && 0 != ".portfolio-box-responsive-slider".length && ($(".portfolio-box-responsive-slider").addClass("owl-carousel owl-theme"), $(".portfolio-box-responsive-slider").owlCarousel({
		loop: !1,
		margin: 0,
		nav: !1,
		dots: !0,
		autoplay: !0,
		autoplayTimeout: 4e3,
		autoplayHoverPause: !0,
		mouseDrag: !0,
		responsive: {
			0: {
				items: 1
			},
			460: {
				items: 2
			},
			767: {
				items: 2
			},
			991: {
				items: 2
			}
		}
	})),
	
	$("#slick1").slick({
		rows: 2,
		dots: !1,
		arrows: !0,
		infinite: !0,
		autoplay: !0,
		autoplayTimeout: 3e3,
		autoplayHoverPause: !0,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 3,
		responsive: [{
			breakpoint: 568,
			settings: {
				rows: 1,
				slidesToShow: 3
			}
		}, {
			breakpoint: 480,
			settings: {
				rows: 1,
				slidesToShow: 2
			}
		}]
	}), 

	
	$(document).ready(function () {
		// $(".service-bigImage").each(function () {
		// 	$(this).slick({
		// 		slidesToShow: 1,
		// 		slidesToScroll: 1,
		// 		arrows: !1,
		// 		fade: !0,
		// 		asNavFor: ".service-smallImage"
		// 	})
		// }), $(".service-smallImage").each(function () {
		// 	$(this).slick({
		// 		slidesToShow: 3,
		// 		slidesToScroll: 1,
		// 		asNavFor: ".service-bigImage",
		// 		dots: !0,
		// 		centerMode: !1,
		// 		focusOnSelect: !0
		// 	})
		// }),
		 $(".nav-pills a").on("shown.bs.tab", function () {
			let e = $($(this).attr("href"));
			$(".slider-same", e).slick("refresh")
		}), $(".portfolio-animation").slick({
			rows: 2,
			dots: !1,
			arrows: !0,
			infinite: !0,
			autoplay: !0,
			autoplayTimeout: 3e3,
			autoplayHoverPause: !0,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [{
				breakpoint: 657,
				settings: {
					rows: 1,
					slidesToShow: 3
				}
			}, {
				breakpoint: 480,
				settings: {
					rows: 1,
					slidesToShow: 2
				}
			}]
		}), $(".nav-tabs a").on("shown.bs.tab", function () {
			let e = $($(this).attr("href"));
			$(".portfolio-animation", e).slick("refresh")
		}), $(".work-filter-list").isotope(), $(".logo-design-port-filter li").on("click", function () {
			var e = $(this).attr("data-filter");
			$(".work-filter-list").isotope({
				filter: e
			})
		}), 
          $(window).width() <= 991 && 0 != ".main-platform-responsive-slider".length && ($(".main-platform-responsive-slider").addClass("owl-carousel owl-theme"), $(".main-platform-responsive-slider").owlCarousel({
			loop: !1,
			margin: !1,
			nav: !1,
			dots: !1,
			autoplay: !0,
			autoplayTimeout: 4e3,
			autoplayHoverPause: !0,
			mouseDrag: !0,
			responsive: {
				0: {
					items: 1
				},
				460: {
					items: 1
				},
				567: {
					items: 2
				},
				991: {
					items: 3
				}
			}
		})), $(window).width() <= 991 && 0 != ".logo-design-portfolio-responsive-slider".length && ($(".logo-design-portfolio-responsive-slider").addClass("owl-carousel owl-theme"), $(".logo-design-portfolio-responsive-slider").owlCarousel({
			loop: !1,
			margin: !1,
			nav: !1,
			dots: !1,
			autoplay: !0,
			autoplayTimeout: 4e3,
			autoplayHoverPause: !0,
			mouseDrag: !0,
			responsive: {
				0: {
					items: 1
				},
				460: {
					items: 1
				},
				567: {
					items: 2
				},
				991: {
					items: 3
				}
			}
		})), $(window).width() <= 991 && 0 != ".pricing-responsive-slider".length && ($(".pricing-responsive-slider").addClass("owl-carousel owl-theme"), $(".pricing-responsive-slider").owlCarousel({
			loop: !1,
			margin: !1,
			nav: !1,
			dots: !1,
			autoplay: !0,
			autoplayTimeout: 4e3,
			autoplayHoverPause: !0,
			mouseDrag: !0,
			responsive: {
				0: {
					items: 1
				},
				460: {
					items: 1
				},
				768: {
					items: 2
				},
				991: {
					items: 2
				}
			}
		})), $(window).width() <= 767 && 0 != ".price-zone-responsive-slider".length && ($(".price-zone-responsive-slider").addClass("owl-carousel owl-theme"), $(".price-zone-responsive-slider").owlCarousel({
			loop: !1,
			margin: !1,
			nav: !1,
			dots: !1,
			autoplay: !0,
			autoplayTimeout: 4e3,
			autoplayHoverPause: !0,
			mouseDrag: !0,
			responsive: {
				0: {
					items: 1
				},
				460: {
					items: 1
				},
				767: {
					items: 1
				}
			}
		})), $(window).width() <= 991 && 0 != ".about-accessable-responsive-slider".length && ($(".about-accessable-responsive-slider").addClass("owl-carousel owl-theme"), $(".about-accessable-responsive-slider").owlCarousel({
			loop: !1,
			margin: !1,
			nav: !1,
			dots: !1,
			autoplay: !0,
			autoplayTimeout: 4e3,
			autoplayHoverPause: !0,
			mouseDrag: !0,
			responsive: {
				0: {
					items: 1
				},
				460: {
					items: 1
				},
				767: {
					items: 2
				},
				991: {
					items: 2
				}
			}
		})), $(window).width() <= 991 && 0 != ".team-box-responsive-slider".length && ($(".team-box-responsive-slider").addClass("owl-carousel owl-theme"), $(".team-box-responsive-slider").owlCarousel({
			loop: !1,
			margin: !1,
			nav: !1,
			dots: !1,
			autoplay: !0,
			autoplayTimeout: 4e3,
			autoplayHoverPause: !0,
			mouseDrag: !0,
			responsive: {
				0: {
					items: 1
				},
				460: {
					items: 1
				},
				767: {
					items: 2
				},
				991: {
					items: 2
				}
			}
		})), 0 != $(".scroll").length && $(".scroll").slimScroll({
			height: "150px",
			size: "6px",
			color: "#2582eb",
			alwaysVisible: !0,
			distance: "16px",
			railVisible: !0,
			railColor: " #2582eb",
			railOpacity: 1,
			railBorderRadius: "0px",
			wheelStep: 10,
			disableFadeOut: !1
		}), $(window).width() <= 991 && 0 != ".industry-reviews-responsive-slider".length && ($(".industry-reviews-responsive-slider").addClass("owl-carousel owl-theme"), $(".industry-reviews-responsive-slider").owlCarousel({
			loop: !1,
			margin: !1,
			nav: !1,
			dots: !1,
			autoplay: !0,
			autoplayTimeout: 4e3,
			autoplayHoverPause: !0,
			mouseDrag: !0,
			responsive: {
				0: {
					items: 1
				},
				460: {
					items: 1
				},
				767: {
					items: 1
				},
				991: {
					items: 2
				}
			}
		})), AOS.init(), $(window).scroll(function () {
			var e = $(".header");
			$(window).scrollTop() >= 10 ? (e.addClass("sticky"), $("body").addClass("bodyClass")) : (e.removeClass("sticky"), $("body").removeClass("bodyClass"))
			// ( function () {
			// 	var e = $(".menu");
			// 	$(window).scrollTop() >= 10 ? (e.addClass("sticky")) 
			// })
		}),
		
		$(".list-group .list-group-item").click(function () {
		$(".list-group .list-group-item").removeClass("active"), $(this).addClass("active")
		})
	}), 
	
	$(document).scroll(function () {}), $(document).ready(function () {
		$(".floating_strip .rotatekaro a").on("click", function (e) {
			$(".floating_form").toggleClass("open"), $("body").toggleClass("notscroll"), e.preventDefault()
		})
	}),
	
	$(".floating_wrap .floating_strip").click(function (e) {
		$(this).parent().toggleClass("active"), $(".formOverlaySide").toggleClass("active"), e.stopPropagation()
	});

	$(window).scroll(function(){
		if ($(window).scrollTop() >= 100) {
			$('.menu > ol').addClass('topper_menu');
			$('.slogan_img').addClass('topper_logo');
			$('.top-contact > ul').addClass('shortslink');
			// $('.logo-img > p').addClass('para_margin');
		}
		else {
			$('.slogan_img').removeClass('topper_logo')
			$('.menu > ol').removeClass('topper_menu');
			$('.top-contact > ul').removeClass('shortslink');
			// $('.logo-img > p').removeClass('para_margin');
		}
	});

    $(window).scroll(function () {
	var scroll = $(window).scrollTop();
	if (scroll >= 500) {
		$(".floating_wrap").fadeIn();
	} else {
		$(".floating_wrap").fadeOut();
		$('.floating_form').removeClass('active open')
		$(".formOverlaySide").removeClass("active")
	}
    });

    $(document).ready(function () {

	$('.navbar-light .dmenu').hover(function () {
		$(this).find('.sm-menu').first().stop(true, true).slideDown(300);
	}, function () {
		$(this).find('.sm-menu').first().stop(true, true).hide()
	});

	$(".megamenu").on("click", function (e) {
		e.stopPropagation();
	});

	// $(".mega-menu-tab > a:first-child").addClass("active");
	
	
		
	$('.tablinks').mouseover(function() {
		$('.tabcontent').css('display', 'none');	
		$('.tablinks').removeClass('active');
		$(this).addClass('active');
		var selected_tab = $(this).attr("data-tab");
		$(selected_tab).stop().fadeIn();
		return false;
	});
	$('.megamenu-li').mouseenter(function(){
		$(this).addClass('show-tab');
		// if ($(this).find('show-tab')) {
		// 	// console.log('showtab Class In');
		// }
		// $(this).children().addClass('inner-show-tab');
	});

	

	$('.mega-menu-tab a').mouseleave(function () {
		// console.log('Inner showtab Class Leave')
		$(this).parents().removeClass('show-tab');		
	})
	$('.tabcontent:first-child').fadeIn();


	var $main_nav = $('#main-nav');
    var $toggle = $('.toggle');
  
    var defaultOptions = {
      disableAt: false,
      customToggle: $toggle,
      levelSpacing: 40,
    //   navTitle: '<?= SITE_NAME_TEXT ?>',
      levelTitles: true,
      levelTitleAsBack: true,
	  labelBack:'Back',
	  insertBack:true,
      pushContent: '#container',
      insertClose: false
    };
  
    // call our plugin
    var Nav = $main_nav.hcOffcanvasNav(defaultOptions);
  
    // add new items to original nav
    $main_nav.find('li.add').children('a').on('click', function() {
      var $this = $(this);
      var $li = $this.parent();
      var items = eval('(' + $this.attr('data-add') + ')');
  
      $li.before('<li class="new"><a href="#">'+items[0]+'</a></li>');
  
      items.shift();
  
      if (!items.length) {
        $li.remove();
      }
      else {
        $this.attr('data-add', JSON.stringify(items));
      }
  
      Nav.update(true);
    });
  
    // demo settings update
  
    const update = (settings) => {
      if (Nav.isOpen()) {
        Nav.on('close.once', function() {
          Nav.update(settings);
          Nav.open();
        });
  
        Nav.close();
      }
      else {
        Nav.update(settings);
      }
    };
  
    $('.actions').find('a').on('click', function(e) {
      e.preventDefault();
  
      var $this = $(this).addClass('active');
      var $siblings = $this.parent().siblings().children('a').removeClass('active');
      var settings = eval('(' + $this.data('demo') + ')');
  
      update(settings);
    });
    
    $('.order-package').on('click', function() {
       var price = $(this).data('price');
       var packagename = $(this).data('package-name');
       $("input[name='price']").val(price);
       $("input[name='package_name']").val(packagename);
    });
});

    $(document).ready(() => {
	var hash = window.location.hash;
	hash && $('.portfolio-tab a[href="' + hash + '"]').tab('show');
	$('.portfolio-tab a').click(function (e) {
		$(this).tab('show');
		window.location.hash = this.hash;
	});
	  	  
	  $(body).removeAttr('style');

	  window.onload = function() {

		var pageTitle = document.title;
		var attentionMessage = '*Come Back!';
		var blinkEvent = null;
	  
		document.addEventListener('visibilitychange', function(e) {
		  var isPageActive = !document.hidden;
	  
		  if(!isPageActive){
			blink();
		  }else {
			document.title = pageTitle;
			clearInterval(blinkEvent);
		  }
		});
	  
		function blink(){
		  blinkEvent = setInterval(function() {
			if(document.title === attentionMessage){
			  document.title = pageTitle;
			}else {
			  document.title = attentionMessage;
			}
		  }, 100);
		}
	  };
    });