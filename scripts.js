const gridContainer = document.querySelector('.grid-container');
const generateCustomGrid = document.querySelector(".generate");

const gridOptions = document.querySelectorAll('.grid-options');
const cleanButton = document.querySelector("#cleanTool");
const rgbColor = document.querySelector("#rgbTool");
const eraser = document.querySelector("#eraserTool");
const fillTool = document.querySelector("#fillTool");

const gridIndex = document.getElementById("g-container");
const getCustomValue = document.getElementById('input-custom-grid');
const gridCell = document.getElementById("gridCell");

let currentTool = null;

rgbColor.addEventListener('click', () => {
     gridPainter('rgbTool');
});

eraser.addEventListener('click', () => {
    gridPainter('transparent');
})

cleanButton.addEventListener('click', () => {
    gridFill('transparent');
});

fillTool.addEventListener('click', () => {
    gridFill('rgbTool');
});


function gridPainter(entry) {
    if (entry == "rgbTool") {
        gridContainer.addEventListener("mouseover", (e, rgb) => {
            rgb = randomColor();
            const target = e.target.closest("#gridCell");
                if (target) {
                    target.style.backgroundColor = rgb;
                }
        });
    } else {
        gridContainer.addEventListener("mouseover", (e, rgb) => {
            rgb = entry;
            const target = e.target.closest("#gridCell");
                if (target) {
                    target.style.backgroundColor = rgb;
                }
        });
    }
}

function randomColor() {
    let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

function gridFill(e) {
    if (e == "rgbTool") {
        const nodes = gridContainer.childNodes;
        for (i = 0; i < nodes.length; i++) {
            if (nodes[i].nodeName.toLowerCase() == 'div') {
                nodes[i].style.backgroundColor =  randomColor();
            }
        }
    } else {
        const nodes = gridContainer.childNodes;
        for (i = 0; i < nodes.length; i++) {
            if (nodes[i].nodeName.toLowerCase() == 'div') {
                nodes[i].style.backgroundColor =  e;
            }
        }
    }
};

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





