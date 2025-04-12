
function launchRocket(username = "Anonim") {
    const rocket = document.getElementById("rocket");
    const explosion = document.getElementById("explosion");
    const message = document.getElementById("message");
    const rocketSound = document.getElementById("rocketSound");
    const boomSound = document.getElementById("boomSound");

    message.textContent = `${username} a lansat racheta!`;
    rocket.style.display = "block";
    rocketSound.play();

    rocket.animate([
        { bottom: "0" },
        { bottom: "50%" }
    ], {
        duration: 2000,
        fill: "forwards"
    });

    setTimeout(() => {
        rocket.style.display = "none";
        explosion.style.display = "block";
        boomSound.play();

        setTimeout(() => {
            explosion.style.display = "none";
            message.textContent = "";
        }, 1500);
    }, 2000);
}

// Pentru testare manuală
document.body.addEventListener("click", () => {
    launchRocket("Tester");
});
