// //store navBar classes
// var navClasses = document.getElementById("navBar").classList;

// function downAction() {
//   navClasses.remove("open");
//   navClasses.add("collapse");
// }
// function upAction() {
//   navClasses.remove("collapse");
//   navClasses.add("open");
// }

// //returns current scroll position
// var scrollTop = function () {
//   return window.scrollY;
// };

// //initial scroll position
// var scrollState = 0;

// //Primary scroll event function

// var scrollDetect = function (home, down, up) {
//   //current pos
//   var currentScroll = scrollTop();
//   if (scrollTop() === 0) {
//     home();
//   } else if (currentScroll > scrollState) {
//     down();
//   } else {
//     up();
//   }
//   //set previous scroll position
//   scrollState = scrollTop();
// };

// window.addEventListener("scroll", function () {
//   scrollDetect(homeAction, downAction, upAction);
// });

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

//Need to use document.querySelectorAll and write a loop to target each icon. Also need to extend the body when nav collapses
