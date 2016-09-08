/*
	Javascript File for AKAD Template
	Author : Akhouad-me
	Web    : www.akhouad.me
*/

(function($){
	$(window).load(function(){
		// INITIALIZE ANIMSITION
		if($(".animsition").length){
			$(".animsition").animsition({
				inClass               :   'fade-in-up-sm',
				outClass              :   'fade-out-up-sm',
				inDuration            :    1100,
				outDuration           :    800,
				linkElement           :   '.animsition-link',
				loading               :    true,
				loadingParentElement  :   'body', 
				unSupportCss          : [ 'animation-duration',
										  '-webkit-animation-duration',
										  '-o-animation-duration'
										],
				overlay               :   false,
				overlayClass          :   'animsition-overlay-slie',
				overlayParentElement  :   'body'
			});
		}

		// INPUTS EVENTS
		$(".input_1 input, .textarea_1 textarea").focus(function(){
			$(this).next("span").addClass("active");
		});
		$(".input_1 input, .textarea_1 textarea").blur(function(){
			if($(this).val() === ""){
				$(this).next("span").removeClass("active");
			}
		});

		$(".input_3 input, .textarea_1 textarea").focus(function(){
			$(this).next("span").addClass("active");
		});
		$(".input_3 input, .textarea_1 textarea").blur(function(){
			if($(this).val() === ""){
				$(this).next("span").removeClass("active");
			}
		});

		$(".input_4 input, .textarea_1 textarea").focus(function(){
			$(this).next("span").addClass("active");
		});
		$(".input_4 input, .textarea_1 textarea").blur(function(){
			if($(this).val() === ""){
				$(this).next("span").removeClass("active");
			}
		});

		$(".input_5 input, .textarea_1 textarea").focus(function(){
			$(this).next("span").addClass("active");
		});
		$(".input_5 input, .textarea_1 textarea").blur(function(){
			if($(this).val() === ""){
				$(this).next("span").removeClass("active");
			}
		});

		$(".input_6 input, .textarea_1 textarea").focus(function(){
			$(this).next("span").addClass("active");
		});
		$(".input_6 input, .textarea_1 textarea").blur(function(){
			if($(this).val() === ""){
				$(this).next("span").removeClass("active");
			}
		});

		$(".input_7 input, .textarea_1 textarea").focus(function(){
			$(this).next("span").addClass("active");
		});
		$(".input_7 input, .textarea_1 textarea").blur(function(){
			if($(this).val() === ""){
				$(this).next("span").removeClass("active");
			}
		});

		// TABS
		$(".bottom-line").css({
			width : $(".tab nav a").first().width() + 20 + "px" // 20 = element's padding * 2
		});
		var _current_index = 0;
		$(".tab nav a").click(function(e){
			e.preventDefault();
			// tab navigation styles
			var _this = $(this);
			var _index = _this.index();
			if(_current_index !== _index){
				$(".tab nav a").each(function(){
					if($(this).hasClass("current")) $(this).removeClass("current");
				});
				_this.addClass("current");
				$(".bottom-line").css({
					left : _this.offset().left - _this.parent().offset().left + "px",
					width : _this.width() + 20 + "px" // 20 = element's padding * 2
				});

				// show tab content
				$(".tab_single.shown").fadeOut(200);
				setTimeout(function(){
					$(".tab_single").eq(_index).fadeIn(200);
					$(".tab_single").eq(_index).addClass("shown");
				},200);

				_current_index = _index;
			}
		});

		// NAVBAR
		var _link = $("nav.desktop-nav ul.first-level").children("li");
		var shown = false;
		// show navbar 
		$(".menu-icon").click(function(){
			var _this = $(this);
			$("nav.mobile-nav").slideToggle(200);
			if(!shown){
				_this.children("div").css("width","30px");
				shown = true;
			}else{
				_this.children("div").first().css("width","30px");
				_this.children("div").eq(1).css("width","15px");
				_this.children("div").eq(2).css("width","20px");
				shown = false;
			}
		});
		
		// dropdown - desktop
		_link.hover(function(e){
			e.preventDefault();
			var _this = $(this);
			if(_this.children("ul.second-level").html() !== undefined){
				if(e.type === "mouseenter"){
					_this.children("ul.second-level").slideDown(200);
				}else{
					_this.children("ul.second-level").slideUp(200);
				}
			}
		});

		// dropdown - mobile
		$("nav.mobile-nav").html($("nav.desktop-nav").html()); // set navbar

		var mobile_link = $("nav.mobile-nav ul.first-level").children("li");
		mobile_link.children("a").click(function(e){
			var _this = $(this);
			var submenu_exists = (_this.next("ul.second-level").html() === undefined) ? false : true;
			if(submenu_exists){
				e.preventDefault();
				$(".down").slideUp(200);
				if(_this.next("ul.second-level").hasClass("down")){
					_this.next("ul.second-level").removeClass("down");
				}else{
					$(".down").removeClass("down");
					_this.next("ul.second-level").slideDown(200);
					_this.next("ul.second-level").addClass("down");
				}
			}
		});

	});
})(jQuery);

