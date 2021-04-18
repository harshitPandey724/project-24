const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,rubber,stone,iron;


function setup(){
    var canvas = createCanvas(1200,600);
   
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(100,10);
    rubber = new Rubber(1110,540,18);
    stone = new Stone(500,500,40,70);
    iron = new Iron(800,500,70,70)


  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    plane.display();
    hammer.display();
    rubber.display();
    stone.display();
    iron.display();    
 
}