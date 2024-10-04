function youtubeVideoIdFromUrl(url) {
    if (url) {
        var regEx = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|shorts|\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
        var match = url.match(regEx);
        if (match && match[2].length === 11) {
            console.log("URL is valid and has 11 characters");
            return match[2];
        }
    }
    console.log("Not a valid URL");
    return "";
}
console.log(youtubeVideoIdFromUrl("https://www.youtube.com/watch?v=zIfxkub7CLY"));