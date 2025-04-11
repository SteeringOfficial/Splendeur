// Gestion des sliders pour les images
let slideIndex0 = 0;
const slides0 = document.querySelectorAll(".slide0");

function showSlide0(index) {
    slides0.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
    });
}

function nextSlide0() {
    slideIndex0 = (slideIndex0 + 1) % slides0.length;
    showSlide0(slideIndex0);
}

function prevSlide0() {
    slideIndex0 = (slideIndex0 - 1 + slides0.length) % slides0.length;
    showSlide0(slideIndex0);
}

// Initialisation
document.addEventListener("DOMContentLoaded", () => {
    showSlide0(slideIndex0);
});

setInterval(() => {
    nextSlide0();
}, 5000); // toutes les 5 secondes

//ModalContainer
const modalContainer = document.querySelector(".modal-container");
const modalTriggers = document.querySelectorAll(".modal-trigger");

modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal))

function toggleModal(){
    modalContainer.classList.toggle("active")
}

//Responsive Head_Bar
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*Responsive Logo Menu*/
document.addEventListener("DOMContentLoaded", function () {
const menuBtn = document.getElementById("logo-menu");
const menuResponsive = document.getElementById("lien_menu_responsive");

menuBtn.addEventListener("click", function () {
    // Toggle l'affichage : "none" -> "block" ou l'inverse
    if (menuResponsive.style.display === "inline-block") {
        menuResponsive.style.display = "none";
    } else {
        menuResponsive.style.display = "inline-block";
    }
});
});
