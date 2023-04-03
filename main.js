function setup() {
    canvas=createCanvas(640,480);
    canvas.position(111,220);
    t=createCapture(VIDEO);
    t.hide();
}

function draw() {
    image(t,150,120,320,240);
    fill("#228B22");
    stroke("#00CED1");
    circle(90,80,80);
    fill("#228B22");
    stroke("#00CED1");
    circle(530,80,80);
    fill("#228B22");
    stroke("#00CED1");
    circle(530,400,80);
    fill("#228B22");
    stroke("#00CED1");
    circle(90,400,80);
    fill("#B0C4DE");
    stroke("#B22222");
    rect(130,70,363,20);
    fill("#B0C4DE");
    stroke("#B22222");
    rect(130,390,363,20);
    fill("#B0C4DE");
    stroke("#B22222");
    rect(80,120,20,240);
    fill("#B0C4DE");
    stroke("#B22222");
    rect(520,120,20,240);
}


function snapshot() {
    save('myimage.png');
}