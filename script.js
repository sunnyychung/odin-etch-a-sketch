
const grid = document.querySelector(".grid-container");

function createGrid() {
    for (let i = 0; i < 16; i++) { 
        // Creates Y axis, 0 to 16 vertically.
        const yAxis = document.createElement("div");
        yAxis.classList.add("y" + i);
        yAxis.style.cssText = "display: flex;";
        grid.appendChild(yAxis);

        // Selects current Y axis grid
        const currentY = document.querySelector(".y" + i);

        for (let j = 0; j < 16; j++) {
            // Creates 0 to 16 boxes horizontally, across X axis
            const xAxis = document.createElement("div");
            xAxis.classList.add("x" + j);
            xAxis.style.cssText = "border: 2px solid black; width: 50px; height: 50px;";
            currentY.appendChild(xAxis);
        }
    }
}

createGrid();