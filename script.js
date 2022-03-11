"use strict";

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
      // console.log("beforeBreak");
      break;
    } else {
      // console.log(false);
    }
  }
};
currentNavFunc(currentNavArr, navLink);

// console.timeEnd("script");

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
    // console.log(true);

    document.getElementById("intro").style.display = "none";
    return true;
  } else {
    return false;
    // console.log(false);
  }
};
const ifIsAtTop = () => {
  if (isAtTop() === true) {
    // console.log(true, "dont run anima");
    return null;
  } else {
    runLanding();
    // console.log(false, "run anima");
  }
};
window.onload = ifIsAtTop();

//youtube MEDIA players (scroller)

// const vidOne = document.querySelector("vidOne");
// const vidTwo = document.querySelector("vidTwo");

// const switchVideoLeft = () => {
//   vidOne.classList.add("youTube__slideOut--left");
//   vidTwo.classList.remove("youTube__slideOut");
//   vidTwo.classList.add("youTube__slideIn--left");
// };
