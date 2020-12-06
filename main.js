let showNavStatus = false;
let navToggle = document.querySelector("#nav-toggle");
let navBar = document.querySelector(".navbar");

function showNav() {
    if (showNavStatus === false) {
        navToggle.className = "fas fa-times";
        navBar.style.transform = "scale(1)";
        showNavStatus = true;
    }
    else if (showNavStatus === true) {
        navToggle.className = "fas fa-hamburger";
        navBar.style.transform = "scale(0)";
        showNavStatus = false;
    }
}


