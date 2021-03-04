    // alert(document.documentElement.clientHeight)
// console.log(document.documentElement.clientWidth)
var y = innerHeight;
var x = innerWidth


alert("wwxs")
let red = document.getElementById("button-red")
let fuck = document.getElementById("fuck")
let fuck2 = document.getElementById("fuck2")
let endBackground = document.getElementById("back")

let count = 10;
let time = 150


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

moveRed()

function moveRed(){
    fuck.style.top= count+"px"
    fuck2.style.top= count+"px"
    count+=10
    testOn(fuck)
    testOn(fuck2)
    if (count+50>y) {
        count = 0
        time-=10 
        fuck.style.left = getRandomInt(x)+"px"
        fuck2.style.left = getRandomInt(x)+"px"
        return setTimeout(moveRed,time)
    }else{
        return setTimeout(moveRed,time)
    }
}
    
function testOn(elem){
// for(let i=0; i<poz_box_shit.length; i++){
    let left_P = red.offsetLeft;
    let top_P = red.offsetTop;
    let left_P_Shit = elem.offsetLeft;
    let top_P_Shit = elem.offsetTop;
        if( ((left_P > left_P_Shit && left_P < left_P_Shit+20) && (top_P>top_P_Shit && top_P<top_P_Shit+20))||
            ((left_P+50 > left_P_Shit && left_P+50 < left_P_Shit+20) && (top_P+50>top_P_Shit && top_P+50<top_P_Shit+20))||
            ((left_P+50 > left_P_Shit && left_P< left_P_Shit+20) && (top_P+50>top_P_Shit && top_P<top_P_Shit+20))
            ){

            endBackground.style.backgroundImage = "url('data:image/jpeg;base64,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')"
            setTimeout(()=>{
                location.reload()
            },200)
            // alert('проиграл!');
                            
            }
    // }
}

    function handleOrientation(event) {
        // updateFieldIfNotNull('Orientation_a', event.alpha);
        updateFieldIfNotNull('Orientation_b', event.beta);
        updateFieldIfNotNull('Orientation_g', event.gamma);
        incrementEventCount();
    }

    function incrementEventCount(){
        let counterElement = document.getElementById("num-observed-events")
        let eventCount = parseInt(counterElement.innerHTML)
        counterElement.innerHTML = eventCount + 1;
    }
    function updateFieldIfNotNull(fieldName, value, precision=2){
        if (value != null)
            if (fieldName=="Orientation_b") {
                // let y = value.toFixed(precision)
                red.style.top= `${value*(y/90)+(y/2)-25}px`

            }else if (fieldName=="Orientation_g") {
                red.style.left= `${value*(x/90)+(x/2)-25}px`
            }

            document.getElementById(fieldName).innerHTML = value.toFixed(precision)+"22";
    }

    function handleMotion(event) {
        // updateFieldIfNotNull('Accelerometer_gx', event.accelerationIncludingGravity.x);
        // updateFieldIfNotNull('Accelerometer_gy', event.accelerationIncludingGravity.y);
        // updateFieldIfNotNull('Accelerometer_gz', event.accelerationIncludingGravity.z);
        //
        // updateFieldIfNotNull('Accelerometer_x', event.acceleration.x);
        // updateFieldIfNotNull('Accelerometer_y', event.acceleration.y);
        // updateFieldIfNotNull('Accelerometer_z', event.acceleration.z);
        //
        // updateFieldIfNotNull('Accelerometer_i', event.interval, 2);
        //
        // updateFieldIfNotNull('Gyroscope_z', event.rotationRate.alpha);
        // updateFieldIfNotNull('Gyroscope_x', event.rotationRate.beta);
        // updateFieldIfNotNull('Gyroscope_y', event.rotationRate.gamma);
        incrementEventCount();
    }

    let is_running = false;
    let demo_button = document.getElementById("start_demo");

    demo_button.onclick = function(e) {
        e.preventDefault();

        // Request permission for iOS 13+ devices
        if (
            DeviceMotionEvent &&
            typeof DeviceMotionEvent.requestPermission === "function"
        ) {
            DeviceMotionEvent.requestPermission();
        }

        if (is_running){
            window.removeEventListener("devicemotion", handleMotion);
            window.removeEventListener("deviceorientation", handleOrientation);
            demo_button.innerHTML = "Start demo";
            demo_button.classList.add('btn-success');
            demo_button.classList.remove('btn-danger');
            is_running = false;
        }else{
            window.addEventListener("devicemotion", handleMotion);
            window.addEventListener("deviceorientation", handleOrientation);
            document.getElementById("start_demo").innerHTML = "Stop demo";
            demo_button.classList.remove('btn-success');
            demo_button.classList.add('btn-danger');
            is_running = true;
        }
    };
