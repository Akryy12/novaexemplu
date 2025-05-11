(function ($)
{
  "use strict";

  // Preloader
  $("#page").css("display", "none");
  $(window).on("load", function () 
  {
    $("#loader").addClass("loaded");
    $("#page").css("display", "");
  });

  // Navbar
  $(window).on("scroll", function() 
  {
    if ($(window).scrollTop() > 100)
      $(".desktop-navbar").addClass("navbar-scroll");
    else
      $(".desktop-navbar").removeClass("navbar-scroll");
  });

  $(".js-clone-nav").each(function() 
  {
    var $This = $(this);
    $This.clone().attr("class", "mobile-navbar-wrap").appendTo(".mobile-navbar-body");
  });

  $("body").on("click", ".js-menu-toggle", function(Event) 
  {
    var $This = $(this);
    Event.preventDefault();

    if ($("body").hasClass("offcanvas-menu")) 
    {
      $("body").removeClass("offcanvas-menu");
      $This.removeClass("active");
    } 
    else 
    {
      $("body").addClass("offcanvas-menu");
      $This.addClass("active");
    }

    if ($("body").hasClass("offcanvas-menu"))
      $(".mobile-mask").addClass("active");
    else
      $(".mobile-mask").removeClass("active");
  });

  $(document).mouseup(function(Event) 
  {
    var Container = $(".mobile-navbar");
    if (!Container.is(Event.target) && Container.has(Event.target).length === 0) 
    {
      if ($("body").hasClass("offcanvas-menu")) 
      {
        $("body").removeClass("offcanvas-menu");
        $(".mobile-mask").removeClass("active");
      }
    }
  });

  // Copy IP buttons
  $("body").on("click", "#copyip-fivem", function() 
  {
    navigator.clipboard.writeText("ftest").then((Error) => 
    {
      if (Error)
        console.error(Error);
      else 
      {
        Swal.fire(
        {
          icon: "success",
          title: "IP-ul serverului copiat",
          html: "Adresa IP a serverului de FiveM a fost copiatÄƒ cu success.",
        });
      }
    });
  });

  $("body").on("click", "#copyip-cs2", function() 
  {
    navigator.clipboard.writeText("ctest").then((Error) => 
    {
      if (Error)
        console.error(Error);
      else 
      {
        Swal.fire(
        {
          icon: "success",
          title: "IP-ul serverului copiat",
          html: "Adresa IP a serverului de CS2 a fost copiatÄƒ cu success.",
        });
      }
    });
  });

  $("body").on("click", "#copyip-minecraft", function() 
  {
    navigator.clipboard.writeText("mtest").then((Error) => 
    {
      if (Error)
        console.error(Error);
      else 
      {
        Swal.fire(
        {
          icon: "success",
          title: "IP-ul serverului copiat",
          html: "Adresa IP a serverului de CS2 a fost copiatÄƒ cu success.",
        });
      }
    });
  });

  $("body").on("click", "#copyip-metin2", function() 
  {
    navigator.clipboard.writeText("mtest").then((Error) => 
    {
      if (Error)
        console.error(Error);
      else 
      {
        Swal.fire(
        {
          icon: "success",
          title: "IP-ul serverului copiat",
          html: "Adresa IP a serverului de CS2 a fost copiatÄƒ cu success.",
        });
      }
    });
  });

  // Game servers
  new Swiper(".game-servers-swiper", 
  {
    loop: true,
    autoplay: true,
    autoplay: 
    {
      delay: 2500,
    },
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: -50,
    slideActiveClass: "active",
    navigation: 
    {
      nextEl: ".game-servers-swiper-button-next",
      prevEl: ".game-servers-swiper-button-prev",
    },
    breakpoints: 
    {
      992: 
      {
        slidesPerView: 2,
      },
    },
  });
})(window.jQuery);