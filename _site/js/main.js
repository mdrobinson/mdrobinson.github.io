var main={bigImgEl:null,numImgs:null,init:function(){$(window).scroll(function(){if($(".navbar").offset().top>50){$(".navbar").addClass("top-nav-short");$(".social-buttons-together").addClass("top-nav-short");$(".social-buttons-left").addClass("top-nav-short");$(".social-buttons-right").addClass("top-nav-short");}else{$('.social-buttons-together').addClass("hidden");$('.social-buttons-left').removeClass("hidden");$('.social-buttons-right').removeClass("hidden");setTimeout(function(){$(".navbar").removeClass("top-nav-short");$(".social-buttons-together").removeClass("top-nav-short");$(".social-buttons-left").removeClass("top-nav-short");$(".social-buttons-right").removeClass("top-nav-short");},100)}});
$('#main-navbar').on('show.bs.collapse',function(){$(".navbar").addClass("top-nav-expanded");})
$('#main-navbar').on('hidden.bs.collapse',function(){$(".navbar").removeClass("top-nav-expanded");})
main.initImgs();if(window.location.href.indexOf('?about')!=-1){$("#preview-posts").removeClass("currentPage");$("#about-me").addClass("currentPage");$("#preview-posts").hide();$("#about-me").show();}},initImgs:function(){if($("#header-big-imgs").length>0){main.bigImgEl=$("#header-big-imgs");main.numImgs=main.bigImgEl.attr("data-num-img");var imgInfo=main.getImgInfo();var src=imgInfo.src;var desc=imgInfo.desc;main.setImg(src,desc);var getNextImg=function(){var imgInfo=main.getImgInfo();var src=imgInfo.src;var desc=imgInfo.desc;var prefetchImg=new Image();prefetchImg.src=src;setTimeout(function(){var img=$("<div></div>").addClass("big-img-transition").css("background-image",'url('+src+')');$(".intro-header.big-img").prepend(img);setTimeout(function(){img.css("opacity","1");},50);setTimeout(function(){main.setImg(src,desc);img.remove();getNextImg();},1000);},6000);};if(main.numImgs>1){getNextImg();}}},getImgInfo:function(){var randNum=Math.floor((Math.random()*main.numImgs)+1);var src=main.bigImgEl.attr("data-img-src-"+randNum);var desc=main.bigImgEl.attr("data-img-desc-"+randNum);return{src:src,desc:desc}},setImg:function(src,desc){$(".intro-header.big-img").css("background-image",'url('+src+')');if(typeof desc!==typeof undefined&&desc!==false){$(".img-desc").text(desc).show();}else{$(".img-desc").hide();}},getQueryParams:function(){qs=document.location.search.split("+").join(" ");var params={},tokens,re=/[?&]?([^=]+)=([^&]*)/g;while(tokens=re.exec(qs)){params[decodeURIComponent(tokens[1])]=decodeURIComponent(tokens[2]);}
return params;}};document.addEventListener('DOMContentLoaded',main.init);$("#search-query").on('focus',function(){$(this).parent('form').parent('label').addClass('active');});$("#search-query").on('blur',function(){if($(this).val().length==0)
$(this).parent('form').parent('label').removeClass('active');});$("#about").click(function(){if(window.location.href.indexOf('-')!=-1||window.location.href.indexOf('?q')!=-1){window.location.href="/?about"}else if((window.location.href.indexOf('?q')!=-1&&window.location.href.indexOf('?about')==-1)||window.location.href.indexOf('404')!=-1){window.location.href="/"}
if($("#preview-posts").hasClass("currentPage")){$("#preview-posts").removeClass("currentPage");$("#about-me").addClass("currentPage");$("#preview-posts").fadeOut(250,function()
{$("#about-me").fadeIn(250);});}});$("#home").click(function(){if(window.location.href.indexOf("-")!=-1||window.location.href.indexOf('?q')!=-1||window.location.href.indexOf('404')!=-1){window.location.href="/"}
if($("#about-me").hasClass("currentPage")){$("#about-me").removeClass("currentPage");$("#preview-posts").addClass("currentPage");$("#about-me").fadeOut(250,function()
{$("#preview-posts").fadeIn(250);});}});

$(".social-buttons-left")
.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",
 function(e){
    var position = $('.social-buttons-left').children().eq(0).css('margin-left');

    if($('.social-buttons-left').children().eq(0).css('margin-left')=="-224.766px" || $('.social-buttons-left').children().eq(0).css('margin-left')=="-154.766px" || $('.social-buttons-left').children().eq(0).css('margin-left')=="-119.766px") {
      $('.social-buttons-together').removeClass("hidden");
      $('.social-buttons-left').addClass("hidden");
      $('.social-buttons-right').addClass("hidden");
    }
 });
