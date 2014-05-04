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

	$('.info-block__plus').click( function(event)
	{
		id = event.target.id;
		s = id[0] + "PlusInfo";

		if ($('#' + s).css( "display" ) == "block")
			$('#' + s).css( "display", "none");
		else
		{
			$('.info-block__plus-info').css( "display", "none");
			$('#' + s).css( "display","block");
		}
	});

});