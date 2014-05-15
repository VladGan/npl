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
			this.el.sliderNav.on("click",function(event) 
			{
				slider.handleNavClick(event, this);
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
	}
	};

slider.init();
});
