const Engine=Matter.Engine ;

const World=Matter.World;

const Bodies=Matter.Bodies;

var engine,world,object;
function setup()
 {
  createCanvas(400,400);
  engine=Engine.create();
  //connection between engine and our world
  world=engine.world;
  var options={ isStatic:true}
  var ball_options={restitution:1.0}
  ball= Bodies.circle(200,100,20,ball_options);
   World.add(world,ball);
   
   //JSON format == javascript object notation
   

   ground=Bodies.rectangle(200,380,400,10,options);
World.add(world,ground)
  
}

function draw() {
  background("black"); 
  Engine.update(engine);
  rectMode(CENTER) ;
 // rect(200,200,50,50);
  
  rect(ground.position.x,ground.position.y,400,10);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20)
}
