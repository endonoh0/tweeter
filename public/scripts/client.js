const createTweetElement = function(tweet) {
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
                    <div class="scroll-box no-wrap">
                        <p>${tweet.content.text}</p>
                    </div>
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

$(document).ready(function() {
    $("form").validate({
        rules: {
            text: {
                required: true,
                maxlength: 140
            }
        },
        messages: {
            text: {
                required: "Please fill in the text field",
                maxlength: "Text must be less than or equal to 140 characters."
            }
        },
        errorElement: 'div',
        errorLabelContainer: '.error-text'
    });

    $("form").submit(function(event) {
        const isValid = $("form").valid();

        if (!isValid) {
            event.preventDefault();
            alert("Not submitted");
        } else {
            event.preventDefault();
            $.ajax({
                url: $(this).attr("action"),
                method: "POST",
                data: $(this).serialize(),
            }).done(function(data) {
                console.log("Success");
                $('form')[0].reset();
                $('.counter').val(140);
                loadTweets(data);
            });
        }

        loadTweets();
    });
})


const renderTweets = function(tweets) {
    const $container = $('#tweets-container').empty();

    tweets.forEach(function(tweet) {
        $container.prepend(createTweetElement(tweet));
    });
}

const loadTweets = function() {
    $.ajax("http://localhost:8080/tweets", { method: 'GET' })
        .done(function(data) {
            renderTweets(data);
        });
}


loadTweets()
