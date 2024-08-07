const grid = document.querySelector(".grid-container");

function createGrid(gridSize = 16) {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    };

    for (let i = 0; i < gridSize; i++) { 
        // Creates Y axis, 0 to 16 vertically.
        const yAxis = document.createElement("div");
        yAxis.classList.add("y" + i);
        yAxis.style.cssText = "display: flex; flex: 1 1 auto;";
        grid.appendChild(yAxis);

        // Selects current Y axis grid
        const currentY = document.querySelector(".y" + i);

        for (let j = 0; j < gridSize; j++) {
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

function sizeGrid() {
    size = prompt("What size would you like? \n Example: 20 give an 20x20 grid \n MAX: 100x100 ");
    size = parseInt(size);
    if (size > 100) {
        alert("Try again");
    }
    else {
        createGrid(size);
    }
}

const gridSize = document.querySelector('#gridSize')

gridSize.addEventListener('click', () => {
    sizeGrid()
});

createGrid();