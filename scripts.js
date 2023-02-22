const grid = document.querySelector('.grid-options');
const gridContainer = document.querySelector('.grid-container');

grid.addEventListener('click', () => {
    for (i = 0; i < 225; i++) {
        const divGrid = document.createElement('div');
        divGrid.classList.add('cell');
        grid
        gridContainer.appendChild(divGrid);
    }
})
