const text = "WELCOME TO HYPERION"
let isDeleting = false;

function typeEffect() {
    const target = document.getElementById("typewriter");
    const currentText = text.substring(0, charIndex);
    target.innerText = currentText;

    if (!isDeleting && charIndex < text.length) {
        charIndex++;
        setTimeout(typeEffect, speed);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, backspaceSpeed);
    } else {
        isDeleting = !isDeleting;
        const nextDelay = !isDeleting ? 500 : pauseDelay;
        setTimeout(typeEffect, nextDelay);
    }
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        
        document.getElementById("safe-screen").style.display = "block";
        
       
        document.querySelector(".glass-box-section").style.display = "none";
        document.querySelector(".image-section").style.display = "none";

      
        window.location.replace("https://tasks.google.com");
    }
});


