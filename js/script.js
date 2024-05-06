jQuery(document).ready(function ($) {
    console.log("Document ready");

    // Function to toggle menu visibility
    function toggleMenu() {
        if ($(window).width() <= 768) {
            $(".nav-items").hide();
            $(".hamburger").show();
            // Add click event in responsive mode
            $(document).on("click.menu", function (e) {
                if (!$(e.target).closest('.nav-items').length && !$(e.target).closest('.hamburger').length && !$(e.target).closest('.portfolio-trigger').length) {
                    closeMenu();
                }
            });
        } else {
            $(".nav-items").show();
            $(".hamburger").hide();
            // Remove click event in non-responsive mode
            $(document).off("click.menu");
        }
    }

    // Function to close menu and dropdown
    function closeMenu() {
        $(".nav-items").hide();
        $(".dropdown-content").hide();
    }

    // Hamburger click event
    $(".hamburger").click(function () {
        $(".nav-items").toggle();
    });

    // Portfolio trigger click event
    $(".portfolio-trigger").click(function (e) {
        e.preventDefault();
        $(".dropdown-content").toggle();
    });

    // Window resize event
    $(window).resize(function () {
        toggleMenu();
    });

    // Initial toggle on page load
    toggleMenu();

    // Hide dropdown on page load
    $(".dropdown-content").hide();
});

// Function to expand image in overlay
function expandImage(imagePath) {
    document.getElementById('expandedImage').src = imagePath;
    document.getElementById('imageOverlay').style.display = 'block';
  }
  
  // Function to close overlay
  function closeOverlay() {
    document.getElementById('imageOverlay').style.display = 'none';
  }
