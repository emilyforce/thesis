//one thing to note is this model was trained on full body images.
//when using the sensor, its best to be standing farther away from the computer.

//why does my web browser keep crashing????????????

let video;
let poseNet;
let pose;

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function gotPoses(poses) {
  console.log(poses);
  // this conditional indexes the through the array
  if(poses.length > 0) {
    pose = poses[0].pose;
  }
}

function modelLoaded() {
  console.log('poseNet ready');
}

function draw() {
  // background(220);
  image(video, 0, 0);

  let gridSize = map(mouseX, 0, width, 15, 50);

  video.loadPixels();
  for(let y = 0; y < video.height; y+=gridSize) {
    for(let x = 0; video.width; x+=gridSize) {
      let index = (y * video.width + x) * 4;
      let r = video.pixels[index];
      let diameter = map(r, 0, 255, gridSize, 2);

      fill(0);
      noStroke();
      ellipse(x+gridSize/2, y+gridSize/2, diameter);
      }
    }
  }

  //will draw onto canvas
  if (pose) {

    let eyeR = pose.rightEye;
    let eyeL = pose.leftEye;
    let distance = dist(eyeR.x, eyeR.y, eyeL.x, eyeL.y);

    fill(255, 0, 0);
    ellipse(pose.nose.x, pose.nose.y, 64);
//  could be ellipse(pose.nose.x, pose.y, distance); to proportion size based on distance -> sizes relative to face
    ellipse(pose.rightWrist.x, pose.rightWrist.y, 32);
    ellipse(pose.leftWrist.x, pose.leftWrist.y, 32);
//     these will need to be mapped for the oscillator

}
