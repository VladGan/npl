/* Funktionalität von den Plus Block*/

$(document).ready(function(){

	$('.info-block__plus-info').css( "display", "none");
	$('#1PlusInfo').css( "display", "block");

	$('.info-block__plus').click( function(event)
	{
		id = event.target.id;
		s = id[0] + "PlusInfo";

		var img = new Image();
		img.onload = function() 
		{
			$(".img-wrapper").css("height",this.height + "px!important");
			$(".info-block__pluses__img").attr("src","img/"+id[0]+".png");
			$(".info-block__pluses__img").css("left",480 - this.height/2+"px");
		}

		img.src = "img/" + id[0] + ".png";

		if ($('#' + s).css( "display" ) == "block")
			$('#' + s).css( "display", "none");
		else
		{
			$('.info-block__plus-info').css( "display", "none");
			$('#' + s).css( "display","block");
		}
	});
/* Funktionalität von den Slider Block*/



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
