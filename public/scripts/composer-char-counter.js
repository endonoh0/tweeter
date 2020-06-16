$(function () {

    $(".new-tweet textarea").on(("keyup"), function () {
        const $tweet = $(this);
        const $tweetLength = $tweet.val().length;
        const $counter = $tweet.siblings("footer.flexbox").children("output.counter");

        $counter.text(140 - $tweetLength);

        if ($tweetLength > 140) {
            $counter.addClass("error");
        } else {
            $counter.removeClass("error");
        };
    });
});
