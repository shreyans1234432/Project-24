const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.Body;

var engine, world;
var ground,sand,iron;


function setup(){
    createCanvas(500,750);

    engine = Engine.create();
    world = engine.world;   

    ground = new ground(500,height,1000,50);

    hammer = new Hammer(200,200);

    stone = new Stone(800,350,90,110);

    iron = new iron(500,320,50,100);

    rubber = new rubber(400,250,60,105);

    sand1 = new sand(250,400);
    sand2 = new sand(300,550);
    sand3 = new sand(200,350);
    sand4 = new sand(230,300);
    sand5 = new sand(220,290);
    sand6 = new sand(190,240);

    //Engine.run(engine);

}

    function draw() {

        rectMode(LEFT);
        background("lime");
        Engine.update(engine);

        hammer.display();
        ground.display();
        stone.display();
        iron.display();
        rubber.display();
        sand1.display();
        sand2.display();
        sand3.display();
        sand4.display();
        sand5.display();
        sand6.display();

        textSize(12).text("Rubber",400,550");
        textSize(20).text("Stone",350,420);
        textSize(30).text("Iron",200,290);
        textSize(40).text("SAND",100,100);
        textSize(20).text("SAND",150,150);
        //text.collided("rubber");



    }
    drawSprites();