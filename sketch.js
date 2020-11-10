//PHYSICS ENGINE = MATTER.JS
//ENGINE, WORLD, BODIES
//NAMESPACING
//variable = var
//constant = const

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

/* To create a physics Engine Object
1. Create the Engine using 'Engine.create()' command
2. Create a world for the physics engine 'engine.world'
3. Create a body/object using 'Bodies.rectangle/Bodies.circle'
4. Add the object inside the world using 'World.add()'
5. Represent the Bodies.rectangle/ Bodies.circle using rect/ellipse respectively in the function draw()
6. Update the physics Engine using 'Engine.update()'
*/

var engine,world,ground,ball;

function setup() {
  createCanvas(400,400);

  //physics Engine
  engine = Engine.create();

  //world
  world = engine.world;

  var groundOptions = {
//groud should be at rest (static)
isStatic: true
  }

  //body
  ground = Bodies.rectangle(200,380,50,50,groundOptions);
  World.add(world,ground);
  var ballOptions = {
    restitution:1
  }
 //to create a ball
 ball = Bodies.circle(200,100,15,ballOptions);
 World.add(world,ball);

}

function draw() {
  background(0);  
  Engine.update(engine);
  fill("white");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,30,30)
  drawSprites();
} 