// console.log("Bonjour tout le monde");
let SLIDEINDEX = 100;

showSlides(SLIDEINDEX);

function showSlides(index){
    let slides = document.querySelectorAll(".slide");
    dots = document.querySelectorAll('.dot-navigation');

    if (index >= slides.length) SLIDEINDEX = 0;
    if (index < 0) SLIDEINDEX = slides.length - 1;

    for (let i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
        dots[i].classList.remove("active-dot")
    }

    slides[SLIDEINDEX].style.display = "block";
    dots[SLIDEINDEX].classList.add("active-dot");
}

