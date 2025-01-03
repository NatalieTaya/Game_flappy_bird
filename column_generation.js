function column_pos() {
    let columns = new Array(10)
    let pics = new Array(10)

    for (let i = 0; i<5 ; i++) {
        columns[i] = document.createElement("div")
        columns[i].style.position = "absolute"
        pics[i] = new Image()
        pics[i].src = "column.png"
        columns[i].appendChild(pics[i])
        columns[i].style.top = screenheight - Math.random()*((300-100)+ 200) + "px"
        columns[i].style.left = screenwidth + i*screenwidth/3 +"px"
        document.getElementById("main").appendChild(columns[i]);
        
    }
    for (let i = 5; i<10 ; i++) {
        columns[i] = document.createElement("div")
        columns[i].style.position = "absolute"
        pics[i] = new Image()
        pics[i].src = "column.png"
        columns[i].style.transform =  `rotate(180deg)`;
        columns[i].appendChild(pics[i])
        columns[i].style.top = - Math.random()*((300-100)+ 200) + "px"
        columns[i].style.left = screenwidth + (i-5)*screenwidth/3 +"px"
        document.getElementById("main").appendChild(columns[i]);
    }
     
    setInterval(() => {
        for (let i = 0; i<10 ; i++) {
            columns[i].style.left=columns[i].offsetLeft - 2 +"px"
            if (columns[i].offsetLeft +100 < 0 && i < 5) {
                columns[i].style.top = screenheight - Math.random()*((300-100)+ 200) + "px"
                columns[i].style.left = screenwidth +"px"
            } else if(columns[i].offsetLeft +100 < 0 && i >= 5) {
                columns[i].style.top = - Math.random()*((300-100)+ 200) + "px";
                columns[i].style.left = screenwidth +"px"
            }
        }
    }, 10);
}
