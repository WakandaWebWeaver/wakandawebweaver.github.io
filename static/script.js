ScrollReveal().reveal(".section-title", {
  duration: 2000,
  origin: "left",
  distance: "50px",
});
ScrollReveal().reveal(".skill-tag", {
  duration: 1500,
  origin: "bottom",
  distance: "30px",
  interval: 100,
});
ScrollReveal().reveal(".projects-grid", {
  duration: 1500,
  origin: "bottom",
  distance: "30px",
  interval: 100,
});
ScrollReveal().reveal(".timeline-item", {
  duration: 1500,
  origin: "bottom",
  distance: "30px",
  interval: 100,
});
ScrollReveal().reveal(".footer-section", {
  duration: 1500,
  origin: "bottom",
  distance: "30px",
  interval: 100,
});

particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    opacity: {
      value: 0.5,
      random: false,
    },
    size: {
      value: 3,
      random: true,
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
    },
  },
});

let currentSection = 0;
const sections = document.getElementsByTagName("section");

window.addEventListener("wheel", (e) => {
  if (e.deltaY > 0 && currentSection < sections.length - 1) {
    currentSection++;
  } else if (e.deltaY < 0 && currentSection > 0) {
    currentSection--;
  }

  updateSections();
});

function updateSections() {
  for (let i = 0; i < sections.length; i++) {
    if (i === currentSection) {
      sections[i].classList.add("active");
    } else {
      sections[i].classList.remove("active");
    }
  }
}

updateSections();
