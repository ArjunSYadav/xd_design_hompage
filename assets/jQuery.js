$(document).ready(function() {
    // Function to check and toggle the sticky header
    function checkStickyHeader() {
        var header = $("#sticky-header");
        var content = $("#content");
        var headerHeight = header.outerHeight();
        var contentTop = content.offset().top;
        var scroll = $(window).scrollTop();

        if (scroll >= contentTop - headerHeight) {
            header.addClass("sticky");
        } else {
            header.removeClass("sticky");
        }
    }

    // Initial check when the page loads
    checkStickyHeader();

    // Attach the scroll event listener
    $(window).scroll(function() {
        checkStickyHeader();
    });


    $("#menu-toggle").click(function() {
        $(".menu").toggleClass("active");
    });
    

});

