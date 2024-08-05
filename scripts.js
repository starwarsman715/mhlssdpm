document.addEventListener("DOMContentLoaded", function () {
    const collectionItems = document.querySelectorAll(".collection-item");

    // Throttle mechanism
    let ticking = false;

    // Define initial offsets for each image based on its focal point
    const initialOffsets = {
        boston: 40,    // Centered
        montmelo: 47,  // Slightly higher
        madrid: 20,    // Slightly lower
        other: 45      // Centered
    };

    // Parallax speed factors for different orientations
    const speedFactors = {
        landscape: 0.08, // Speed factor for landscape images
        portrait: 0.1  // Speed factor for portrait images
    };

    function parallaxEffect() {
        const viewportHeight = window.innerHeight;

        collectionItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            const offset = window.pageYOffset;

            if (rect.top < viewportHeight && rect.bottom > 0) {
                const itemId = item.classList[1]; // Assuming class names like 'boston', 'montmelo', etc.
                const initialOffsetY = initialOffsets[itemId] || 50; // Fallback to 50% if not defined

                // Determine the speed factor based on image orientation
                const speedFactor = (itemId === 'montmelo' || itemId === 'other') 
                    ? speedFactors.landscape 
                    : speedFactors.portrait;

                // Calculate percentage of visibility
                const scrollPercentage = (offset - (rect.top - viewportHeight)) / (rect.bottom - rect.top + viewportHeight);

                // Calculate offset for background images
                const backgroundOffsetY = initialOffsetY + ((scrollPercentage - 0.5) * 100 * speedFactor);

                // Set background position
                item.style.backgroundPosition = `50% ${backgroundOffsetY}%`;
            }
        });

        ticking = false;
    }

    function onScroll() {
        if (!ticking) {
            window.requestAnimationFrame(parallaxEffect);
            ticking = true;
        }
    }

    window.addEventListener("scroll", onScroll);
});
