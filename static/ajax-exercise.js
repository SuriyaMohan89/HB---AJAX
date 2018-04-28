"use strict";


// PART 1: SHOW A FORTUNE

function requestFortune(getFortune) {
	$('#fortune-text').html(getFortune);
	
}

function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div
    $.get('/fortune',requestFortune);

}

$('#get-fortune-button').on('click', showFortune);


// PART 2: SHOW WEATHER

function requestForecast(results){
	let weather = (results['forecast']);
	$('#weather-info').html(weather);
}

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};

    $.get(url, formData,requestForecast);


    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS


function alertDelivery(result){
	console.log(result);
	$('#order-status').html(result['code'] +'\t '+result['msg']);
}

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
    let formData = { 'qty': $('#qty-field').val(),
    				 'melon_type' : $('#melon-type-field').val(), 

    };

    $.post("/order-melons.json",formData, alertDelivery);


};

$("#order-form").on('submit', orderMelons);


