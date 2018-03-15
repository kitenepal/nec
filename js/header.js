$( () => {

//On Scroll Functionality
$(window).scroll( () => {
	var windowTop = $(window).scrollTop();
	windowTop > 70 ? $('nav').addClass('navshadow') : $('nav').removeClass('navshadow');
	windowTop > 70 ? $('nav .container-fluid').css('padding-top','10px') : $('nav .container-fluid').css('padding-top','60px');
	windowTop > 70 ? $('.navbar-brand>img').attr('src','image/logow.png') : $('.navbar-brand>img').attr('src','image/logo.png');
});

$(window).scroll(function(){
	var wScroll = $(this).scrollTop();
	$('.hero-text').css({
		'transform'	: 'translate(0%, '+ wScroll/3 +'% )'
	});
});

});