$(document).ready(function(){
  /* scroll activated animation */
   $('.animate').addClass("hidden").viewportChecker({
         classToAdd: 'visible animated fadeInUp',
         offset: 190
        });


  $('a[href^="#"]').on('click', function(e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').animate({
        'scrollTop': $target.offset().top
        }, 900, 'swing', function() {
          window.location.hash = target;
        });
        });

});
