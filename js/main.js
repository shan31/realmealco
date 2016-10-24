 /*=====  BEGIN BANNER SLIDER   ======*/
 $('.carousel')
   .carousel({
     interval: 5000 //changes the speed
   });
   /*=====  END BANNER SLIDER  ======*/

   /*=====  BEGIN MENU SECTION SLIDER  ======*/
 var maxSlides,width = $(window).width();
 if (width > 430) {
   maxSlides = 2;
 } else {
   maxSlides = 1;
 }
 var myslider = $('.slider1')
   .bxSlider({
     slideWidth: 545,
     pager: false,
     maxSlides: maxSlides,
     slideMargin: 10,
     adaptiveHeight: true,
   });
 /*=====  END MENU SECTION SLIDER  ======*/

 /*=====  BEGIN PAYMENT ACCORDION ARROW CHANGE  ======*/
 var filtertype = $('.order_click');
 filterplus = $('.order_click span i');
 filtertype.click(function () {
   $(this)
     .find('span i')
     .toggleClass('fa-angle-down fa-angle-up');
   $(this)
     .find('span i')
     .toggleClass('down_css up_css ');
 });
 /*=====  END PAYMENT ACCORDION ARROW CHANGE  ======*/

 /*=====  BEGIN HEADER IMAGE SCROLL ANIMATION  ======*/
 $(window)
   .scroll(function () {
     if ($(this)
       .scrollTop() > 1) {
       $('#navbar-primary .navbar-nav li a img')
         .addClass("shrink");
     } else {
       $('#navbar-primary .navbar-nav li a img')
         .removeClass("shrink");
     }
   });
 /*=====  END HEADER IMAGE SCROLL ANIMATION  ======*/
 
 /*=====  BEGIN DATEPICKER FUNCTION ======*/
var nom=1;
if(width > 768){var nom=2;}
    
var SelectedDates = {};
 SelectedDates[new Date('09/08/2012')] = new Date('09/08/2012');
 SelectedDates[new Date('09/09/2012')] = new Date('09/09/2012');
 $(function () {
   $("#datepicker")
     .datepicker({
       numberOfMonths: nom,
       autoSize: true,
       showOtherMonths: true,
       selectOtherMonths: true,
       beforeShowDay: function (date) {
         if (date.getDay() == 2 || date.getDay() == 4) {
           return [true, "Highlighted", ''];
         } else {
           return [true, '', ''];
         }
       }
     });
 });
 /*=====  END DATEPICKER FUNCTION ======*/


/*=====  BEGIN  ACCORDION   ======*/

function toggleChevron(e) {
    $(e.target)
        .prev('.panel-heading')
        .find("i.indicator")
        .toggleClass('fa fa-minus fa fa-plus');
}
$('#accordion,#accordion2').on('hidden.bs.collapse', toggleChevron);
$('#accordion,#accordion2').on('shown.bs.collapse', toggleChevron);

/*=====  END  ACCORDION   ======*/


/*=====  BEGIN HEADER POPUP FUNCTION  ======*/

$('.login_click').click(function(){
  $('.login_form').css('display',"block");
});


    $('body').mouseup(function(e)
    {
        var subject = $(".login_form"); 

        if(e.target.id != subject.attr('id') && !subject.has(e.target).length)
        {
            subject.fadeOut();
        }
    });


/*=====  END HEADER POPUP FUNCTION  ======*/



/*=====  BEGIN ADD ADDRESS  ======*/
$('.add_btn').click(function () {
    $(this).next('ul').toggle();
});

/*=====  END ADD ADDRESS  ======*/


/*=====  BEGIN HEADER SCROLL  ======*/


$(".meal_btn").click(function() {
    $('html, body').animate({
        scrollTop: $(".sub_block_3 .more_btn").offset().top
    }, 1000);
});

$(".faq_btn").click(function() {
    $('html, body').animate({
        scrollTop: $(".sub_block_4 .dinner .more_btn").offset().top
    }, 1000);
});

/*=====  END HEADER SCROLL  ======*/