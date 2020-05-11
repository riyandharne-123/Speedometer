//text box input
function update_speed(){
    var speed=  document.getElementById("speed_val").value;

    document.getElementById("count-up").innerHTML=speed;
    document.getElementById("progress-animation").style.width=speed+"%";
}
