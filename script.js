const container = document.querySelector(".container");
for (let i = 0; i < (16 * 16); i++) {
    const square = document.createElement("div");
    square.classList.toggle("square");
    square.addEventListener("mouseenter", 
        () => square.classList.toggle("hover"));
    container.appendChild(square);
}

const button = document.createElement("button");
button.textContent = "Set Grid";
button.addEventListener("click", () => {
    let userInput = +prompt("Enter the size of a side for the grid (max 100)", 16);
})