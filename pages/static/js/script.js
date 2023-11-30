const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const alphabetList = document.getElementById("alphabet");
let rotating = false;
let rotationInterval;
let currentRotation = 0;

// Populate the wheel with letters
alphabet.forEach((letter, index) => {
    const angle = (360 / alphabet.length) * index;
    const li = document.createElement("li");
    li.style.transform = `rotate(${angle}deg)`;
    li.textContent = letter;
    alphabetList.appendChild(li);
});

// Toggle rotation
document.getElementById("toggle").addEventListener("click", () => {
    rotating = !rotating;
    if (rotating) {
        startRotation();
    } else {
        stopRotation();
    }
});

function startRotation() {
    rotationInterval = setInterval(() => {
        currentRotation += 3; // Change rotation speed here
        alphabetList.style.transform = `rotate(${currentRotation}deg)`;
    }, 100);
}

function stopRotation() {
    clearInterval(rotationInterval);
    highlightLetter();
}

function highlightLetter() {
    const index =
        Math.floor((currentRotation / 360) * alphabet.length) % alphabet.length;
    document
        .querySelectorAll("#alphabet li")
        .forEach((li) => li.classList.remove("highlight"));
    document.querySelectorAll("#alphabet li")[index].classList.add("highlight");
}
