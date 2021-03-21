var car
var wall
function setup() {
createCanvas(800,400);
car=createSprite(400, 200, 70, 30);
car.shapeColor="red"
wall=createSprite(800,200,20,80)
wall.shapeColor="brown"
}
function draw() {
background("black"); 
console.log(car.x-wall.x)
if(car.x-wall.x<-44){
  car.shapeColor="yellow"
}
else{
    car.shapeColor="red"
}
if(car.isTouching(wall)){
    car.velocity=0
}

if (keyDown("space")) { 
car.velocityX = 4;
}
drawSprites();
}