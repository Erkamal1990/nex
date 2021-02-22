        $(".answer").hide();
        $(".coupon_question").click(function () {
          if ($(this).is(":checked")) {
            $(".answer").show(300);
            $(".answer1").hide(200);
            $(".answer2").hide(200);
            $(".answer3").hide(200);
            $(".answer4").hide(200);
          } else {
            $(".answer").hide(200);
          }
        });

        $(".answer1").hide();
        $(".coupon_question1").click(function () {
          if ($(this).is(":checked")) {
            $(".answer1").show(300);
            $(".answer").hide(200);
            $(".answer2").hide(200);
            $(".answer3").hide(200);
            $(".answer4").hide(200);
          } else {
            $(".answer1").hide(200);
          }
        });
        $(".answer2").hide();
        $(".coupon_question2").click(function () {
          if ($(this).is(":checked")) {
            $(".answer2").show(300);
            $(".answer").hide(200);
            $(".answer1").hide(200);
            $(".answer3").hide(200);
            $(".answer4").hide(200);
          } else {
            $(".answer2").hide(200);
          }
        });
        $(".answer3").hide();
        $(".coupon_question3").click(function () {
          if ($(this).is(":checked")) {
            $(".answer3").show(300);
            $(".answer").hide(200);
            $(".answer1").hide(200);
            $(".answer2").hide(200);
            $(".answer4").hide(200);
          } else {
            $(".answer3").hide(200);
          }
        });
 
        $(".answer4").hide();
        $(".coupon_question4").click(function () {
          if ($(this).is(":checked")) {
            $(".answer4").show(300);
            $(".answer3").hide(200);
            $(".answer1").hide(200);
            $(".answer2").hide(200);
            $(".answer").hide(200);
          } else {
            $(".answer4").hide(200);
          }
        });

        $(function () {
          $('#datetimepicker1').datetimepicker();
          $('#datetimepicker12').datetimepicker();
        });
        $(document).ready(function () {
    
          var current_fs, next_fs, previous_fs; //fieldsets
          var opacity;
          var current = 1;
          var steps = $("fieldset").length;
    
          setProgressBar(current);
    
          $(".next").click(function () {
    
            current_fs = $(this).parent();
            next_fs = $(this).parent().next();
    
            //Add Class Active
            $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
    
            //show the next fieldset
            next_fs.show();
            //hide the current fieldset with style
            current_fs.animate({ opacity: 0 }, {
              step: function (now) {
                // for making fielset appear animation
                opacity = 1 - now;
    
                current_fs.css({
                  'display': 'none',
                  'position': 'relative'
                });
                next_fs.css({ 'opacity': opacity });
              },
              duration: 500
            });
            setProgressBar(++current);
          });
    
          $(".previous").click(function () {
    
            current_fs = $(this).parent();
            previous_fs = $(this).parent().prev();
    
            //Remove class active
            $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
    
            //show the previous fieldset
            previous_fs.show();
    
            //hide the current fieldset with style
            current_fs.animate({ opacity: 0 }, {
              step: function (now) {
                // for making fielset appear animation
                opacity = 1 - now;
    
                current_fs.css({
                  'display': 'none',
                  'position': 'relative'
                });
                previous_fs.css({ 'opacity': opacity });
              },
              duration: 500
            });
            setProgressBar(--current);
          });
    
          function setProgressBar(curStep) {
            var percent = parseFloat(100 / steps) * curStep;
            percent = percent.toFixed();
            $(".progress-bar")
              .css("width", percent + "%")
          }
    
          $(".submit").click(function () {
            return false;
          })
    
        });
        $('.check-message').on('change', function () {
          $('.check-message').not(this).prop('checked', false);
        });
    
        $('.check-social').on('change', function () {
          $('.check-social').not(this).prop('checked', false);
        });