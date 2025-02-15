document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const mobileMenu = document.querySelector(".mobile-menu");
    const mobileMenuClose = document.querySelector(".menu-btn-close");

    menuBtn.addEventListener("click", function () {
        mobileMenu.style.display = "flex";
        menuBtn.style.display = "none";
        mobileMenuClose.style.display = "block";
    });

    mobileMenuClose.addEventListener("click", function () {
        mobileMenu.style.display = "none";
        mobileMenuClose.style.display = "none";
        menuBtn.style.display = "block";
    });
});
