// Custom jQuery
$('h1').hover(
    function () {
        $(this).append('<img id="theImg" src="img/therapy.jpg" class="images" alt="One of my alternate personalities" />');
    }, function () {
        $('#theImg').remove();
    }
);

// SlickNav Jquery plugin
$(document).ready(function () {
    $('#menu').slicknav();
});

// Scroll up jquery
$(document).ready(function () {
    $.scrollUp();
});
