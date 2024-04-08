let tomb = kezdettomb();
let buttons = [];

gyokerpont();
function gyokerpont(){
    document.getElementsByClassName("ujjatek")[0].addEventListener("click", function(){ restart() });
    megjelenit();
}

function kezdettomb(){
    let tomb = [];
    for(let i = 0; i < 3; i++){
        tomb.push([]);
        for(let j = 0; j < 3; j++){
            tomb[i].push(0);
        }
    }
    return tomb;
}

function lep(x, y){
    tomb = valt(x, y)
    tomb = szomszedvalt(x, y);
    console.log("--------------------------------------------")
    megjelenit();
}

function szomszedvalt(x, y){
    tomb = valt(x - 1, y)
    tomb = valt(x + 1, y)
    tomb = valt(x, y - 1)
    tomb = valt(x, y + 1)
    return tomb;
}

function valt(x, y){
    if(x >= 0 && y >= 0 && x < tomb.length && y < tomb[x].length) tomb[x][y] = tomb[x][y] == 0 ? 1 : 0;
    return tomb; 
}

function tombfeltolt(){
    for(let i = 0; i < tomb.length; i++){
        for(let j = 0; j < tomb.length; j++){
            tomb[i][j] = 0;
        }
    }
    return tomb;
}
function randomlampa(){
    //if(/*random < 2*/) tomb[/*rand*/][/*rand*/] = 1;
    return tomb;
}

function megjelenit(){
    let s = "";
    for(let i = 0; i < tomb.length; i++){
        for(let j = 0; j < tomb.length; j++){
            s+=`<button onclick="lep(${i},${j})" class="lampa ${!tomb[i][j] ? "zold" : "sarga"}"></button>`;
        }       
    }
    addInnerHTMLToAllClassName("jatekter", s);
    addInnerHTMLToAllClassName("zoldpont", mennyizold())
}

function mennyizold(){
    let ossz = 0; 
    for(let i = 0; i < tomb.length; i++){
        for(let j = 0; j < tomb.length; j++){
            ossz += !tomb[i][j] ? 1 : 0;
        }       
    }
    return ossz;
}
function mennyisarga(){
    let ossz = 0; 
    for(let i = 0; i < tomb.length; i++){
        for(let j = 0; j < tomb.length; j++){
            ossz += tomb[i][j] ? 1 : 0;
        }       
    }
    return ossz;
}
function restart(){
    tomb = tombfeltolt();
    megjelenit();
    return tomb;
}

function addInnerHTMLToAllClassName(classname, htmlcode){
    let plcl = document.getElementsByClassName(classname);
    for(let i = 0; i < plcl.length; i++){
        plcl[i].innerHTML = htmlcode;
    }
}