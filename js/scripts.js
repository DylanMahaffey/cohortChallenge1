$( document ).ready(function() {
    // Chat window functionality (even though it doesn't work yet)
    $("#chat").click(e => {
        $("#chat-window").removeClass("hide-chat");
    })
    $("#close").click(e => {
        $("#chat-window").addClass("hide-chat");
    })
    $("#chat-send").click(e => {
        const message = `<span class="bubble sent">${$("#chat-body").val()}</span>`
        $("#convo-display").append(message);

        $("#chat-body").val('')
    })


    // Scroll Animations
    $(".hidden-load").removeClass('hidden-load');

    $("#ui-ux-p").viewportChecker({
        classToRemove: 'hidden'
    })
    $("#conversion").viewportChecker({
        classToRemove: 'hidden'
    })
    $("#ui-left").viewportChecker({
        classToRemove: 'hidden-left'
    })
    $("#ux-right").viewportChecker({
        classToRemove: 'hidden-right'
    })
    $("#web-users-chart").viewportChecker({
        classToRemove: 'hidden-left'
    })
    $("#good-mobile-design").viewportChecker({
        classToRemove: 'hidden-right'
    })
    $("#user-experiences").viewportChecker({
        classToRemove: 'hidden-left'
    })
    $("#contact").viewportChecker({
        classToRemove: 'fade-in'
    })
    

    // Scroll to the Top Button (show the button and its functionality)
    $("#scrollToTop").click(e => {
        $('html, body').animate({ scrollTop: 0 }, "slow");
        return false;
    });

    window.onscroll = function() {scrollFunction()};
   
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("scrollToTop").style.display = "block";
        } else {
            document.getElementById("scrollToTop").style.display = "none";
        }
    }

    
});