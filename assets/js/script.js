$(function(){
	// Your code here
	nav();
});

function nav(){
	$(window).scroll(function(){
		if($(window).scrollTop() > 70){
			console.log("3");
		}else{
			$("nav").animate({
				duration: 100,
				easing: 'swing',
				step: function(val) {
					console.log("step");
				},
				complete: function() {
					console.log("finish");
    			}
			});
		}
	});
}