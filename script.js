
const grid = document.querySelector(".grid-container");

function createGrid() {
    for (let i = 0; i < 50; i++) { 
        // Creates Y axis, 0 to 16 vertically.
        const yAxis = document.createElement("div");
        yAxis.classList.add("y" + i);
        yAxis.style.cssText = "display: flex; flex: 1 1 auto;";
        grid.appendChild(yAxis);

        // Selects current Y axis grid
        const currentY = document.querySelector(".y" + i);

        for (let j = 0; j < 50; j++) {
            // Creates 0 to 16 boxes horizontally, across X axis
            const xAxis = document.createElement("div");
            xAxis.classList.add("x" + j);
            xAxis.style.cssText = "display: flex; flex: 1 1 auto; border: 2px solid black; min-height: 0px;";
            currentY.appendChild(xAxis);

            // Drawing Effect, Hover
            xAxis.addEventListener("mouseover", () => {
                xAxis.classList.add("hover");
            });
        }
    }
}

createGrid();