const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
    
var engine, world;
    
var stand;
var b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16;
var b17, b18, b19, b20, b21, b22, b23, b24, b25;
var polygon, pol_img;
var sling;
var bgcolor, bg;
var score = 0;

function preload() {
  pol_img = loadImage("Polygon.png");
  //getBackground();
  //sbgcolor = bg;

}

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  
  stand = new Ground(600, 370, 250, 20);

  b1 = new BlockA(600, 355, 30, 30);
  b2 = new BlockB(615, 355, 30, 30);
  b3 = new BlockB(585, 355, 30, 30);
  b4 = new BlockC(630, 355, 30, 30);
  b5 = new BlockC(570, 355, 30, 30);
  b6 = new BlockB(645, 355, 30, 30);
  b7 = new BlockB(555, 355, 30, 30);
  b8 = new BlockC(600, 340, 30, 30);
  b9 = new BlockA(615, 340, 30, 30);
  b10 = new BlockA(585, 340, 30, 30);
  b11 = new BlockB(630, 340, 30, 30);
  b12 = new BlockB(570, 340, 30, 30);
  b13 = new BlockA(600, 325, 30, 30);
  b14 = new BlockB(615, 325, 30, 30);
  b15 = new BlockB(585, 325, 30, 30);
  b16 = new BlockB(600, 310, 30, 30);

  stand2 = new Ground(900, 220, 200, 20);

  b17 = new BlockA(900, 205, 30, 30);
  b18 = new BlockB(915, 205, 30, 30);
  b19 = new BlockB(885, 205, 30, 30);
  b20 = new BlockC(930, 205, 30, 30);
  b21 = new BlockC(870, 205, 30, 30);
  b22 = new BlockC(900, 190, 30, 30);
  b23 = new BlockA(915, 190, 30, 30);
  b24 = new BlockA(885, 190, 30, 30);
  b25 = new BlockA(900, 175, 30, 30);

  polygon = new Polygon(100, 200, 40);

  sling = new SlingShot(polygon.body, {x:100, y:200});
}

function draw() {
  background(0, 0, 0);
  Engine.update(engine);

  polygon.display();

  stand.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  b17.display();
  b18.display();
  b19.display();
  b20.display();
  b21.display();
  b22.display();
  b23.display();
  b24.display();
  b25.display();

  stand2.display();

  textSize(25);
  
  text("Score: " + score, 720, 40);

  b1.score();
  b2.score();
  b3.score();
  b4.score();
  b5.score();
  b6.score();
  b7.score();
  b8.score();
  b9.score();
  b10.score();
  b11.score();
  b12.score();
  b13.score();
  b14.score();
  b15.score();
  b16.score();
  b17.score();
  b18.score();
  b19.score();
  b20.score();
  b21.score();
  b22.score();
  b23.score();
  b24.score();
  b25.score();  



  imageMode(CENTER);
  image(pol_img, polygon.body.position.x, polygon.body.position.y, 40, 40);
  sling.display();

}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if(keyCode===32){
    sling.attach(polygon.body);
  }
}

/*async function getBackground(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var jsonresponse = await response.json();
  var date_time = jsonresponse.datetime;
  var hour = date_time.slice(11,13);
  console.log(hour);
  
  if(hour>06 && hour<18){
      bg = "lightgreen";
      console.log(hour);
  }
  else{
      bg = "black";
      console.log(hour);
  }
  
}*/