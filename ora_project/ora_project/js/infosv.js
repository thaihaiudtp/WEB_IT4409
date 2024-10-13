// Get the Sidebar
var mySidebar = document.getElementById("mySidebar1");

// Get the DIV with overlay effect
var overlayBg = document.getElementById("myOverlay1");

// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open1() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
    overlayBg.style.display = "none";
  } else {
    mySidebar.style.display = 'block';
    overlayBg.style.display = "block";
  }
}

// Close the sidebar with the close button
function w3_close1() {
  mySidebar.style.display = "none";
  overlayBg.style.display = "none";
}