var car , wall;
var speed , weight ;

function setup() {
createcanvas(1600,400);
car= createsprite(1200,200,60,100);
wall = createsprite(1200,200,60,100);
      car.velocityX = 5 ;
speed = random (25,31);
weight= random (400,1500);  }

function draw() {
background("green");

if(wall.x-car.x< (car.width+wall.width)/2){
car.velocityX=0;
var deformation=0.5*weight*speed*speed/22509;
if(deformation>180){
    car.shapeColor=color("yellow");
    wall.shapeColor=color("white"); }

if(deformation<180 && deformation>100){
    car.shapeColor=color("green");
    wall.shapeColor=color("white"); }

if(deformation<100){
    car.shapeColor=color("green");
    wall.shapeColor=color("white"); }
}
drawSprites();
}


