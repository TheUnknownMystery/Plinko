const Engine = Matter.Engine;
const World  = Matter.World;
const Body   = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world, engine;

var ground;
var Plinkos = [];
var PlinkosSize = 300;
var divisons = [];

var divisonHeight = 300;

function setup() {
  createCanvas(480, 800);
 //nameSpacingEngine.....

  engine = Engine.create();
  world  = engine.world;

 //BottomGroundObject
  groundBottom = new Ground(0, 780, 500, 20);

  Engine.run(engine);
}

function draw() {
  
  background("black");

  //creating loop for divider
  for (var k = 0; k <= width; k = k + 80) {

    divisons.push(new Divider(k, height - divisonHeight/2, 10, divisonHeight))

  }


  groundBottom.display()

}