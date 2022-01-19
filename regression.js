var data = []

var m = 1;
var b = 0;

var switcher = 0;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(51);
    for (let i = 0; i < data.length; i++) {
        const x = map(data[i].x, 0, 1, 0, width);
        const y = map(data[i].y, 0, 1, height, 0);
        fill(255);
        stroke(255);
        ellipse(x,y,8,8);
    }

    if (data.length > 1){
        gradientDescent()
        drawLine()
    }

}


function gradientDescent() {

    const learning_rate = 0.1;

    for (let i = 0; i < data.length; i++) {
        const x = data[i].x;
        const y = data[i].y;

        const guess = m * x + b;
        const error = y - guess;

        m = m + (error * x) * learning_rate;
        b = b + (error) * learning_rate;
    }


}

function linearRegression(){
    var xsum = 0;
    var ysum = 0;

    for (let i = 0; i < data.length; i++) {
        xsum += data[i].x;
        ysum += data[i].y;
    }

    var xmean = xsum / data.length;
    var ymean = ysum / data.length;

    var num = 0;
    var den = 0;

    for (let i = 0; i < data.length; i++) {
        var x = data[i].x;
        var y = data[i].y;
        num += (x - xmean) * (y - ymean);
        den += (x - xmean) * (x - xmean);
    }

    m = num / den;
    b = ymean - m * xmean;

}

function mousePressed(){
    var x = map(mouseX,0, width,0,1);
    var y = map(mouseY,0,width,1,0);
    var point = createVector(x,y);
    data.push(point)
}
function drawLine() {
    // Draw a line between any two points (use min and max x)
    var x1 = 0;
    var y1 = m * x1 + b;
    var x2 = 1;
    var y2 = m * x2 + b;

    x1 = map(x1,0,1,0,width);
    y1 = map(y1,0,1,height,0);
    x2 = map(x2,0,1,0,width);
    y2 = map(y2,0,1,height,0);

    stroke(255,0,4);
    line(x1,y1,x2,y2);
}





