const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var box1,pig1;


function setup() {
 var canvas= createCanvas(1200,400);
  engine=Engine.create();
  world=engine.world;
box1=new Box(600,350,50,50);
pig1=new Pig(660,350);
box2=new Box(720,350,50,50);
log1=new Log(660,300,200,PI/2)

box3=new Box(600,290,50,50);
pig2=new Pig(660,290);
box4=new Box(720,290,50,50);
log2=new Log(660,270,200,PI/2);
log3=new Log(620,240,100,PI/7);
log4=new Log(720,240,100,-PI/7);
pig3 = new Pig(670,230);
bird =new Bird(100,100);

ground1=new Ground(600,380,1200,20)
}

function draw() {
  background(0);  
  Engine.update(engine);
 box1.display();
 box2.display();
 pig1.display();
 log1.display();
 box3.display();
 box4.display();
 pig2.display();
 log2.display();
 log3.display();
 log4.display();
 pig3.display();
 bird.display();
 ground1.display();
}
