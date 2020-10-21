const carousel = $(".carousel");
const carLength = carousel.length;
const prices = { 
    "biscotti": 1.95,
    "cappuccino": 3.45,
    "coffee": 1.75,
    "espresso": 1.95,
    "latte": 2.95,
    "scone": 2.95,
    "applepie" : 4.25,
    "bagel" : 1.95,
    "cannoli" : 1.95,
    "cheesecake" : 3.55,
    "frenchbread" : 2.45,
    "smoothie" : 1.95
}
 
const items = []

for( let i = 0; i < carLength; i++){
    carousel[i].addEventListener("click", clickPic);
}

$(function() {
    $(".carousel")
        .mouseover(function() { 
            var src = $(this).attr("src").match(/[^\.]+/) + "_info.jpg";
            $(this).attr("src", src);
        })
        .mouseout(function() {
            var src = $(this).attr("src").replace("_info.jpg", ".jpg");
            $(this).attr("src", src);
        });
});


function clickPic(el){
    console.log(el.srcElement.id)
    price = prices[el.srcElement.id]
    addItem(el.srcElement.id, price)
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
    $("#tax")[0].innerText = `Tax: \t$${Math.round(tax.toFixed(2)*100)/100}`;
    $("#total")[0].innerText = `Total:\t$${Math.round(sum.toFixed(2)*100)/100}`;

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