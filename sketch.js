var bow , arrow,  scene;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var score=0;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  // carregue a imagem do balão verde
  red_balloonImage = loadImage("red_balloon0.png");

  // carregue a imagem do balão rosa
  pink_balloonImage = loadImage("pink_balloon0.png");
  // carregue a imagem do balão azul
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //crie o fundo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // criando arco para a flecha
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0    
}

function draw() {
 background(0);
  // chão em movimento
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //arco em movimento
  bow.y = World.mouseY
  
   // soltar arco quando a tecla espaço for pressionada
  if (keyDown("space")) {
    createArrow();
    
  }
   
  //criando inimigos continuamente
  
  var aleatorio = Math.round(random(1, 4));
  
  if (World.frameCount % 100 == 0) {
   switch(aleatorio ){
    case 1: 
    redBalloon();
    break;
    case 2: // chamar o balão azul
    blueBalloon();
    break;
    case 3: // chamar o balão verde
    greenBalloon();
    break;
    case 4: // chamar o balão rosa
    pinkBalloon();
    break;
    default:break;
  }}
    
  drawSprites();
}


// Criar flechas para o arco
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}

function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
}

function blueBalloon() {
  //crieSprite para o balão
  azul = createSprite (0,Math.round(random(20, 370)), 10, 10)
  //adicioneImagem para o balão
  azul.addImage(blue_balloonImage);
  // adicione velocidade para fazer o balão se mover
  azul.velocityX = 3;
  // mudar a dimensão do balão
  azul.scale = 0.1;
  // atriubua tempo de vida ao balão
  azul.lifetime = 150;
}

function greenBalloon() {
  //crieSprite para o balão
  verde = createSprite (0,Math.round(random(20, 370)), 10, 10)
  //adicioneImagem para o balão
  verde.addImage(green_balloonImage);
  // adicione velocidade para fazer o balão se mover
  verde.velocityX = 3;
  // mudar a dimensão do balão
  verde.scale = 0.1;
  // atriubua tempo de vida ao balão
  verde.lifetime = 150;
}

function pinkBalloon() {
 //crieSprite para o balão
 rosa = createSprite (0,Math.round(random(20, 370)), 10, 10)
  //adicioneImagem para o balão
  rosa.addImage(green_balloonImage);
  // adicione velocidade para fazer o balão se mover
  rosa.velocityX = 3;
  // mudar a dimensão do balão
  rosa.scale = 0.1;
  // atriubua tempo de vida ao balão
  rosa.lifetime = 150;
}
