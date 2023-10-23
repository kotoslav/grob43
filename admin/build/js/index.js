// Открыть модальное окно
document.getElementById("open-modal-card-btn").addEventListener("click", function () {
	document.getElementById("modal-product").classList.add("open")
})
// Закрыть модальное окно
document.getElementById("close-modal-product-btn").addEventListener("click", function () {
	document.getElementById("modal-product").classList.remove("open")
})
// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("modal-product").classList.remove("open")
    }
});

// Закрыть модальное окно при клике вне его
document.querySelector("#modal-product .modal-card__box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("modal-product").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {

let currentScrollPos = window.pageYOffset;
if (prevScrollpos > currentScrollPos) {
document.querySelector(".menu-brown").style.top = "0";
} else {
document.querySelector(".menu-brown").style.top = "-200%";
}
prevScrollpos = currentScrollPos;


}