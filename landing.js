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
