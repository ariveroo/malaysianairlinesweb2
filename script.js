document.addEventListener("DOMContentLoaded", () => {
    const discordButton = document.querySelector(".discord-button");
    discordButton.addEventListener("mouseenter", () => {
        discordButton.style.transform = "scale(1.1)";
    });
    discordButton.addEventListener("mouseleave", () => {
        discordButton.style.transform = "scale(1)";
    });

    const leaderCards = document.querySelectorAll(".leader-card");
    leaderCards.forEach(card => {
        card.addEventListener("mouseover", () => {
            card.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.5)";
        });
        card.addEventListener("mouseout", () => {
            card.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.3)";
        });
    });

    let particles = [];
    const particleContainer = document.createElement("div");
    particleContainer.classList.add("particle-container");
    document.body.appendChild(particleContainer);

    function createParticle() {
        const particle = document.createElement("div");
        particle.classList.add("particle");
        particle.style.left = Math.random() * window.innerWidth + "px";
        particle.style.animationDuration = Math.random() * 3 + 2 + "s";
        particleContainer.appendChild(particle);
        particles.push(particle);
    }

    setInterval(() => {
        if (particles.length < 50) {
            createParticle();
        }
    }, 300);

    setInterval(() => {
        particles.forEach((particle, index) => {
            if (parseFloat(particle.style.top) > window.innerHeight) {
                particle.remove();
                particles.splice(index, 1);
            }
        });
    }, 1000);
});
