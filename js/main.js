// Custom jQuery
$('h1').hover(
    function () {
        $(this).append('<img id="theImg" src="img/therapy.jpg" class="images" alt="One of my alternate personalities" />');
    }, function () {
        $('#theImg').remove();
    }
);

// Scroll up jquery
$(document).ready(function () {
    $.scrollUp();
});
