let welcomeMsg = `Hello from JS`;
console.log(welcomeMsg);

// loading screen start
function loading() {
  const loader = document.querySelector(".loading");
  loader.className += " hidden";
}

window.addEventListener("load", loading);

// loading screen end

// scroll up start
let btn = document.getElementById("btn");

btn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

function scroll() {
  if (scrollY >= 250) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

window.addEventListener("scroll", scroll);

// scroll up end

// skills start
let sectionTop = document.querySelector(".skills");
let sectionBot = document.querySelector("footer");
let spanProg = document.querySelectorAll(
  ".skills .skills-stat .prog-holder .prog span"
);
console.log(scrollY);

            
let widths =  [ "90%","80%","50%","86%","60%" ," 100%"," 70%"]



function skills() {
  if (window.scrollY >= sectionTop.offsetTop - 400) {
    spanProg.forEach((span,index) => {
    span.style.width = widths[index];
    });
  } else {
    spanProg.forEach((span) => {
      span.style.width = 0;
    });
  }
}

window.addEventListener("scroll", ()=>skills());
// skills end

var vids = document.getElementsByTagName("video");
vids.play();