//SMOOTH SCROLL TO
$('nav a').click(function(event){
  event.preventDefault();
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 500, 'linear');

  //add class active
  $('nav a').removeClass("active");
  $(this).addClass("active");

  //hover mobile menu after click link
  if( $('#menu').hasClass('mobile-menu') ) {
    $('#menu').removeClass('mobile-menu');
    $('#overlay').removeClass('show');

    //change icon close to hamburger
    $('.hamburger').removeClass('fa-times').addClass('fa-bars');
  }
});


/* *** MENU ON WINDOW SCROLL EVENT ********************************************* */
// sticky menu + active class to current section
$(function(){

  //sticky menu
  var nav = $('nav');
  $(window).scroll(function(){
    if( window.pageYOffset >= nav.height() ) {
      nav.addClass('sticky')
    } else
      if( nav.hasClass('sticky') ) {
        nav.removeClass('sticky')
    }

    //Add active class to current section on window scroll
    var scrollPos = $(document).scrollTop();
    $('#menu a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        $('#menu ul li a').removeClass("active");
        currLink.addClass("active");
      }
      else{
        currLink.removeClass("active");
      }
    });
  })
});


/* *** HAMBURGER MENU ********************************************************** */
$(function(){

  $('.hamburger').on('click', function() {

    //overlay page
    $('#overlay').toggleClass('show');

    //toggle menu
    $(this).closest('#menu').toggleClass('mobile-menu');


    //change icon, from hamburger to close
    if( $(this).closest('#menu').hasClass('mobile-menu')){
      $(this).removeClass('fa-bars').addClass('fa-times');
    } else{
      $(this).removeClass('fa-times').addClass('fa-bars');
    }
  });
});


/* *** button scroll down from #hero to #about ********************************* */
$('button.circle-down').click(function(event){
  event.preventDefault();
  $('html, body').animate({
    scrollTop: $('#about').offset().top
  }, 500, 'linear');
})