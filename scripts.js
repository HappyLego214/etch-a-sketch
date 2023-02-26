const gridContainer = document.querySelector('.grid-container');
const generateCustomGrid = document.querySelector(".generate");

const gridOptions = document.querySelectorAll('.grid-options');
const cleanButton = document.querySelector("#cleanTool");

const gridIndex = document.getElementById("g-container");
const getCustomValue = document.getElementById('input-custom-grid');
const gridCell = document.getElementById("gridCell");

gridContainer.addEventListener("mouseover", (e) => {
    const target = e.target.closest("#gridCell");
    if (target) {
        target.style.backgroundColor = 'red';
    }
})

cleanButton.addEventListener('click', (e) => {
    const nodes = gridContainer.childNodes;
    for (i = 0; i < nodes.length; i++) {
        if (nodes[i].nodeName.toLowerCase() == 'div') {
            nodes[i].style.backgroundColor = '';
        }
    }

});

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
 
window.addEventListener('load', () => {
    createCustomGrid(15);
});

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





