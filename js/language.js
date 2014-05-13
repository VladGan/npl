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
 		document.querySelector('.first_slide_content_change_first_h1').innerHTML="<span> Saving</span> 30% of the corporate<br>travel budget";
 		document.querySelector('.first_slide_content_change_second_h1').innerHTML="<span> Know</span> all about flights, hotels and visa support";
 		document.querySelector('.first_slide_content_change_third_h1').innerHTML="<span> Sending</span> exhibitions";
 		document.querySelector('.first_slide_content_change_fourth_h1').innerHTML="<span> We serve</span> conferences worldwide";
 		document.querySelector('.first_slide_content_change_fifth_h1').innerHTML="<span> Sharing</span> and tested solutions with travel agencies";
 		
 		//second slide
 		document.querySelector('.second_slide_txt').children[1].innerHTML='If you <span class="second_slide_txt_first">successful</span> company, and you have a business around the world, we will help you and your staff to focus on business during business trips.';
 		document.querySelector('.second_slide_txt_first_hover').children[0].innerHTML="We only work with successful";
 		document.querySelector('.second_slide_txt').children[3].innerHTML='<span class="second_slide_txt_second">Self</span> take flights, hotels, insurance, transfers and tables in the restaurant.';
 		document.querySelector('.second_slide_txt_second_hover').children[0].innerHTML="Our team organizes everything from your door to your office it is";
 		document.querySelector('.second_slide_txt').children[5].innerHTML='We do what we <span class="second_slide_txt_third">like</span>, you - so that you do.';
 		document.querySelector('.second_slide_txt_third_hover').children[0].innerHTML="Sure differently to achieve serious results";
 		sloganHover();
 		//second slode posiiton
 		document.querySelector('.second_slide_txt_first_hover').children[0].style.cssText="margin-left: -30px;";
 		document.querySelector('.second_slide_txt_second_hover').children[0].style.cssText="margin-left: -5px;";
 		document.querySelector('.second_slide_txt_third_hover').children[0].style.cssText="margin-left: -100px;";
  		//trigle
 		document.querySelector('.second_slide_txt_first_hover').children[1].style.cssText="margin-left: 100px;";
 		document.querySelector('.second_slide_txt_second_hover').children[1].style.cssText="margin-left: 20px;";
 		document.querySelector('.second_slide_txt_third_hover').children[1].style.cssText="margin-left: 90px;";

 		//third slide
 		document.getElementById("1Plus").innerHTML="Personal Manager  ";
 		document.getElementById("2Plus").innerHTML="High technology   ";
		document.getElementById("3Plus").innerHTML="Your travel CRM  ";

 		//fourth slide
 		document.querySelector('.slogan__text').innerHTML="We like to travel and business. We tuned in and can always give great recommendations. All we are professionals and friendly team.";
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
 		 //first slide
 		document.querySelector('.first_slide_titel_h1').innerHTML="Мы организовываем  деловые путешествия";
 		document.querySelector('.first_slide_content_h1').innerHTML="При этом";
 		document.querySelector('.first_slide_content_change_first_h1').innerHTML="<span>Экономим</span> до 30% корпоративного<br>бюджета на поездки";
 		document.querySelector('.first_slide_content_change_second_h1').innerHTML="<span>Знаем</span> все про перелеты, отели и визовую поддержку";
 		document.querySelector('.first_slide_content_change_third_h1').innerHTML="<span>Отправляем</span> на выставки";
 		document.querySelector('.first_slide_content_change_fourth_h1').innerHTML="<span>Обслуживаем</span> конференции по всему миру";
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


 		//fourth slide
 		document.querySelector('.slogan__text').innerHTML="Нам нравится бизнес и путешествия. Мы в курсе событий и всегда можем дать классные рекомендации. Все мы профессионалы и дружная команда.";
 		l=true;
 	}
 }   