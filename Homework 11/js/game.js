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

// Player and movement
    fill('green');
    circle(x, y, diameter);
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

// Exit box
    fill('yellow');
    rect(480, 580, 75, 75);

// Enemy 1
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

// Enemy 2
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

// Enemy 3
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

// shape placed when clicked
    fill('blue');
    ellipse(mousex, mousey, 80, 30);

// Win Condition
    if(x >= 495 && y >= 595)
    {
        fill(0);
        stroke(5);
        textSize(24);
        text("Winner!", width/2-50, height/2-50);
    }
}

//mouseClicked
function mouseClicked()
{
    mousex = mouseX;
    mousey = mouseY;
}