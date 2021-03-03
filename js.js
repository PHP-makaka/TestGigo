window.addEventListener("deviceorientation", orientation, true);

function orientation(event) {
  var x = event.beta;
  var y = event.gamma;
 console.log("!!1"+x) 
alert(x,y)
}