document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menuBtn');
    const menuContainer = document.getElementById('menuContainer');
    const bars = document.querySelectorAll('.bar');

    menuBtn.addEventListener('click', function () {
        menuContainer.classList.toggle('open');
        bars.forEach(bar => bar.classList.toggle('change'));
    });
});
