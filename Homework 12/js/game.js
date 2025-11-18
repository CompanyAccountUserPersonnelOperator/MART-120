// Move the green circle to the yellow box to win. Use wasd to move.
var recX1 = 50;
var recY1 = 50;

var recX2 = 200;
var recY2 = 200;

var x = 0;
var y = 0;
var diameter = 30;
var diameter1 = 40;

var mousex = 0;
var mousey = 600;

function setup()
{
    createCanvas(500, 600);
}
function draw()
{
    background('grey');
    textSize(15);
    text("EXIT", width-45,height-45)
//    text("X: " + mouseX,100,200 );
//    text("Y: " + mouseY,100,220 );
    createBorders();
    drawChar();
    charMove();
    createEnemy1();
    createEnemy2();
    createEnemy3();
    fillShape();
    maze1();
    winCondition();
    exit();
}
//exit box
function exit()
{
    fill('yellow');
    rect(480, 580, 75, 75);
}
//enemy 1
function createEnemy1()
{
    fill('red');
    rect(recX1,recY1,50,150);
    if(recX1 <= 500)
    {
        recX1+=7;
    }
    else
    {
        recX1= 0;
        recX1+=7;
    }
}
//enemy2
function createEnemy2()
{
    fill('red');
    rect(recX2,recY2,150,50);
    if(recY2 <= 600)
    {
        recY2+=5;
    }
    else
    {
        recY2= 0;
        recY2+=5;
    }
}
//enemy3
function createEnemy3()
{
    fill('purple');
    circle(40, 400, diameter1);
    if(diameter1 <=300)
    {
        diameter1+=3;
    }
    else
    {
        diameter1 = 25;
    }
}
//draw character
function drawChar()
{
    fill('green');
    circle(x, y, diameter);
}
//character movement
function charMove()
{
    if(x >= 500)
    {
        x = 495;
    }
    if(x <= 0)
    {
        x = 5;
    }
    if(keyIsDown(83))
    {
        y += 10;
    }
    if(keyIsDown(87))
    {
        y -=10;
    }
    if(y >= 600)
    {
        y = 595;
    }
    if(y <= 0)
    {
        y = 5;
    }
    if(keyIsDown(68))
    {
        x += 10;
    }
    if(keyIsDown(65))
    {
        x -= 10;
    }
}
//click to place shape
function fillShape()
{
    fill('blue');
    ellipse(mousex, mousey, 80, 30);
}
//wincondition
function winCondition()
{
    if(x >= 495 && y >= 595)
    {
        fill(0);
        stroke(5);
        textSize(24);
        text("Winner!", width/2-50, height/2-50);
    }
}
//make border function
function createBorders()
{
    fill(0);
    stroke(0);
    rect(0,0,width,5);
    rect(0,0,5,height);
    rect(0,height-5,width,5);
    rect(width-5,0,5,height-50);
}
//mouseClicked
function mouseClicked()
{
    mousex = mouseX;
    mousey = mouseY;
}
//set maze
function maze1()
{
    fill(0);
    stroke(4);
    rect(0,50,150,10)
    rect(180,0,10,150)
    rect(220,80,150,10)
    rect(40,100,150,10)
    rect(100,100,10,200)
    rect(300,300,200,10)
    rect(300,300,10,250)
    rect(370,450,10,170)
    rect(300,410,150,10)
    rect(150,350,10,200)
    rect(105,220,250,10)
    rect(190,220,10,200)
    rect(420,5,10,230)
    rect(30,495,100,10)
    rect(155,540,115,10)
    rect(0,155,60,10)
    rect(30,235,10,170)
    rect(305,85,10,100)
    rect(375,505,50,10)
    rect(385,350,50,10)
    rect(190,350,75,10)
    rect(30,500,10,75)
}