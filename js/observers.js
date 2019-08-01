const header = document.querySelector("header");
const sectionOne = document.querySelector(".home-intro");

const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px"
};

// Change header on scroll

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

// Set up appear on scroll

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px"
};

const appearOnScroll = new IntersectionObserver
(function(
  entries,
  appearOnScroll
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target);
      }
    })
  }, 
  appearOptions);

// Fade in on scroll

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });

// Slide in on scroll

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});
