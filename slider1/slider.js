const images = ["img/1.png","img/2.jpg","img/3.jpg"];

let i=1;

function next() {    
    if(i==images.length) {
        i = 0;
    }
    let key = document.getElementById("slider");
    key.src = images[i];
    i++;
    console.log(i);
}

function prev() {
    
    let slide = document.getElementById("slider");
    i--;
    if(i<0) {
        i=images.length-1;
    }
    slide.src = images[i];
    console.log(i);
}
