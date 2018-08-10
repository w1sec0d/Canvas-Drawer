var papertr = document.getElementById("paper");
var d = papertr.getContext('2d');

var text = document.getElementById("movement");
var color = document.getElementById("color");
var thickness = document.getElementById("thickness")

var xI = 400;        //Initial X position
var yI = 250;        //Initial Y position
var movement = 0;

pen.addEventListener("click",pencil)        //Sets pencil mode
function pencil(){
  color.value = "#efa418";
  thickness.value = 10;
}

eraser.addEventListener("click",erase);     //Sets eraser mode
function erase() {
 color.value = "#808080";
 thickness.value = 50;
}

reset_button.addEventListener("click",reset);      //Resets everything
function reset(){
  color.value = "#808080";
  thickness.value = 1000;
  draw(0,0,800,500);
  color.value = "#efa418";
  thickness.value = 10;
  xI = 400;
  yI = 250;
}

document.addEventListener("keydown",draw2);   //Detects when a key is pressed down and runs draw2 function
var teclas = {
  UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39
};
console.log(teclas);


function draw(xi,yi,xf,yf)                              //drawing function
  {
    d.lineWidth = thickness.value;
    d.strokeStyle = color.value;
    d.beginPath();
    d.moveTo(xi,yi);
    d.lineTo(xf,yf);
    d.closePath();
    d.stroke();
  }
function draw2(event2)
{
  var movement = parseInt(text.value);
  switch (event2.keyCode)
  {
    case teclas.UP:                           //runs when arrowup is pressed down
    draw(xI,yI,xI,yI - movement);
    yI = yI - movement;
    break;

    case teclas.DOWN:                           //runs when arrowdown is pressed
    draw(xI,yI,xI,yI + movement);
    yI = yI + movement;
    break;

    case teclas.LEFT:                           //runs when arrowleft is pressed
    draw(xI,yI,xI - movement,yI);
    xI = xI - movement;
    break;

    case teclas.RIGHT:                           //runs when arrowright is pressed
    draw(xI,yI,xI + movement,yI);
    xI = xI + movement;
    break;
  }
}
function dibujaTeclado(evento)                  //just an example, ignore it
{
    if (evento.keyCode == teclas.DOWN)
    {
      alert("Abajo");
    }

    if (evento.keyCode == teclas.UP)
    {
      alert("Arriba");
    }

    if (evento.keyCode == teclas.LEFT )
    {
      alert("Izquierda");
    }

    if (evento.keyCode == teclas.RIGHT) {
      alert("Derecha");
    }

}
