// Show Button
function Show(){
    var date=new Date();
    var h=date.getHours();
    var m=date.getMinutes();
    var s=date.getSeconds();
    m=check(m);
    s=check(s);
    document.getElementById('result').innerHTML=h+" : "+m+" : "+s; 

}
function check(i){
    if(i<10)
    {
        i= "0"+i;
    }
    return i;
}

// Start Button
function Start(){
    stop = setInterval(Show,1000);
}

// Stop Button
function Stop(){
    clearInterval(stop);
}
