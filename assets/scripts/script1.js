document.addEventListener("DOMContentLoaded", function() {
    var menuBtn = document.querySelector(".menu-btn");
    var menuContainer = document.getElementById("menuContainer");
    var menuBtnBars = document.querySelectorAll(".menu-btn .bar");

    // Функция для закрытия меню
    function closeMenu() {
        menuContainer.style.display = "none";
        menuBtnBars[0].style.transform = "none";
        menuBtnBars[1].style.opacity = "1";
        menuBtnBars[2].style.transform = "none";
    }

    // Открытие и закрытие меню при клике на кнопку
    menuBtn.addEventListener("click", function() {
        if (menuContainer.style.display === "block") {
            closeMenu();
        } else {
            menuContainer.style.display = "block";
            menuBtnBars[0].style.transform = "rotate(-45deg) translate(-5px, 6px)";
            menuBtnBars[1].style.opacity = "0";
            menuBtnBars[2].style.transform = "rotate(45deg) translate(-5px, -6px)";
        }
    });

    // Закрытие меню при клике вне меню
    document.addEventListener("click", function(event) {
        var isClickInsideMenu = menuContainer.contains(event.target);
        var isClickOnMenuBtn = menuBtn.contains(event.target);
        if (!isClickInsideMenu && !isClickOnMenuBtn) {
            closeMenu();
        }
    });
});
