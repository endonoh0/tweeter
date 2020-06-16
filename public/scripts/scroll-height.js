$(function () {

    $(".message-box textarea").on('input', function () {
        const scroll_height = $(".message-box").get(0).scrollHeight;

        $(".message-box").css('height', scroll_height + 'px');
    });
});
