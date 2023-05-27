$(function () {

  $(document).bind("mouseup touchend", function (e) {
    closeElement(e, '.header__cart-wrap', '.header__cart');
    closeElement(e, '.header__burger-menu', '.header__burg-btn-box');
    closeElement(e, '.header-search-box', '.header__search-button');
  });




  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  // We listen to the resize event
  window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });




  function closeElement(e, element, toggler) {
    var el = $(element);
    var elBtn = $(toggler);
    if (!el.is(e.target) && el.has(e.target).length === 0 && !elBtn.is(e.target) && elBtn.has(e.target).length === 0) {
      el.removeClass('active');
    }
  }



  $('.header__btn-dark').on("click", function (event) {
    $('.header__btn-light').addClass('active');
    $('.header__btn-dark').removeClass('active');
    $('.header__btn-svg-dark').addClass('active');
    $('.header__btn-svg-light').removeClass('active');
    $('body').addClass("active-color");
  });


  $('.header__btn-light').on("click", function (event) {
    $('.header__btn-light').addClass('active');
    $('.header__btn-dark').removeClass('active');
    $('.header__btn-svg-dark').removeClass('active');
    $('.header__btn-svg-light').addClass('active');
    $('body').removeClass("active-color");
  });



  $('.apply').magnificPopup({
    removalDelay: 550,
    items: {
      src: '#pop-up-apply'
    }
  });




  jQuery(document).ready(function () {
    jQuery(window).scroll(function () {
      if (jQuery(this).scrollTop() > 500) {
        jQuery('.btn-top').css({
          'opacity': '1',
          'pointer-events': 'auto',
        });
      } else {
        jQuery('.btn-top').css({
          'opacity': '0',
          'pointer-events': 'none',
        });
      }
    });

    jQuery('.btn-top').click(function () {
      jQuery('body,html').animate({
        scrollTop: 0
      }, 1000);
      return false;
    });
  });




  $('.btn-top').on("click", function (event) {
    $('.dark').removeClass('active');
    $('body').removeClass('noscroll');
  });



  $('body').on('click', '.mpf-bg', function () {
    $('.dark').removeClass('active');
  });



  $('.header__search-button').on("click", function (event) {
    $('.header-search-box').toggleClass('active');
  });



  $(document).ready(function () {
    $('.header__catalog-menu').on("mouseenter", function () {

      $('.menu-nav').addClass('active');

      $('.dark').addClass('active');

      $('body').addClass('noscroll');

      $('.header__catalog').addClass('active');

    });
    $('.header__catalog-menu').on("mouseleave", function () {

      $('.menu-nav').removeClass('active');

      $('.dark').removeClass('active');

      $('body').removeClass('noscroll');

      $('.header__catalog').removeClass('active');

    });
  });




  $('.header__burg-btn-box').click(function (event) {
    $('.header__burger-menu').toggleClass('active');
    $('.dark-7').toggleClass('active');
    $('body').toggleClass('noscroll');
  });



  $('.apply').click(function (event) {
    $('body').addClass('noscroll');
  });



  $(document).on("click", '.mfp-close', function (event) {

    $('.dark, .dark-7').removeClass('active');

    $('body').removeClass('noscroll');

  });


  $(document).on("click", '.mfp-ready', function (event) {

    $('.dark, .dark-7').removeClass('active');

    $('body').removeClass('noscroll');

  });


  $('.header__burg-btn-close').click(function (event) {
    $('.header__burger-menu').toggleClass('active');
    $('.dark-7').removeClass('active');
    $('body').removeClass('noscroll');
  });

  $('.dark, .dark-7').click(function (event) {
    $(this).removeClass('active');
    $('body').removeClass('noscroll');
    $('.header__catalog-menu').css({
      'pointer-events': 'auto',
    });
  });




  $('.header__cart-wrap-close').on("click", function (event) {
    $('.header__cart-wrap').removeClass('active');
    $('body').removeClass('noscroll');
    $('.dark').removeClass('active');
  });



  $('.footer__title-list').click(function (event) {
    $(this).next('.footer__items').slideToggle(300);
    $(this).children('.arrow__items-svg-bg').toggleClass('active');
  });

  $('.show__inner-btn').on("click", function (event) {
    $(this).parent().find('.tabs__list-show').toggleClass('active');
  });


  $('.find__all-blog>.form-group').on("click", function (event) {
    $('.find__all-title-result-blog, .find__all-result-blog').toggleClass('active');
  });




  $('.find__all').on("click", function (event) {
    $('.find__all').css({
      'display': 'none',
    });
    $('.category__product-list-title').css({
      'display': 'block',
    });
  });
  $('.category__product-list-title').on("click", function (event) {
    $('.category__product-list-title').css({
      'display': 'none',
    });
    $('.find__all').css({
      'display': 'block',
    });
  });





  $(document).ready(function () {
    $('.reviews__video').magnificPopup({
      // disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      iframe: {
        patterns: {
          youtube: {
            index: 'youtube.com',
            id: 'v=',
            src: 'https://www.youtube.com/embed/%id%'
          },
        },
        srcAction: 'iframe_src',
      },
      fixedContentPos: true,
    });
  });


  /*
   
    
    let elBlock = document.querySelector('.tabs__list-show');
    let elToggle = document.querySelector('.show__inner-btn');

    elToggle.addEventListener("click", () => {
      if (elBlock.style.height === "160px") {
        elBlock.style.height = `${ elBlock.scrollHeight }px`
      } else {
        elBlock.style.height = `${ elBlock.scrollHeight }px`;
        window.getComputedStyle(elBlock, null).getPropertyValue("height");
        elBlock.style.height = "160px";
      }
    });

    elBlock.addEventListener("transitionend", () => {
      if (elBlock.style.height == "160px") {
        elBlock.style.height = "160px"
      }
    });

    
    */


});