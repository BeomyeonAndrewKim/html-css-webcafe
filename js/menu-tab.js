// $(document).ready(function(){
// 	var menu = $('.main-menu > li');
// 	var subMenu = $('.sub-menu');
// 	var last = $('.sub-menu li:last-child a');

// 	menu.hover(function(){
// 	$(this).find('.sub-menu').toggleClass('menu-act');
// 	});
// 	menu.focus(function(){
// 		$(this).find('.sub-menu').addClass('menu-act');
// 		});
// 	last.focusout(function(){
// 		$(this).parents('.sub-menu').removeClass('menu-act');
// 	});
// });

$(document).ready(function() {
  var menu = $('.main-menu>li');
  var tab = $('.notice-heading, .pds-heading');
  var list = $('.related-list');
  var last = $('.related-list li:nth-child(5)');
  // var box = $('.box');

  menu.hover(function() {
    $(this).find('.sub-menu').toggleClass('menu-act')
  });
  menu.focusin(function() {
    $(this).siblings().find('.sub-menu').removeClass('menu-act');
    $(this).find('.sub-menu').addClass('menu-act');
  });
  // box.click(function() {
  //   $(this).toggleClass('box-act');
  // });
  //탭메뉴
  tab.on('click focusin', function() {
    $(this).parent().addClass('board-act').siblings().removeClass('board-act');
  });
  // 관련 사이트 //
  list.focusin(function() {
    $(this).addClass('list-open');
  });
  last.focusout(function() {
    $(this).parents('.related-list').removeClass('list-open');
  });
});