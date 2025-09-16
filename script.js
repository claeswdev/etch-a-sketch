const body = document.querySelector("body");
const container = document.querySelector(".container");

const setGridButton = document.createElement("button");
setGridButton.textContent = "Set Grid";
setGridButton.addEventListener("click", () => {
    while (true) {
        let userInput = prompt("Set the number of squares per side for the grid (max 100)", 16);
        if (userInput === null) break;
        if ((typeof parseInt(userInput) === "number") && ((userInput > 0) && (userInput <= 100))) {
            setGrid(userInput);
            break;
        }
    }
});
body.prepend(setGridButton);

function setGrid(num) {
    container.innerHTML = "";
    for (let i = 0; i < (num * num); i++) {
        const square = document.createElement("div");
        const squareSize = container.clientWidth / num;
        square.style.cssText = `width: ${squareSize}px; height: ${squareSize}px`;
        square.classList.toggle("thin-dark-border");
        square.addEventListener("mouseenter", 
            () => square.classList.toggle("hover"));
        container.appendChild(square);
    }
}

setGrid(16);