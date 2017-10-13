var heartNumber = 0;
var heartsArray = document.querySelectorAll('path');


function loadingOneHeart() {
    heartsArray[heartNumber].style.display = "block";

    heartNumber = heartNumber + 1;
    var percent = heartNumber / 1.3;

    document.querySelector('#number').innerHTML = `${percent.toFixed(2)}%`;
    if (heartNumber === heartsArray.length) stopLoading();
}


function stopLoading () {
    clearInterval(loading);
}

function loading() {
    loading = setInterval(loadingOneHeart, 60);
}


loading();

