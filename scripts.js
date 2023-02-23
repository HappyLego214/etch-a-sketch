const grids = document.querySelectorAll('.grid-options');
const gridContainer = document.querySelector('.grid-container');

grids.forEach((grid) => {
    grid.addEventListener('click', event => {
        if (grid.id == "one") {
            for (i = 0; i < 225; i++) {
                clearGrid()
                document.getElementById("g-container").style.gridTemplateColumns = "repeat(15, minmax(1px, 1fr))";
                document.getElementById("g-container").style.gridTemplateRows = "repeat(15, minmax(1px, 1fr));"
                const divGrid = document.createElement('div');
                divGrid.classList.add('cell');
                gridContainer.appendChild(divGrid);
            }

        } else if (grid.id == "two") {
            for (i = 0; i < 900; i++) {
                clearGrid()
                document.getElementById("g-container").style.gridTemplateColumns = "repeat(30, minmax(1px, 1fr))";
                document.getElementById("g-container").style.gridTemplateRows = "repeat(30, minmax(1px, 1fr));"
                const divGrid = document.createElement('div');
                divGrid.classList.add('cell');
                gridContainer.appendChild(divGrid);
            }

        } else if (grid.id == "three") {
            for (i = 0; i < 3600; i++) {
                clearGrid()
                document.getElementById("g-container").style.gridTemplateColumns = "repeat(60, minmax(1px, 1fr))";
                document.getElementById("g-container").style.gridTemplateRows = "repeat(60, minmax(1px, 1fr));"
                const divGrid = document.createElement('div');
                divGrid.classList.add('cell');
                gridContainer.appendChild(divGrid);
                
            }
        }
    });
});
