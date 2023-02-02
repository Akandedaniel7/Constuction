/* ================================= Section Background-image Changing =========================== */
let images = [
    'url('
]

/* ================================ Back-to-top ============================== */
const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
    if ( window.pageYOffset > 100) {
        backToTop.classList.add("active");
    }
    else{
        backToTop.classList.remove("active");
    }
})

