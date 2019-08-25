$( document ).ready(function() {
    // Chat window functionality (even though it doesn't work yet)
    $("#chat").click(e => {
        $("#chat-window").css('height', '350px');
        
        $("#chat-window").removeClass("hide-chat");
    })
    $("#close").click(e => {
        $("#chat-window").addClass("hide-chat");
        $("#chat-window").css('height', '0px');
    })

    $("#chat-send").submit(e => {
        e.preventDefault();
        console.log('submit');
        
        sendChat();
    })
    function sendChat(){
        const message = `<span class="bubble sent">${$("#chat-body").val()}</span>`
        $("#convo-display").append(message);

        $("#chat-body").val('')
    }

    // Contact Form
    $("#contact-form").submit(e => {
        

        const name = $("#name").val();
        const email = $("#email").val();
        const body = $("#body").val();

        console.log(name, email, body);

        if(name === ''){
            e.preventDefault();
            $("#err-message").css('display', 'block');
            $("#name").addClass('is-danger');
        }
        else if(email === ''){
            e.preventDefault();
            $("#err-message").css('display', 'block');
            $("#email").addClass('is-danger');
        }
        else if(body === ''){
            e.preventDefault();
            $("#err-message").css('display', 'block');
            $("#body").addClass('is-danger');
        }        
    });

    // Scroll Animations
    $(".hidden-load").removeClass('hidden-load');

    const animationsList = [
        { el: 'ui-ux-p', class: 'hidden' },
        { el: 'ui-left', class: 'hidden-left' },
        { el: 'ux-right', class: 'hidden-right' },
        { el: 'web-users-chart', class: 'hidden-left' },
        { el: 'good-mobile-design', class: 'hidden-right' },
        { el: 'user-experiences', class: 'hidden-left' },
        { el: 'conversion', class: 'hidden' },
        { el: 'contact', class: 'fade-in' },
    ]

    animationsList.forEach(i => {
        $("#"+i.el).viewportChecker({
            classToRemove: i.class
        });
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