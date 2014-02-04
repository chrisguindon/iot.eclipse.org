$.fn.shuffle = function() {
    return this.each(function(){
        var items = $(this).children().clone(true);
        return (items.length) ? $(this).html($.shuffle(items)) : this;
    });
}

$.shuffle = function(arr) {
    for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
    return arr;
}

/**
 * Onload handler
 */
$(document).ready(function() {
	// Enable dropdowns
	$('.dropdown-toggle').dropdown();

	// Shuffle carousel items
    $('.carousel-inner').shuffle();

    $('.carousel-inner').children()[0].className+=" active";

	// Start carousel
	$('.carousel').carousel({
		interval : 4000,
		pause : 'hover'
	});

	$('#iot-definition').popover({placement:'bottom', trigger:'hover'});

});

$(window).bind("load", function() {
	$('.home-box').addClass('loaded');
});


($("a[data-toggle=modal]")).click(function() {
	  var target, url;
	  target = ($(this)).attr('data-target');
	  url = ($(this)).attr('href');
	  return ($(target)).load(url);
	});
