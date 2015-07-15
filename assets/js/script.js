$(function(){
	// Your code here

	$('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

	nav();
});

function nav(){
	$(window).scroll(function() {
	    if ($(".navbar").offset().top > 50) {
	        $(".navbar-fixed-top").removeClass("top-nav");
	    } else {
	        $(".navbar-fixed-top").addClass("top-nav");
	    }
	});
}