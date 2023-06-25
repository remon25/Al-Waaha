// Define an array of background image URLs
var bgImages = ["/assets/background1.jpeg", "/assets/background2.jpg"];

// Set the interval for changing the background
var interval = 5000; // in milliseconds

// Define a function to change the background of the section
function changeBackground() {
  // Get a random index from the bgImages array
  var randomIndex = Math.floor(Math.random() * bgImages.length);

  // Set the background of the section to the random image URL
  var mySection = document.getElementById("home");
  mySection.style.backgroundImage = "url('" + bgImages[randomIndex] + "')";
}

// Call the changeBackground function at the specified interval
setInterval(changeBackground, interval);

let mysvg = document.querySelector(".mysvg");
let loading = document.querySelector(".loading");

function activeSvg() {
  mysvg.classList.add("active");
}
function loaded() {
  setTimeout(() => {
    loading.classList.add("loaded");
  },2000);
}

window.addEventListener("load", activeSvg);
window.addEventListener("load", loaded);


// scroll reveal

const revealElements = document.querySelectorAll("[data-reveal]");

const scrollReveal = function () {
  for (let i = 0; i < revealElements.length; i++) {
    const elementIsInScreen =
      revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.15;

    if (elementIsInScreen) {
      revealElements[i].classList.add("revealed");
    } else {
      revealElements[i].classList.remove("revealed");
    }
  }
};

window.addEventListener("scroll", scrollReveal);
scrollReveal();