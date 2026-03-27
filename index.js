
let count = 0;

function increase(){
    count++;
    document.getElementById("ctr_data").innerHTML=count;
}

function decrease(){
   
    if(count>=1){
        count--;
        document.getElementById("ctr_data").innerHTML=count;
    }
}



