let file = 'assets/'
let ImagePath = '.svg';
let newImagePath = '_solid.svg';

function changeImagePath(x) {
    let imageElement = document.getElementById(x);
    imageElement.src = file + x + newImagePath;
}

function restoreImagePath(x) {
    let imageElement = document.getElementById(x);
    imageElement.src = file + x + ImagePath;
}