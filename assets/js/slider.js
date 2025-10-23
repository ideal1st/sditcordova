// --- CORRECTED SLICK SLIDER INITIALIZATION ---

// Initialize the slider when the document is ready
$(document).ready(function() {
    // Note: The Bootstrap column classes (col-lg-4, col-sm-12) should be applied
    // to the content *inside* each slide, not the slide container itself.
    // Slick controls the slide count and width via the 'slidesToShow' setting.
    
    $('.slider').slick({
        dots: true,
        infinite: true,
        
        // DEFAULT SETTINGS (Used for large screens, equivalent to col-lg-4)
        slidesToShow: 3, 
        slidesToScroll: 3,
        speed: 2000, 
        adaptiveHeight: true,
        autoplay: false,
        autoplaySpeed: 0,
        cssEase: 'linear',
        
        // --- THIS ARRAY DEFINES BREAKPOINTS FOR RESPONSIVENESS ---
        responsive: [
            {
                // Breakpoint for Tablets/Medium screens (e.g., Bootstrap's md breakpoint)
                // When screen width is 992px or less, these settings apply.
                breakpoint: 992,
                settings: {
                    slidesToShow: 2, // Show 2 slides
                    slidesToScroll: 2,
                    speed: 1500
                }
            },
            {
                // Breakpoint for Mobile/Small screens (e.g., Bootstrap's sm breakpoint)
                // When screen width is 768px or less, these settings apply.
                breakpoint: 768,
                settings: {
                    slidesToShow: 1, // Show 1 slide (equivalent to col-sm-12)
                    slidesToScroll: 1,
                    speed: 1000,
                    arrows: true // Optionally change other settings here
                }
            }
            // Add more breakpoints as needed (e.g., 480 for xs)
        ]
    });
});
