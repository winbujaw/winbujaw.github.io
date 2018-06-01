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
var MAXTIME = 30;
var fireballs;
var flies;
var fly;
var fire;
var time;



$(function() {

    question1();

})

var question1 = function() {

    $("div.narrative, span.q1").html("Attempt to grab the sucker?");
    $(".q1").show();
    $(".buttons").html("<button class='btn btn-danger q1-yes'> Yea, its right there. </button>");
    $(".buttons").append("<button class='btn btn-danger q1-no'>NO, I'm scared of the dark!</button>");

    //MAKE IT WORK
    $(".q1-no").click(function() {

        //Update Sidebar
        $(".q1-choice").html("NO").show();
        //Run Question 2
        question2();
        $(".narrative").html("Get one of your parents to go inside?");
    });
    $(".q1-yes").click(function() {

        //UPDATE SIDEBAR
        $(".q1-choice").html("Yes").show();
        //RUN QUESTION 2
        displayChoice("YOU'RE DEAD!")
         
        
    });
    
    
};

var question2 = function() {

    //UPDATE THE GRAPHICS
    $("div.narrative, span.q2").html("Get one of your parents to go inside?");
    
    $(".q2").show();
    
    $(".buttons").html("<button class='btn btn-danger q2-Dad'>Yea, my dad.</button>");
    $(".buttons").append("<button class='btn btn-danger q2-Mom'>Yea, my mom.</button>");
    $(".buttons").append("<button class='btn btn-danger q2-Neither'>Neither</button>");
   

    //MAKE IT WORK
    $(".q2-Dad").click(function() {
        $(".q2-choice").html("Dad").show();
        displayChoice("RIP DAD!")
    });

    $(".q2-Mom").click(function() {
        $(".q2-choice").html("Mom").show();
       displayChoice("RIP MOM!")
    });

    $(".q2-Neither").click(function() {
        $(".q2-choice").html("Neither").show();
        question3();
    $(".narrative").html("What now!?");

    });



   
};

var question3 = function() {

    $("div.narrative, span.q3").html("What now?");
    $(".q3").show();
    $(".buttons").html("<button class='btn btn-danger q3-cat'> Throw the cat in there. </button>");
    $(".buttons").append("<button class='btn btn-danger q3-dog'>Maybe my dog will scare them away!</button>");

    //MAKE IT WORK
    $(".q3-dog").click(function() {

        //Update Sidebar
        $(".q3-choice").html("Dog").show();
        //Run Question 2
        question4();
        
    });
    $(".q3-cat").click(function() {

        //UPDATE SIDEBAR
        $(".q3-choice").html("Cat").show();
        //RUN QUESTION 2
        displayChoice("YOU'RE CAT DIDN'T HELP BRO!")
        
        
    });
    
    
};


var question4 = function() {

    $("div.narrative, span.q4").html("Grab the sucker or close the door?");
    $(".q4").show();
    $(".buttons").html("<button class='btn btn-danger q4-run'> Yes, I want candy! </button>");
    $(".buttons").append("<button class='btn btn-danger q4-leave'> SAY GOODBYE DOG</button>");

    //MAKE IT WORK
    $(".q4-run").click(function() {

        //Update Sidebar
        $(".q4-choice").html("run").show();
        //Run Question 2
        question5();
        
    });
    $(".q4-leave").click(function() {

        //UPDATE SIDEBAR
        $(".q4-choice").html("leave").show();
        //RUN QUESTION 2
        displayChoice("THAT's TUFF! YOU GOT A COLD HEART MANE!")
        
        
    });
    
    
};


var question5 = function() {

    $("div.narrative, span.q5").html("The monster grabbed your foot. Scream or fight?");
    $(".q5").show();
    $(".buttons").html("<button class='btn btn-danger q5-kick'> Kick, I'm not scared of nothin! </button>");
    $(".buttons").append("<button class='btn btn-danger q5-scream'> Scream, I'm afraid!!!</button>");

    //MAKE IT WORK
    $(".q5-kick").click(function() {

        //Update Sidebar
        $(".q5-choice").html("kick").show();
        //Run Question 2
        displayChoice("You won the game because you weren't scared!! This was all in your head!")
            

    });
    $(".q5-scream").click(function() {

        //UPDATE SIDEBAR
        $(".q5-choice").html("scream").show();
        //RUN QUESTION 2
        displayChoice("You lost!")
        
        
    });
    
    
};




var question6 = function() {

    
    
};

var displayChoice = function(finalAnswer, gameOption) {
    $(".q6-choice").html(finalAnswer).show();
    $(".narrative").html(gameOption);
    $(".buttons").hide();
};

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
        alert("You died")
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
    tFire = new Sprite(game, "http://www.imarvintpa.com/Mapping/Overlays/Effects/Fire/Fireball/Fireball1_GD.png", 40, 40);
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
        alert("Game over")
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
    tShip = new Sprite(game, 'https://www4.djicdn.com/assets/images/products/phantom-4-adv/s3-img-365b6df689d23e54eec77f64fa8538e3.png?from=cdnMap', 50, 50);

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

    starfield = new Sprite(game, 'http://www.wsllpaper.com/wp-content/uploads/2014/03/skyscrapers-above-the-clouds-hd-desktop-wallpaper.jpg', 1400, 1000);

    ship = new Ship();
    timer = new Timer();

    fly = new Fly;
    setupFlies();
    fire = new Fire();
    setupFireballs();
    ribbit = new Sound('Bomb.mp3');
    starfield.setSpeed(0);
    fire.setBoundAction(BOUNCE)
    fly.setBoundAction(BOUNCE)
    EPICMUSIC = new Sound("https://jelaw21.github.io/Resources/music-background.mp3");


    game.start();
    EPICMUSIC.play();

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
