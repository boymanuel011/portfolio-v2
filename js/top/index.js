// Animate text on hover
function animateOnHover() {
  const letterElements = document.querySelectorAll(".portfolio__mv-title-animate");

  if (letterElements.length > 0) {
    letterElements.forEach((el) => {
      el.addEventListener("animationend", () => {
        el.classList.remove("on-hover");
      });

      el.addEventListener("mouseover", () => {
        el.classList.add("on-hover");
      });
    });
  }
}

// Initialize Splide sliders
function initSplideSliders() {
  const slider1 = document.querySelector(".js-works-slider1");
  const slider2 = document.querySelector(".js-works-slider2");

  if (slider1) {
    Splide.defaults = {
      type: "loop",
      focus: "center",
      autoWidth: true,
      pagination: false,
      arrows: false,
      perPage: 5,
      gap: 10,
      autoScroll: {
        speed: 0.5,
        pauseOnHover: true,
      },
    };
    new Splide(slider1, {}).mount(window.splide.Extensions);
  }

  if (slider2) {
    Splide.defaults = {
      type: "loop",
      focus: "center",
      autoWidth: true,
      pagination: false,
      arrows: false,
      perPage: 5,
      gap: 10,
      direction: "rtl",
      autoScroll: {
        speed: 0.5,
        pauseOnHover: true,
      },
    };
    new Splide(slider2, {}).mount(window.splide.Extensions);
  }
}

// Activate video play on load & loop when ended
function activateVideo() {
  const video = document.querySelector(".js-video");

  if (video instanceof HTMLVideoElement) {
    video.play().catch((error) => {
      console.error("Error playing video:", error);
    });

    video.addEventListener("ended", () => {
      video.play().catch((error) => {
        console.error("Error playing video:", error);
      });
    });
  } else {
    console.warn('No video element found with the class "js-video".');
  }
}

// Placeholder function
function testFunction() {
  console.log("top");
}

// Initialize all functions on DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  testFunction();
  initSplideSliders();
  activateVideo();
  animateOnHover();
});
