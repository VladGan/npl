/*function firstSlide(){
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
			$(".info-block__pluses__img").css("left",500 - this.height/2+"px");
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