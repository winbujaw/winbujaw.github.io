var paddle;
var paddle2;



var ball;
var game;
var box;
var character;
var output;

function checkCollisions() {
    
    if(box.collidesWith(character)){
        output.innerHTML = "COLLISION";
        character.dx *= -1;
        character.dy *= -1;
    }
    else{
        output.innerHTML = "NO COLLISON";
        //character.followMouse();
        }
        
        //Distance Collision
        dist = box.distanceTo(character);
        output.innerHTML = dist;
        if(dist - character.width/2 - box.width/2 < 0){
            output.innerHTML = dist;
        character.dx *= -1;
        character.dy *= -1;
        }else{
        output.innerHTML = dist;

        }

}

function Paddle() {
    tPaddle = new Sprite(scene, "court.png", 200, 100);
    tPaddle.setAngle(180);
     tPaddle.setSpeed(0);

    tPaddle.checkKeys = function() {
        if (keysDown[K_UP]) {
            this.changeYby(CHANGE);
            if (this.y - this.width / 2 < 0) {
                this.setY(this.width / 2);
            }
        }

        if (keysDown[K_DOWN]) {
            this.changeYby(-CHANGE);
            if (this.y + this.width / 2 > scene.height) {
                this.setY(scene.height - this.width / 2);
            }
        }
    }

    return tPaddle
}


function init() {
    
    
    scene = new Scene();
    scene.setSize(600,300);
    paddle = new Paddle();
    paddle2 = new Paddle();
    paddle2.setSpeed(10);
    
    paddle2.setBoundAction(BOUNCE);
    /*character.followMouse = function(){
        this.setX(document.mouseX);
        this.setY(document.mouseY);
    }*/
    paddle.setPosition(15, scene.height / 2);
    paddle2.setPosition(scene.width - 20, scene.height / 2);
    ball = new Sprite(scene, "ball.png" ,100, 100);
    ball.setMoveAngle(60);
    ball.setSpeed(8);
    ball.setBoundAction(BOUNCE);
    /*character.followMouse = function(){
        this.setX(document.mouseX);
        this.setY(document.mouseY);
    }*/
    
    
    scene.start();
    EPICMUSIC.play();
    box = new Sprite(game, "court.png", 100, 100);
    box.setSpeed(0);
    box.setPosition(game.width/2, game.height/2);
    
    
    character.setSpeed(5);
    character.setMoveAngle(30);
    character.setBoundAction(BOUNCE);
  
    
    
    
    
    game.start();
}



function update() {
    
    scene.clear();
    paddle.update();
    paddle2.update();
    paddle.checkKeys();
    ball.update();
    character.update();
    checkCollisions();
    //character.followMouse();
}
