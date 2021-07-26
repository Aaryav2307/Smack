noseX = 0;
noseY = 0;

function preload() {
    baseball = loadImage('https://i.postimg.cc/Vs7mwWkP/baseball.png');
}

function setup() {
    canvas = createCanvas(500, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500, 400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('The Model Is Loaded');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x - 25;
        noseY = results[0].pose.nose.y - 25;
    }
}

function draw() {
    image(video, 0, 0, 500, 400);
    image(baseball, noseX, noseY, 50, 50);
}

function snapshot() {
    save('it_hurts.png')
}

function dark() {
    document.querySelector('.img_holder')
        .style.backgroundImage = 'url("dark.png")'

    document.querySelector('#lab')
        .style.color = 'rgb(239, 231, 231)';

}

function light() {
    document.querySelector('#lab')
        .style.color = 'rgb(54, 54, 54)';
    
    document.querySelector('.img_holder')
        .style.backgroundImage = 'url("background.png")'
}