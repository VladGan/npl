$(document).ready(function () {
    function s() {
        i = document.querySelector(".first_slide_content_change_status").style.height = n + "px";
        if (n <= 0) {
            o();
            n = 100
        }
        n -= 1 / 3
    }

    function o() {
        if (t === 1) {
            document.querySelector(".first_slide_content_change_first").style.cssText = "display: block";
            document.querySelector(".first_slide_content_change_fifth").style.cssText = "display: none";
            t++
        } else if (t === 2) {
            document.querySelector(".first_slide_content_change_second").style.cssText = "display: block";
            document.querySelector(".first_slide_content_change_first").style.cssText = "display: none";
            t++
        } else if (t === 3) {
            document.querySelector(".first_slide_content_change_fourth").style.cssText = "display: block";
            document.querySelector(".first_slide_content_change_second").style.cssText = "display: none";
            t++
        } else if (t === 4) {
            document.querySelector(".first_slide_content_change_fifth").style.cssText = "display: block";
            document.querySelector(".first_slide_content_change_fourth").style.cssText = "display: none";
            t = 1
        }
        n = 0
    }
    $(".info-block__plus-info").css("display", "none");
    $("#1PlusInfo").css("display", "block");
    $(".info-block__plus:nth-child(1)").css("margin-bottom", "280px");
    $(".info-block__plus").click(function (e) {
        var t = e.target.id;
        var n = t[0];
        var r = n + "PlusInfo";
        var i = new Image;

        i.onload = function () {
            $(".img-wrapper").css("height", this.height + "px!important");
            $(".info-block__pluses__img").attr("src", "img/" + t[0] + ".png");

            if (t[0] == "1")
                $(".info-block__pluses__img").css("left", "25%");

            if (t[0] == "2")
                $(".info-block__pluses__img").css("left", "22%")

            if (t[0] == "3")
                $(".info-block__pluses__img").css("left", "25%")
        };


        if ($("#" + r).css("display") == "block") {
            $("#" + r).fadeOut(100);
            setTimeout(function () {
                $(".info-block__plus").animate({
                    "margin-bottom": 20
                }, 200)
            }, 100)

            $("tbody").fadeOut(300);
            setTimeout(function () {
            	 i.src = "img/" + t[0] + ".png";
            }, 300);


        } else {
            
            $(".info-block__plus-info").css("display", "none");
            $(".info-block__plus").animate({
                "margin-bottom": 20
            }, 200);
            $($(".info-block__plus")[n - 1]).animate({
                "margin-bottom": 280
            }, 200);

            if ($("tbody").css("display") == "inline-block")
            {
            $("tbody").fadeOut(300);
            setTimeout(function () {

                $("#" + r).fadeIn(200);
                $("#" + r).css("display", "block")

                i.src = "img/" + t[0] + ".png";
                $("tbody").fadeIn(300);
                setTimeout(function () {
            		$("tbody").css("display","inline-block");
                }, 300);

            }, 300);
        	}
        	else
        	{
        		  i.src = "img/" + t[0] + ".png";
        	$("tbody").fadeIn(300);
            setTimeout(function () {
                $("#" + r).fadeIn(200);
                $("#" + r).css("display", "block")
            }, 300)
        	}
        }

    });
    var e = {
        el: {
            slider: $(".slider-block__photo"),
            allSlides: $(".slider-block__photo__img"),
            sliderNav: $(".slider-block__buttons__round"),
            allNavButtons: $(".slider-block__buttons__round")
        },
        current: 0,
        init: function () {
            this.el.sliderNav.on("click", function (t) {
                e.handleNavClick(t, this)
            })
        },
        handleNavClick: function (e, t) {
            e.preventDefault();
            var n = t.id;
            $(".slider-block__buttons__round").css("background-color", "transparent");
            $(".slider-block__buttons__round").css("border", "2px solid white");
            $("#" + n).css("background-color", "white");
            $("#" + n).css("border", "3px solid white");
            n = t.id[0];
            var r = -(n - 1) * 636;
            var i = 200 + 150 * Math.abs(this.current - n);
            this.current = n;
            r = r.toString() + "px";
            $(".slider-block__photo__img").animate({
                left: r
            }, i)
        }
    };
    e.init();
    var t = 2;
    var n = 100,
        r, i;
    r = setInterval(s, 10);
    sloganHover()
})