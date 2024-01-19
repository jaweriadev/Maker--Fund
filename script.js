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
