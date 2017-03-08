$(document).ready(() => {
	$('table tr').click(function(){
	    $(this).closest('tr').next('tr.select').toggle();
	});
});