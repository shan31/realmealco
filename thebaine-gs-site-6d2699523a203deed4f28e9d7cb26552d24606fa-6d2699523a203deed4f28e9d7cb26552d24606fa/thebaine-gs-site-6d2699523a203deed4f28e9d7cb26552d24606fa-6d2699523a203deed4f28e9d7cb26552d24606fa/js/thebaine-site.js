$(document).ready(function() {
  var paddingOffset = 80;

  $(window).fadeThis({reverse: false});
  hljs.initHighlightingOnLoad();

  /**
   *  This may be an actual project, someday.
   * @type {Thebaine}
   */
  var tb = new Thebaine();
  tb.fullHeight('header');

  /**
   * Scroll to section if valid anchor in URL
   * @type {*|jQuery|HTMLElement}
   */
  var elem = $('#' + window.location.hash.replace('#', ''));
    if(elem.length) {
      var scrollOffset = elem.offset().top - (paddingOffset-20);
    $.scrollTo(scrollOffset, 1000);
  }

  /**
   *  Event listeners
   */
  window.addEventListener('scroll', setNav, false);
  window.addEventListener('scroll', headParallax, false);
  window.addEventListener('resize', setNav, false);

  /**
   * GA Download Tracking
   */
  $( "#btn-download" ).click(function() {
    ga('send', 'event', 'button', 'click', 'thebaine-download');
  });

  /**
   *  Navigation Menu
   */
  $( ".tb-menu-toggle" ).click(function() {
    $( ".tb-nav-menu" ).toggleClass( "open" );
  });

  $(".tb-nav-menu a, .btn-scroll").click(function() {
    if(isMobile()) $( ".tb-nav-menu" ).removeClass("open");
    var scrollTarget = $(this).attr("href");
    var scrollOffset = $(scrollTarget).offset().top - (paddingOffset-20);
    $.scrollTo(scrollOffset, 1000);
  });

  /**
   *  Material Labels
   */
  var materialLabel = $(".material-label");
  materialLabel.focusin(function(){
    var parentElem = $(this).parent();
    var labelElem =  parentElem.find("label");
    labelElem.addClass("active");
  });

  materialLabel.focusout(function(){
    if (!$(this).val()) {
      var parentElem = $(this).parent();
      var labelElem = parentElem.find("label");
      labelElem.removeClass("active");
    }
  });

  /**
   *  Material Response - Buttons
   */
  var ink, d, x, y;
  $(".material-response").click(function(e){
    if($(this).find(".ink").length === 0){
      $(this).prepend("<span class='ink'></span>");
    }
    ink = $(this).find(".ink");
    ink.removeClass("animate");
    if(!ink.height() && !ink.width()){
      d = Math.max($(this).outerWidth(), $(this).outerHeight());
      ink.css({height: d, width: d});
    }
    x = e.pageX - $(this).offset().left - ink.width()/2;
    y = e.pageY - $(this).offset().top - ink.height()/2;
    ink.css({top: y+'px', left: x+'px'}).addClass("animate");
  });

  /**
   * Contact form validation/submit
   */
  $("#contactform").validate({
    rules: {
      "name": {
        required: true
      },
      "email": {
        required: true,
        email: true
      },
      "message": {
        required: true
      }
    },
    submitHandler: function() {
      $.ajax({
        dataType: 'jsonp',
        url: "https://getsimpleform.com/messages/ajax?form_api_token=c5b9f0a88a8c0a51a242db41b1f6fbce",
        data: $("#contactform").serialize()
      }).done(function() {
        modal("Your message has been submitted.");
      })
    },
    invalidHandler : function(event, validator){
      var errors = validator.numberOfInvalids();
      if (errors) {
        modal("Please ensure that all fields are complete and that a valid email address is specified, and try again.");
      }
    },
    errorPlacement: function(error,element) {
      // prevents plugin from displaying alerts
      return true;
    }
  });

  $("#modalOK").click(function(e){
    $("#modal").removeClass("active");
    $(".modal-message").html("");
  });

});

/**
 * Displays basic modal dialog with OK button
 */
function modal(message){
  if (message){
    $(".modal-message").html(message);
    $("#modal").addClass("active");
  }
}

/**
 *  Sets nav behavior based on viewport width and distance scrolled down page
 */
function setNav() {
  var distanceY = window.pageYOffset || document.documentElement.scrollTop,
    winHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

  if (!isMobile()){
    var navOffset = $(".tb-nav").outerHeight(true);
    if (distanceY >= (winHeight-navOffset)) {
      $(".tb-nav").addClass("tb-nav-fixed");
      $(".tb-nav-branding").fadeIn(500).css('display','table');
    } else {
      $(".tb-nav").removeClass("tb-nav-fixed");
      $(".tb-nav-branding").fadeOut(500);
    }
  } else {
    $(".tb-nav").addClass("tb-nav-fixed");
  }
}

/**
 * Creates parallax effect for header section
 */
function headParallax(){
  if (!isMobile()) {
    var scrollVal = $(window).scrollTop();
    $('.head-inner').css('bottom', (scrollVal * -0.5) + 'px');
    $('.head-window').css('bottom', (scrollVal * 1.5) + 'px');
  }
}

/**
 * Determines if viewport is considered mobile (as far as Thebaine is concerned.)
 * @returns {boolean}
 */
function isMobile(){
  var mobileBreak = 768,
    winWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  return mobileBreak > winWidth;
}

function Thebaine(){
    /**
     * Set object height to viewport height
     * @param element
     */
    function fullHeight(element){
        var winHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        var elem = document.getElementById(element);
        if(elem){
            var hOffset = document.getElementsByClassName('tb-nav');
            var finalHeight;
            if(!isMobile()){
                finalHeight = (winHeight-hOffset[0].offsetHeight);
            } else {
                finalHeight = winHeight ;
            }
            elem.style.height = finalHeight + 'px';
        }
    }
    return {
        fullHeight: function (element) {
            window.onload = function(){
              if (!isMobile()) {
                fullHeight(element);
              }
              setNav();
            };
            window.onresize = function(){
              fullHeight(element);
            };
        }
    };
}
