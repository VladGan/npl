/* Funktionalität von den Plus Block*/

$(document).ready(function(){

	$('.info-block__plus-info').css( "display", "none");
	$('#1PlusInfo').css( "display", "block");
	$('.info-block__plus:nth-child(1)').css("margin-bottom","230px");
	$('.info-block__plus').click( function(event)
	{
		var id = event.target.id;
		var i = id[0];
		var s = i + "PlusInfo";
		var img = new Image();
		img.onload = function() 
		{
			$(".img-wrapper").css("height",this.height + "px!important");
			$(".info-block__pluses__img").attr("src","img/"+id[0]+".png");
			$(".info-block__pluses__img").css("left",480 - this.height/2+"px");
		}

		img.src = "img/" + id[0] + ".png";

		if ($('#' + s).css( "display" ) == "block")
		{
				$('#' + s).fadeOut( 100 );
				setTimeout(function () {
				$('.info-block__plus').animate({
					'margin-bottom': 20
				},200);
						}, 100);

		}
		else
		{
			$('.info-block__plus-info').css( "display", "none");
			$('.info-block__plus').animate({
				'margin-bottom': 20
			},200);
			$($(".info-block__plus")[i-1]).animate({
				'margin-bottom': 230
			},200);

				setTimeout(function () {
				$('#' + s).fadeIn( 200 );
				$('#' + s).css("display","block");
						}, 400);

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

		current: 0,

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


		var $left = -(Id-1)*636;
		var x = 200 + 150 * Math.abs(this.current - Id);
		this.current = Id;
		$left = $left.toString() + "px";
		$(".slider-block__photo__img").animate({
			'left': $left
		},x);
	}
	};

slider.init();
});
