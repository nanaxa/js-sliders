const images = ["img/1.jpg", "img/2.jpg", "img/3.jpg"];

let i = 1;
let key = document.getElementById("slider");

function next() {
    if (i == images.length) {
        i = 0;
    }
    key.src = images[i];
    i++;
    console.log(i);
}

function prev() {
    i--;
    if (i < 0) {
        i = images.length - 1;
    }
    key.src = images[i];
    console.log(i);
}