    // alert(document.documentElement.clientHeight)
// console.log(document.documentElement.clientWidth)
var y = innerHeight;
var x = innerWidth

alert("wwxs")
let red = document.getElementById("button-red")
let fuck = document.getElementById("fuck")
let count = 10;
let time = 250

moveRed()

function moveRed(){
    fuck.style.top= count+"px"
    count+=10
    if (count+50>y) {
        count = 0
        time-=50 
        return setTimeout(moveRed,time)
    }else{
        return setTimeout(moveRed,time)
    }
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
