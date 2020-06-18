$(function () {

    const textarea = $(".new-tweet textarea");

    // Display validation error
    textarea.on(("keyup"), function () {
        const tweet         = $(this);
        const tweet_Length  = tweet.val().length;
        const counter       = tweet.siblings("footer.flexbox").children("output.counter");

        counter.text(140 - tweet_Length);

        tweet_Length > 140 ? counter.addClass("error") : counter.removeClass("error");
    });
});
