function bird_move() {
    setInterval(() => {
        bird.style.top = bird.offsetTop + 2 + "px";
        if (bird.offsetTop < screenheight) {
            bird.style.top = bird.offsetTop + 2 + "px";
            onmousedown=function(){
                bird.style.top = bird.offsetTop - 30 + "px";
            }
        }
    }, 100);
}
     