function changeLanguage() {
    if (l) {
        document.querySelector(".menu_language_eng").style.cssText = "display: none";
        document.querySelector(".menu_language_rus").style.cssText = "display: block";
        document.querySelector("#menu_nav_ul_first").innerHTML = "Main";
        document.querySelector(".menu_nav_ul_second").innerHTML = "How can we help";
        document.querySelector(".menu_nav_ul_third").innerHTML = "Our advantages";
        document.querySelector(".menu_nav_ul_fourth").innerHTML = "Our team";
        document.querySelector(".menu_nav_ul_fifth_last").innerHTML = "How to find us";
        document.querySelector(".first_slide_titel_h1").innerHTML = "We organize<br> business travel";
        document.querySelector(".first_slide_content_h1").innerHTML = "While";
        document.querySelector(".first_slide_content_h1").style.cssText = "position: relative; margin-left: 15px;";
        document.querySelector(".first_slide_content_change_first_h1").innerHTML = "<span>Saving </span> up to 30% of<br> your corporate trip budget";
        document.querySelector(".first_slide_content_change_second_h1").innerHTML = "We being <span>familiar</span> everything about flights, hotels and visa requirements ";
        document.querySelector(".first_slide_content_change_fourth_h1").innerHTML = "<span>Maintain</span> conferences<br> all over the world";
        document.querySelector(".first_slide_content_change_fifth_h1").innerHTML = "<span>Sharing</span> well-tried<br> solutions with tour agencies";
        document.querySelector(".second_slide_txt").children[1].innerHTML = 'If you are a <span class="second_slide_txt_first">successful</span>  company, and you have business all over the world, we can help you and your employees to focus entirely on business on your business trips';
        document.querySelector(".second_slide_txt_first_hover").children[0].innerHTML = "We work only with successful companies";
        document.querySelector(".second_slide_txt").children[3].innerHTML = '<span class="second_slide_txt_second">We</span> will deal: with flights, hotels, insurances, transfers and restaurant reservations.';
        document.querySelector(".second_slide_txt_second_hover").children[0].innerHTML = "Our team organizes all aspects of business trip  ";
        document.querySelector(".second_slide_txt").children[5].innerHTML = 'We do what we <span class="second_slide_txt_third">like</span>, you do what you like.';
        document.querySelector(".second_slide_txt_third_hover").children[0].innerHTML = " We believe, that it is the only way to achieve powerful results.";
        sloganHover();
        document.getElementById("1Plus").innerHTML = "Personal Manager";
        document.getElementById("2Plus").innerHTML = "High technology";
        document.getElementById("3Plus").innerHTML = "Your travel CRM";
        document.getElementById("1PlusInfo").children[0].innerHTML = "You will have a personal manager available 24/7, dealing with all the possible travel issues. It is the foundation of our business, and we are proud of it. ";
        document.getElementById("2PlusInfo").children[0].innerHTML = "Of course, it cannot be left out. We look for tickets using 3 locations around the world. It allows us to see almost all the airlines and to find the most suitable transfers, prices. ";
        document.getElementById("3PlusInfo").children[0].innerHTML = "Now you can see the entire picture of your company’s trip in one computer program. Moreover, it is functional and user friendly.";
        document.querySelector(".slogan__text").innerHTML = "We love business and travel. We stay current on tendencies and can always give you a topnotch advice. We are a very friendly team of professionals.";
        
        $(".second_slide_txt_first_hover_trigle").attr("class","second_slide_txt_first_hover_trigle eng1"); 
        $(".second_slide_txt_second_hover_trigle").attr("class","second_slide_txt_second_hover_trigle eng2"); 
        $(".second_slide_txt_third_hover_trigle").attr("class","second_slide_txt_third_hover_trigle eng3"); 

        $(".second_slide_txt_first_hover").attr("class","second_slide_txt_first_hover eng1_height"); 
        $(".second_slide_txt_second_hover").attr("class","second_slide_txt_second_hover eng2_height"); 
        $(".second_slide_txt_third_hover").attr("class","second_slide_txt_third_hover eng3_height"); 
        

        if (fl) {
            m.geoObjects.add(p1);
            m.geoObjects.remove(p2)
        }
        l = false
    } else {
        document.querySelector(".menu_language_eng").style.cssText = "display: block";
        document.querySelector(".menu_language_rus").style.cssText = "display: none";
        document.querySelector("#menu_nav_ul_first").innerHTML = "Главная";
        document.querySelector(".menu_nav_ul_second").innerHTML = "Чем мы можем помочь";
        document.querySelector(".menu_nav_ul_third").innerHTML = "Наши плюсы";
        document.querySelector(".menu_nav_ul_fourth").innerHTML = "Наша команда";
        document.querySelector(".menu_nav_ul_fifth_last").innerHTML = "Как нас найти";
        document.querySelector(".first_slide_titel_h1").innerHTML = "Мы организовываем  деловые путешествия";
        document.querySelector(".first_slide_content_h1").innerHTML = "При этом";
        document.querySelector(".first_slide_content_h1").style.cssText = "margin-left: 0px;";
        document.querySelector(".first_slide_content_change_first_h1").innerHTML = "<span>Экономим</span> до 30% корпоративного<br>бюджета на поездки";
        document.querySelector(".first_slide_content_change_second_h1").innerHTML = "<span>Знаем</span> все про перелеты,<br> отели и визовую поддержку";
        document.querySelector(".first_slide_content_change_fourth_h1").innerHTML = "<span>Обслуживаем</span> конференции<br> по всему миру";
        document.querySelector(".first_slide_content_change_fifth_h1").innerHTML = "<span>Делимся</span> проверенными<br> решениями с турагенствами";
        document.querySelector(".second_slide_txt").children[1].innerHTML = 'Если вы <span class="second_slide_txt_first">успешная</span> компания, и у вас есть дела по всему миру, мы поможем вам и вашим сотрудникам сфокусироваться на бизнесе во время деловых поездок.';
        document.querySelector(".second_slide_txt_first_hover").children[0].innerHTML = "Мы работаем только с успешными";
        document.querySelector(".second_slide_txt").children[3].innerHTML = '<span class="second_slide_txt_second">На себя:</span> берем перелеты, отели, страховки, трансферы и столики в ресторана.';
        document.querySelector(".second_slide_txt_second_hover").children[0].innerHTML = "Наша команда организует все моменты деловой поездки";
        document.querySelector(".second_slide_txt").children[5].innerHTML = 'Мы занимаемся тем, что нам <span class="second_slide_txt_third">нравится</span>, вы — тем, что вам.';
        document.querySelector(".second_slide_txt_third_hover").children[0].innerHTML = "Уверены, что только так можно достичь серьезных результатов";
        sloganHover();
        document.querySelector(".second_slide_txt_first_hover").children[0].style.cssText = "margin-left: 0px;";
        document.querySelector(".second_slide_txt_second_hover").children[0].style.cssText = "margin-left: 0px;";
        document.querySelector(".second_slide_txt_third_hover").children[0].style.cssText = "margin-left: 0px;";
        document.querySelector(".second_slide_txt_first_hover").children[1].style.cssText = "margin-left: 120px;";
        document.querySelector(".second_slide_txt_second_hover").children[1].style.cssText = "margin-left: 40px;";
        document.querySelector(".second_slide_txt_third_hover").children[1].style.cssText = "margin-left: 320px;";
        document.getElementById("1Plus").innerHTML = "Персональный менеджер   ";
        document.getElementById("2Plus").innerHTML = "Высокая технологичность   ";
        document.getElementById("3Plus").innerHTML = "Ваша туристическая CRM    ";
        document.getElementById("1PlusInfo").children[0].innerHTML = "У вас будет персональный менеджер, доступный 24/7 и решающий все возможные туристические вопросы. Это основа нашего продукта и наша гордость.";
        document.getElementById("2PlusInfo").children[0].innerHTML = "Конечно же, не без этого. Мы ищем билеты через 3 локации в мире (что редкость), это позволяет видеть почти все авиакомпании и находить самые удобные стыковки, и цены.";
        document.getElementById("3PlusInfo").children[0].innerHTML = "Теперь вы сможете видеть всю картину деловых поездок вашей компании в одной программе. Более того, она удобная и функциональная.";
        document.querySelector(".slogan__text").innerHTML = "Нам нравится бизнес и путешествия. Мы в курсе событий и всегда можем дать классные рекомендации. Все мы профессионалы и дружная команда.";
        

        $(".second_slide_txt_first_hover_trigle").attr("class","second_slide_txt_first_hover_trigle"); 
        $(".second_slide_txt_second_hover_trigle").attr("class","second_slide_txt_second_hover_trigle "); 
        $(".second_slide_txt_third_hover_trigle").attr("class","second_slide_txt_third_hover_trigle "); 

        $(".second_slide_txt_first_hover").attr("class","second_slide_txt_first_hover"); 
        $(".second_slide_txt_second_hover").attr("class","second_slide_txt_second_hover"); 
        $(".second_slide_txt_third_hover").attr("class","second_slide_txt_third_hover"); 

        if (fl) {
            m.geoObjects.add(p2);
            m.geoObjects.remove(p1)
        }
        l = true
    }
}

