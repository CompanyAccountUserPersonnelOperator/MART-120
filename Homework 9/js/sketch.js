var x = 100;
var y = 100;
function setup()
{
    createCanvas(500, 600);
}
function draw()
{
    background(120,45,78);
    textSize(20);
//    text("X: " + mouseX,100,200 );
//    text("Y: " + mouseY,100,220 );
//head
    fill(255, 204, 0);
    circle(250,100,85);
    fill("black");
//hat
    triangle(225, 60, 245, 25, 275, 60);
    line(185, 60, 225, 60);
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
    rect(225,140,50,150);
//thumbs up.
    fill("red");
    rect(155, 135, 5, 10);
    rect(145, 150, 10, 5);
    rect(145, 155, 10, 5);
    rect(145, 160, 10, 5);
//legs and arms
    rect(155, 150, 70, 25);
    rect(275, 150, 25, 70);
    rect(200, 270, 25, 85);
    rect(275, 270, 25, 85);
//feet
    fill("black");
    triangle(180, 355, 200, 335, 220, 355);
    triangle(255, 355, 275, 335, 295, 355);
//Name in the title.
    line(230,120,260,120)
    textAlign(CENTER, TOP);
    text("Nate A", 50, 15);
}