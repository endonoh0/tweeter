$(function () {
    $("#nav-bar #compose").click(function () {
        $(".flexbox .new-tweet").toggle("slow");
        $(".flexbox .newtweet textarea").focus();
    });
})
