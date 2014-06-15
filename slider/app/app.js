$(function() {
	var slider = $('.bxslider').bxSlider({
		auto: true,
		pause: 3000,
		autoHover: true,
		mode: 'fade',
		pagerCustom :'#gotoSlide'
	});
	var countDown = setInterval(function(){
		var present = new Date();
		var  last = new Date(present.getFullYear(), present.getMonth(), present.getDate()+1);
		var secondsLeft = last - present;
		var daysLeft = Math.floor(secondsLeft/(24*60*60000));
		var remSeconds = secondsLeft % (24*60*60000);
		var hoursLeft = Math.floor(remSeconds/3600000);
		remSeconds = remSeconds % 3600000;
		var minsLeft = Math.floor(remSeconds/60000);
		$("#countDown").html(" "+(hoursLeft ? (hoursLeft+" hours, ") : "")+minsLeft+" minutes " );
	},1000)
});