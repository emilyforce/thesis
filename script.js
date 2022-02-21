// const osc = new p5.Oscillator();
// let context = new AudioContext();
//
// let poseNet;
// let poses = [];
// // let video;
//
// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   video = createCapture(VIDEO);
//   video.size(windowWidth, windowHeight);
//   osc.start();
//
//   // Create a new poseNet method witha single detection
//   poseNet = ml5.poseNet(video, modelReady);
//   // This sets up an event that fills the global variable "poses"
//   //with an array everytime new poses are detected
//   poseNet.on('pose', function(results) {
//     poses = results;
//   });
//
//   video.hide();
//
// }
//
// function modelReady() {
//   select('#status').html('Model Loaded');
// }
//
// function draw() {
//   background(0);
//   drawKeypoints();
//   // drawSkeleton();
//   //tracks movement with mouse
//   let gridSize = map(mouseX, 0, width, 15, 50);
//   // osc.freq(random(300, 350));
//
//
//   //rasterize
//   video.loadPixels();
//   for (let y = 0; y < video.height; y+=gridSize) {
//     for (let x = 0; x < video.width; x+=gridSize) {
//     let index = (y * video.width + x)  * 4;
//     let r = video.pixels[index];
//     let diameter = map(r, 0, 255, gridSize, 2);
//
//     fill(255);
//     noStroke();
//     ellipse(x+gridSize/2, y+gridSize/2, diameter);
//     }
//   }
// }
//
// // function drawKeypoints() {
// //   //Loop through all poses detected
// //   for (let i = 0; i < poses.length; i++) {
// //     //For each pose detected, loop through all the keypoints
// //     let pose = pose[i].pose;
// //     for(let j = 0; j < pose.keypoints.length; j++) {
// //       // A keypoint is an object describing a body part (like right arm or left shoulder)
// //       let keypoint = pose.keypoints[j];
// //       //Only draw an ellipse if the pose probability is bigger than 0.2
// //       if(keypoint.score > 0.2) {
// //         fill(255, 0, 0);
// //         noStroke();
// //         ellipse(keypoint.position.x, keypoint.position.y, 10, 10);
// //       }
// //     }
// //   }
// // }
// // //track movement with sound...yikes
// // function mouseMoved() {
// //   let context = new AudioContext();
// //   osc.freq(map(mouseX, 0, width, 200, 400));
// //   getAudioContext().resume();
// // }


// okay....try again

const osc = new p5.Oscillator();
const colors = ['black', 'black', 'black', 'black'];
let video;

function setup() {
  createCanvas(windowWidth, windowHeight);

  video = createCapture(VIDEO);
  video.size(1920, 1080);
  video.hide();

  frameRate(6);
  osc.start();
}

function draw() {
  // image(video, 0, 0);
  background(random(colors));
  osc.freq(random(300, 350));


  //tracks movement with mouse
  let gridSize = map(mouseX, 0, width, 15, 50);


  //rasterize
  video.loadPixels();
  for (let y = 0; y < video.height; y+=gridSize) {
    for (let x = 0; x < video.width; x+=gridSize) {
    let index = (y * video.width + x)  * 4;
    let r = video.pixels[index];
    let diameter = map(r, 0, 255, gridSize, 2);

    fill(255);
    noStroke();
    ellipse(x+gridSize/2, y+gridSize/2, diameter);
    }
  }
}
