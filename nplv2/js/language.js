var l=true;
 function changeLanguage(){
 	if(l){
 		document.querySelector('.menu_language_eng').style.cssText="display: none";
 		document.querySelector('.menu_language_rus').style.cssText="display: block";
 		l=false;
 	}
 	else{
 		document.querySelector('.menu_language_eng').style.cssText="display: block";
 		document.querySelector('.menu_language_rus').style.cssText="display: none";
 		l=true;
 	}
 }   