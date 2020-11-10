
var fixedrect,movingrect;


function setup() {
  createCanvas(800,400);
fixedrect =createSprite (400,200,50,80);
movingrect=createSprite(200,100,80,50);
movingrect.shapeColor="red";
fixedrect.shapeColor="green";
movingrect.debug=true;
fixedrect.debug=true;
}

function draw() {
  background("blue"); 
  
movingrect.x=mouseX;
movingrect.y=mouseY;

console.log(movingrect.x-fixedrect.x);

if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2
  && fixedrect.x-movingrect.x <fixedrect.width/2+movingrect.width/2 && 
  movingrect.y-fixedrect.y<fixedrect.width/2+movingrect.width/2 &&
  fixedrect.y-movingrect.y <fixedrect.width/2+movingrect.width/2
  ){
  movingrect.shapeColor="black";
  fixedrect.shapeColor="pink";
}
else{
  movingrect.shapeColor="red";
fixedrect.shapeColor="green";







}
  drawSprites();
}