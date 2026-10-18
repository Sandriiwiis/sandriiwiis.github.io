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
    const textElement = document.getElementById("typewriter-text");
    if (!textElement) return;

    currentWord = words[i];
    
    if (isDeleting) {
        textElement.textContent = currentWord.substring(0, j - 1);
        j--;
    } else {
        textElement.textContent = currentWord.substring(0, j + 1);
        j++;
    }

    let typeSpeed = 90;

    if (isDeleting) { typeSpeed /= 2; }

    if (!isDeleting && j === currentWord.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
        typeSpeed = 400;
    }

    setTimeout(type, typeSpeed);
}

function copyEmail() {
    const email = "scisternasch@gmail.com";
    const btn = document.getElementById("copy-email-btn");

    // Método universal (funciona en local y en web)
    const tempInput = document.createElement("textarea");
    tempInput.value = email;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    // API moderna de respaldo
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(email);
    }

    // Cambio visual en el botón para confirmar
    if (btn) {
        btn.innerHTML = "¡Correo copiado! ✅";
        btn.style.borderColor = "#10b981";
        btn.style.color = "#10b981";
        
        setTimeout(() => {
            btn.innerHTML = "📋 Copiar correo";
            btn.style.borderColor = "";
            btn.style.color = "";
        }, 2500);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    type();
});