function sloganHover() {
    var e = document.querySelector(".second_slide_txt_first");
    e.onmouseover = function () {
        document.querySelector(".second_slide_txt_first_hover").style.cssText = "opacity: 1;"
    };
    e.onmouseout = function () {
        document.querySelector(".second_slide_txt_first_hover").style.cssText="-webkit-transition: all 300ms cubic-bezier(0.250, 0.100, 0.250, 1.000); -moz-transition: all 300ms cubic-bezier(0.250, 0.100, 0.250, 1.000); -o-transition: all 300ms cubic-bezier(0.250, 0.100, 0.250, 1.000); transition: all 300ms cubic-bezier(0.250, 0.100, 0.250, 1.000); -webkit-transition-timing-function: cubic-bezier(0.250, 0.100, 0.250, 1.000); -moz-transition-timing-function: cubic-bezier(0.250, 0.100, 0.250, 1.000); -o-transition-timing-function: cubic-bezier(0.250, 0.100, 0.250, 1.000); transition-timing-function: cubic-bezier(0.250, 0.100, 0.250, 1.000); ";
        setTimeout(function(){
            document.querySelector(".second_slide_txt_first_hover").style.cssText = "opacity: 0;"
        }, 305);
    };
    var t = document.querySelector(".second_slide_txt_second");
    t.onmouseover = function () {
        document.querySelector(".second_slide_txt_second_hover").style.cssText = "opacity: 1;"
    };
    t.onmouseout = function () {
        document.querySelector(".second_slide_txt_second_hover").style.cssText="-webkit-transition: all 300ms cubic-bezier(0.250, 0.100, 0.250, 1.000); -moz-transition: all 300ms cubic-bezier(0.250, 0.100, 0.250, 1.000); -o-transition: all 300ms cubic-bezier(0.250, 0.100, 0.250, 1.000); transition: all 300ms cubic-bezier(0.250, 0.100, 0.250, 1.000); -webkit-transition-timing-function: cubic-bezier(0.250, 0.100, 0.250, 1.000); -moz-transition-timing-function: cubic-bezier(0.250, 0.100, 0.250, 1.000); -o-transition-timing-function: cubic-bezier(0.250, 0.100, 0.250, 1.000); transition-timing-function: cubic-bezier(0.250, 0.100, 0.250, 1.000); ";
        setTimeout(function(){
            document.querySelector(".second_slide_txt_second_hover").style.cssText = "opacity: 0;"
        }, 305);
    };
    var n = document.querySelector(".second_slide_txt_third");
    n.onmouseover = function () {
        document.querySelector(".second_slide_txt_third_hover").style.cssText = "opacity: 1;"
    };
    n.onmouseout = function () {
        document.querySelector(".second_slide_txt_third_hover").style.cssText="-webkit-transition: all 300ms cubic-bezier(0.250, 0.100, 0.250, 1.000); -moz-transition: all 300ms cubic-bezier(0.250, 0.100, 0.250, 1.000); -o-transition: all 300ms cubic-bezier(0.250, 0.100, 0.250, 1.000); transition: all 300ms cubic-bezier(0.250, 0.100, 0.250, 1.000); -webkit-transition-timing-function: cubic-bezier(0.250, 0.100, 0.250, 1.000); -moz-transition-timing-function: cubic-bezier(0.250, 0.100, 0.250, 1.000); -o-transition-timing-function: cubic-bezier(0.250, 0.100, 0.250, 1.000); transition-timing-function: cubic-bezier(0.250, 0.100, 0.250, 1.000); ";
        setTimeout(function(){
            document.querySelector(".second_slide_txt_third_hover").style.cssText = "opacity: 0;"
        }, 305);
    };
    var r = document.querySelector("#map_arrow");
    r.onmouseover = function () {
        document.querySelector("#map_arrow").src = "img/map_arrow.png"
    };
    r.onmouseout = function () {
        document.querySelector("#map_arrow").src = "img/map_aim_hover.png"
    }
}
var l = true
