/*
Code for About Form
*/

var pastPurchases = ["Mona Lisa", "Sunflowers 2"]

var aboutForm   = $("#about-form")[0];
var aboutSubmit = $("#about-submit")[0];
//var aboutDisplay = $("#display-purchase")[0];
var aboutName   = $("#about-name")[0];
var aboutEmail  = $("#about-email")[0];
var aboutPhone = $("#about-phone")[0];
var purchased = $("#about-purchase")[0];


var phone = /^(1(-|.|\s))?(\d{3}(-|.)|(\(\d{3}\)\s))\d{3}(-|.)\d{4}$/;
var email =  /\S+@\S+\.\S+/;
$(document).ready(function() {
aboutSubmit.addEventListener('click', submitAbout);
displayPurchases();
});
var i = 0;

function displayPurchases(){
    console.log("Got Here!");
    while(i < pastPurchases.length){
        $("#display-past").append(pastPurchases[i]);
        console.log(pastPurchases[i]);
        $("#display-past").append("\r\n");
        i++
    }
}

function submitAbout() {
    if(verifyAboutName() && verifyAboutEmail() && verifyAboutPhone() && verifyPurchase()) {
        console.log('successs')
        pastPurchases.push(purchased.value)
        displayPurchases();
    }
}

function verifyAboutPhone(){
    var valid = true;
    if (aboutPhone.value == "") {
        valid = false;
        aboutPhone.nextElementSibling.textContent = " * This field is required";
    } else if(!phone.test(aboutPhone.value)) {
        valid = false;
        aboutPhone.nextElementSibling.textContent = " * Invalid Phone Number";
    } else {
        aboutPhone.nextElementSibling.textContent = "";
    }

    return valid;
}

function verifyAboutName() {
    var valid = true;
    if (aboutName.value == "") {
        valid = false;
        aboutName.nextElementSibling.textContent = " * This field is required";
    } else {
        aboutName.nextElementSibling.textContent = "";
    }


    return valid;
}

function verifyAboutEmail() {
    var valid = true;
    if (aboutEmail.value == "") {
        valid = false;
        aboutEmail.nextElementSibling.textContent = " * This field is required";
    } else if(!email.test(aboutEmail.value)) {
        valid = false;
        aboutEmail.nextElementSibling.textContent = " * Invalid Email Address";
    }else {
        aboutEmail.nextElementSibling.textContent = "";
    }


    return valid;
}

function verifyPurchase(){
    var valid = true;
    if (purchased == ""){
        valid = false;
        purchased.nextElementSibling.textContent = " * This field is required";
    }
    else{
        purchased.nextElementSibling.textContent = "";
    }
    return valid;
}