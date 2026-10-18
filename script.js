const words = [
    "Fintech Developer.",
    "Ingeniera Comercial.",
    "Fullstack Python & TypeScript.",
    "Automatización Financiera."
];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
    currentWord = words[i];
    
    if (isDeleting) {
        document.getElementById("typewriter-text").textContent = currentWord.substring(0, j - 1);
        j--;
    } else {
        document.getElementById("typewriter-text").textContent = currentWord.substring(0, j + 1);
        j++;
    }

    let typeSpeed = 90;

    if (isDeleting) { typeSpeed /= 2; }

    if (!isDeleting && j === currentWord.length) {
        typeSpeed = 2000; // Pausa al final de la palabra
        isDeleting = true;
    } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
        typeSpeed = 400; // Pausa antes de la siguiente palabra
    }

    setTimeout(type, typeSpeed);
}

document.addEventListener("DOMContentLoaded", function() {
    type();
});
