mapboxgl.accessToken = 'pk.eyJ1IjoianNvbG9yemFubzI2IiwiYSI6ImNtbnJ4YmU1YzA2eGkycG9kdjFoYmlkaGYifQ.PXQC5uWI9PPdFpArqYEB9A';


var map = new mapboxgl.Map({
   container: 'map',
   style: 'mapbox://styles/mapbox/streets-v12',
   center: [-73.97, 40.75],
   zoom: 9
});


map.doubleClickZoom.disable();


let counter = 0;


const inputBox = document.getElementById("info");


inputBox.value = "Clicks: 0";


map.on("click", function () {
   counter += 1;
   inputBox.value = "Clicks: " + counter;
});

map.on("dblclick", function () {
   counter += 4;
   inputBox.value = "Clicks: " + counter;
});
