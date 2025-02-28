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




// document.addEventListener('DOMContentLoaded', function () {
//     const toggleButtons = document.querySelectorAll('.portfolio__toggle-button');

//     toggleButtons.forEach(button => {
//         button.addEventListener('click', function () {
//             const icon = this.querySelector('.portfolio__icon');
//             const details = document.querySelector('.portfolio__item-details');
//             const bgDetails = document.querySelector('.portfolio__item');

//             // Toggle class 'show' để hiển thị/ẩn nội dung chi tiết
//             details.classList.toggle('show');
//             bgDetails.classList.toggle('show');
//             // Xoay mũi tên 180 độ khi hiển thị nội dung chi tiết
//             if (details.classList.contains('show')) {
//                 icon.style.transform = 'rotate(0deg)';
//             } else {
//                 icon.style.transform = 'rotate(180deg)';
//             }
//         });
//     });
// });


document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('.portfolio__toggle-button');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function () {
            const portfolioItem = this.closest('.portfolio__item'); // Tìm phần tử cha tương ứng
            const details = portfolioItem.querySelector('.portfolio__item-details'); // Tìm phần chi tiết bên trong phần tử cha
            const icon = this.querySelector('.portfolio__icon');

            // Toggle class 'show' để hiển thị/ẩn nội dung chi tiết
            details.classList.toggle('show');
            portfolioItem.classList.toggle('show');

            // Xoay mũi tên 180 độ khi hiển thị nội dung chi tiết
            if (details.classList.contains('show')) {
                icon.style.transform = 'rotate(0deg)';
            } else {
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });
});
