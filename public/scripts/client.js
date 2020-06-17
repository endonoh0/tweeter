const createTweetElement = function (tweet) {
    return $(`
        <article>
            <div class="tweet">
                <header>
                    <div class="flexbox space-between">
                        <div class="flexbox">
                            <img src="${tweet.user.avatars}" alt="profile picture">
                            <h5>${tweet.user.name}</h5>
                        </div>
                        <h4>${tweet.user.handle}</h4>
                    </div>
                    <p>${tweet.content.text}</p>
                </header>

                <hr class="hr-line mb-1">
                <div>
                    <footer class="flexbox space-between">
                        <p class="text-xs">${tweet.created_at}...</p>
                        <div>
                            <button class=""><i class="fa fa-flag"></i></button>
                            <button class=""><i class="fa fa-retweet"></i></button>
                            <button class=""><i class="fa fa-heart"></i></button>
                        </div
                    <footer>
                </div>
            <div>
        <article>`
        );
}

$(document).ready(function (event) {

    $("form").submit(function (event) {
        event.preventDefault();

        $.ajax({
            url: $(this).attr("action"),
            method: "POST",
            data: $(this).serialize(),
        }).done(function () {;
            console.log("Success");
            loadTweets();

        }).fail(function () {
            alert("Fail");
        });
    });
    loadTweets();
})

const renderTweets = function (tweets) {
    const $container = $('#tweets-container').empty();

    tweets.forEach(function (tweet) {
        $container.append(createTweetElement(tweet));
    });
}

const loadTweets = function () {
    $.ajax("http://localhost:8080/tweets", { method: 'GET' })
        .done(function (data) {
            renderTweets(data);
        });
}

renderTweets(createTweetElement());
