var ship;
var game;
var starfield;
var timer;
var missile;
var missiles = [];
var gui;
var ribbit;
var score = 0;
var NUMFLIES = 3;
var NUMFIREBALLS = 3;
var MAXTIME = 120;
var fireballs;
var flies;
var fly;
var fire;
var time;

function checkCollisions(indexMissile) {
    if (fireballs.collidesWith(missiles[indexMissile])) {
        ribbit.play();
        missiles[indexMissile].reset();
        score += 20

    }
}

function checkCollisions(indexFire) {
    if (ship.collidesWith(fireballs[indexFire])) {
        ribbit.play();
        fireballs[indexFire].reset();
        time.stop()
        game.stop()
    }
}

function checkCollisions(indexFly) {
    if (ship.collidesWith(flies[indexFly])) {
        ribbit.play();
        flies[indexFly].reset();
        score += 10


    }
}

function Fly() {
    tFly = new Sprite(game, "http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/256/Status-battery-charging-icon.png", 20, 20);
    tFly.setSpeed(10);
    tFly.wriggle = function() {
        newDir = (Math.random() * 90) - 45;
        this.changeAngleBy(newDir)

    }
    tFly.reset = function() {
        //SET NEW RANDOM POSITION
        this.setPosition(-100, -100);
    }
    tFly.reset();
    return tFly;
}


function Fire() {
    tFire = new Sprite(game, "https://orig00.deviantart.net/1fad/f/2012/146/0/b/fire_ball_png_by_dbszabo1-d515um9.png", 40, 40);
    tFire.setSpeed(10);
    tFire.wriggle = function() {
        newDir = (Math.random() * 90) - 45;
        this.changeAngleBy(newDir)

    }
    tFire.reset = function() {
        //SET NEW RANDOM POSITION
        this.setPosition(-800, 900);
    }
    tFire.reset();
    return tFire;
}


function setupFlies() {
    flies = [];
    for (var i = 0; i < NUMFLIES; i++) {
        flies.push(new Fly());
    }
}

function setupFireballs() {
    fireballs = [];
    for (var i = 0; i < NUMFIREBALLS; i++) {
        fireballs.push(new Fire());
    }
}



function checkTime() {
    time = timer.getElapsedTime();
    if (time > MAXTIME) {
        scene.stop();
    }
}

function updateGUI() {

    gui.innerHTML = "Battery Packs: " + score + " Time Before Game Ends: " + time;

}

function restart() {
    //document.location.href = "";
    time = 0;
    timer.reset();
    score = 0;
    game.reset();
}


function Missile() {
    tMissile = new Sprite(game, 'http://www.imarvintpa.com/Mapping/Overlays/Effects/Lightning/Electric%20Ball.png', 50, 50);

    tMissile.hide();

    tMissile.fire = function() {
        missiles.push(this);
        this.show();
        this.setSpeed(15);
        this.setPosition(ship.x, ship.y);
        this.setAngle(ship.getImgAngle());
        this.setBoundAction(DIE);
    }

    return tMissile;
}

function Ship() {
    tShip = new Sprite(game, 'https://www4.djicdn.com/assets/images/products/phantom-4-adv/s3-img-365b6df689d23e54eec77f64fa8538e3.png?from=cdnMap', 70, 70);

    tShip.checkKeys = function() {
        if (keysDown[K_LEFT]) {
            this.changeImgAngleBy(-7);
        }
        if (keysDown[K_RIGHT]) {
            this.changeImgAngleBy(7);
        }
        if (keysDown[K_UP]) {
            this.addVector(this.getImgAngle(), .7);
        }
        if (keysDown[K_DOWN]) {
            this.addVector(this.getImgAngle(), -.7);
        }
        if (keysDown[K_SPACE]) {
            if (timer.getElapsedTime() >= 1) {
                missile = new Missile();
                missile.fire();
            }

        }

        this.addVector(this.getImgAngle(), (this.speed / 20))
    }
    tShip.checkDrag = function() {
        speed = this.getSpeed();
        speed *= .95
        this.setSpeed(speed);
    }
    return tShip;

}

function init() {
    game = new Scene();
    gui = document.getElementById('gui');

    starfield = new Sprite(game, 'http://d2a0do11gpvbrl.cloudfront.net/sites/default/files/field/image/6-dubai1.jpg', 1400, 1000);

    ship = new Ship();
    timer = new Timer();
    fly = new Fly;
    setupFlies();
    fire = new Fire();
    setupFireballs();
    ribbit = new Sound('Bomb.mp3');
    starfield.setSpeed(0);
    game.start();

}

function update() {
    game.clear();
    checkTime();
    updateGUI()
    starfield.update();



    for (var i = 0; i < flies.length; i++) {
        flies[i].wriggle();
        checkCollisions(i);
        flies[i].update();
        
    }


    for (var i = 0; i < fireballs.length; i++) {
        fireballs[i].wriggle();
        checkCollisions(i);
        fireballs[i].update();


    }
    
    
    ship.checkDrag();
    //For each loop will interate through each object in an array
    missiles.forEach(function(element) {
        element.update();
    });
    ship.checkKeys();
    ship.update();


}
