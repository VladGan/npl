var l=true;
 function changeLanguage(){
 	if(l){
 		document.querySelector('.menu_language_eng').style.cssText="display: none";
 		document.querySelector('.menu_language_rus').style.cssText="display: block";

 		//menu text
 		document.querySelector('.menu_nav_ul_first').innerHTML="Main";
 		document.querySelector('.menu_nav_ul_second').innerHTML="How we can help";
 		document.querySelector('.menu_nav_ul_third').innerHTML="Our advantages";
 		document.querySelector('.menu_nav_ul_fourth').innerHTML="Our team";
 		document.querySelector('.menu_nav_ul_fifth').innerHTML="How to find us";

 		 //first slide
 		document.querySelector('.first_slide_titel_h1').innerHTML="We organize business travel";
 		document.querySelector('.first_slide_content_h1').innerHTML="In this";
 		document.querySelector('.first_slide_content_change_first_h1').innerHTML="We can <span>saving</span> you up to 30% of the corporate trip budget";
 		document.querySelector('.first_slide_content_change_second_h1').innerHTML="We <span>know</span> everything about flights, hotels and visa requirements ";
 		document.querySelector('.first_slide_content_change_fourth_h1').innerHTML="<span>Maintain</span> conferences all over the world";
 		document.querySelector('.first_slide_content_change_fifth_h1').innerHTML="We<span>sharing</span>  well-tried solutions with tour agencies";
 		
 		//second slide
 		document.querySelector('.second_slide_txt').children[1].innerHTML='If you are a <span class="second_slide_txt_first">successful</span>  company, and you have business all over the world, we can help you and your employees to focus entirely on business on your business trips';
 		document.querySelector('.second_slide_txt_first_hover').children[0].innerHTML="We work only with successful companies";
 		document.querySelector('.second_slide_txt').children[3].innerHTML='<span class="second_slide_txt_second">We</span> will deal with flights, hotels, insurances, transfers and restaurant reservations.';
 		document.querySelector('.second_slide_txt_second_hover').children[0].innerHTML="Our team can make all the arrangements: starting from your office door, and back to it. ";
 		document.querySelector('.second_slide_txt').children[5].innerHTML='We do what we <span class="second_slide_txt_third">like</span>, you do what you like.';
 		document.querySelector('.second_slide_txt_third_hover').children[0].innerHTML="We are confident that otherwise there will be no successful results. ";
 		sloganHover();
  		//second slode posiiton
 		document.querySelector('.second_slide_txt_first_hover').children[0].style.cssText="margin-left: 40px;";
 		document.querySelector('.second_slide_txt_second_hover').children[0].style.cssText="margin-left: 0px;";
 		document.querySelector('.second_slide_txt_third_hover').children[0].style.cssText="margin-left: -100px;";
  		//trigle
 		document.querySelector('.second_slide_txt_first_hover').children[1].style.cssText="margin-left: 160px;";
 		document.querySelector('.second_slide_txt_second_hover').children[1].style.cssText="margin-left: 18px;";
 		document.querySelector('.second_slide_txt_third_hover').children[1].style.cssText="margin-left: 90px;";
 		
 		//third slide
 		document.getElementById("1Plus").innerHTML="Personal Manager";
 		document.getElementById("2Plus").innerHTML="High technology";
		document.getElementById("3Plus").innerHTML="Your travel CRM";
		document.getElementById("1PlusInfo").children[1].innerHTML="You will have a personal manager available 24/7, dealing with all the possible travel issues. It is the foundation of our business, and we are proud of it. ";
		document.getElementById("2PlusInfo").children[1].innerHTML="Of course, it cannot be left out. We look for tickets using 3 locations around the world. It allows us to see almost all the airlines and to find the most suitable transfers, prices. ";
		document.getElementById("3PlusInfo").children[1].innerHTML="Now you can see the entire picture of your company’s trip in one computer program. Moreover, it is functional and user friendly.";
	
		
 		//fourth slide
 		document.querySelector('.slogan__text').innerHTML="We love business and travel. We stay current on tendencies and can always give you a topnotch advice. We are a very friendly team of professionals.";
 	
 		m.geoObjects.add(p1);
    		m.geoObjects.remove(p2);
    		
 		l=false;
 	}
 	else{
 		document.querySelector('.menu_language_eng').style.cssText="display: block";
 		document.querySelector('.menu_language_rus').style.cssText="display: none";

 		//menu text
 		document.querySelector('.menu_nav_ul_first').innerHTML="Главная";
 		document.querySelector('.menu_nav_ul_second').innerHTML="Чем мы можем помочь";
 		document.querySelector('.menu_nav_ul_third').innerHTML="Наши плюсы";
 		document.querySelector('.menu_nav_ul_fourth').innerHTML="Наша команда";
 		document.querySelector('.menu_nav_ul_fifth').innerHTML="Как нас найти";
 		 //first slide
 		document.querySelector('.first_slide_titel_h1').innerHTML="Мы организовываем  деловые путешествия";
 		document.querySelector('.first_slide_content_h1').innerHTML="При этом";
 		document.querySelector('.first_slide_content_change_first_h1').innerHTML="<span>Экономим</span> до 30% корпоративного<br>бюджета на поездки";
 		document.querySelector('.first_slide_content_change_second_h1').innerHTML="<span>Знаем</span> все про перелеты, отели и визовую поддержку";
 		document.querySelector('.first_slide_content_change_fourth_h1').innerHTML="<span>Обслуживаем</span> конференции<br> по всему миру";
 		document.querySelector('.first_slide_content_change_fifth_h1').innerHTML="<span>Делимся</span> проверенными решениями с турагенствами";

 		//second slide
 		document.querySelector('.second_slide_txt').children[1].innerHTML='Если вы <span class="second_slide_txt_first">успешная</span> компания, и у вас есть дела по всему миру, мы поможем вам и вашим сотрудникам сфокусироваться на бизнесе во время деловых поездок.';
 		document.querySelector('.second_slide_txt_first_hover').children[0].innerHTML="Мы работаем только с успешными";
 		document.querySelector('.second_slide_txt').children[3].innerHTML='<span class="second_slide_txt_second">На себя</span> берем перелеты, отели, страховки, трансферы и столики в ресторана.';
 		document.querySelector('.second_slide_txt_second_hover').children[0].innerHTML="Наша команда организует все: от двери вашего вашего офиса до нее же";
 		document.querySelector('.second_slide_txt').children[5].innerHTML='Мы занимаемся тем, что нам <span class="second_slide_txt_third">нравится</span>, вы — тем, что вам.';
 		document.querySelector('.second_slide_txt_third_hover').children[0].innerHTML="Уверены, что по-другому серьезных результатов не достичь";
 		sloganHover();
 		//second slode posiiton
 		document.querySelector('.second_slide_txt_first_hover').children[0].style.cssText="margin-left: 0px;";
 		document.querySelector('.second_slide_txt_second_hover').children[0].style.cssText="margin-left: 0px;";
 		document.querySelector('.second_slide_txt_third_hover').children[0].style.cssText="margin-left: 0px;";
 		//trigle
 		document.querySelector('.second_slide_txt_first_hover').children[1].style.cssText="margin-left: 120px;";
 		document.querySelector('.second_slide_txt_second_hover').children[1].style.cssText="margin-left: 40px;";
 		document.querySelector('.second_slide_txt_third_hover').children[1].style.cssText="margin-left: 320px;";

 		//third slide
 		document.getElementById("1Plus").innerHTML="Персональный менеджер   ";
 		document.getElementById("2Plus").innerHTML="Высокая технологичность   ";
		document.getElementById("3Plus").innerHTML="Ваша туристическая CRM    ";
		document.getElementById("1PlusInfo").children[1].innerHTML="У вас будет персональный менеджер, доступный 24/7 и решающий все возможные туристические вопросы. Это основа нашего продукта и наша гордость.";
		document.getElementById("2PlusInfo").children[1].innerHTML="Конечно же, не без этого. Мы ищем билеты через 3 локации в мире (что редкость), это позволяет видеть почти все авиакомпании и находить самые удобные стыковки, и цены.";
		document.getElementById("3PlusInfo").children[1].innerHTML="Теперь вы сможете видеть всю картину деловых поездок вашей компании в одной программе. Более того, она удобная и функциональная.";
	
 		//fourth slide
 		document.querySelector('.slogan__text').innerHTML="Нам нравится бизнес и путешествия. Мы в курсе событий и всегда можем дать классные рекомендации. Все мы профессионалы и дружная команда.";
 		
 		m.geoObjects.add(p2);
    		m.geoObjects.remove(p1);
 		
 		l=true;
 	}
 }   
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
	  	var linkFourth = document.querySelector('#map_arrow');
	  	linkFourth.onmouseover = function() {
	    	document.querySelector('#map_arrow').src = 'img/map_arrow.png';
	  	}
	  	linkFourth.onmouseout = function() {
	    	document.querySelector('#map_arrow').src = "img/map_aim_hover.png";
	  	}
	 }
