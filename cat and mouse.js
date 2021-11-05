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
    canvas = createCanvas(1000,800);

    mouse = createSprite(200, 600);
    mouse.addAnimation("mouseStanding", mouseImg1);
    mouse.scale = 0.15;
    
    cat = createSprite(900, 600);
    cat.addAnimation("catSleeping", catImg1);
    cat.scale = 0.25;

    makeCatWalk();

}

function draw() {;

    background(red);

if(TransformStream.x-jerry.x < (tom.width-jerry))
cat.velocityX=0
cat.addAnimation(catImg2)
cat.x=300
cat.scale=0.2
cat.changeAnimation(catImg3)

mouse.addAnimation(mouseImg2)
mouse.scale=0.1
mouse.changeAnimation(catImg3)

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
