function column_move() {

    bird.style.top = bird.offsetTop + 2 + "px";
    if (bird.offsetTop < screenheight) {
        bird.style.top = bird.offsetTop + 2 + "px";
        onmousedown=function(){
            bird.style.top = bird.offsetTop - 30 + "px";
        }
    }
    if (bird.offsetTop < screenheight) {
        for(let i=0;i<5;i++) {
            if((column_up[i].offsetLeft+100) > 0) {
                column_up[i].style.left = column_up[i].offsetLeft - 2 + "px";
                column_down[i].style.left = column_down[i].offsetLeft - 2 + "px";
            } else {
                column_pos(column_up[i],column_down[i],i)
            }
        }        

    } 
       
}