$(document).ready(function(){
	var menu = $('.main-menu > li');
	var subMenu = $('.sub-menu');
	var last = $('.sub-menu li:last-child a');
	
	menu.hover(function(){
	$(this).find('.sub-menu').toggleClass('menu-act');
	});
	menu.focus(function(){
		$(this).find('.sub-menu').addClass('menu-act');
		});
	last.focusout(function(){
		$(this).parents('.sub-menu').removeClass('menu-act');
	});
});