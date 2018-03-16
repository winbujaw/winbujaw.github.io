//INITIALIZE AND DECLARE VARIABLES

//create an empty array variable called testJournal
var testJournal = [];
//create a variable to hold the string value to add a new input text box

//declare a variable called squirrel


$(function() {
    //call the function to add a text box field
    addEvent();
    //call the function to remove a text box field

    removeEvent();
    //call the function to add entries to our array

    addEntry();
    //test the hasEvent function
    //alert(/*call the function here with pizza as the activity and JOURNAL as the journal*/);
    //call the function to output the table and phi
    outputPhi();
    //call the function to output all correlations
    displayAllPhis();
    //call the function to narrow the search
    narrower();
    //call the function to display the final two correlations
    lastCheck();
});

//add the code to add a new input text box 
var addEvent = function() {
    $(".addevent").click(function() {
        $(".textbox").append("<input class='form-control text-box' type='text'>")
    })
};

//add the code to remove the last input text box added. HINT: LOOK UP JQUERY .last() 
var removeEvent = function() {
    $(".removeevent").click(function() {
        $(".textbox").last().remove();
    })
};
//add the code to add the contents of the input boxes to the testJournal array
var addEntry = function() {

    //GRAB THE ACTIVITIES AND ADD TO A TEMP ARRAY
    $(".submit").click(function() {

        //initialize and declare a temporary and empty array
        var tempArray = [];

        //Since there are multiple input boxes with the same class we will use the .each() function. The only
        //hitch with this is the confusing reference 'this'. the .each() function selects each input box, one at a time
        //so the 'this' reference is just a way to access which ever input box the .each function has currently selected.
        //You will then add each text boxes contents to the temporary array
        //Good Luck.

        $(".text-box").each(function() {
            tempArray.push($(this).val());
        });

        //Add an if statement that makes the variable squirrel true if Yes was selected and false if No was selected. You
        var squirrel = $("#squirrel-option :selected").val();





        if (squirrel == "Yes") {
            squirrel = true;
        } else {
            squirrel = false;
        }


        //may have to look up how to retrieve which option was SELECTED (hint hint) from the drop-down box. Be sure to declare the
        //variable squirrel above.



        //Add a statement which will add the tempArray and squirrel to the testJournal array. However, these are going to be added in
        //unique way.
        //We will be creating an array 'object'. An object is different from an array in that it can hold properties. For our purposes,
        //our object will have two properties, events & squirrel. Events will hold the tempArray, which has all the activities for that
        //day, and squirrel will hold the value true or false. You can create a property in the array by adding 'name:' before calling
        //the variable for that item. SOOOO, if I was making a book, it has a title and author. so I would create a book object like so:
        //var myBook = { title: "Lost in Code", author: "Mr. Law"} 

        testJournal.push({
                events: tempArray,
                squirrel: squirrel
            });




        //call the outputTest function
        outputTest();

    });
};
//add the code to output the contents of testJournal to output1
var outputTest = function() {
    //LOOK UP JSON STRINGIFY
    testJournal = JSON.stringify(testJournal);
    $(".displayTestJournal").append(testJournal)
    //clear the input textbox and leave only one input textbox

};

//add the code to the function to check 1 day in the journal for an activity. 
var hasEvent = function(activity, day) {

    //Here we need to look through the Journal, specifically the activities that are in the 'Events' property of our JOURNAL. In our book example above, if I wanted to access the book's title, I would use myBook.title. Notice our JOURNAL object has 2 properties events and squirrel. You will also need to look up how to use .indexOf for arrays. It will help.




    //This function will need to 'return' true if the activity is in the journal and false if the activity is not. A 'return statement' is used when the function gives input back to be used elsewhere in the program. A function with a return statement needs to be used as an argument in other functions or assigned to a variable. They cannot be called independently like the first four functions you wrote. You will need to look up 'return' functions.
    return day.events.indexOf(activity) != -1;
};

