document.addEventListener("DOMContentLoaded", function() {
    const collectionItems = document.querySelectorAll(".collection-item");

    // Throttle mechanism
    let ticking = false;

    // Define initial offsets for each image based on its focal point
    const initialOffsets = {
        boston: 50,    // Centered
        montmelo: 40,  // Slightly higher
        madrid: 60,    // Slightly lower
        other: 50      // Centered
    };

    function parallaxEffect() {
        const viewportHeight = window.innerHeight;

        collectionItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            const offset = window.pageYOffset;
            const speedY = 0.08; // Adjust vertical speed for more noticeable movement
            const startScroll = rect.top - viewportHeight;
            const endScroll = rect.bottom;

            if (rect.top < viewportHeight && rect.bottom > 0) {
                const itemId = item.classList[1]; // Assuming class names like 'boston', 'montmelo', etc.
                const initialOffsetY = initialOffsets[itemId] || 50; // Fallback to 50% if not defined

                // Calculate percentage of visibility
                const scrollPercentage = (offset - startScroll) / (endScroll - startScroll);

                // Calculate offsets for both vertical movement
                const backgroundOffsetY = initialOffsetY + ((scrollPercentage - 0.5) * 100 * speedY);

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
