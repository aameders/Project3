/* 
Code for the Carousel
*/


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


/*
Code for Forms
*/


var footForm   = $("#footer-form")[0];
var footSubmit = $("#foot-submit")[0];
var footName   = $("#footer-name")[0];
var footEmail  = $("#footer-email")[0];

var galleryForm   = $("#gallery-form")[0];
var gallerySubmit = $("#gallery-submit")[0];
var galleryName   = $("#gallery-name")[0];
var galleryEmail  = $("#gallery-email")[0];

// https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
var email =  /\S+@\S+\.\S+/;
footSubmit.addEventListener('click', submitFoot);
gallerySubmit.addEventListener('click', submitGallery);
 
function verifyFooterName() {
    var valid = true;
    if (footName.value == "") {
        valid = false;
        footName.nextElementSibling.textContent = " * This field is required";
    } else {
        footName.nextElementSibling.textContent = "";
    }


    return valid;
}

function verifyFooterEmail() {
    var valid = true;
    if (footEmail.value == "") {
        valid = false;
        footEmail.nextElementSibling.textContent = " * This field is required";
    } else if(!email.test(footEmail.value)) {
        valid = false;
        footEmail.nextElementSibling.textContent = " * Invalid Email Address";
    }else {
        footEmail.nextElementSibling.textContent = "";
    }


    return valid;
}

function verifyGalleryName() {
    var valid = true;
    if (galleryName.value == "") {
        valid = false;
        galleryName.nextElementSibling.textContent = " * This field is required";
    } else {
        galleryName.nextElementSibling.textContent = "";
    }


    return valid;
}

function verifyGalleryEmail() {
    var valid = true;
    if (galleryEmail.value == "") {
        valid = false;
        galleryEmail.nextElementSibling.textContent = " * This field is required";
    } else if(!email.test(galleryEmail.value)) {
        valid = false;
        galleryEmail.nextElementSibling.textContent = " * Invalid Email Address";
    }else {
        galleryEmail.nextElementSibling.textContent = "";
    }


    return valid;
}

function submitFoot() {
    if(verifyFooterName() && verifyFooterEmail()) {
        footForm.submit();
    }
}

function submitGallery() {
    if(verifyGalleryName() && verifyGalleryEmail()) {
        console.log('successs')
        galleryForm.submit();
    }
}