//add the code to the function to create a 'table' to calculate phi
var tableFor = function(activity, journal) {

    //THIS FUNCTION WILL RETURN A 'TABLE', WHICH IS JUST AN ARRAY WITH 4 INTEGER VALUES USED TO CALCULATE PHI

    //first create an array with zero values for all 4 indexes 
    var table = [0, 0, 0, 0];

    //next create a for loop to loop through the array argument passed into it; journal for this example. Each entry in the journal represents 1 day. so journal[i] represents 1 day.

    for (var i = 0; i < journal.length; i++) {
        //THIS IS ALL INSIDE THE FOR LOOP

        //The idea is to search the journal and count the occurences for each value of the table, [00,01,10,11]. The logic is this: 
        //      If the activity we want is in that day's activities then
        //          if squirrel for that day is true, then both are true, so 11, so increase index3 by 1
        //          if squirrel is false, then 01, so increase index1 by 1
        //      If the activity is not there then
        //          if squirrel is true, then 10, so increase index2 by 1
        //          if squirrel is false, then 00, so increase indexo by 1.
        if (hasEvent(activity, journal[i])) {
            if (journal[i].squirrel) {
                table[3] += 1;

            } else {
                table[1] += 1;
            }
        } else {
            if (journal[i].squirrel) {
                table[2] += 1;




                //RETURN THE TABLE OUTSIDE THE FOR LOOP
            }
            else {
                table[0] += 1;
            }
        }
    }
    return table;
};

//add the code to calculate phi. It will accept one argument, table, which is the table returned by tableFor().
var calculatePhi = function(table) {

    //create a variable phi
    var phi;
    //do the phi calculation. Keep in mind the table is [00, 01, 10, 11]. 
    phi = (table[3] * table[0] - table[2] * table[1]) /
        Math.sqrt((table[2] + table[3]) *
        (table[0] + table[1]) *
        (table[1] + table[3]) *
        (table[0] + table[2]));

    //return the variable phi
    return phi;

};

//add the code to output the table and the phi calculation when calculate button is pressed
var outputPhi = function() {
    $(".calcPhi").click(function() {
        //create a variable activity and assign it the value in the text box
        var activity = $("#eventPhi").val()
        //create a variable table and call tableFor with activity and JOURNAL as arguments
        var table = tableFor(activity, JOURNAL);
        //create a variable phi and call calculatePhi with table as the argument
        var Phi = calculatePhi(table)
        //display table and phi in the given format to the displayPhi div
        $(".displayPhi").html("[" + table + "] =" + phi)
    });
};

//add the code to calculate all the correlations for all of the activities and add them to an object. This function will RETURN the object.
var correlations = function(journal) {
    //To declare and empty object, instead of [], like for arrays, we use {}. Those symbolize that the variable is an object, something able to hold properties and values.

    //declare and intialize an empty object

    //create a for loop that loops through each day in the journal


    //INSIDE THE OUTER FOR LOOP
    //create a variable day, which holds the activities for the current day

    //create a loop which loops through each event in a day. You cannot use the same variable that you used in the loop above.


    //INSIDE THE INNER FOR LOOP
    //create a variable to holds the current activity of the day

    //Now we do the important step. You will need to research how the function 'in' works. The logic here is:
    //if the activity is IN the object, do nothing, else, add the activity and calculate its phi value.


    //return the object OUTSIDE BOTH LOOPS
    return phis;
};

var displayAllPhis = function() {

    $(".gatherPhi").click(function() {
        //call the correlations function using JOURNAL as the argument and assign it to a variable named allPhis

        //create a for loop using the 'in' operator that displays each activity and its phi value to the displayAllPhi div.

    });
};

var narrower = function() {
    //copy and paste the code from displayAllPhis and change the JQuery to match the HTML for this section. Then inside the for loop, if the phi value for an entry is > .1 or <-.1, display it. Hint: WHAT RETURNS THE PHI VALUE????

};

var lastCheck = function() {

    $(".getLastTwo").click(function() {
        //create a for loop that loops through the ENTIRE JOURNAL


        //THIS IS INSIDE THE LOOP
        //create a variable to hold the current day in the journal


        //create an if statement that checks each day for the strong positive and not the strong negative, then ADD an activity to the events array for that day with a new activity of your choosing. 




        //THIS IS OUTSIDE THE LOOP
        //display the phi value, and the name, and description to the displayTheLastTwo div. So for example, the output may be "Lightly Gassy: 1. The more gas and less weight I put in the car the farther it will go."

    });

};