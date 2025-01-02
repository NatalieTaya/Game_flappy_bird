function column_pos(column_up,column_down,i) {
    column_up.style.transform =  `rotate(180deg)`;
    column_up.style.left = screenwidth  + i*(screenwidth/4) + "px";
    column_up.style.top = - Math.random()*((300-100)+ 200) + "px";
    column_down.style.left = screenwidth + i*(screenwidth/4) + "px";
    column_down.style.top = screenheight + Math.random()*((300-100)+ 200) 
        - column_down.offsetHeight + "px";
}