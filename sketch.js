const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body
const Render = Matter.Render

var engine, world;
var box1,box2,ground,paper,log1;

function preload(){
    
}

function setup(){
    var canvas = createCanvas(1600,700);
    rectMode(CENTER)
    engine = Engine.create();
    world = engine.world;
	ground = new Ground(width/2,670,width,20)

    
	t2 = new trashcan(1200,650)
    
    paper = new trash(200,450,70)

    var render = Render.create( {
element:document.body,
engine:engine,
options:{
    width:1200,
    height:700,
    wireframes:false
}
    })
   Engine.run(engine) 
}

function draw(){
    background(255);
    rectMode(CENTER);
    Engine.update(engine);
    ground.display();
    paper.display();
    t2.display();
    
    
}

function keyPressed(){

if(keyCode === UP_ARROW){

	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})

}
}

