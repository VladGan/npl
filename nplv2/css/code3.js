/*
function firstSlide(){
	nonBolt();
	document.querySelector('.menu_nav_ul_first').style.cssText="font-weight: bold;";
	document.querySelector('.menu_arrow').style.cssText=" top: 143px; transition: 1s";
}
function secondSlide(){
	nonBolt();
	document.querySelector('.menu_nav_ul_second').style.cssText="font-weight: bold;";
	document.querySelector('.menu_arrow').style.cssText=" top: 191px; transition: 1s";
}
function thirdSlide(){
	nonBolt();
	document.querySelector('.menu_nav_ul_third').style.cssText="font-weight: bold;";
	document.querySelector('.menu_arrow').style.cssText=" top: 239px; transition: 1s";
}
function fourthSlide(){
	nonBolt();
	document.querySelector('.menu_nav_ul_fourth').style.cssText="font-weight: bold;";
	document.querySelector('.menu_arrow').style.cssText=" top: 286px; transition: 1s";
}
function fifthSlide(){
	nonBolt();
	document.querySelector('.menu_nav_ul_fifth').style.cssText="font-weight: bold;";
	document.querySelector('.menu_arrow').style.cssText=" top: 335px; transition: 1s";
}
function nonBolt(){
	document.querySelector('.menu_nav_ul_first').style.cssText="font-weight: normal;";
	document.querySelector('.menu_nav_ul_second').style.cssText="font-weight: normal;";
	document.querySelector('.menu_nav_ul_third').style.cssText="font-weight: normal;";
	document.querySelector('.menu_nav_ul_fourth').style.cssText="font-weight: normal;";
	document.querySelector('.menu_nav_ul_fifth').style.cssText="font-weight: normal;";
}
*/
/* Funktionalität von den Slider Block*/

$(document).ready(function(){


	var slider = 
	{
		el:
		{
			slider: $(".slider-block__photo"),
			allSlides: $(".slider-block__photo__img"),
			sliderNav: $(".slider-block__buttons__round"),
			allNavButtons: $(".slider-block__buttons__round")
		},

		timing: 800,

		init: function()
		{
// manual scrolling
			this.el.sliderNav.on("click",function(event) 
			{
				slider.handleNavClick(event, this);
			});
		},

	moveSlidePosition: function(event)
	{
	// Magic Numbers
		this.el.allSlides.css(
		{
			"background-position": $(event.target).scrollLeft()/6-100+ "px 0"
		});
	},

	handleNavClick: function(event, el) 
	{

		event.preventDefault();

		var Id = el.id;
		$(".slider-block__buttons__round").css("background-color","transparent");
		$("#" + Id).css("background-color","white");
		Id = el.id [0];


		var $left = -(Id-1)*664;

		$left = $left.toString() + "px";
		$(".slider-block__photo__img").animate({
			'left': $left
		},this.timing);
	},

	changeActiveNav: function(el)
		{
// Remove active from all links
			this.el.allNavButtons.removeClass("active");
// Add back to the one that was pressed
			$(el).addClass("active");
		}
	};

slider.init();
});







/*$('#1SliderBlock_Buttons_Round').css("background-color","white");

	CurrentId = 1;

	setInterval(function()
		{
			s = "SliderBlock_Buttons_Round";
			s = CurrentId + s;
			$("#" + s).css("background-color","transparent");

			s = "SliderBlock_Buttons_Round";
			if (CurrentId == 5) CurrentId = 0;
			s = (CurrentId+1) + s;
			$("#slider-block__photo__img").attr("src","img/Slide1.png");
			$("#" + s).css("background-color","white");

			CurrentId++;
			CurrentId%=6;
			if (CurrentId == 0) CurrentId++;
		},10000);*/