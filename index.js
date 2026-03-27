
let count = 0;

function increase(){
    count++;
    document.getElementById("count").innerHTML=count;
}

function decrease(){
   
    if(count>=1){
        count--;
        document.getElementById("count").innerHTML=count;
    }
}

function reset() {
    count = 0;
    document.getElementById("count").innerText = count;
}


