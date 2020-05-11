//text box input
function update_speed(){
    var speed=document.getElementById("speed_val").value;
if(speed==0){
    alert('enter a speed above 0');
    speed=0;
}


    document.getElementById("count-up").innerHTML=speed;
    document.getElementById("progress-animation").style.width=speed+"%";
    var color_code= document.getElementById("progress-animation").style.width;
    //console.log(color_code);
//changing progress bar colour
var progress_colour=parseInt(color_code);

if(progress_colour<=50){
    $("#progress-animation").removeClass("bg-warning");
    $("#progress-animation").removeClass("bg-danger");
    $("#progress-animation").addClass("bg-success");
}
if(progress_colour>50&&progress_colour<=70){
   
    $("#progress-animation").removeClass("bg-success");
    $("#progress-animation").removeClass("bg-danger");
    $("#progress-animation").addClass("bg-warning");
}
 if(progress_colour>=70&&progress_colour<=100){
    $("#progress-animation").removeClass("bg-success");
    $("#progress-animation").removeClass("bg-warning");
    $("#progress-animation").addClass("bg-danger");
}
if(progress_colour>100){
    $("#progress-animation").removeClass("bg-success");
    $("#progress-animation").removeClass("bg-warning");
    $("#progress-animation").addClass("bg-danger");
    alert("you are driving dangerously");
}
}