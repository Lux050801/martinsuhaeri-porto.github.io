/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true
});

sr.reveal(`.home_animate_1`);
sr.reveal(`.home_animate_photo`,{delay:1200});
sr.reveal(`.about_me`);
sr.reveal(`.tools_animate`,{delay:950});
sr.reveal(`.project_1`);
sr.reveal(`.contact_text`);
sr.reveal(`.contact_icon`,{delay:950});
