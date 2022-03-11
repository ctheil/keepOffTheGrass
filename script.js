"use strict";
console.time("script");
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
// const setCurrentNav = document.querySelectorAll(".siteNav__link").classList;
// const navItem = document.querySelectorAll(".nav__list--item");
// console.log(navLink.url);
// console.log(navItem);

// console.log("body id = index", bodyId === "index");
// console.log(navLink);
// console.log("navLink = home", navLink[0].innerHTML === "home");

// const navScan = (nav, id) => {
//   for (let i = 0; i < nav.length; i++) {
//     if nav[i]
//   }
// }
// if (navItem.classList.contains("currentNav") && bodyID === "index") {
//   console.log(true);
// } else {
//   console.log(false);
// }
// console.log(document.body.id);
// if (navItem.classList.contains("currentNav") && bodyID === "index") {
//   continue;
// } else if (){
//   console.log(false);
// }

// console.log(idTest);

// if (idCheck) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// const checkPage = () => {
//   if(pageLink.classList.includes('currentNav') && window.location.href.contains('index'))
// }
// const currentUrl = window.location.href;
// console.log(currentUrl);
// const bodyCheck = document.body.id;
// const linkCheck = document.getElementById("indexLink").textContent;
// console.log(linkCheck, typeof linkCheck);
// console.log(bodyCheck);
// const currentPage = () => {
//   if (bodyCheck === "index") {
//   }
// };
// BUG this is telling me they're not equal... linkCheck returns 'home', but when I use that string to test the boolean, it returns false
// if (linkCheck == "home") {
//   console.log("Yes");
// } else {
//   console.log("No");
// }
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

// console.log(
//   arrOne[i].bodyIdProp,
//   arrTwo[i].innerHTML,
//   arrOne[i].linkTextProp,
//   bodyId
// );
// console.log(
//   "checkTrue",
//   arrOne[i].bodyIdProp === bodyId,
//   arrTwo[i].innerHTML == arrOne[i].linkTextProp
// );
// console.log(`${arrOne[i].bodyIdProp}Link`);
// console.log("if was true");
// // navItem.classList.add("current nav");
// console.log("bodyID =", arrOne[i].bodyIdProp);
// console.log(
//   document.getElementById(`${arrOne[i].bodyIdProp}Link`).classList
// );
// console.log(
//   "looking for this?",
//   document.getElementById(`${arrOne[i].bodyIdProp}Link`).classList
// );

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

const navLink = document.querySelectorAll(".nav__link");

const navItem = document.querySelectorAll(".nav__list--item");
const idCheck = document.getElementById("index");
const bodyId = document.body.id;

const currentNavArr = [
  {
    linkTextProp: "home",
    bodyIdProp: "index",
  },
  {
    linkTextProp: "live",
    bodyIdProp: "live",
  },
  {
    linkTextProp: "media",
    bodyIdProp: "media",
  },
  {
    linkTextProp: "lyrics",
    bodyIdProp: "lyrics",
  },
  {
    linkTextProp: "contact",
    bodyIdProp: "contact",
  },
];

const currentNavFunc = (arrOne, arrTwo) => {
  for (let i = 0; i < currentNavArr.length; i++) {
    if (
      arrOne[i].bodyIdProp === bodyId &&
      arrTwo[i].innerHTML === arrOne[i].linkTextProp
    ) {
      document
        .getElementById(`${arrOne[i].bodyIdProp}Link`)
        .classList.add("currentNav");
      console.log("beforeBreak");
      break;
    } else {
      console.log(false);
    }
  }
};
currentNavFunc(currentNavArr, navLink);

console.timeEnd("script");

//landing anima
// console.log(window.scroll() === true);
// let test = window.events.scroll() === true;
const runLanding = () => {
  const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
  tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
  tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
  tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
  tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 });
  tl.fromTo(
    ".big-text__icon",
    { opacity: 0 },
    { opacity: 1, duration: 1 },
    "-=1"
  );
  tl.fromTo("#logo", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
};
const intro = document.querySelector(".intro");
const isAtTop = () => {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    console.log(true);
    // intro.classList.add("hidden");
    // intro.style("display: none");
    document.getElementById("intro").style.display = "none";
    return true;
  } else {
    return false;
    console.log(false);
  }
};
const ifIsAtTop = () => {
  if (isAtTop() === true) {
    console.log(true, "dont run anima");
    return null;
  } else {
    runLanding();
    console.log(false, "run anima");
  }
};
window.onload = ifIsAtTop();

// const scrollTest = () => {
//   if (
//     document.body.scrollTop <= 10 ||
//     document.documentElement.scrollTop <= 10
//   )
// };
// console.log(
//   "test-scroll",
//   document.body.scrollTop <= 10 || document.documentElement.scrollTop <= 10
// );
// let testScr = document.body.scrollTop < 10 ? true : false;
//scrollAnimation
// const scrollToBody = document.getElementById("scrollToBody");
// const toTop = () => window.scrollTo({ top: "10rem", behavior: "smooth" });

// // const scrollHandler = document.addEventListener('scroll', )
// const isAtTop = () => {
// if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10)

// };

// if (isAtTop() === true) {
//   console.log("if true", true);
// } else {
//   console.log("if false", false);
// }
