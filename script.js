let screenwidth = window.innerWidth;
let screenheight = window.innerHeight;
let bird=document.getElementById("divbird");
let column_up=document.getElementsByClassName('divcolup');
let column_down=document.getElementsByClassName('divcoldown');
let msg=document.getElementById("msg")

bird.style.left = screenwidth/4 + "px";
bird.style.top = screenheight/2 + "px";

for(let i=0;i<5;i++) { 
    column_pos(column_up[i],column_down[i],i)
}

setInterval(() => {
    column_move()   
}, 50);


