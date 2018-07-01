$('.navbar-text li a').click(function(){
	var $divselect = $(this).attr('id');
	$('.content-container').fadeOut( 500 );
	$('.' + $divselect + '-container').delay( 500 ).fadeIn( 500 );
});

$(document).ready(function(){
	var count = $('.navbar-text li').length;
	$('.navbar-text li:first-child').show('slide', 1000);
	for (var i = 2;  i <= count+1; i++) {
		$('.navbar-text li:nth-child(' + i + ')').delay( 500*(i-2) ).show('slide', 1000);

	};
});