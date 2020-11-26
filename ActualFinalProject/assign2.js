
 $('#myCarousel').on('slide.bs.carousel', function onSlide (ev) {
  var id = ev.relatedTarget.id;
  switch (id) {
    case "1":
      $(".Slides1").show();
      $(".Slides2").hide();
      $(".Slides3").hide();
      break;
    case "2":
      $(".Slides2").show();
      $(".Slides1").hide();
      $(".Slides3").hide();
      break;
    case "3":
      $(".Slides3").show();
      $(".Slides2").hide();
      $(".Slides1").hide();
      break;
  }
})


$(document).ready(function() {
  $("#searchButton")[0].addEventListener("click", searchItem);
function searchItem(){
  var keepMe = document.getElementById("searchInfo").value
  alert("Search for " + keepMe + " was successful!")
}
});