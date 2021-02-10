const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball, rope

function setup() {
  createCanvas(800,500);
  engine = Engine.create();
  world = engine.world;

  ground=new Ground(400,490,800,20);
  boy=new Boy(110,310,150,250);
  tree=new Tree(525,125,275,375);
  mango1=new Mango(570,225,45,45);
  mango2=new Mango(750,225,45,45);
  mango3=new Mango(520,280,45,45);
  mango4=new Mango(750,305,45,45);
  mango5=new Mango(650,235,41,41);
  mango6=new Mango(565,305,30,30);
  stone = new Stone(120, 365, 30, 30);
  rope = new Rope(stone.body, { x: 120, y: 365});
  ground1=new Ground(570,285,10,1);
  ground2=new Ground(750,245,10,1);
  ground3=new Ground(520,300,10,1);
  ground4=new Ground(750,325,10,1);
  ground5=new Ground(650,255,10,1);
  ground6=new Ground(565,325,10,1);

  
}
function draw() {
  background("white");
  Engine.update(engine);
  ground.display();
  boy.display();
  ground1.display();  
  ground2.display();  
  ground3.display();  
  ground4.display();  
  ground5.display();  
  ground6.display();  
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  stone.display();
  rope.display();  
 
}


function mouseDragged() {
  Matter.Body.setPosition(stone.body, { x: mouseX, y: mouseY });
}


function mouseReleased(){
  rope.fly();
}

 
function keyPressed(){
  if(keyCode==32){
rope.attach(stone.body)
  }
}