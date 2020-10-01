class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }}

    /*car1 = createSprite(100,200);
    car1.addImage("car1",car1_img);
    car2 = createSprite(300,200);
    car2.addImage("car2",car2_img);
    car3 = createSprite(500,200);
    car3.addImage("car3",car3_img);
    car4 = createSprite(700,200);
    car4.addImage("car4",car4_img);
    cars = [car1, car2, car3, car4];*/
  

  play(){
    if(gameState === 1){ 
      background("black")
      strokeWeight(1.5)
      stroke("white")
      line(400,800,400,500)
      position = Math.round(random(1,2))
      
      if(keyDown("w")){
      player1.y = player1.y - 4
      }
      if(keyDown("s")){
      player1.y = player1.y + 4
      }
      if(keyDown("u")){
      player2.y = player2.y - 4
      }
      
      timer.velocityY = 1.0;
      
      
      if(timer.y>970){
                  
      }
      if(position === 1){
          if(frameCount % 30 === 0){
          asteroids = createSprite(810,random(20,500),200,400)
          asteroids.addImage(asteroidsimg)
          asteroids.scale = 0.3
          asteroids.velocityX = random(-1,-8);
          }
      }
  if(position === 2){
      if(frameCount % 30 === 0){
      asteroids2 = createSprite(-10,random(20,500),200,400)
      asteroids2.addImage(asteroidsimg2)
      asteroids2.scale = 0.3
      asteroids2.velocityX = random(1,8);
  }
}
}
  }
        
        
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      

    

    /*if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }

    if(player.distance > 3860){
      gameState = 2;
    player.rank = player.rank + 1
    Player.updateCarsAtEnd(player.rank)
    }
   
    drawSprites();
  }
s
  end(){
    console.log("Game Ended");
console.log(player.rank)
  }*/
}
