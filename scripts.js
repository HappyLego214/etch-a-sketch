const gridOptions = document.querySelectorAll('.grid-options');
const gridContainer = document.querySelector('.grid-container');
const cleanButton = document.querySelector("#cleanTool");
const gridColumns = document.getElementById("g-container");
const gridRows = document.getElementById("g-container");
 
window.addEventListener('load', () => {
    firstOption();
});

gridOptions.forEach((grid) => {
    grid.addEventListener('click', () => {
        if (grid.id == "one") {
            firstOption();
        } else if (grid.id == "two") {
            secondOption();
        } else if (grid.id == "three") {
            thirdOption();
        }
    });
});

function firstOption() {
    gridContainer.replaceChildren();
    for (i = 0; i < 225; i++) {
        gridColumns.style.gridTemplateColumns = "repeat(15, minmax(1px, 1fr))";
        gridRows.style.gridTemplateRows = "repeat(15, minmax(1px, 1fr));"
        const divGrid = document.createElement('div');
        divGrid.classList.add('cell');
        divGrid.setAttribute('id', 'gridCell')
        gridContainer.appendChild(divGrid);
    }
}

function secondOption() {
    gridContainer.replaceChildren();
    for (i = 0; i < 900; i++) {;
        gridColumns.style.gridTemplateColumns = "repeat(30, minmax(1px, 1fr))";
        gridRows.style.gridTemplateRows = "repeat(30, minmax(1px, 1fr));"
        const divGrid = document.createElement('div');
        divGrid.classList.add('cell');
        divGrid.setAttribute('id', 'gridCell')
        gridContainer.appendChild(divGrid);
    }
}

function thirdOption() {
    gridContainer.replaceChildren();;
    for (i = 0; i < 3600; i++) {
        gridColumns.style.gridTemplateColumns = "repeat(60, minmax(1px, 1fr))";
        gridRows.style.gridTemplateRows = "repeat(60, minmax(1px, 1fr));"
        const divGrid = document.createElement('div');
        divGrid.classList.add('cell');
        divGrid.setAttribute('id', 'gridCell')
        gridContainer.appendChild(divGrid);
        
    }
}

