var x = 100;
var y = 100;

var headX = 250;
var headY = 100;
var headDir = 3;

var bodyX = 225;
var bodyY = 140;
var bodyDir = 1;

var hatX1 = 225;
var hatY1 = 60;
var hatX2 = 245;
var hatY2 = 25;
var hatX3 = 275;
var hatY3 = 60;
var hatDir = 1;

var lineX1 = 185;
var lineY1 = 60;
var lineX2 = 225;
var lineY2 = 60;
var lineDir = 2;

var armX = 155;
var armY = 150;
var armDir = 3;

var legX = 275;
var legY = 270;
var legDir = 1;

var size = 10;
var count = 0;
var sizeDir = 1;

var movement;

function setup()
{
    createCanvas(500, 600);
    movement = floor(random() * 10) + 1;
}
function draw()
{
    background(120,45,78);
    textSize(20);
    text("X: " + mouseX,100,200 );
    text("Y: " + mouseY,100,220 );

//head
    fill(255, 204, 0);
    circle(headX,headY,85);
    headX += headDir;
    if(headX >= 300 || headX <= 150)
    {
        headDir *= -1;
        movement *= -1;
    }
    headX += movement;
//hat
    fill("black");
    triangle(hatX1, hatY1, hatX2, hatY2, hatX3, hatY3);
    hatX1 += hatDir;
    hatY1 += hatDir;
    hatX2 += hatDir;
    hatY2 += hatDir;
    hatX3 += hatDir;
    hatY3 += hatDir;
    if(hatX2 >= 500 || hatX2 <= 0 || hatY1 <= 0)
    {
        hatDir *= -1;
    }
    line(185, lineY1, 225, lineY2);
    lineY1 += lineDir;
    lineY2 += lineDir;
    if(lineY1 >= 500 || lineY2 <= 0)
    {
        lineDir *= -1;
        movement *= -1;
    }
    lineY1 += movement;
    lineY2 += movement;
//eyes
    fill("green");
    ellipse(230, 90, 20, 10);
    strokeWeight(5);
    point(230, 90);
    fill("green")
    ellipse(260, 90, 20, 10);
    point(260, 90);
//body
    fill("blue");
    rect(225,bodyY,50,150);
    bodyY += bodyDir;
    if(bodyY <= 0 || bodyY >= 400)
    {
        bodyDir *= -1;
        movement *= -1;
    }
    bodyY += movement;
//thumbs up.
    fill("red");
    rect(145, 135, 5, 10);
    rect(145, 150, 10, 5);
    rect(145, 155, 10, 5);
    rect(145, 160, 10, 5);
//legs and arms
    rect(armX, 150, 70, 25);
    armX += armDir;
    if(armX <= 0 || armX >= 400)
    {
        armDir *= -1;
        movement *= -1;
    }
    armX += movement;
    rect(275, 150, 25, 70);
    rect(200, 270, 25, 85);
    rect(275, legY, 25, 85);
    legY += legDir;
    if(legY <= 0 || legY >= 300)
    {
        legDir *= -1;
        movement *= -1;
    }
    legY += movement;
//feet
    fill("black");
    triangle(180, 355, 200, 335, 220, 355);
    triangle(255, 355, 275, 335, 295, 355);
//Name in the title.
    line(230,120,260,120)
    textAlign(CENTER, TOP);
    textSize(size);
    size+= sizeDir;
    count++;
    if(count > 5)
    {
        sizeDir *= -1;
        count =0;
    }
    text("Nate A", 50, 15);
}