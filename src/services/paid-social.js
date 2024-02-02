// declare onMobile variable
let onMobile;
let onTablet;
// resizeEvent function
const resizeEvent = function () {
  // if viewportWidth width <= 767
  if (window.innerWidth <= 479) {
    // set onMobile as true
    onMobile = true;
    onTablet = false;
  } else if (window.innerWidth >= 767) {
    onMobile = false;
    onTablet = true;
  } else {
    onMobile = false;
    onTablet = false;
  }
};

resizeEvent(); // run resizeEvent function onload
//$(window).on("orientationchange resize", initSwiper);
$(window).on("orientationchange resize", resizeEvent);

//–––––––––––––––––––––––––Liquid Navigation–––––––––––––––––––––––––––––––––––––

// Desktop Animation
let duration = 400;
let menuShape = $(".services_nav_shape");
let menuShapeBG = $(".services_nav_shape_bg");
let menuLink = $(".services_nav_link");
let currentLink = $(".services_nav_link.is-active");

$(window).on("load", function () {
  $(".services_nav_link.w--current").addClass("is-active");
});

$(window).on("load resize", function () {
  currentLink = $(".services_nav_link.is-active");
  menuShape.css("transition", `all ${duration - duration}ms`);
  if (onTablet == true) {
    moveShape(currentLink);
    if (menuShape.css("opacity") < 1) {
      $(".services_nav_link_bg").css("opacity", "0");
      menuShape.css("opacity", "1");
      menuLink.css("pointer-events", "auto");
    }
  }
});

$(".services_nav_link").on("mouseover", function () {
  if (onTablet) {
    $(this).removeClass("is-not-active");
    $(this).addClass("is-active");
    $(this).siblings($(this)).addClass("is-not-active");
    $(this).siblings(".services_nav_link").removeClass("is-active");
  }
});

$(".services_nav_link").on("mouseleave", function () {
  if (onTablet) {
    $(this).removeClass("is-active");
    $(this).siblings(".services_nav_link.w--current").addClass("is-active");
    $(this)
      .siblings(".services_nav_link.w--current")
      .removeClass("is-not-active");
  }
});

// On click
menuLink.on("mouseover", function () {
  if (onTablet) {
    // menuShape move
    menuShape.css("transition", `all ${duration}ms`);
    moveShape($(this));
  }
});
menuLink.on("mouseleave", function () {
  if (onTablet) {
    // menuShape move
    moveShape(currentLink);
  }
});

// Snap
function moveShape(target) {
  let linkWidth = target.innerWidth();
  let linkOffset = target.offset().left;
  let menuOffset = $(".services_nav_desktop").offset().left;
  let leftPosition = linkOffset - menuOffset;
  menuShape.css("left", leftPosition);
  menuShape.css("width", linkWidth);
}

//–––––––––––––––––––––––––Mobile Dropdown–––––––––––––––––––––––––––––––––––––

// Change Dropdown Direction
let dropdownTrigger = $(".dd_direction_trigger").css("opacity");
const dropdownMenu = $(".service_nav_dd");
const dropdownWrap = $(".service_nav_dd_wrap");
const dropdownDivider = $(".service_nav_dd_divider");
const dropdownChange = function () {
  dropdownTrigger = $(".dd_direction_trigger").css("opacity");

  if (dropdownTrigger < 1) {
    dropdownMenu.css("flex-direction", "column-reverse");
    dropdownWrap.css("align-items", "flex-end");
    dropdownWrap.css("margin-top", "0px");
    dropdownWrap.css("margin-bottom", "-2px");
    dropdownDivider.css("order", "1");
  } else {
    dropdownMenu.css("flex-direction", "column");
    dropdownWrap.css("align-items", "flex-start");
    dropdownWrap.css("margin-top", "-2px");
    dropdownWrap.css("margin-bottom", "0px");
    dropdownDivider.css("order", "-1");
  }
};

dropdownChange(); // Run change on load

$(window).on("scroll", dropdownChange); // Run change while scrolling

//–––––––––––––––––––––––––Counter–––––––––––––––––––––––––––––––––––––

setTimeout(function () {
  $("[counter]").counterUp({
    delay: 10,
    time: 1000,
  });
  $("[counter]").addClass("animated fadeIn");
}, 100);
