// // Initial scroll position
// var scrollState = 0;

// // Store navbar classes
// var navClasses = document.getElementById("navBar").classList;
// var navIcon = document.getElementById("navIcon").classList;
// var navA = document.getElementById("navA").classList;
// var bodyGrow = document.getElementById("bodyGrow").classList;

// // returns current scroll position
// var scrollTop = function () {
//   return window.scrollY;
// };

// // Primary scroll event function
// var scrollDetect = function (home, down, up) {
//   // Current scroll position
//   var currentScroll = scrollTop();
//   if (scrollTop() === 0) {
//     home();
//   } else if (currentScroll > scrollState) {
//     down();
//   } else {
//     up();
//   }
//   // Set previous scroll position
//   scrollState = scrollTop();
// };

// function homeAction() {
//   console.log("home");
// }

// function downAction() {
//   navClasses.remove("open");
//   navClasses.add("collapse");
//   navIcon.remove("iconOff");
//   navIcon.add("iconOn");
//   bodyGrow.add("bodyGrow");
//   bodyGrow.remove("bodyInit");
// }

// function upAction() {
//   navClasses.remove("collapse");
//   navClasses.add("open");
//   navIcon.remove("iconOn");
//   navIcon.add("iconOff");
//   bodyGrow.add("bodyInit");
//   bodyGrow.remove("bodyGrow");
// }

// window.addEventListener("scroll", function () {
//   scrollDetect(homeAction, downAction, upAction);
// });

// var checkInput = "Input Check = Bad";

// function check() {
//   if (checkInput === "Input Check = Good") {
//     console.log("The check worked");
//   } else {
//     console.log("The Check Failed");
//   }
// }
// check();

// new nav js build

const openNav = document.querySelector(".nav__open");
const closeNav = document.querySelector(".nav__close");
const navBkg = document.querySelector(".nav__bkg");
const navNav = document.querySelector(".nav__nav");

openNav.addEventListener("click", function open() {
  navBkg.classList.add("aniNav");
  navNav.classList.remove("hideNav");
  navNav.classList.add("showNav");
  console.log("clicked");
});

closeNav.addEventListener("click", function close() {
  navBkg.classList.remove("aniNav");
  navNav.classList.remove("showNav");
  navNav.classList.add("hideNav");
});

//currentNav
const setCurrentNav = document.querySelectorAll(".siteNav__link").classList;
const navLink = document.querySelectorAll(".nav__link");
const navItem = document.querySelectorAll(".nav__list--item");
console.log(navLink.url);

// const checkPage = () => {
//   if(pageLink.classList.includes('currentNav') && window.location.href.contains('index'))
// }
// const currentUrl = window.location.href;
// console.log(currentUrl);
const bodyCheck = document.body.id;
const linkCheck = document.getElementById("indexLink").textContent;
console.log(linkCheck, typeof linkCheck);
console.log(bodyCheck);
// const currentPage = () => {
//   if (bodyCheck === "index") {
//   }
// };
// BUG this is telling me theyre not equal... linkCheck returns 'home', but when I use that string to test the boolean, it returns false
if (linkCheck == "home") {
  console.log("Yes");
} else {
  console.log("No");
}
// const pageCheck = () => {
//   for (let i = 0; i < navLink.length - 1; i++) {
//     if (navLink[i].url == currentUrl) {
//       navItem[i].classList.add("currentNav");
//       console.log(currentUrl);
//       console.log("test");
//       console.log(navLink[i].href);
//     } else {
//       continue;
//     }
//   }
// };
// pageCheck();
