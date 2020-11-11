$( document ).ready(function() {
    $('#myCarousel').on('slide.bs.carousel', function (e) {
      var forSlide = $('.for-slide-' + $(e.relatedTarget).index());
      if ( !forSlide.hasClass('in') ) {
        $('#collapseGroup>.collapse.in').collapse('hide');
        forSlide.collapse('show');
      }
    })
  });