/*CURRENCY EXCHANGE JAVASCRIPT CODE */

var input_amount = document.getElementById("input-amount");
var input_currency = document.getElementById("input-currency");
var output_amount = document.getElementById("output-amount");
var output_currency = document.getElementById("output-currency");
var date = document.getElementById("date");

input_amount.addEventListener("input", compute);
output_amount.addEventListener("input", compute);
input_currency.addEventListener("change", compute);
output_currency.addEventListener("change", compute);
date.addEventListener("change", compute);

function compute(){
    const input_currency1 = input_currency.value;
    const output_currency1 = output_currency.value;
    
    //we get exchange rate web API
    var requestURL = 'https://api.exchangerate-api.com/v4/latest/'+input_currency1;
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';

    request.send();
    
    request.onload = function() {
        var response = request.response;
        
        //my code
        date.innerHTML = " " + response.date;
        output_amount.value = response.rates[output_currency1] * input_amount.value;
    }
}

compute();
