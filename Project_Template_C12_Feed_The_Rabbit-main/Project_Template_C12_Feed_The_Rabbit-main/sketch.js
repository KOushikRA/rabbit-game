var garden,rabbit,apple,green,orange,red;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  greenImg = loadImage("leaf.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
  
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);garden.addImage(gardenImg); 
//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


}


function draw() {
  background("black");
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = World.mouseX

  var object = Math.round(random(1,4));

  
  
  if (World.frameCount % 80 == 0) {
    if (object == 1) {
    spawnapples();
      
    } else if (object == 2) {
    spawnred();
    }

    else if (object == 3){
     spawngreen(); 
    }

    else if (object == 4){
      spawnorange();
    }
      
    
       

  
   

  }

  
drawSprites();
}


function spawnapples (){
apple = createSprite(random(350, 50),40, 10, 10);
apple.addImage(appleImg); 
apple.velocityY = 3;
apple.lifetime = 150;
apple.scale = 0.1;
apple.depth = rabbit.depth;
    rabbit.depth = rabbit.depth +1;
}

function spawnred (){
  red = createSprite(random(350, 50),40, 10, 10);
  red.addImage(redImg);
  red.velocityY = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  red.depth = rabbit.depth;
    rabbit.depth = rabbit.depth +1;
  }

  function spawngreen (){
    green = createSprite(random(350, 50),40, 10, 10);
    green.addImage(greenImg);
    green.velocityY = 3;
    green.lifetime = 150;
    green.scale = 0.1;
    green.depth = rabbit.depth;
    rabbit.depth = rabbit.depth +1;
    }

    function spawnorange (){
      orange = createSprite(random(350, 50),40, 10, 10);
      orange.addImage(orangeImg);
      orange.velocityY = 3;
      orange.lifetime = 150;
      orange.scale = 0.1;
      orange.depth = rabbit.depth;
    rabbit.depth = rabbit.depth +1;
      }





