/*global $ , alert */
$(document).ready(function () {

   'use strict';

     $("html").niceScroll({horizrailenabled:false, cursorcolor:"#e83168"});
   //for dropdown
   $(".moveHome,.Home").mouseover(function() {
      $('.Home').show();

   });

   $(".moveHome,.Home").mouseout(function() {
      $('.Home').hide();
   });

   $(".moveBlog,.Blog").mouseover(function() {
      $('.Blog').show();

   });

   $(".moveBlog,.Blog").mouseout(function() {
      $('.Blog').hide();

   });

   //Adjust slider height
    var winH = $(window).height(),
        upper= $('.Upper').innerHeight(),
        nav = $('.navbar').innerHeight(),
        slider =$('.slider'),
        feats =$('.feats').innerHeight(),
        latestpost = $('.Latest-post').innerHeight(),
        companyoverview = $('.company-overview').innerHeight();

       $('slider, .carousel-item').height(winH -(upper+nav));

       $('.Company, .carousel-item').height(winH -(slider+feats+latestpost+companyoverview));

    // to chow cheveron icons in slider
    $(".slider").hover(function() {
       $('.slider .prev , .slider .next').fadeToggle();

    });

    $(".Company").hover(function() {
       $('.Company .prev , .Company .next').fadeToggle();

    });

    //change images in featured work according to buttons

    $('.Featured-Work button').on('click' , function() {
      $(this).addClass('active').siblings().removeClass('active');

      if ($(this).data('class')=== 'all') {
         /*$('.images .col-md-3 .inners-img').show();*/
         $('.images .col-md-3 .inners-img').parentsUntil(".images").css('opacity' , 1);
      } else {
         /*$('.images .col-md-3 .inners-img.hide();
        $($(this).data('class')).parentsUntil(".images").fadeToggle();*/
        $('.images .col-md-3').css('opacity' , .09);
        $($(this).data('class')).parentsUntil(".images").css('opacity' , 1);//opacity
      }

    });


    $(window).on('load',function(){

        $({ Counter: 1000}).animate({
        Counter: $('.randemOne').text()
        }, {
        duration: 1000,
        easing: 'swing',
        step: function() {
          $('.randemOne').text(Math.ceil(this.Counter).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        }

        });

        $({ Counter: 1000000 }).animate({
        Counter: $('.randemTwo').text()
        }, {
        duration: 1000,
        easing: 'swing',
        step: function() {
          $('.randemTwo').text(Math.ceil(this.Counter).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        }

        });

        $({ Counter: 100000 }).animate({
        Counter: $('.randemThree').text()
        }, {
        duration: 1000,
        easing: 'swing',
        step: function() {
          $('.randemThree').text(Math.ceil(this.Counter).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        }

        });

        $({ Counter: 1000000 }).animate({
        Counter: $('.randemFour').text()

        }, {
        duration: 1000,
        easing: 'swing',
        step: function() {
          $('.randemFour').text(Math.floor(this.Counter).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        }

        });

    });

  });
