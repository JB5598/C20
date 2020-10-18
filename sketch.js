var fixrect,movingrect; 
var rect1,rect2; 


function setup() {
  createCanvas(800,400);
  fixrect = createSprite(400, 200, 50, 50);
  movingrect = createSprite(200,200, 30,30); 
  rect1 = createSprite(50,50,40,40); 
  rect2 = createSprite(750,50,40,40); 
  rect1.shapeColor = "green";
  rect1.velocityX = 2;  
  rect2.shapeColor = "yellow"; 
  rect2.velocityX = -2 ; 
}

function draw() {
  background(0);
  movingrect.x = World.mouseX; 
  movingrect.y = World.mouseY; 
  if(movingrect.x  - fixrect.x <= movingrect.width/2 + fixrect.width/2 &&
    fixrect.x- movingrect.x <=  movingrect.width/2 + fixrect.width/2 &&
    movingrect.y  - fixrect.y <= movingrect.height/2 + fixrect.height/2 &&
    fixrect.y- movingrect.y <=  movingrect.height/2 + fixrect.height/2
    ) { 
    movingrect.shapeColor ="red"; 
    fixrect.shapeColor = "red";
    
  }
  else{
    fixrect.shapeColor = "blue"; 
    movingrect.shapeColor = "blue"; 
  }
  if(rect1.x - rect2.x <= rect1.width/2 + rect2.width/2 &&
    rect2.x - rect1.x <= rect1.width/2 + rect2.width/2 ){
      rect1.velocityX = rect1.velocityX * (-1);
      rect2.velocityX = rect2.velocityX * (-1); 
    }
  if(rect1.y - rect2.y <= rect1.height/2 + rect2.height/2 &&
      rect2.y - rect1.y <= rect1.height/2 + rect2.height/2 ){
        rect1.velocityY = rect1.velocityY * (-1);
        rect2.velocityY = rect2.velocityY * (-1); 
      }
  drawSprites();

}