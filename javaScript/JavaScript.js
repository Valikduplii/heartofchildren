$(document).ready(function(){
   $('.header__burger').click(function(event){
      $('.header__burger, .header__menu').toggleClass('active');
      $('body').toggleClass('lock');
   })
      jQuery(function($) {
         $(window).scroll(function(){
         if($(this).scrollTop()>800){
         $('.trailer').removeClass('fixed-on');
         }
         else if ($(this).scrollTop()<885){
         $('.trailer').addClass('fixed-on');
         }
         });
     });
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
         responsive: [
            {
               breakpoint: 1000,
               settings: {
                  slidesToShow: 1,
               }
            },
         ],
      });
      // $(".news__more" || ".news__more.active").click(function () {
      //    $(this).parents(".news__item").find(".news__text").toggleClass("active");
      //    $(".news__more").toggleClass("active");
      // })
      // $(".small-img").click(function() {
      //    $(".big-img").attr("src", $(this).attr("src"));
      // });
   }
   if ($('.help__slider').length > 0) {
      $('.help__slider').slick({
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
         adaptiveHeight: false,
         responsive: [
            {
               breakpoint: 775,
               settings: {
                  variableWidth: true,
                  slidesToShow: 3,
               }
            },
         ],
      });
   }
   if ($('.partners__slider').length > 0) {
      $('.partners__slider').slick({
         easing: 'ease',
         autoplay: true,
         dots: false,
         arrows: false,
         slidesToShow: 4,
         autoplaySpeed: 1000,
         rows: 1,
         centerMode: false,
         variableWidth: false,
         slidesToScroll: 1,
         infinite: true,
         adaptiveHeight: true,
         responsive: [
            {
               breakpoint: 1280,
               settings: {
                  slidesToShow: 3,
               }
            },
            {
               breakpoint: 1000,
               settings: {
                  slidesToShow: 3,
               }
            },
            {
               breakpoint: 768,
               settings: {
                  slidesToShow: 2,
               }
            },
            {
               breakpoint: 480,
               settings: {
                  slidesToShow: 1,
                  centerMode: true,
               }
            },
         ],
      });
}
   function map(n){
      google.maps.Map.prototype.setCenterWithOffset= function(latlng, offsetX, offsetY) {
         var map = this;
         var ov = new google.maps.OverlayView(); 
         ov.onAdd = function() { 
            var proj = this.getProjection(); 
            var aPoint = proj.fromLatLngToContainerPixel(latlng);
            aPoint.x = aPoint.x+offsetX;
            aPoint.y = aPoint.y+offsetY;
            map.panTo(proj.fromContainerPixelToLatLng(aPoint));
            //map.setCenter(proj.fromContainerPixelToLatLng(aPoint));
         }
         ov.draw = function() {};
         ov.setMap(this);
      };
      var markers = new Array();
      var infowindow = new google.maps.InfoWindow({
         //pixelOffset: new google.maps.Size(-230,250)
      });
      var locations = [
         [new google.maps.LatLng(53.819055,27.8813694)]
      ]
      var options = {
         zoom: 10,
         panControl:false,
         mapTypeControl:false,
         center: locations[0][0],
         scrollwheel:false,
         mapTypeId: google.maps.MapTypeId.ROADMAP
      }; 
      var map = new google.maps.Map(document.getElementById('map'), options);
      var icon={
         url:'img/icons/map.svg',
         scaledSize: new google.maps.Size(18, 20),
         anchor: new google.maps.Point(9, 10)
      }
      for (var i = 0; i < locations.length; i++) {
         var marker = new google.maps.Marker({
            //icon:icon,
            position: locations[i][0],
            map: map,
         });
         markers.push(marker);
      }
   }
   if($("#map").length>0){
      map();
   }
})
