document.addEventListener("scroll", () => {
    const content = document.querySelector(".additional-content");
    const contentTop = content.getBoundingClientRect().top;
    const contentBottom = content.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    // Add active class when the element is in the viewport
    if (contentTop < windowHeight && contentBottom > 0) {
        content.classList.add("active");
    } else if (contentBottom < 0 || contentTop > windowHeight) {
        // Remove active class when it is completely out of view
        content.classList.remove("active");
    }
});
// carousel
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.carousel-item');
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');
    let currentIndex = 0;

    const updateCarousel = () => {
        items.forEach((item, index) => {
            // Add 'active' class to the current item, remove it from others
            item.classList.toggle('active', index === currentIndex);
        });
    };

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    });

    updateCarousel(); // Initialize the carousel
});

