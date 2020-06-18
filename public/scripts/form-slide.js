$(function () {
    $("#nav-bar #compose").click(function() {
        $(".flexbox .new-tweet").toggle("slow");
        $(".flexbox .newtweet textarea").focus();
    });

    $(window).on("scroll", function() {
        const y_pos = window.pageYOffset;
        const target_pos = 0;

        if (y_pos > target_pos) {
            $("#scrollUp button").removeClass("display-off")
        } else {
            $("#scrollUp button").addClass("display-off")
        }
    });

    $(".fa-chevron-circle-up").on("click", function() {
        $("html").scrollTop(0);
    })
});
