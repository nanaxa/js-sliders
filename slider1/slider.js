const images = ["img/1.png","img/2.jpg","img/3.jpg"];

let i=1;

function next() {    
    if(i==images.length) {
        i = 0;
    }
    let key = document.getElementById("slider");
    key.src = images[i];
    i++;
}
