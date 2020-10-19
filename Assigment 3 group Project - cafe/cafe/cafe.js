const carousel = $(".carousel");
const carLength = carousel.length;
const prices = { 
    "biscotti": 2.99,
    "cappuccino": 2.99,
    "coffee": 2.99,
    "espresso": 2.99,
    "latte": 2.99,
    "scone": 2.99,
    "applepie" : 4.25,
    "bagel" : 1.95,
    "cannoli" : 1.95,
    "cheesecake" : 3.55,
    "frenchbread" : 2.45,
    "smoothie" : 1.95
}

const items = []

for( let i = 0; i < carLength; i++){
    //console.log(carousel[i]);
    //carousel[i].addEventListener("mouseover", changePic);
    carousel[i].addEventListener("click", clickPic);

}

function changePic(el){
    el.srcElement.currentSrc = "./images/biscotti_info.jpg";
    // console.log(el.srcElement.currentSrc)
}
 

function clickPic(el){
    console.log(el.srcElement.id)
    price = prices[el.srcElement.id]
    addItem(el.srcElement.id, price)

    // prices[el.srcElement.id]
}

function addItem(item, price) {
    $("#order")[0].value += `${item} : $${price} \n`
    console.log($("#order")[0].value)
    items.push(price)
    calcPrice();
}

function clearOrder(){
    console.log("hello")
    $("#order")[0].value = ""
    items = []
}

function calcPrice(){
    var sum = 0;
    items.forEach(x => sum +=x);
    var tax = calcTax(sum);
    sum = tax + sum;
    $("#tax")[0].innerText = tax;
    $("#total")[0].innerText = sum;

}

function calcTax(total){
    return total * .08;
}


$("#clear_order")[0].addEventListener("click",clearOrder);

function show(shown, hidden) {
    document.getElementById(shown).style.display='block';
    document.getElementById(hidden).style.display='none';
    return false;
}