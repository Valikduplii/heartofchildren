$(document).ready(function(){
   $('.header__burger').click(function(event){
      $('.header__burger, .header__menu').toggleClass('active');
      $('body').toggleClass('lock');
   })
   if ($('.news__slider').length > 0) {
      $('.news__slider').slick({
         easing: 'ease',
         autoplay: false,
         dots: true,
         slidesToShow: 2,
         autoplaySpeed: 10000,
         rows: 1,
         pauseOnFocus: true,
         pauseOnHover: true,
         slidesToScroll: 1,
         infinite: false,
         adaptiveHeight: true,
         
         // responsive: [
         //    {
         //       breakpoint: 1280,
         //       settings: {
         //          slidesToShow: 2,
         //       }
         //    }, {
         //       breakpoint: 992,
         //       settings: {
         //          slidesToShow: 1,
         //       }
         //    }
         // ],
      });
      // $(".news__more" || ".news__more.active").click(function () {
      //    $(this).parents(".news__item").find(".news__text").toggleClass("active");
      //    $(".news__more").toggleClass("active");
      // })
      // $(".small-img").click(function() {
      //    $(".big-img").attr("src", $(this).attr("src"));
      // });
   }
})
