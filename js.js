var svg = document.getElementById("svg");
var dvdB = document.getElementById("dvd");
var clear = document.getElementById("clear");
var NS = "http://www.w3.org/2000/svg"
var elements = [];
var requestId;

var newCircle = function(){
    var circle = document.createElementNS(NS, "circle");
    circle.setAttribute("cx", svg.getAttribute("width")/2);
    circle.setAttribute("cy", svg.getAttribute("height")/2);
    circle.setAttribute("r", 20);
    circle.setAttribute("fill","lightsteelblue");
    circle.setAttribute("stroke","black");
    svg.appendChild(circle);
    elements.push([circle, 5, 3]);
}

var animateDvd = function(e){
    for(var i = 0; i < elements.length; i++){
	var element = elements[i][0];
	var x = Number(element.getAttribute("cx"));
	var y = Number(element.getAttribute("cy"));
	var xVel = elements[i][1];
	var yVel = elements[i][2];
	var newX = x+xVel;
	var newY = y+yVel;
	
	if(newX < 20) newX = 20;
	if(newX > 480) newX = 480;
	if(newY < 20) newY = 20;
	if(newY > 480) newY = 480;

	element.setAttribute("cx", newX);
	element.setAttribute("cy", newY);
	if(newY <= 20 || newY >= 480) elements[i][2] *= -1
	if(newX <= 20 || newX >= 480) elements[i][1] *= -1
    }
}

requestId = setInterval(animateDvd, 17);

var end = function(e){
    svg.innerHTML = "";
    clearInterval(requestId);
}

svg.addEventListener("click", newCircle);
clear.addEventListener("click", end);
