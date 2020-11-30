/*
Code for Search
*/

$(document).ready(function() {
    $("#searchButton")[0].addEventListener("click", searchItem);
  function searchItem(){
    var keepMe = document.getElementById("searchInfo").value
    alert("Search for " + keepMe + " was successful!")
  }
  });