let container = document.getElementById('container');
let button = document.createElement('button');
container.insertBefore(button, container.newDiv);
button.innerText = "Start a New Grid";
document.body.style.textAlign = "center";
button.style.margin = "10px";
button.style.padding = "10px";

//Functions
var squares = 16;
createGrid();

function randomColor() {
    let newColor = 'rgb(' + Math.floor(Math.random() * 255) + "," + 
        Math.floor(Math.random() * 255) + "," + 
        Math.floor(Math.random() * 255) + ')';
    return newColor;
}

//Event Listener for New Grid Button
let newGrid = document.querySelector("button");
newGrid.addEventListener("click", createNewGrid);
function createNewGrid() {
    clearGrid();
    squares = prompt('How many boxes across?');
    createGrid(squares);
}

//Creates the entire Grid
function createGrid() {
    createContainer();
    for(let rows = 0; rows < squares; rows++) {
        for(let cols = 0; cols < squares; cols++) {
            createSquares();
        }
    }
}

//Creates the individual divs
function createSquares(){
    let newSquare = document.createElement('div');
    newDiv.appendChild(newSquare);
    newSquare.addEventListener("mouseover", function(e) {
        e.target.style.backgroundColor = randomColor();
        });
}

//creates container for new grids
function createContainer() {
    let newDiv = document.createElement('div');
    newDiv.id = 'newDiv';
    newDiv.classList.add('gridBox');
    newDiv.style.height = "960px";
    newDiv.style.width = "960px";
    newDiv.style.border = "1px solid black"
    newDiv.style.margin = "0 auto";
    newDiv.style.display = "grid";
    newDiv.style.setProperty('grid-template-columns', `repeat(${squares}, 1fr)`);
    newDiv.style.gridAutoRows = "minmax(1fr, auto)";
    container.appendChild(newDiv);
}

//Deletes the old Grid
function clearGrid() {
    let oldGrid = document.querySelector(".gridBox");
    oldGrid.remove();
}