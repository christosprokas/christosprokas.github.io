
var google;

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    // var myLatlng = new google.maps.LatLng(40.71751, -73.990922);
    var myLatlng = new google.maps.LatLng(40.3838,23.9259);
    // 39.399872
    // -8.224454
    
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 14,

        // The latitude and longitude to center the map (always required)
        center: myLatlng,

        // How you would like to style the map. 
        scrollwheel: false,
        styles: [{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"simplified"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"hue":"#f49935"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"hue":"#fad959"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"hue":"#a1cdfc"},{"saturation":30},{"lightness":49}]}]
    };

    

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);
    
    
	
	
	var marker = new google.maps.Marker({
        position: { lat: 40.3821, lng: 23.9341 },
        map: map,
        title: 'Ιερό Παρεκκλήσιο Άγιοι Θεόδωροι',
        icon: "images/loct.png"
    });
	
	
	google.maps.event.addDomListener(marker, 'click', function() {

			window.open('https://maps.app.goo.gl/RFccDAbJ4UeFjfgp6', '_blank');
    });
	
	var marker2 = new google.maps.Marker({
        position: { lat: 40.3859, lng: 23.9172 },
        map: map,
        title: 'Beach Bar Legend',
        icon: "images/locr.png"
    });
	
	google.maps.event.addDomListener(marker2, 'click', function() {
			window.open('https://maps.app.goo.gl/YbFgHpn9Sqd7nmpA8', '_blank');
			
	});
	
	var marker3 = new google.maps.Marker({
        position: { lat: 40.3812, lng: 23.9332 }, 
        map: map,
        title: 'Χρήστος Prewedding',		
        icon: "images/lochx.png"
    });
	
	google.maps.event.addDomListener(marker3, 'click', function() {
			window.open('https://maps.app.goo.gl/AsCxEd1yPh3YHd6D9', '_blank');

    });
	
	var marker4 = new google.maps.Marker({
        position: { lat: 40.3828, lng: 23.9228},
        map: map,
        title: 'Βάσω Prewedding',		
        icon: "images/lochb.png"
    });
	
	google.maps.event.addDomListener(marker4, 'click', function() {
			window.open('https://maps.app.goo.gl/N2amx1V5Ud9jPjpG8', '_blank');

	});
    
}
google.maps.event.addDomListener(window, 'load', init);