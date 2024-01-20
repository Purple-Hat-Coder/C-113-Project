function preload() {

}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.position(600, 250);
}

function draw() {
    rect(275, 60, 60, 60);
    rect(275, 280, 60, 60);
    rect(65, 280, 60, 60);
    rect(65, 60, 60, 60);
    rect(95, 120, 30, 160);
    rect(275, 120, 30, 160);
    rect(125, 280, 150, 30);
    rect(125, 90, 150, 30);
}

function take_snapshot() {
    save('student_name.png');
}
