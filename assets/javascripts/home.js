(function(){

window.requestAnimFrame = (function(){
	return	window.requestAnimationFrame       ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame    ||
			window.msRequestAnimationFrame     ||
			window.oRequestAnimationFrame
})();

window.vendor = "",
	div = document.createElement('div'),
	props = ['transform', 'WebkitTransform',
			'MozTransform', 'OTransform', 'msTransform'],
	i = 0,
	cssTransform = false;
while (props[i]) {
	if (props[i] in div.style) {
		cssTransform = true;
		vendor = props[i].replace(/transform/i,'');
		vendor = vendor.toLowerCase();
		break;
	}
	i++;
}

if (!!('ontouchstart' in window) || !requestAnimFrame || !cssTransform) return false

document.body.className = "animate"

var lastPosition = -10,
	wHeight = window.innerHeight,

	title = $("#header h1"),
	scrollDown = $("#scroll-down"),

	steps = $("#steps"),
	mountains2 = $("#mountains2"),
	mountains = $("#mountains"),
	clouds = $("#clouds"),
	clouds2 = $("#clouds2"),
	clouds3 = $("#clouds3"),
	cloudsF = $("#cloudsF"),
	cloudsM = $("#m1"),

	group1 = $(".group1"),

	land = $("#land"),

	flip = $(".flip-thing"),

	loop = function(){
		if (lastPosition == window.pageYOffset) {
			requestAnimFrame(loop);
			return false;
		} else lastPosition = window.pageYOffset;

		if (window.pageYOffset < 500  ) {
			title.css('opacity',1)
			scrollDown.css('opacity',1)
			mountains.css('opacity',1)
			mountains2.css('opacity',1)

			title.css('-'+vendor+'-transform', "translate3d(0, "+ (window.pageYOffset/-3.8) +"px,0)" )
			title.css('opacity', 1.2-(window.pageYOffset/400) )
			scrollDown.css('opacity', 1-(window.pageYOffset/100) )

			clouds.css('-'+vendor+'-transform', "translate3d(0, "+ (window.pageYOffset/-1.2) +"px,0)" )
			cloudsF.css('-'+vendor+'-transform', "translate3d(0, "+ (window.pageYOffset/-1.2) +"px,0)" )
			cloudsM.css('-'+vendor+'-transform', "translate3d(0, "+ (window.pageYOffset/-1.2) +"px,0)" )
			clouds2.css('-'+vendor+'-transform', "translate3d(0, "+ (window.pageYOffset/-1.8) +"px,0)" )
			clouds3.css('-'+vendor+'-transform', "translate3d(0, "+ (window.pageYOffset/-3) +"px,0)" )

			mountains.css('-'+vendor+'-transform', "translate3d(0, "+ (window.pageYOffset/-1.2) +"px,0)" )
			mountains2.css('-'+vendor+'-transform', "translate3d(0, "+ (window.pageYOffset/-2) +"px,0)" )

//			land.css('-'+vendor+'-transform', "translate3d(0, "+ (window.pageYOffset/-6) +"px,0)" )

		} else {
			title.css('opacity',0)
			scrollDown.css('opacity',0)

			mountains.css('opacity',0)
			mountains2.css('opacity',0)

			clouds.css('-'+vendor+'-transform', "translate3d(0, -416px,0)" )
			cloudsF.css('-'+vendor+'-transform', "translate3d(0, -416px,0)" )
			cloudsM.css('-'+vendor+'-transform', "translate3d(0, -416px,0)" )
			clouds2.css('-'+vendor+'-transform', "translate3d(0, -277px,0)" )
			clouds3.css('-'+vendor+'-transform', "translate3d(0, -166px,0)" )
		}

		if (window.pageYOffset > 700  ) {
			flip.addClass("start")
		}

		requestAnimFrame(loop)
	}

loop()

}());

(function(){
if (!!('ontouchstart' in window)) return false

$(".flip-thing > li").each(function(i,el){
	var number = parseFloat($(el).text());
	$(el).html("").addClass("num-"+number);
	$(el).append("<span class='none'/>");
	for (var i=0;i<=number;i++){
		$(el).append("<span class='back-"+i+"'/>");
		$(el).append("<span class='num-"+i+"'/>");
	}
})



// MAP
var hotelPosition = new google.maps.LatLng(40.756914, -73.984873);
var mapOptions = {
	center: new google.maps.LatLng(40.756914, -73.984873),
	zoom: 14,
	mapTypeId: google.maps.MapTypeId.ROADMAP,
	scaleControl: false,
	scrollwheel: false,
	styles: [
	  {
	    "featureType": "landscape",
	    "elementType": "geometry.fill",
	    "stylers": [
	      { "color": "#e35750" }
	    ]
	  },{
	    "featureType": "poi",
	    "elementType": "geometry.fill",
	    "stylers": [
	      { "color": "#f77c7d" }
	    ]
	  },{
	    "featureType": "road.local",
	    "stylers": [
	      { "weight": 0.5 },
	      { "color": "#a04444" }
	    ]
	  },{
	    "featureType": "water",
	    "elementType": "geometry",
	    "stylers": [
	      { "color": "#7fdff9" }
	    ]
	  },{
	    "featureType": "water",
	    "elementType": "labels",
	    "stylers": [
	      { "visibility": "off" }
	    ]
	  },{
	    "featureType": "transit",
	    "stylers": [
	      { "visibility": "off" }
	    ]
	  },{
	    "featureType": "road",
	    "elementType": "geometry.fill",
	    "stylers": [
	      { "visibility": "on" },
	      { "color": "#ec7876" }
	    ]
	  },{
	    "featureType": "road",
	    "elementType": "geometry.stroke",
	    "stylers": [
	      { "color": "#764747" }
	    ]
	  },{
	    "featureType": "road",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      { "visibility": "on" },
	      { "color": "#ffffff" }
	    ]
	  },{
	    "featureType": "road",
	    "elementType": "labels.text.stroke",
	    "stylers": [
	      { "visibility": "off" }
	    ]
	  }
	]
};
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
var marker = new google.maps.Marker({
	position: hotelPosition,
	map: map,
	title: 'Hudson Hotel'
});

}())
