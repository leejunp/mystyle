var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }

        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };

/*      var checkBox = document.getElementById("myCheck");
      var text = document.getElementById("wrapper");
      if (checkBox.checked == true){
          text.style.display = "block";
          document.getElementById("wrapper").style.marginLeft = "300px";
      } else {
         document.getElementById("wrapper").style.marginLeft = "83px";
      }
  }*/

  function myFunction() {
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("wrapper");
    if (checkBox.checked == true){
        text.style.display = "block";
        text.classList.add('horizTranslate');
      }
    if (checkBox.checked == false){
       text.classList.add('horizTranslateb');
      }
    }







  $(function(){

      $('#butt').hide();

      setTimeout(function(){
          $('#butt').fadeIn(2200);
      },25000);

  });

  $(function(){

      $('#butt2').hide();

      setTimeout(function(){
          $('#butt2').fadeIn(2200);
      },10000);

  });

  $(function(){

      $('#butt3').hide();

      setTimeout(function(){
          $('#butt3').fadeIn(2200);
      },12000);

  });





  var click = 0;
  var beenClicked = false;
  var canClick = true;
  $("#gam").click(function() {
    if (window.canClick == true) {

      var colour = '#' + Math.floor(Math.random() * 16777215).toString(16);
      click++;
      timing();
      $(".start").text(click);
      $("#game").css({
        backgroundColor: colour
      });
    }
  });

  var sec = $(".timer").text() || 0;

  function timing() {
    if (beenClicked == false) {
      beenClicked = true;
      $(".timer").show();
      var timer = setInterval(function() {
        $(".timer").text(--sec);
        if (sec == 0) {
          $(".timer").fadeOut('fast');
          clearInterval(timer);
          window.canClick = false;
          if (click == 1) {
            $(".start").append(" Click");
          } else {
            $(".start").append(" Clicks");
          }
          $(".sub").show().text("or " + window.click * 6 + " a minute.");
          $("#reset").fadeIn(1000);
        }
      }, 1000);
    }
  }

  $("#reset").click(function(event) {
    event.stopPropagation();
    $("#reset").hide();
    $(".sub").hide();
    $(".start").text("Click Away");
    $(".timer").text("10");
    sec = $(".timer").text() || 0;
    click = 0;
    beenClicked = false;
    canClick = true;
  });


  $(function() {
  $(window).resize(function() {
    $("pre").css({

        marginTop: $("pre").height() / -2,
        marginLeft: $("pre").width() / -2

      });
  }).resize();

  $("body").click(function() {
    if (screenfull.enabled) {
      screenfull.toggle();
    }
  });
});
