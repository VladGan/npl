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

});
