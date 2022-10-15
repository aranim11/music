song1 = "";
song2 = "";

function preload(){
 song1 = loadSound("AI+MUSIC-20201215T110629Z-011.zip");
}

function setup(){
    create = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 600, 500);
}