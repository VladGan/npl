
/*
var curPage=1,
d=1,
u=1;
*/
function firstSlide(){
	//nonBolt();
	//document.querySelector('.menu_nav_ul_first').style.cssText="font-weight: bold;";
	//document.querySelector('.menu_arrow').style.cssText=" top: 148px; transition: 1s";
	//curPage=1;
}
function secondSlide(){
	//nonBolt();
	//document.querySelector('.menu_nav_ul_second').style.cssText="font-weight: bold;";
	//document.querySelector('.menu_arrow').style.cssText=" top: 196px; transition: 1s";
	//curPage=2;
}
function thirdSlide(){
	//nonBolt();
	//document.querySelector('.menu_nav_ul_third').style.cssText="font-weight: bold;";
	//document.querySelector('.menu_arrow').style.cssText=" top: 245px; transition: 1s";
	//curPage=3;
}
function fourthSlide(){
	//nonBolt();
	//document.querySelector('.menu_nav_ul_fourth').style.cssText="font-weight: bold;";
	//document.querySelector('.menu_arrow').style.cssText=" top: 295px; transition: 1s";
	//curPage=4;
}
function fifthSlide(){
	//nonBolt();
	//document.querySelector('.menu_nav_ul_fifth').style.cssText="font-weight: bold;";
	//document.querySelector('.menu_arrow').style.cssText=" top: 344px; transition: 1s";
	//curPage=5;
}
/*function nonBolt(){
	document.querySelector('.menu_nav_ul_first').style.cssText="font-weight: normal;";
	document.querySelector('.menu_nav_ul_second').style.cssText="font-weight: normal;";
	document.querySelector('.menu_nav_ul_third').style.cssText="font-weight: normal;";
	document.querySelector('.menu_nav_ul_fourth').style.cssText="font-weight: normal;";
	document.querySelector('.menu_nav_ul_fifth').style.cssText="font-weight: normal;";
}*/

function getKey(tmp){ 
        if(!window.event)event=tmp; 
        tmp=event.keyCode||''; 

    /* if(38==tmp||57385==tmp){
              	   if(curPage===1){
                 fifthSlide();
               }
               if(curPage===2){
                 firstSlide();
               }
               else if(curPage===3){
                 secondSlide();
               }
               else if(curPage===4){
                 thirdSlide();
               }
               else if(curPage===5){
               	 fourthSlide()
               }
         } 
        else if(40==tmp||57386==tmp){
                if(curPage===1){
                 secondSlide();
               }
               else if(curPage===2){
                 thirdSlide();
               }
               else if(curPage===3){
                 fourthSlide()
               }
               else if(curPage===4){
                 fifthSlide();
               }
               else if(curPage===5){
                 firstSlide();
               }
        }
        */
  } 
if(window.opera)document.onkeydown=getKey;
