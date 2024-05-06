<script>
    document.addEventListener("DOMContentLoaded", function () {
        // Select all elements with class .animate-line
        const lines = document.querySelectorAll('.animate-line');

        // Create a timeline
        const timeline = anime.timeline({
            easing: 'easeOutExpo',
            duration: 800, // Animation duration
        });

        // Add stagger effect to each line
        timeline.add({
            targets: lines,
            opacity: [0, 1],
            translateY: [20, 0],
            delay: anime.stagger(200), // Stagger delay
        });
    });
</script>
