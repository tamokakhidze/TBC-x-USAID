let slideIndex = 1;
let touchStartX = 0;
let touchEndX = 0;

showSlides(slideIndex);

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);
document.addEventListener('touchend', handleTouchEnd, false);

function handleTouchStart(event) {
    touchStartX = event.touches[0].clientX;
}

function handleTouchMove(event) {
    touchEndX = event.touches[0].clientX;
}

function handleTouchEnd() {
    let touchDiff = touchEndX - touchStartX;

    if (touchDiff > 50) {
        plusSlides(-1); 
    } else if (touchDiff < -50) {
        plusSlides(1);
    }

    touchStartX = 0;
    touchEndX = 0;
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

setInterval(function () {
    plusSlides(1);
}, 7000);

let prevScrollPosition = window.scrollY || window.pageYOffset;
let headerVisible = true;

window.onscroll = () => {
    const headerElements = document.getElementsByClassName("header-container");

    if (headerElements.length > 0) {
        const isMobileMode = window.innerWidth <= 740;

        if (isMobileMode) {
            const currentScrollPosition = window.scrollY || window.pageYOffset;
            const scrollDown = currentScrollPosition > prevScrollPosition;
            const scrollDifference = Math.abs(prevScrollPosition - currentScrollPosition);

            if (scrollDown && currentScrollPosition > 84) {
                if (headerVisible) {
                    headerElements[0].style.top = "-84px";
                    headerVisible = false;
                }
            } else {
                if (!headerVisible || scrollDifference > 10) {
                    headerElements[0].style.top = "0";
                    headerVisible = true;
                }
            }

            prevScrollPosition = currentScrollPosition;
        }
    }
};

function myFunction(x) {
    x.classList.toggle("change");
}

function toggleNav() {
    var sidenav = document.getElementById("mySidenav");
    sidenav.style.width = sidenav.style.width === "200px" ? "0" : "200px";
}
