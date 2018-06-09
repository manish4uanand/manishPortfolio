	$(document).ready(function() {
$(".tabs_2 ul.price_tabs_li li.tabs-a").css('background-color','rgb(115, 144, 159)');
$(".tabs_2 ul.price_tabs_li li.tabs-a a").css('color','#fff');
$(window).scroll(function() {
var scroll = $(window).scrollTop();
if (scroll >= 500) {
$("header").addClass("fixed",3000);
}else{
$('.fixed').removeClass("fixed",3000);
}
});
$(".loader").fadeOut(3000);
$('#free_q').click(function(){
$('.free_quote_form').slideToggle('250');
});
$(".response_menu").click(function(){
$('.right_row_2').slideToggle('250');
});
$('.bct').click(function(){
$("html, body").animate({ scrollTop: 0 }, 900);
return false;
});
$('.bxslider').bxSlider({
auto: true,
autoControls: true
});
$('.test').bxSlider({
auto: true,
autoControls: true
});
$("#tabs ul.tabs_ul li").click(function(){
var name=$(this).attr('class');
$('.tab_class').fadeOut();
$('#'+name).fadeIn();
});
$(".tabs_2 ul.price_tabs_li li").click(function(){
var name=$(this).attr('dt');
$('.price_tab').fadeOut(600);
$('#'+name).fadeIn(600);
});
$(".tabs_2 ul.price_tabs_li li.tabs-b").click(function(){
$(".tabs_2 ul.price_tabs_li li.tabs-a").css('background-color','rgb(159, 148, 28)');
$(".tabs_2 ul.price_tabs_li li.tabs-a a").css('color','#fff');
$('.tabs_2 ul li.tabs-a').removeClass('after');
$('.tabs_2 ul li.tabs-b').addClass('after');
$(".tabs_2 ul.price_tabs_li li.tabs-b").css('background-color','rgb(115, 144, 159)');
$(".tabs_2 ul.price_tabs_li li.tabs-b a").css('color','#fff');
});
$(".tabs_2 ul.price_tabs_li li.tabs-a").click(function(){
$(".tabs_2 ul.price_tabs_li li.tabs-b").css('background-color','rgb(159, 148, 28)');
$(".tabs_2 ul.price_tabs_li li.tabs-b a").css('color','#fff');
$(".tabs_2 ul.price_tabs_li li.tabs-a").css('background-color','rgb(115, 144, 159)');
$(".tabs_2 ul.price_tabs_li li.tabs-a a").css('color','#fff');
$('.tabs_2 ul li.tabs-b').removeClass('after');
$('.tabs_2 ul li.tabs-a').addClass('after');
});
/*$(".tabs_2 ul.price_tabs_li li.tabs-a").click(function(){
$('#tabs-b').hide(250);
$('#tabs-a').show(250);
});
$(".right_row_2 ul li#mobile_click_1").click(function(){
event.preventDefault();
$('.right_row_2 ul li#mobile_click_1 ul.service_drop').slideToggle();
});
$(".method_content").show(500);
$(".method_blocks img").css("transition","all 1s ease");
});
$(".method_blocks img").mouseout(function(){
$(".method_blocks img").css("transform","scale(1)");
$(".method_blocks img").css("transition","all 1s ease");
});
});

//
//
//$('a[href^="#"]').click(function(e) {
//
//
//   $('html,body').animate({ scrollTop: $(this.hash).offset().top}, 800);
//
//    return false;
//
//    e.preventDefault();
//
//});
//var dheight=$(window).height();
//var linkwidth=$('.links').width();
//var topbannerheight=$('.top_banner').height();
//	
//	  
//$('.sidenav').css('height',dheight + "px");
//$('.menuoverlay').css('height',topbannerheight + "px");
//
//$('#menu').click(function(){
//$(this).fadeOut();
//$('#cancel,.menuoverlay,.toplay').fadeIn();	
//});
//$('#cancel').click(function(){
//$('#cancel,.menuoverlay,.toplay').fadeOut();
//$('#menu').fadeIn();	
//});
$(document).ready(function(){
$('.downarr').click(function(){
$('.welcome').fadeOut(1700);
});
$('.work ul.worktab li:first-child').addClass('tab_selected');
$('.work ul.worktab li').click(function(){
$('.work ul.worktab li').removeClass('tab_selected');
$(this).addClass('tab_selected');
//	$('#p_firsttab').removeClass('tab_selected');
//	$('.work ul.worktab li').siblings().removeClass('tab_selected');
});
$('a[href ^= "#"]').on('click', function (e) {
$('.overlay').hide();
$('.sidenav').css('transform', 'translateX(330px)');
$('#menu').show();
$('#menuclose').hide();
e.preventDefault();
var target = this.hash,
$target = $(target);
$('html, body').stop().animate({
'scrollTop': $target.offset().top
}, 1000, 'swing', function () {
window.location.hash = target;
});
});	  
$('#menu').click(function(){
$('.sidenav').css('transform','translateX(0px)');
$(this).hide();
$('#menuclose').show();
$('.overlay').show();
});
$('#menuclose').click(function(){
$('.sidenav').css('transform','translateX(330px)');
$(this).hide();
$('#menu').show();
$('.overlay').hide();	
});
$('.overlay').click(function(){
$('.sidenav').css('transform','translateX(330px)');
$(this).hide();
$('#menu').show();
$('#menuclose').hide();	
});	
//$(document).scroll(function(){
//    
//    if($(this).scrollTop()>=$('.whatido').position().top){
//         $('.whatido').addClass('wideffect');
//	  
//      
//    }
//    else{
//        $('.whatido').removeClass('wideffect');
//     	}
//
// });	 
// back to top
$("#b2t").click(function() {
$("html, body").animate({ scrollTop: 0 }, 2000);
return false;
});	  
});
