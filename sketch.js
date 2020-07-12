const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, ball, holder, chain
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
    ball=Bodies.circle(400,300,30)
    World.add(world,ball);
    var options= {
      isStatic:true
    }
    holder=Bodies.rectangle(200,100,200,20,options)
    World.add(world,holder)
    var options= {
      bodyA:ball,
      bodyB:holder,
      stiffness:0.04,
      lenght:10
  }
  chain= Constraint.create(options);
  World.add(world,chain);
}

function draw() {
  background("black");  
  Engine.update(engine);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,30,30)
  rectMode(CENTER)
  rect(holder.position.x,holder.position.y,200,20)
  strokeWeight(3)
  line(ball.position.x,ball.position.y,holder.position.x,holder.position.y)
  if(keyCode===32){
    ball.position.x=mouseX;
    ball.position.y=mouseY;
  }
  else if(keyCode===ENTER){
    ball.position.x=200;
  }
}