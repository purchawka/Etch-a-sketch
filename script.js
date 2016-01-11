$('document').ready(function() {

//creating grid elements
for (var i = 0; i < 256; i++) {
	$normaldiv = $('<div class = "normaldiv"></div>') 
	$('#container').append($normaldiv);
}
function GridReset(){
	$('.normaldiv').css({"background-color":"#808080","opacity":"1"});
	$('.normaldiv').off('mouseleave');
	$('.normaldiv').off('mouseover');
};


//classic colouring style
var Classic = function(){
GridReset();
$('.normaldiv').on('mouseover',function() {
	$(this).css("background-color", "black");
});
};

// leave a trail style
var Leave_a_trail = function(){
GridReset();
$('.normaldiv').on('mouseover',function() {
	$(this).css("background-color", "black");
});
$('.normaldiv').on('mouseleave',function() {
	$(this).animate({
		backgroundColor: "#808080",
	}, 'slow')
});
};


//Random color generator
function RandomGenerator() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};


//random color style
var Random_color = function(){
	GridReset();

	$('.normaldiv').on('mouseover',function() {
		$(this).css("background-color", RandomGenerator());
});
};

//gradient style
var Gradient = function(){
	GridReset();
	$('.normaldiv').css({"opacity": '0.5', "background-color": "black"});
	$('.normaldiv').on('mouseover', function () {
		$(this).css("opacity", '+=0.1');
	});
}

//button actions


$('#reset').on('click', GridReset)
$('#classic').on('click', Classic)
$('#random-color').on('click', Random_color)
$('#trail').on('click', Leave_a_trail)
$('#gradient').on('click', Gradient)



});
	


