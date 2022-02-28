$(document).ready(function() {
    $(".gallery").flipping_gallery({
        enableScroll: false,
        autoplay: false
    });

    $(".next").click(function() {
        $(".gallery").flipForward();
        return false;
    });
    $(".prev").click(function() {
        $(".gallery").flipBackward();
        return false;
    });
});