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