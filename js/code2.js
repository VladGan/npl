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
			$(".info-block__pluses__img").css("left",500 - (this.height/2)^2+"px");
		}

		img.src = "img/" + id[0] + ".png";

		if ($('#' + s).css( "display" ) == "block")
		{
				$('#' + s).fadeOut( 100 );
				$('.img-wrapper').fadeOut(100);
				setTimeout(function () {
				$('.info-block__plus').animate({
					'margin-bottom': 20
				},200);
						}, 100);


		}
		else
		{
			$('.img-wrapper').fadeIn(50);
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
		$(".slider-block__buttons__round").css("border","2px solid white");
		$("#" + Id).css("background-color","white");
		$("#" + Id).css("border","3px solid white");

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
 		document.querySelector('.first_slide_titel_h1').innerHTML="We organize<br> business travel";
 		document.querySelector('.first_slide_content_h1').innerHTML="In this";
 		document.querySelector('.first_slide_content_h1').style.cssText="position: relative; margin-left: 15px;";
 		document.querySelector('.first_slide_content_change_first_h1').innerHTML="We can <span>save</span> you up to 30%<br> of the corporate trip budget";
 		document.querySelector('.first_slide_content_change_second_h1').innerHTML="We <span>know</span> everything about flights, hotels and visa requirements ";
 		document.querySelector('.first_slide_content_change_fourth_h1').innerHTML="<span>Maintain</span> conferences<br> all over the world";
 		document.querySelector('.first_slide_content_change_fifth_h1').innerHTML="We <span>sharing</span>  well-tried<br> solutions with tour agencies";
 		
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
 		if(fl){
 			m.geoObjects.add(p1);
    			m.geoObjects.remove(p2);
 		}
    		
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
 		document.querySelector('.first_slide_content_h1').style.cssText="margin-left: 0px;";
 		document.querySelector('.first_slide_content_change_first_h1').innerHTML="<span>Экономим</span> до 30% корпоративного<br>бюджета на поездки";
 		document.querySelector('.first_slide_content_change_second_h1').innerHTML="<span>Знаем</span> все про перелеты,<br> отели и визовую поддержку";
 		document.querySelector('.first_slide_content_change_fourth_h1').innerHTML="<span>Обслуживаем</span> конференции<br> по всему миру";
 		document.querySelector('.first_slide_content_change_fifth_h1').innerHTML="<span>Делимся</span> проверенными<br> решениями с турагенствами";

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
 		if(fl){
	 		m.geoObjects.add(p2);
	    		m.geoObjects.remove(p1);
 		}
 		
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
});
