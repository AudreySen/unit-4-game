$(document).ready(function() {
    //This code makes sure that the JavaScript doesn't get run until the HTML is finished loading          

    //A randomly generated number to be reached between 19 and 120:
    var randomly = Math.floor(Math.random() * 101) + 19

    //Pointed my id "numberToReach", randomly generated in my HTML:
    $("#numberToReach").text(randomly);
    console.log(randomly)

    //I declare 3 var to create counters:
    var counter = 0;
    var wonScore = 0;
    var lostScore = 0;

    function incrementWins() {
        //!!!!!!!!!!! Create a fonction to display the message You win! each time a point is won. Revoir cela, pas la bonne fonction, il faut la lier au compteur !!!!!
        alert("You win!");
        wonScore++;
        // These methods will display points won and lossed:
        wonScore.textContent = win;
    }
    //Pointed this id in my html: 
    $("#win").text(wonScore);

    function incrementLosses() {
        //!!!!!!!!!!! Create a fonction to display the message You win! each time a point is won. Revoir cela, pas la bonne fonction, il faut la lier au compteur !!!!!
        alert("You lose!");
        lostScore++;
        // These methods will display points won and lossed:
        lostScore.textContent = lost;
    }
    //Pointed this id in my html: 
    $("#lost").text(lostScore);

    //

    // Each time the player click a crystal, each crystal value (a random number between 1 and 12) is added to the id "additionClics":
    // !!!!!!!! Or try this method: !!!!!!!!!!!!!!
    //$("button").click(function(){
    //$("p").hide();

    $("#redButton").on("click", function() {
        //Created 1 variable with a random number between 1 et 12:
        var randomValueR = Math.floor(Math.random() * 12) + 1;
        console.log(randomValueR);
    });

    $("#blueButton").on("click", function() {
        //Created 1 variable with a random number between 1 et 12:
        var randomValueB = Math.floor(Math.random() * 12) + 1;
        console.log(randomValueB);
    });

    $("#yellowButton").on("click", function() {
        //Created 1 variable with a random number between 1 et 12:
        var randomValueJ = Math.floor(Math.random() * 12) + 1;
        console.log(randomValueJ);
    });

    $("#greenButton").on("click", function() {
        //Created 1 variable with a random number between 1 et 12:
        var randomValueV = Math.floor(Math.random() * 12) + 1;
        console.log(randomValueV);
    });
    /// !!!!!!!!!!!!!!!! I'm not sure I have to keep this added!!!!!!!!
    //Create 4 strings which will hold crystals values (not displayed in my html):
    var redValue = "";
    var blueValue = "";
    var yellowValue = "";
    var greenValue = "";

    //!!!!!!!!!!!Then initiate a loop to generate 4 separate numbers:!!!!!!! NOT SURE OF THAT EITHER
    for (var i = 0; i < 4; i++) {


    }
    //If statement: If the given number is reached, the player win, a message "You won" is displayed and a point is added to the scoreWons:
    //If the given number is exceeded, the player losses, a message "You lost" is displayed and a point is added to the LostsScore:


    // !!!!!!!!! Generate a new number to be reached:
    // !!!!!!!!! Generate new values for each cristals:
});