$(document).ready(function () {

    // validate the post request
    $("form").validate({
        rules: {
            text: {
                required: true,
                maxlength: 140
            }
        },
        messages: {
            text: {
                required: "You can't tweet that! 🐦",
                maxlength: "Oh my, aren't you a chirpy one."
            }
        },
        errorElement: 'div',
        errorLabelContainer: '.error-text'
    });

    // Fetch tweets on submission
    $("form").submit(function (e) {
        const is_Valid = $("form").valid();

        e.preventDefault();
        if (!is_Valid) return;

        $.ajax({
            url: $(this).attr("action"),
            method: "POST",
            data: $(this).serialize(),
        }).done(function (data) {
            $('form')[0].reset();
            $('.counter').val(140);
            load_Tweets(data);
        });
        load_Tweets();
    });
});

// Fetch the tweet data
const load_Tweets = function () {
    $.ajax("http://localhost:8080/tweets", { method: 'GET' })
        .done(function (data) {
            render_Tweets(data);
        });
}

// Insert the tweet into the DOM
const render_Tweets = function (tweets) {
    const $container = $('#tweets-container').empty();

    tweets.forEach(function (tweet) {
        $container.prepend(create_Tweet_Element(tweet));
    });
}

// Insert tweet inputs into html template
const create_Tweet_Element = function(tweet) {
    // Re-encode the tweet
    const escape = function(str) {
        let div = document.createElement('div');
        div.appendChild(document.createTextNode(str));
        return div.innerHTML;
    }
    return $(`
        <article>
            <div class="tweet">
                <header>
                    <div class="flexbox space-between">
                        <div class="flexbox">
                            <img src="${escape(tweet.user.avatars)}" alt="profile picture">
                            <h5>${escape(tweet.user.name)}</h5>
                        </div>
                        <h4>${escape(tweet.user.handle)}</h4>
                    </div>
                    <div class="scroll-box no-wrap">
                        <p class="mt-25">${escape(tweet.content.text)}</p>
                    </div>
                </header>

                <hr class="hr-line mb-1">

                <div>
                    <footer class="flexbox space-between">
                        <p class="text-xs m-0">10 days ago...</p>
                        <div>
                            <button <i class="fa fa-flag"></i></button>
                            <button <i class="fa fa-retweet"></i></button>
                            <button <i class="fa fa-heart"></i></button>
                         </div
                    <footer>
                </div>
            <div>
        <article>`
    );
}

load_Tweets()
