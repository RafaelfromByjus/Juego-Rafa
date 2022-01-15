const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine, world;

var hero, villian, queen;
var floor1;
var ladder;
var fire;
var gameState = 0;
var score = 0;


function setup(){
    var canvas = createCanvas(500, 700);
    engine = Engine.craete();
    world = engine.world;

    floor1 = new Floor(50, 450, 100, 20);
}
function draw(){
    floor1.display();
}