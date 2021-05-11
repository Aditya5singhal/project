

var boy,boyImage1,coin1image,coin2image,coin3image,robotimage,virus1image,virus2image;
// create database and position variable here
var database;
var boyposition;
var position=0;
function preload(){
   bg =loadImage("cityImage.png");
   boyImage1=loadImage("images/boyimg.png");
   coin1image=loadImage("images/coin1.gif")
   coin2image=loadImage("images/coin2.gif")
   coin3image=loadImage("images/coin3.gif")
   robotimage=loadImage("images/robot.gif")
   virus1image=loadImage("images/virus1.gif")
   virus2image=loadImage("images/virus2.gif")
   
  }

//Function to set initial environment
function setup() {
database=firebase.database();

createCanvas(1500,700);
 
bg1=createSprite(700,350)
bg1.addImage("bgimage",bg)
bg1.scale=0.7;
bg1.velocityX=-2
  boy=createSprite(250,450,150,150); 
  boy.addImage("hotAirboy",boyImage1);
  boy.scale=0.3;

 
  boyposition = database.ref('boy/height');
  boyposition.on('value',readPosition,showError);

  textSize(20); 
}

// function to display UI
function draw() {
  background("white")
if(bg1.x<0){
  bg1.x=bg1.width/2
}
  if(keyDown(LEFT_ARROW)){
    boy.addImage("hotAirboy",boyImage1);
    //write code to move air boy in left direction
   // boy.x=boy.x-10;
   changePosition(-3,0);
  }
  else if(keyDown(RIGHT_ARROW)){
    boy.addImage("hotAirboy",boyImage1);
    //write code to move air boy in right direction
   // boy.x=boy.x+10;
   changePosition(3,0);
  }
  else if(keyDown(UP_ARROW)){
    boy.addImage("hotAirboy",boyImage1);
    //write code to move air boy in up direction
    //boy.y=boy.y-10;
    changePosition(0,-3);
  }
  else if(keyDown(DOWN_ARROW)){
    boy.addImage("hotAirboy",boyImage1);
    //write code to move air boy in down direction
    //boy.y=boy.y+10;
  changePosition(0,3);
   
  }
  spawnobjects();
 
  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air boy!",40,40);
}


function changePosition(x,y){
  //boy.x = ball.x + x;
  //boy.y = ball.y + y;    
  database.ref('boy/height').set({
 x:position.x+x,
 y:position.y+y

  });
}

function readPosition(data){
position=data.val();
boy.x=position.x;
boy.y=position.y;
}

function showError (){
  console.log("Error in database");
}
function spawnobjects(){
  var axis=Math.round(random(20,500))
  var axis1=Math.round(random(30,450))
  var axis2=Math.round(random(40,550))
  var axis3=Math.round(random(50,600))
  var axis4=Math.round(random(60,650))
  if(frameCount%500===0){
    
  coin=createSprite(1500,axis)
  coin.addImage("coin",coin1image)
coin.velocityX=-5
  }
  if(frameCount%300===0){
  coin2=createSprite(1550,axis2)
  coin2.addImage("coin",coin2image)
  coin2.velocityX=-3
}
if(frameCount%450===0){
  coin3=createSprite(1350,axis3)
  coin3.addImage("coin",coin3image)
  coin3.velocityX=-6
}
if(frameCount%500===0){
  robot=createSprite(1400,axis4)
  robot.addImage("robot",robotimage)
robot.velocityX=-5
}
if(frameCount%650===0){
  virus1=createSprite(2000,axis+60)
  virus1.addImage("virus1",virus1image)
  virus1.scale=0.2
virus1.velocityX=-7
}
if(frameCount%100===0){
  virus2=createSprite(1600,axis+70)
  virus2.addImage("virus2",virus2image)
  virus2.scale=0.2
  virus2.velocityX=-4
}
}


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	//engine = Engine.create();
//	world = engine.world;

	//Create the Bodies Here.
  const Engine = Matter.Engine;
  const World = Matter.World;
  const Bodies = Matter.Bodies;
  const Body = Matter.Body;

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



