const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;var particles=[];
var plinkos=[];
var divisions=[];
var ground;
var divisionHeight=300;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}
for (var k=0; k<=width; k=k+70){
  divisions.push(new Divisions(k, height-divisionHeight/2,10,divisionHeight));
}