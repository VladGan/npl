//first slide change span
var t=2;
var i=101,
	y,
	u;
function waitSlogan(){
	u=document.querySelector('.first_slide_content_change_status').style.height=i+"px"; 
	if(i<=0){
		changSlogan();
		i=100;
    }
<<<<<<< HEAD
    i-=1/3;
=======
    i-=0.255;
>>>>>>> 0c38b7f14fdd8a3e1ed78e340926b6213c932827
}
function changSlogan(){
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
			document.querySelector('.first_slide_content_change_third').style.cssText="display: block";
	 		document.querySelector('.first_slide_content_change_second').style.cssText="display: none";
	 		t++;
		}
		else if(t===4){
			document.querySelector('.first_slide_content_change_fourth').style.cssText="display: block";
	 		document.querySelector('.first_slide_content_change_third').style.cssText="display: none";
	 		t++;
		}
		else if(t===5){
			document.querySelector('.first_slide_content_change_fifth').style.cssText="display: block";
	 		document.querySelector('.first_slide_content_change_fourth').style.cssText="display: none";
	 		t=1;
		}
		i=0;
		//console.log("t="+t);
<<<<<<< HEAD
	};
y=setInterval(waitSlogan, 10);

=======
	},4100);
	y=setInterval(waitSlogan, 10);
}
>>>>>>> 0c38b7f14fdd8a3e1ed78e340926b6213c932827

/*second slide hover slogan*/
function sloganHover(){
	var linkFirst = document.querySelector('.second_slide_txt_first');
  	linkFirst.onmouseover = function() {
    	document.querySelector('.second_slide_txt_first_hover').style.cssText = 'opacity: 1;';
  	}
  	linkFirst.onmouseout = function() {
    	document.querySelector('.second_slide_txt_first_hover').style.cssText = 'opacity: 0;';
  	}
  	var linkSecond = document.querySelector('.second_slide_txt_second');
  	linkSecond.onmouseover = function() {
    	document.querySelector('.second_slide_txt_second_hover').style.cssText = 'opacity: 1;';
  	}
  	linkSecond.onmouseout = function() {
    	document.querySelector('.second_slide_txt_second_hover').style.cssText = 'opacity: 0;';
  	}
  	var linkThird = document.querySelector('.second_slide_txt_third');
  	linkThird.onmouseover = function() {
    	document.querySelector('.second_slide_txt_third_hover').style.cssText = 'opacity: 1;';
  	}
  	linkThird.onmouseout = function() {
    	document.querySelector('.second_slide_txt_third_hover').style.cssText = 'opacity: 0;';
  	}
 }
