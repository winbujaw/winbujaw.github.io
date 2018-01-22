$(function(){
  
  question1();
  
})

var question1 = function(){
    
    $("div.narrative, span.q1").html("Do you like to play video games?");
    $(".q1").show();
    $(".buttons").html("<button class='btn btn-primary q1-yes'> YES </button>");
    $(".buttons").append("<button class='btn btn-primary q1-no'>NO</button>");
    
    //MAKE IT WORK
    $(".q1-yes").click(function(){
      
      //Update Sidebar
      $(".q1-choice").html("YES").show();
      //Run Question 2
      question2();
      $(".narrative").html("What type of video games do you like");
    });
    $(".q1-no").click(function(){
       
       //UPDATE SIDEBAR
       $(".q1-choice").html("NO").show();
       //RUN QUESTION 2
       $(".narrative").html("This is not for an imbecile like yourself.")
    });
};

var question2 = function(){
    
    //UPDATE THE GRAPHICS
    $("div.narrative, span.q2").html("What type of game do you like to play");
    $(".q2").show();
    $(".buttons").html("<button class='btn btn-primary q2-rpg'>RPG</button>");
    $(".buttons").append("<button class='btn btn-primary q2-fps'>FPS</button>");
    $(".buttons").append("<button class='btn btn-primary q2-sports'>SPORTS</button>");
    $(".buttons").append("<button class='btn btn-primary q2-adventure'>ADVENTURE</button>");
    $(".buttons").append("<button class='btn btn-primary q2-mmo'>MMO</button>");
    
    //MAKE IT WORK
    $(".q2-rpg").click(function(){
        $(".q2-choice").html("RPG").show();
        question3("RPG");
    });
    
    $(".q2-fps").click(function(){
        $(".q2-choice").html("FPS").show();
        question3("FPS");
    });
    
    $(".q2-sports").click(function(){
        $(".q2-choice").html("SPORTS").show();
        question3("SPORTS");
    });
    
    $(".q2-adventure").click(function(){
        $(".q2-choice").html("ADVENTURE").show();
        question3("ADVENTURE");
    });
    
    $(".q2-mmo").click(function(){
        $(".q2-choice").html("MMO").show();
        question3("MMO");
    });
    
};

var question3 = function(q2_choice){
    
    $("div.narrative, span.q3").html("What type of " + q2_choice + " do you like?");
    $(".q3").show();
    if(q2_choice === "RPG"){
        q3_buttons("Science Fantasy", "Science Fiction");
    }
    else if(q2_choice === "FPS"){
        q3_buttons("Realistic", "Futuristic");
    }
    else if (q2_choice === "SPORTS"){
        q3_buttons("Basketball", "Football");
    }
    else if (q2_choice === "ADVENTURE"){
        q3_buttons("Simulation", "Hack N Slash");
    }
    else
        q3_buttons("Arena", "RPG");
};

var q3_buttons = function(b1Text, b2Text){
    
    $(".buttons").html("<button  class='btn btn-primary q3-button1'>" + b1Text + "</button>");
    $(".buttons").append("<button class='btn btn-primary q3-button2'>" + b2Text + "</button>");
    
    $(".q3-button1").click(function(){
    if(b1Text === "Science Fantasy"){
        displayChoice(b1Text, "Final Fantasy");
    }
    else if(b1Text === "Realistic"){
        displayChoice(b1Text,"Metal of Honor");
    }
    else if(b1Text === "Basketball"){
        displayChoice(b1Text,"2k18");
    }
    else if(b1Text === "Simulation"){
        displayChoice(b1Text, "Sims 4");
    }
    else
        displayChoice("Arena", "League of Legends");
    });
    
    $(".q3-button2").click(function(){     
    if(b2Text === "Science Fiction"){
        display(b2Text ,"Star Wars")
    }
    else if(b2Text === "Futuristic"){
        displayChoice(b2Text, "Destiny");
    }
    else if(b2Text === "Football"){
        displayChoice(b2Text, "Madden 18");
    }
    else if(b2Text === "Hack N Slash"){
        displayChoice(b2Text , "Dynasty Warriors");
    }
    else 
        displayChoice("RPG", "Wizard 101");
    });
};

var displayChoice  = function(finalAnswer, gameOption){
    $(".q3-choice").html(finalAnswer).show();
    $(".narrative").html(gameOption);
    $(".buttons").hide();
};