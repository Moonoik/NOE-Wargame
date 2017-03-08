$(document).ready(() => {
	$('#sign span:nth-of-type(1), #mobileUser a:nth-of-type(1)').click(function(){
		$('#signin').slideToggle();
		$('#blur').toggle();
		$('#mobileMenu, #mobileUser').hide();
	});
	$('#sign span:nth-of-type(2), #mobileUser a:nth-of-type(2)').click(function(){
		$('#signup').slideToggle();
		$('#blur').toggle();
		$('#mobileMenu, #mobileUser').hide();
	});
	$('#signup span').click(function(){
		$('#signup, #forgotpass').slideToggle();
	});
	$('#blur').click(function(){
		$(this).toggle();
		$('#signup, #forgotpass, #signin').slideUp();
	});
	$('#mobileHeader i:nth-of-type(1)').click(function(){
		$('#mobileMenu').toggle('slide');
	});
	$('#mobileHeader i:nth-of-type(2)').click(function(){
		$('#mobileUser').toggle('slide',{ direction: 'right' });
	});
	$('#mobileHeader span').click(function(){
		location.href='/';
	});
});