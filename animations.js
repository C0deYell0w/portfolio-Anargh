var progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(function (progressBar) {
        var width = progressBar.style.width;
        progressBar.style.width = '0%';
        progressBar.style.opacity = '0';
        progressBar.style.animation = 'progressrun 2s ease-in 3.5s forwards';
        setTimeout(function () {
            progressBar.style.width = width;
            progressBar.style.opacity = '0';
        }, ); 
    });

document.addEventListener('DOMContentLoaded', function () {
    var phoneBox = document.querySelector('.phone-box');
    var toggleButton = document.getElementById('toggleButton');

    function handleButtonClick() {
        setTimeout(function () {
        phoneBox.style.animation = 'contactexpand 0.6s forwards';
      }, 800);
    }
    toggleButton.addEventListener('click', handleButtonClick);
});