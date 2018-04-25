var scene;
var fly;
var frog;
var ribbit;
var flies;
var NUMFLIES = 3;
var MAXTIME = 60;
var timer;
var time;
var gui;
var score = 0;


function checkCollisions(indexFly){
    if(frog.collidesWith(flies[indexFly])){
        ribbit.play();
        flies[indexFly].reset();
        score += 10
    }
}

function setupFlies(){
    flies = [];
    for(var i = 0; i< NUMFLIES; i++){
        flies.push(new Fly());
    }
}

function checkTime(){
    time = timer.getElapsedTime();
    if(time > MAXTIME){
        scene.stop();
    }
}

function updateGUI(){
    
    gui.innerHTML = "Score: " + score + " Time: " + time;
    
}
function restart(){
    //document.location.href = "";
    time = 0;
    timer.reset();
    score = 0;
    scene.start();
}
//Sets the scene, calls the update function, creates the Sprites 
function init(){
    gui = document.getElementById('gui');
    timer = new Timer();
    scene = new Scene();
    scene.setBG("green");
    setupFlies();
    scene.setSize(300,400)
    frog = new Frog();
    leaves = new Sprite(scene, 'http://aharrisbooks.net/h5g/h5g_7/leaves.png', 400, 450)
    ribbit = new Sound('http://jlaw21.github.io/Resources/ribbit.mp3')
    leaves.setSpeed(0)
    scene.start();
}

//create a standard fly object so that I dont have to type it 10 times ...
function Fly(){
    //creates a temporary Sprite object
    tFly = new Sprite(scene, "http://aharrisbooks.net/h5g/h5g_7/fly.png", 20, 20);
    //sets the speed of the Sprite object
    tFly.setSpeed(10);
    //create a function to simulate a fly's flight pattern
    tFly.wriggle = function(){
        //Random fly angle --- IMPROVE THIS LATER
        newDir = (Math.random() * 90)-45;
        this.changeAngleBy(newDir)
        
        
    }
    tFly.reset = function(){
        //SET NEW RANDOM POSITION
        newX = Math.random() * this.cWidth; 
        newY = Math.random() * this.cHeight;
        this.setPosition(newX, newY);
    }
    tFly.reset();
    return tFly; 
}

function Frog(){
    
    tFrog = new Sprite(scene,  'http://aharrisbooks.net/h5g/h5g_7/frog.png' , 50, 50)
    tFrog.minSpeed = -3;
    tFrog.maxSpeed = 10;
    tFrog.setSpeed(0);
    tFrog.setAngle(0);
    
    tFrog.checkKeys  = function(){
        
        if(keysDown[K_LEFT]){
            this.changeAngleBy(-5);
        }
        if(keysDown[K_RIGHT]){
            this.changeAngleBy(5);
        }
        if(keysDown[K_UP]){
            this.changeSpeedBy(1);
            if(this.speed > this.maxSpeed){
                this.setSpeed(this.maxSpeed);
            }
        }
        if(keysDown[K_DOWN]){
            this.changeSpeedBy(-1);
            if(this.speed < this.minSpeed){
                this.setSpeed(this.minSpeed);
        }
    }
    }
    return tFrog;
    
}

//Makes things MOVE, draws things to the canvas, 
function update(){
        //Clears the scene so we have clean movement
        scene.clear();
        
        checkTime();
       updateGUI();
        //MOVE THINGS
         leaves.update();
        
        
        for(var i = 0; i < flies.length; i++){
            flies[i].wriggle();
            checkCollisions(i);
            flies[i].update();
        }
        
        
        frog.checkKeys();
        //REDRAW THINGS
        
       
        
        frog.update();
    
        
}