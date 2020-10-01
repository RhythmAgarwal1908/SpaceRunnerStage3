
var player1,player2;
var player1img,player2img;
var timer;
var position;
var asteroids, asteroidsimg;
var asteroids2, asteroidsimg2;
var form,game,player;
var gameState = 0
var database
var playerCount

function preload(){
    player1img = loadImage("images/rocket1.png")
    player2img = loadImage("images/rocket2.png")
    asteroidsimg = loadImage("images/meteors.png")
    asteroidsimg2 = loadImage("images/meteors2.png")
}
function setup(){
    createCanvas(800,800)
    database = firebase.database()
    player1 = createSprite(200,750,50,50);
    player2 = createSprite(600,750,50,50);
    //asteroids = createSprite(150,150,200,400)
 player1.addImage(player1img);
 player1.scale = 0.2;
 player2.addImage(player2img);
 player2.scale = 0.2;
 //asteroids = addImage(asteroidsimg)

 timer = createSprite(400,650,10,350)
game = new Game()
game.getState()
game.start()

}
function draw(){
    if(playerCount===2){
        game.update(1)
    }
    if(gameState === 1){
game.play();
    }
    drawSprites();
}