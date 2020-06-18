$(function () {

    const compose_Tweet     = $("#nav-bar #compose");
    const new_Tweet         = $(".flexbox .new-tweet");
    const textarea          = $(".flexbox .newtweet textarea");
    let toggle              = false;

    // Toggle the form
    compose_Tweet.click(function() {
        is_Toggled(toggle);

        new_Tweet.toggle("slow");
        textarea.focus();
    });

    // Toggle the scroll-up button display
    $(window).on("scroll", function() {
        const target_pos        = 0;
        const y_pos             = window.pageYOffset;
        const button            = $("#scrollUp button");

        y_pos > target_pos ?
            button.removeClass("display-off") : button.addClass("display-off");
    });

    // Scroll to the form, toggle only if false
    const scroll_Button = $(".fa-chevron-circle-up");

    scroll_Button.on("click", function() {
        $("html, body").animate({ scrollTop: 0 }, '300');

        if (!toggle) {
            toggle = true;

            new_Tweet.toggle("slow");
            textarea.focus();
        }
    });

    // If true, scroll button may toggle the form
    function is_Toggled(bool) {
        !bool ?
            toggle = true : toggle = false;
    }
});
