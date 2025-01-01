let screenwidth = window.innerWidth;
let screenheight = window.innerHeight;
let bird=document.getElementById("divbird");
let column_up=document.getElementsByClassName('divcolup');
let column_down=document.getElementsByClassName('divcoldown');


bird.style.left = screenwidth/4 + "px";
bird.style.top = screenheight/2 + "px";
for(let i=0;i<2;i++) {
    column_up[i].style.transform =  `rotate(180deg)`;
    column_up[i].style.left = screenwidth/2 + i*200 + "px";
    column_up[i].style.top = 0 + "px";
    column_down[i].style.left = screenwidth/2 + i*200 + "px";
    column_down[i].style.top = screenheight - column_down[i].offsetHeight + "px";
    
}

setInterval(() => {
    if (bird.offsetTop < screenheight) {
        bird.style.top = bird.offsetTop + 2 + "px";
        onmousedown=function(){
            bird.style.top = bird.offsetTop - 30 + "px";
        }
    }
}, 20);

setInterval(() => {
    if (bird.offsetTop < screenheight) {
        for(let i=0;i<3;i++) {
        column_up[i].style.left = column_up[i].offsetLeft - 2 + "px";
        column_down[i].style.left = column_down[i].offsetLeft - 2 + "px";
        }    
    }
}, 20);

