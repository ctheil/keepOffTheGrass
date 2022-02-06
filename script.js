// Initial scroll position
var scrollState = 0;

// Store navbar classes
var navClasses = document.getElementById("navBar").classList;
var navIcon = document.getElementById("navIcon").classList;
var navA = document.getElementById("navA").classList;
var bodyGrow = document.getElementById("bodyGrow").classList;

var currentNav = document.querySelectorAll(".siteNav__link").classList;

// returns current scroll position
var scrollTop = function () {
  return window.scrollY;
};

// Primary scroll event function
var scrollDetect = function (home, down, up) {
  // Current scroll position
  var currentScroll = scrollTop();
  if (scrollTop() === 0) {
    home();
  } else if (currentScroll > scrollState) {
    down();
  } else {
    up();
  }
  // Set previous scroll position
  scrollState = scrollTop();
};

function homeAction() {
  console.log("home");
}

function downAction() {
  navClasses.remove("open");
  navClasses.add("collapse");
  navIcon.remove("iconOff");
  navIcon.add("iconOn");
  bodyGrow.add("bodyGrow");
  bodyGrow.remove("bodyInit");
}

function upAction() {
  navClasses.remove("collapse");
  navClasses.add("open");
  navIcon.remove("iconOn");
  navIcon.add("iconOff");
  bodyGrow.add("bodyInit");
  bodyGrow.remove("bodyGrow");
}

window.addEventListener("scroll", function () {
  scrollDetect(homeAction, downAction, upAction);
});
