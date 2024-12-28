const containerEl = document.querySelector(".container");
const colorContainer = document.querySelector(".color-container");

/* Creating Elements & Adding Classes */
for(let index = 0; index < 500; index++) {
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color-container");
    const colorCodeEl = document.createElement("span");
    colorCodeEl.classList.add("color-code");
    colorContainerEl.appendChild(colorCodeEl);
    containerEl.appendChild(colorContainerEl);
}

/* Functions */
function randomColor() {
    const characters = "0123456789ABCDEF";
    const colorCodeLength = 6;
    let colorCode = "";
    
    for(let index = 0; index < colorCodeLength; index++) {
        const randomNumber = Math.floor(Math.random() * characters.length);
        colorCode += characters.substring(randomNumber, randomNumber + 1);
    }

    return colorCode;
}

const mainColorContainerEls = document.querySelectorAll(".color-container");

function generateColor() {
    for(let i = 0; i < mainColorContainerEls.length; i++) {
        const colorContainerEl = mainColorContainerEls[i];
        const newColorCode = randomColor();
        const colorCodeEl = colorContainerEl.querySelector(".color-code");

        colorContainerEl.style.backgroundColor = "#" + newColorCode;
        colorCodeEl.innerText = "#" + newColorCode;
    }
}

generateColor();

/* Click-Copy Functionality */
mainColorContainerEls.forEach((colorContainerEl) => {
    colorContainerEl.addEventListener("click", () => {
        const colorCode = colorContainerEl.querySelector(".color-code").innerText;
        navigator.clipboard.writeText(colorCode);
    });
});