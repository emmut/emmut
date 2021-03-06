$(document).ready(function() {

  //Fixed nav at certain point
  $(window).scroll(function () {

    //console.log($(window).scrollTop());

    if ($(window).scrollTop() > ($( window ).width() * 0.6) - 2) {
      $('#main-nav').addClass('nav-fixed');
      $('.wrapper').addClass('margin-fix');
    }

    if ($(window).scrollTop() < $( window ).width() * 0.6) {
      $('#main-nav').removeClass('nav-fixed');
      $('.wrapper').removeClass('margin-fix');
    }

  });
  //One page navigation script
  $('#main-nav').onePageNav({
  	currentClass: 'current',
  	scrollSpeed: 750,
  	scrollThreshold: 0.1,
  });

  //Header arrow scroll down
  $('#arrow a').click(function() {
    $(window).scrollTo($('#my-work'), 750);
  });

  // Main nav mobile menu
  function openClose() {

    if ($("#bars").hasClass("fa-bars")) {
      $('#bars').removeClass('fa-bars');
      $('#bars').addClass('fa-times');

    } else {
      $('#bars').removeClass('fa-times');
      $('#bars').addClass('fa-bars');
    }

    $('#main-nav').toggleClass('expand');
    $('#expander').toggleClass('expand');
    $('#main-nav').toggleClass('closed');
  }

  $('#bars').click(function() {
    return openClose();
  });

  $('nav#main-nav > ul > li > a').click(function() {
    return openClose();
  });

  //Image slider my-work
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    adaptiveHeight: true,
  });

  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
  });

  // Character count textarea
  var text_max = 500;
    $('#textarea_feedback').html(text_max + '/500');

    $('#message').keyup(function() {
      var text_length = $('#message').val().length;
      var text_remaining = text_max - text_length;

      $('#textarea_feedback').html(text_remaining + '/500');
    });

  //Form textarea auto resize
  $("#message").keyup(function(e) {
      while($(this).outerHeight() < this.scrollHeight + parseFloat($(this).css("borderTopWidth")) + parseFloat($(this).css("borderBottomWidth"))) {
          $(this).height($(this).height()+1);
      };
  });


  //Add class when scrolling from top that animates .bar
  $(window).scroll(function(){
    if($(this).scrollTop()>= $('#resume').offset().top - 250){
        $('.bar-wrapper .bar').addClass('anim-height');
    } else {
      $('.bar-wrapper .bar').removeClass('anim-height');
    }
  });



});
