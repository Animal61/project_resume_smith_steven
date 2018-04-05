// JavaScript event listener to show therapy image
var header1 = document.getElementsByTagName('h1')[0];

header1.addEventListener('mouseover', function () {
    document.getElementById('therapy').style.visibility = 'visible';
    document.getElementById('therapy').style.height = 'auto';
});

header1.addEventListener('mouseout', function () {
    document.getElementById('therapy').style.visibility = 'hidden';
    document.getElementById('therapy').style.height = '0';
});
