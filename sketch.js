var thickness,wall;
var  bullet ,speed,wieght;




function setup() {
  createCanvas(1600,400);
  bullet= createSprite(100, 200, 15, 5);
  wall = createSprite(1500,200,thickness,200)
  thickness= random(22,83);
  speed= random(50,120);
  wieght=random(400,1500);
  wall.shapeColor=color(80,80,80)
}

function draw() {
  background(255,255,255);  
  
  bullet.velocityX =speed;

  if((wall.x-bullet.x ) <  (bullet.width+wall.width)/2){

  bullet.velocityX=0;
  var damage =(0.5*wieght*speed*speed)/(thickness*thickness*thickness);
  if(damage<10)
{
  wall.shapeColor=color(0,255,0);
}
if(damage>10){
  wall.shapeColor=color(255,0,0);

}

  }
 
  drawSprites();


  console.log(damage);
  console.log(thickness);
  console.log(speed);
  console.log(wieght);
}
