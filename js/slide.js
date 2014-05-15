//first slide change span
$(document).ready(function(){
	var t=2;
	var i=100,
	y,
	u;
	function waitSlogan(){
		u=document.querySelector('.first_slide_content_change_status').style.height=i+"px"; 
		if(i<=0){
			changeSlogan();
			i=100;
	    }
	    i-=1/3;
	}
	function changeSlogan(){
			if(t===1){
				document.querySelector('.first_slide_content_change_first').style.cssText="display: block";
		 		document.querySelector('.first_slide_content_change_fifth').style.cssText="display: none";
		 		t++;
			}
			else if(t===2){
				document.querySelector('.first_slide_content_change_second').style.cssText="display: block";
		 		document.querySelector('.first_slide_content_change_first').style.cssText="display: none";
		 		t++;
			}
	
			else if(t===3){
				document.querySelector('.first_slide_content_change_fourth').style.cssText="display: block";
		 		document.querySelector('.first_slide_content_change_second').style.cssText="display: none";
		 		t++;
			}
			else if(t===4){
				document.querySelector('.first_slide_content_change_fifth').style.cssText="display: block";
		 		document.querySelector('.first_slide_content_change_fourth').style.cssText="display: none";
		 		t=1;
			}
			i=0;
			//console.log("t="+t);
		};
	y=setInterval(waitSlogan, 10);
		 sloganHover();
	});
