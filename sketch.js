const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;
var ground1;

function preload(){
  rockImg=loadImage("polygon.png");
}
function setup() {
  createCanvas(1360,610);
  engine=Engine.create();
  world=engine.world;

  bottomGround=new Ground(400,595,3000,20);
  ground1=new Ground(300,350,250,10);
  ground2=new Ground(600,280,200,10);

  //Left Block
  //layer 1
  box1=new Box(205,320,"pink");
  box2=new Box(235,320,"pink");
  box3=new Box(265,320,"pink");
  box4=new Box(295,320,"pink");
  box5=new Box(325,320,"pink");
  box6=new Box(355,320,"pink");
  box7=new Box(385,320,"pink");

  //layer 2
  box8=new Box(235,270,"pink");
  box9=new Box(265,270,"pink");
  box10=new Box(295,270,"pink");
  box11=new Box(325,270,"pink");
  box12=new Box(355,270,"pink");

  //layer 3
  box13=new Box(265,220,"pink");
  box14=new Box(295,220,"pink");
  box15=new Box(325,220,"pink");

  //layer 4
  box16=new Box(295,170,"pink");
  //Left Block

  //Right Block
  //layer 1
  box17=new Box(535,250,"pink");
  box18=new Box(565,250,"pink");
  box19=new Box(595,250,"pink");
  box20=new Box(625,250,"pink");
  box21=new Box(655,250,"pink");

   //layer 2
  box22=new Box(565,200,"pink");
  box23=new Box(595,200,"pink");
  box24=new Box(625,200,"pink");

  //layer 3
  box25=new Box(595,150,"pink");

  rock=Bodies.circle(100,300,20);
  World.add(world,rock);

  slingshot1=new Slingshot(this.rock,{x:80,y:250});
}

function draw() {
  background(0,255,237);  
  drawSprites();

  bottomGround.display();
  textSize(20);
  text("Drag the Hexagonal stone and release it, to launch it towards the blocks",50,50);
  textSize(15);
  fill("black")
  text("Press space to get second chance to play!!",200,100)
  Engine.update(engine);

  ground1.display();
  ground2.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  box13.display();
  box14.display();
  box15.display();

  box16.display();

  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();

  box22.display();
  box23.display();
  box24.display();

  box25.display();

  imageMode(CENTER);
  image(rockImg,rock.position.x,rock.position.y,40,40);

  slingshot1.display();
  
}
function mouseDragged(){
  Matter.Body.setPosition(this.rock,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingshot1.fly();
}
function keyPressed(){
  if(keyCode===32){
    slingshot1.attach(this.rock);
  }
}