/*pagination*/

$.fn.pageMe = function(opts){
	var $this = this,
		defaults = {
			perPage: 7,
			showPrevNext: false,
			hidePageNumbers: false
		},
		settings = $.extend(defaults, opts);

	var listElement = $this;
	var perPage = settings.perPage;
	var children = listElement.children();
	var pager = $('.pager');

	if (typeof settings.childSelector!="undefined") {
		children = listElement.find(settings.childSelector);
	}

	if (typeof settings.pagerSelector!="undefined") {
		pager = $(settings.pagerSelector);
	}

	var numItems = children.size();
	var numPages = Math.ceil(numItems/perPage);

	pager.data("curr",0);

	if (settings.showPrevNext){
		$('<li><a href="#" class="prev_link">«</a></li>').appendTo(pager);
	}

	var curr = 0;
	while(numPages > curr && (settings.hidePageNumbers==false)){
		$('<li><a href="#" class="page_link">'+(curr+1)+'</a></li>').appendTo(pager);
		curr++;
	}

	if (settings.showPrevNext){
		$('<li><a href="#" class="next_link">»</a></li>').appendTo(pager);
	}

	pager.find('.page_link:first').addClass('active');
	pager.find('.prev_link').hide();
	if (numPages<=1) {
		pager.find('.next_link').hide();
	}
	pager.children().eq(1).addClass("active");

	children.hide();
	children.slice(0, perPage).show();

	pager.find('li .page_link').click(function(){
		var clickedPage = $(this).html().valueOf()-1;
		goTo(clickedPage,perPage);
		return false;
	});
	pager.find('li .prev_link').click(function(){
		previous();
		return false;
	});
	pager.find('li .next_link').click(function(){
		next();
		return false;
	});

	function previous(){
		var goToPage = parseInt(pager.data("curr")) - 1;
		goTo(goToPage);
	}

	function next(){
		goToPage = parseInt(pager.data("curr")) + 1;
		goTo(goToPage);
	}

	function goTo(page){
		var startAt = page * perPage,
			endOn = startAt + perPage;

		children.css('display','none').slice(startAt, endOn).show();

		if (page>=1) {
			pager.find('.prev_link').show();
		}
		else {
			pager.find('.prev_link').hide();
		}

		if (page<(numPages-1)) {
			pager.find('.next_link').show();
		}
		else {
			pager.find('.next_link').hide();
		}

		pager.data("curr",page);
		pager.children().removeClass("active");
		pager.children().eq(page+1).addClass("active");

	}
};

$('#myTableBody').pageMe({pagerSelector:'#myPager',showPrevNext:true,hidePageNumbers:false,perPage:4});


// Get the modal on books
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = "none";
}

/*validation form*/
