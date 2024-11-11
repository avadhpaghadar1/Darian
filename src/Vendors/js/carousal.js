// import WOW from "wowjs";
// import $ from "jquery";
// import "owl.carousel/dist/assets/owl.carousel.min.css";
// import "owl.carousel";
// window.$ = $;
// window.jQuery = $;

import React, { useEffect } from 'react';
import WOW from 'wowjs';
import $ from 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel';
import 'animate.css/animate.min.css';  // WOW.js animation CSS
// import counterUp from 'counterup2';
/* global jQuery, $ */

(function ($) {
  //   "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner(0);

  // Initiate the wowjs
  const wow = new WOW.WOW();
  wow.init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 45) {
      $(".navbar").addClass("sticky-top shadow-sm");
    } else {
      $(".navbar").removeClass("sticky-top shadow-sm");
    }
  });

  // testimonial carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    center: false,
    dots: true,
    loop: true,
    margin: 25,
    nav: true,
    navText: [
      '<i class="fa fa-angle-right"></i>',
      '<i class="fa fa-angle-left"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 2,
      },
    },
  });

  // Facts counter
  // $('[data-toggle="counter-up"]').counterUp({
  //   delay: 5,
  //   time: 2000,
  // });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });
})(jQuery);
