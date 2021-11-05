var canvas,bg;
var together;
var cat, catImg1,catImg2;
var mouse, mouseImg1,mouseImg2;

function preload() {
    bg = loadImage("images/garden.png");
    catImg1= loadAnimation("images/catSitting.png");
    catImg2=loadAnimation("images/catWalking1.png","images/catWalking2.png");
    catImg3= loadAnimation("images/catHappy.png");
    mouseImg1=loadAnimation("images/mouseGift.png");
    mouseImg2= loadAnimation("images/mouseTease1.png","images/mouseTease2.png");
    mouseImg3=loadAnimation("images/mouseHappy.png");
}

function setup(){
    canvas = createCanvas(windowWidth,windowHeight);

    mouse = createSprite(100, 600);
    mouse.addAnimation("mouseStanding", mouseImg1);
    mouse.scale = 0.15;
    
    cat = createSprite(width-100, 600);
    cat.addAnimation("catSleeping", catImg1);
    cat.scale = 0.25;

    

}

function draw() {;

    background(bg);

if(cat.x-mouse.x < mouse.width/2+cat.width/2){
cat.velocityX=0
cat.addAnimation( 'happy',catImg3)

cat.scale=0.2
cat.changeAnimation( 'happy',catImg3)

mouse.addAnimation(mouseImg2)
mouse.scale=0.1
mouse.changeAnimation(mouseImg2)
}
    drawSprites();
    
}


function makeCatWalk(){

        mouse.addAnimation("mouseTeasing", mouseImg2)
        mouse.changeAnimation("mouseTeasing");
        mouse.frameDelay = 25; 

        cat.velocityX = -5; 
        cat.addAnimation("catRunning", catImg2);
        cat.changeAnimation("catRunning");
}


function keyPressed()
{
if (keyCode===LEFT_ARROW)
{
  makeCatWalk();
}



}


