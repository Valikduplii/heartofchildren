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
                  centerMode: true,
                  infinite: true,
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
const popupLinks = document.querySelectorAll('.popup-link');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function (e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        });
    }
}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function (e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });
    }
}

function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        curentPopup.classList.add('open');
        curentPopup.addEventListener("click", function (e) {
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}

function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnLock();
        }
    }
}

function bodyLock() {
    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

function bodyUnLock() {
    setTimeout(function () {
        if (lockPadding.length > 0) {
            for (let index = 0; index < lockPadding.length; index++) {
                const el = lockPadding[index];
                el.style.paddingRight = '0px';
            }
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
        const popupActive = document.querySelector('.popup.open');
        popupClose(popupActive);
    }
});

(function () {
    // проверяем поддержку
    if (!Element.prototype.closest) {
        // реализуем
        Element.prototype.closest = function (css) {
            var node = this;
            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        };
    }
})();
(function () {
    // проверяем поддержку
    if (!Element.prototype.matches) {
        // определяем свойство
        Element.prototype.matches = Element.prototype.matchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector;
    }
})();

const animItems = document.querySelectorAll('._anim-items');

if(animItems.length > 0){
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(){
        for (let index = 0; index < animItems.length; index++){
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;
            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if(animItemHeight > window.innerHeight) {
               animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
               animItem.classList.add('_active');
            }else{
               if(!animItem.classList.contains('_anim-no-hide')){
                animItem.classList.remove('_active');
        }
            }
        }
    }
    function offset (el){
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageXOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    setTimeout(() => {
        animOnScroll();
    }, 300);
}
jQuery(function($) {
    $(window).scroll(function(){
    if($(this).scrollTop()>800){
    $('.header').addClass('fixed-on');
    }
    else if ($(this).scrollTop()<885){
    $('.header').removeClass('fixed-on');
    }
    });
});


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

const animItems = document.querySelectorAll('._anim-items');

if(animItems.length > 0){
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(){
        for (let index = 0; index < animItems.length; index++){
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;
            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if(animItemHeight > window.innerHeight) {
               animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
               animItem.classList.add('_active');
            }else{
               if(!animItem.classList.contains('_anim-no-hide')){
                animItem.classList.remove('_active');
        }
            }
        }
    }
    function offset (el){
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageXOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    setTimeout(() => {
        animOnScroll();
    }, 300);
}