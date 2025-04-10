// Gestion des sliders pour les images
function createSlider(slidesSelector, displayClass) {
    const slides = document.querySelectorAll(slidesSelector);
    let index = 0;
    let intervalId = null;

    function showSlide(newIndex) {
        index = (newIndex + slides.length) % slides.length;
        slides.forEach(slide => slide.classList.remove(displayClass));
        slides[index].classList.add(displayClass);
    }

    function prevSlide() {
        clearInterval(intervalId);
        showSlide(index - 1);
    }

    function nextSlide() {
        clearInterval(intervalId);
        showSlide(index + 1);
    }

    function startAutoSlide(interval = 5000) {
        intervalId = setInterval(() => {
            showSlide(index + 1);
        }, interval);
    }

    document.addEventListener("DOMContentLoaded", () => {
        if (slides.length > 0) {
            showSlide(0);
            startAutoSlide();
        }
    });

    return { prevSlide, nextSlide };
}

const slider0 = createSlider(".slides0 img", "displaySlide");
window.prevSlide0 = slider0.prevSlide;
window.nextSlide0 = slider0.nextSlide;

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