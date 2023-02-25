const gridOptions = document.querySelectorAll('.grid-options');
const gridContainer = document.querySelector('.grid-container');
const cleanButton = document.querySelector("#cleanTool");
const generateCustomGrid = document.querySelector(".generate");

const gridIndex = document.getElementById("g-container");
const getCustomValue = document.getElementById('input-custom-grid');
 
// window.addEventListener('load', () => {
//     firstOption();
// });

gridOptions.forEach((option) => {
    option.addEventListener('click', () => {
        if (option.id == "one") {
            let value = 15
            createCustomGrid(value);
        } else if (option.id == "two") {
            let value = 30
            createCustomGrid(value);
        } else if (option.id == "three") {
            let value = 60
            createCustomGrid(value);
        }
    });
});

generateCustomGrid.addEventListener('click', () => {
    let value = getCustomValue.value;
    createCustomGrid(value);
}) 

function createCustomGrid(grid) {
    gridContainer.replaceChildren();
    gridIndex.style.setProperty('--gridIndex', grid);
    for (i = 0; i < (grid * grid); i++) {
        const divGrid = document.createElement('div');
        divGrid.classList.add('cell');
        divGrid.setAttribute('id', 'gridCell')
        gridContainer.appendChild(divGrid);
    }
}


