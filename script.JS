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


// Gestion des sliders pour les images en responsive
let slideIndexResponsive = 0;
const responsive_slides0 = document.querySelectorAll(".responsive_slide0");

function showResponsiveSlide0(index) {
    responsive_slides0.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
    });
}

function nextResponsiveSlide0() {
    slideIndexResponsive = (slideIndexResponsive + 1) % responsive_slides0.length;
    showResponsiveSlide0(slideIndexResponsive);
}

function prevResponsiveSlide0() {
    slideIndexResponsive = (slideIndexResponsive - 1 + responsive_slides0.length) % responsive_slides0.length;
    showResponsiveSlide0(slideIndexResponsive);
}

// Initialisation
document.addEventListener("DOMContentLoaded", () => {
    showResponsiveSlide0(slideIndexResponsive);
});

setInterval(() => {
    nextResponsiveSlide0();
}, 5000); // toutes les 5 secondes


// ModalContainer
const modalContainer = document.querySelector(".modal-container");
const modalTriggers = document.querySelectorAll(".modal-trigger");

modalTriggers.forEach(trigger =>
    trigger.addEventListener("click", toggleModalContainer)
);

function toggleModalContainer() {
    modalContainer.classList.toggle("active");
}

// ModalContainerAutres
const modalContainerAutres = document.querySelector(".modal-container-autres");
const modalTriggersAutres = document.querySelectorAll(".modal-trigger-autres");

modalTriggersAutres.forEach(trigger =>
    trigger.addEventListener("click", toggleModalContainerAutres)
);

function toggleModalContainerAutres() {
    modalContainerAutres.classList.toggle("active");
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

/* VOD BUTTON */
const video = document.getElementById("vods");
const progressBar = document.getElementById("progressBar");
const progressContainer = document.getElementById("progressContainer");
const muteBtn = document.getElementById("muteBtn");
const fullscreenBtn = document.getElementById("fullscreenBtn");
const wrapper = document.querySelector(".video-wrapper");

function togglePlayPause() {
    const button = document.getElementById("playPauseButton");
    if (video.paused) {
        video.play();
        button.textContent = "⏸";
    } else {
        video.pause();
        button.textContent = "▶";
    }
}

// Met à jour la barre en fonction du temps
video.addEventListener("timeupdate", () => {
    const percentage = (video.currentTime / video.duration) * 100;
    progressBar.style.width = `${percentage}%`;
});

// Aller à un moment donné quand on clique sur la barre
function seekVideo(event) {
    const rect = progressContainer.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const percentage = offsetX / rect.width;
    video.currentTime = percentage * video.duration;
}

// Mute / Unmute
function toggleMute() {
    video.muted = !video.muted;
    muteBtn.textContent = video.muted ? "🔇" : "🔊";
}

// Fullscreen / Exit fullscreen
function toggleFullscreen() {
    if (!document.fullscreenElement) {
      wrapper.requestFullscreen().catch(err => {
        alert(`Erreur en plein écran : ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
}