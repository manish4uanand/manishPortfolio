<script>
	$(document).ready(function() {
	$(".loader").fadeOut(4000);
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

   });
    $(window).scroll(function() {
        var sticky = $('.sticky'),
            scroll = $(window).scrollTop();

        if (scroll >= 100) {
            if ($(window).width() <= 750) {
                sticky.addClass('fixed');
            }
			}
   });
	 $(document).onReady( function () {
	     var roles = [ 'web designer', 'graphic designer', 'UX developer' ];
	     var roleId = 0;

	     window.setInterval(function () {
	         $('#role').html(roles[roleId]);
	         roleId = roleId + 1;
	         if(roleId >= roles.length) { roleId = 0; }
	     }, 1000);
	 });
</script>
