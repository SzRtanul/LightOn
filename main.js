gyokerpont();
function gyokerpont(){
    
}

function lep(tomb, x, y){
    tomb = valt(tomb, x, y)
    tomb = szomszedvalt();
    return tomb;
}

function szomszedvalt(tomb, x, y){
    tomb = valt(tomb, x - 1, y)
    tomb = valt(tomb, x + 1, y)
    tomb = valt(tomb, x, y - 1)
    tomb = valt(tomb, x, y + 1)
    return tomb;
}

function valt(tomb, x, y){
    if(x >= 0 && y >= 0 && x < tomb.length && y < tomb[x].length) tomb[x][y] = !tomb[x][y] ? 1 : 0;
    return tomb; 
}
function tombfeltolt(tomb){
    for(let i = 0; i< tomb.length; i++){
        for(let j = 0; j < tomb.length; j++){
            tomb[i][j] = 0;
        }
    }
    return tomb;
}
function randomlampa(tomb){
    //if(/*random < 2*/) tomb[/*rand*/][/*rand*/] = 1;
    return tomb;
}

function megjelenit(tomb){
    let s = "";
    for(let i = 0; i < tomb.length; i++){
        for(let j = 0; j < tomb.length; j++){
            s+=`<div class="lampa ${!tomb[i][j] ? "zold" : "sarga"}"></div>`;
        }       
    }
}

function mennyizold(tomb){
    let ossz = 0; 
    for(let i = 0; i < tomb.length; i++){
        for(let j = 0; j < tomb.length; j++){
            ossz+=tomb[i][j] ? 1 : 0;
        }       
    }
    return ossz;
}
function restart(tomb){
    tomb = tombfeltolt();
    megjelenit();
    return tomb;
}