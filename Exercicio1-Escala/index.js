let escala = (line) => {
    let start = 1;
    while (0!= line){
        console.log(" ".repeat(line-1) + "*".repeat(start));
        line --;
        start ++;
    }
}
escala(6);

