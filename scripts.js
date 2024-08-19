document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.getElementById('close');

    document.querySelectorAll('.gallery-item img').forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'flex';
            modalImg.src = this.src;
        });
    });

    closeBtn.onclick = function() {
        modal.style.display = 'none';
    };

    // Close the modal when clicking outside the image
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
});

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.photos img');
    let currentIndex = 0;

    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';

    const img = document.createElement('img');
    lightbox.appendChild(img);

    const prevButton = document.createElement('span');
    prevButton.className = 'prev';
    prevButton.innerHTML = '<i class="fas fa-chevron-left"></i>'; // Font Awesome left icon
    lightbox.appendChild(prevButton);

    const nextButton = document.createElement('span');
    nextButton.className = 'next';
    nextButton.innerHTML = '<i class="fas fa-chevron-right"></i>'; // Font Awesome right icon
    lightbox.appendChild(nextButton);

    const closeButton = document.createElement('span');
    closeButton.className = 'close';
    closeButton.innerHTML = '&times;';
    lightbox.appendChild(closeButton);

    document.body.appendChild(lightbox);

    function showImage(index) {
        img.src = images[index].src;
        currentIndex = index;
        lightbox.style.display = 'flex';
        document.body.classList.add('lightbox-active');
    }

    images.forEach((image, index) => {
        image.addEventListener('click', () => {
            showImage(index);
        });
    });

    closeButton.addEventListener('click', () => {
        lightbox.style.display = 'none';
        document.body.classList.remove('lightbox-active');
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        showImage(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        showImage(currentIndex);
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
            document.body.classList.remove('lightbox-active');
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.photos img');

    function checkVisibility() {
        const triggerBottom = window.innerHeight * 0.496; // Trigger earlier (50% down the viewport)

        images.forEach(img => {
            const imgTop = img.getBoundingClientRect().top;

            if (imgTop < triggerBottom) {
                img.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check in case some images are already in view
});

// Add fade-in effect to the intro-text
document.addEventListener("DOMContentLoaded", function () {
    const introText = document.querySelector('.intro-text');

    function checkIntroVisibility() {
        const rect = introText.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        if (rect.top < viewportHeight && rect.bottom > 0) {
            introText.classList.add('fade-in');
        }
    }

    window.addEventListener('scroll', checkIntroVisibility);
    checkIntroVisibility(); // Initial check in case the intro text is already in view
});

document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.About .title, .About .text, .About .foto_mia, .About .foto_boston');

    function addAnimation() {
        const viewportHeight = window.innerHeight;
        
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const isInView = rect.top < viewportHeight && rect.bottom > 0;

            if (isInView) {
                // Add class for animation based on a condition or element type
                element.classList.add('fade-in'); // or 'slide-in' depending on the effect you want
            }
        });
    }

    // Initial check
    addAnimation();

    // Check on scroll
    window.addEventListener('scroll', addAnimation);
});
