var main = {

  bigImgEl : null,
  numImgs : null,

  init : function() {
    // Shorten the navbar after scrolling a little bit down
    $(window).scroll(function() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar").addClass("top-nav-short");
            $(".social-buttons-left").addClass("top-nav-short");
            $(".social-buttons-right").addClass("top-nav-short");
        } else {
            $(".navbar").removeClass("top-nav-short");
            $(".social-buttons-left").removeClass("top-nav-short");
            $(".social-buttons-right").removeClass("top-nav-short");
        }
    });

    // On mobile, hide the avatar when expanding the navbar menu
    $('#main-navbar').on('show.bs.collapse', function () {
      $(".navbar").addClass("top-nav-expanded");
    })
    $('#main-navbar').on('hidden.bs.collapse', function () {
      $(".navbar").removeClass("top-nav-expanded");
    })

    // show the big header image
    main.initImgs();

    if(window.location.href.indexOf('?about') != -1) {
      $("#preview-posts").removeClass("currentPage");
      $("#about-me").addClass("currentPage");

      $("#preview-posts").hide();
      $("#about-me").show();
    }
  },

  initImgs : function() {
	// If the page was large images to randomly select from, choose an image
    if ($("#header-big-imgs").length > 0) {
      main.bigImgEl = $("#header-big-imgs");
      main.numImgs = main.bigImgEl.attr("data-num-img");

	  // set an initial image
	  var imgInfo = main.getImgInfo();
	  var src = imgInfo.src;
	  var desc = imgInfo.desc;
  	  main.setImg(src, desc);

	  // For better UX, prefetch the next image so that it will already be loaded when we want to show it
  	  var getNextImg = function() {
	    var imgInfo = main.getImgInfo();
	    var src = imgInfo.src;
	    var desc = imgInfo.desc;

		var prefetchImg = new Image();
  		prefetchImg.src = src;
		// if I want to do something once the image is ready: `prefetchImg.onload = function(){}`

  		setTimeout(function(){
          var img = $("<div></div>").addClass("big-img-transition").css("background-image", 'url(' + src + ')');
  		  $(".intro-header.big-img").prepend(img);
  		  setTimeout(function(){ img.css("opacity", "1"); }, 50);

		  // after the animation of fading in the new image is done, prefetch the next one
  		  //img.one("transitioned webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
		  setTimeout(function() {
		    main.setImg(src, desc);
			img.remove();
  			getNextImg();
		  }, 1000);
  		  //});
  		}, 6000);
  	  };

	  // If there are multiple images, cycle through them
	  if (main.numImgs > 1) {
  	    getNextImg();
	  }
    }
  },

  getImgInfo : function() {
  	var randNum = Math.floor((Math.random() * main.numImgs) + 1);
    var src = main.bigImgEl.attr("data-img-src-" + randNum);
	var desc = main.bigImgEl.attr("data-img-desc-" + randNum);

	return {
	  src : src,
	  desc : desc
	}
  },

  setImg : function(src, desc) {
	$(".intro-header.big-img").css("background-image", 'url(' + src + ')');
	if (typeof desc !== typeof undefined && desc !== false) {
	  $(".img-desc").text(desc).show();
	} else {
	  $(".img-desc").hide();
	}
  },

 // get the GET parameters in the URL
 getQueryParams : function() {
    qs = document.location.search.split("+").join(" ");

    var params = {}, tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])]
            = decodeURIComponent(tokens[2]);
    }

    return params;
  }
};

document.addEventListener('DOMContentLoaded', main.init);

$("#search-query").on('focus', function () {
	$(this).parent('form').parent('label').addClass('active');
});

$("#search-query").on('blur', function () {
	if($(this).val().length == 0)
		$(this).parent('form').parent('label').removeClass('active');
});

$("#about").click(function() {
  if (window.location.href.indexOf("-") != -1) {
    window.location.href = "/?about"
  }

  if ($("#preview-posts").hasClass("currentPage")) {
    $("#preview-posts").removeClass("currentPage");
    $("#about-me").addClass("currentPage");

    $("#preview-posts").fadeOut(250, function()
    {
      $("#about-me").fadeIn(250);
    });
  }
});

$("#home").click(function() {
  if (window.location.href.indexOf("-") != -1 || window.location.href.indexOf('?about') != -1){
    window.location.href = "/"
  }

  if ($("#about-me").hasClass("currentPage")) {
    $("#about-me").removeClass("currentPage");
    $("#preview-posts").addClass("currentPage");

    $("#about-me").fadeOut(250, function()
    {
      $("#preview-posts").fadeIn(250);
    });
  }
});
