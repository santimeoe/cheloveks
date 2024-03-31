document.addEventListener("DOMContentLoaded", function() {
    var menuBtn = document.querySelector(".menu-btn");
    var menuContainer = document.getElementById("menuContainer");
    var menuBtnBars = document.querySelectorAll(".menu-btn .bar");
  
    menuBtn.addEventListener("click", function() {
      menuContainer.style.display = (menuContainer.style.display === "block") ? "none" : "block";
  
      menuBtnBars.forEach(function(bar, index) {
        if (index === 0) {
          bar.style.transform = (menuContainer.style.display === "block") ? "rotate(-45deg) translate(-5px, 6px)" : "none";
        } else if (index === 1) {
          bar.style.opacity = (menuContainer.style.display === "block") ? "0" : "1";
        } else if (index === 2) {
          bar.style.transform = (menuContainer.style.display === "block") ? "rotate(45deg) translate(-5px, -6px)" : "none";
        }
      });
    });
  }); 