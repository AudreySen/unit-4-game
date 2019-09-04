 //This code makes sure that the JavaScript doesn't get run until the HTML is finished loading 
 $(document).ready(function() {

     //I declare 3 var to create counters:
     var totalScore = 0;
     var wonScore = 0;
     var lostScore = 0;

     //A randomly generated number to be reached between 19 and 120:
     var randomly = Math.floor(Math.random() * 101) + 19
         //Pointed my id "numberToReach" in my HTML:
     $("#numberToReach").text(randomly);

     var redValue = $("#redButton").val();
     var blueValue = $("#blueButton").val();
     var yellowValue = $("#yellowButton").val();
     var greenValue = $("#greenButton").val();

     //When the game starts, each crystal get a random number between 1 and 12 for the duration of the game.
     // Each time the player click a crystal, each random crystal value is added to the id "sumClicks":
     var randomValueR = 1;
     var randomValueB = Math.floor(Math.random() * 12) + 1;
     var randomValueJ = Math.floor(Math.random() * 12) + 1;
     var randomValueG = Math.floor(Math.random() * 12) + 1;

     $("#redButton").on("click", function() {
         totalScore = randomValueR + (totalScore)
         $("#sumClicks").text(totalScore);
         //Created 1 variable with a random number between 1 and 12:
         console.log(randomValueR);
         console.log(totalScore);
         //Created 2 conditionals :
         if (totalScore === randomly) {
             console.log()
             incrementWins();
         }

         if (totalScore > randomly) {
             console.log()
             incrementLosses();
         }
     });

     $("#blueButton").on("click", function() {
         totalScore = randomValueB + (totalScore)
         $("#sumClicks").text(totalScore);
         //Created 1 variable with a random number between 1 and 12:
         console.log(randomValueB);
         console.log(totalScore);
         if (totalScore === randomly) {
             console.log()
             incrementWins();
         }

         if (totalScore > randomly) {
             console.log()
             incrementLosses();
         }
     });

     $("#yellowButton").on("click", function() {
         totalScore = randomValueJ + (totalScore)
         $("#sumClicks").text(totalScore);
         //Created 1 variable with a random number between 1 and 12:
         console.log(randomValueJ);
         console.log(totalScore);
         if (totalScore === randomly) {
             console.log()
             incrementWins();
         }

         if (totalScore > randomly) {
             console.log()
             incrementLosses();
         }
     });

     $("#greenButton").on("click", function() {
         totalScore = randomValueG + (totalScore)
         $("#sumClicks").text(totalScore);
         //Created 1 variable with a random number between 1 and 12:
         console.log(randomValueG);
         console.log(totalScore);
         if (totalScore === randomly) {
             console.log()
             incrementWins();
         }

         if (totalScore > randomly) {
             console.log()
             incrementLosses();
         }
     });

     function incrementWins() {
         //Create a fonction to display the message You win! each time a point is won.
         alert("You win!");
         wonScore++;
         // //Pointed this id in my html. This method will display points won and lossed:
         $("#win").text(wonScore);
         // Reset the total score:
         totalScore = 0;
         console.log(totalScore);
         $("#sumClicks").text(totalScore);
         randomly = Math.floor(Math.random() * 101) + 19
         $("#numberToReach").text(randomly);
     }

     function incrementLosses() {
         //!!!!!!!!!!! Create a fonction to display the message You win! each time a point is won. Revoir cela, pas la bonne fonction, il faut la lier au compteur !!!!!
         alert("You lose!");
         lostScore++;
         // These methods will display points won and lossed:
         $("#lost").text(lostScore);
         // Reset the total score:
         totalScore = 0;
         $("#sumClicks").text(totalScore);
         randomly = Math.floor(Math.random() * 101) + 19
         $("#numberToReach").text(randomly);
     }



     //If statement: If the given number is reached, the player win, a message "You won" is displayed and a point is added to the scoreWons:
     //--------> if #sumClicks = #numberToReach, then + 1 point added to wonScore and message displayed "You win".

     //If the given number is exceeded, the player losses, a message "You lost" is displayed and a point is added to the LostsScore:
     //--------> else #sumClicks > #numberToReach, then + 1 point added to lostScore and message displayed "You lost".

     /// !!!!!!!!!!!!!!!! I'm not sure I have to keep this added!!!!!!!!
     //Create 4 strings which will hold crystals values (not displayed in my html):
     //  var redValue = "";
     //  var blueValue = "";
     //  var yellowValue = "";
     //  var greenValue = "";

     //I have to find something which will display the sum of the values of the different crystals
     //-----------> redValue+blueValue+yellowValue+greenValue= sumNumber displayed in id #sumClicks

     // $("#redButton").append(redValue);
     // $("#rblueButton").append(blueValue);
     // $("#yellowButton").append(yellowValue);
     // $("#greenButton").append(greenValue);




 })