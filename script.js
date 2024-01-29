function toggleContent() {
  var content = document.getElementById("content");
  content.style.display = content.style.display === "block" ? "none" : "block";
}

function closeContent() {
  var content = document.getElementById("content");
  content.style.display = "none";
}
// // Wait for the window to load
window.addEventListener("load", function () {
  // After 3 seconds, remove the loader
  setTimeout(function () {
    document.getElementById("loader").style.display = "none";
  }, 3000);
});
// by clicking icons content will change
// function changeContent(newHeading, newContent) {
//   document.getElementById("heading").innerText = newHeading;
//   document.getElementById("content2").innerText = newContent;
// }
// footer
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

// Show the scroll-to-top button when scrolling down
window.onscroll = function () {
  var scrollButton = document.querySelector(".scroll-to-top");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
};
// gsap
gsap.from(".cube", {
  x: 500,
  y: 100,
  rotate: 360,
  duration: 5,
  repeat: -1,
});
const tl = gsap.timeline();
tl.from(
  ".hero-text",
  {
    x: "-100%",
    opacity: 0,
    ease: "bace",
    duration: 2,
  },
  2
);
