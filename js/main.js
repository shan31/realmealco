 /*=====  BEGIN BANNER SLIDER   ======*/
 $('.carousel')
   .carousel({
     interval: 5000 //changes the speed
   })
   /*=====  END BANNER SLIDER  ======*/

   /*=====  BEGIN MENU SECTION SLIDER  ======*/
 $('.slider1')
   .bxSlider({
     slideWidth: 545,
     pager: false,
     minSlides: 2,
     maxSlides: 2,
     slideMargin: 10
   });
 var maxSlides,
   width = $(window)
   .width();
 if (width < 430) {
   maxSlides = 1;
 } else {
   maxSlides = 2;
 }
 var myslider = $('.slider1')
   .bxSlider({
     slideWidth: 545,
     pager: false,
     maxSlides: maxSlides,
     maxSlides: 2,
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
     .toggleClass('fa-angle-down fa-angle-up')
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
 var SelectedDates = {};
 SelectedDates[new Date('09/08/2012')] = new Date('09/08/2012');
 SelectedDates[new Date('09/09/2012')] = new Date('09/09/2012');
 $(function () {
   $("#datepicker")
     .datepicker({
       numberOfMonths: 2,
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