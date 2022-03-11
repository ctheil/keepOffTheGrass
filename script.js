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

//youtube MEDIA players (scroller)

// const vidOne = document.querySelector("vidOne");
// const vidTwo = document.querySelector("vidTwo");

// const switchVideoLeft = () => {
//   vidOne.classList.add("youTube__slideOut--left");
//   vidTwo.classList.remove("youTube__slideOut");
//   vidTwo.classList.add("youTube__slideIn--left");
// };

// youtube pseudo switcher (from thumbnail to youtube embed)

const thumbnail = document.getElementById("pseudo");
const vid = document.getElementById("youTube");
const clickMe = document.getElementById("clickMe");

const thumbClickHandler = () => {
  console.log("clicked");
  thumbnail.classList.add("hidden");
  vid.classList.remove("hidden");
};

const clickEvent = clickMe.addEventListener("click", thumbClickHandler);
