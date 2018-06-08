
/* *** STICKY MENU ****************************** */
$(function(){
  var nav = $('nav');
  $(window).scroll(function(){
    if( window.pageYOffset >= nav.height() ) {
      nav.addClass('sticky')
    } else
      if( nav.hasClass('sticky') ) {
        nav.removeClass('sticky')
    }
  })
});