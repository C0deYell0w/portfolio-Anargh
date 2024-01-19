var innerBody = document.querySelector('.inner-body');
var scrollUpBtn = document.querySelector('.scrollup-btn');

innerBody.addEventListener('scroll', function() {
    localStorage.setItem('scrollPosition', this.scrollTop);

    if (this.scrollTop > 0) {
        scrollUpBtn.style.display = 'flex';
        scrollUpBtn.classList.add('scrollup-show');
        scrollUpBtn.classList.remove('scrollup-hide');
    } else {
        scrollUpBtn.classList.remove('scrollup-show');
        scrollUpBtn.classList.add('scrollup-hide');
    }
});

window.addEventListener('load', function() {
    var scrollPosition = localStorage.getItem('scrollPosition');
    if (scrollPosition !== null) {
        innerBody.scrollTop = parseInt(scrollPosition);
        if (innerBody.scrollTop > 0) {
            scrollUpBtn.style.display = 'flex';
            scrollUpBtn.classList.add('scrollup-show');
        }
    }
});