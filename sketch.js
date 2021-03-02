var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var img1,img2,img3,img4,imgGrnd,imgTrack,imgTrack2

function preload(){
//imgTrack=loadImage("C:\Documents\CarRacingGame\images\track.jpg");
//imgTrack2=loadImage("C:\Documents\CarRacingGame\images\track.png");
img1=loadImage("..\images\car1.png");
//img2=loadImage("C:\Users\Harendra Shukla\One Drive\images\car2.png");
//img3=loadImage("C:\Users\HarendraShukla\images\car3.png");
//img4=loadImage("C:\Documents\CarRacingGame\images\car4.png");
//imgGrnd=loadImage("C:\Documents\CarRacingGame\images\ground.png");

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
