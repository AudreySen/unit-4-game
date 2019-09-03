$(document).ready(function() {
    //This code makes sure that the JavaScript doesn't get run until the HTML is finished loading          

    //Le nombre à atteindre entre 19 et 120 est généré au hasard:
    var auHasard = Math.floor(Math.random() * 101) + 19

    //Pointe l'id "numeroAatteindre", généré au hasard, dans mon HTML:
    $("#numeroAatteindre").text(auHasard);
    console.log(auHasard)

    //Je déclare deux variables pour créer le compteur:
    var compteur = 0;
    var scoreGagne = 0;
    var scorePerdu = 0;

    function() {
        //!!!!!!!!!!! Créer une fonction qui affiche le message You win! chaque fois qu'un point est gagné. Revoir cela, pas la bonne fonction, il faut la lier au compteur !!!!!
        alert("You win!");
        scoreGagne++;
        // Ces methodes indiqueront à l'écran les points gagnés et perdus:
        scoreGagne.textContent = gagne;
    }
    //Pointe cet id dans mon html: 
    $("#gagne").text(scoreGagne);

    function() {
        //!!!!!!!!!!! Créer une fonction qui affiche le message You win! chaque fois qu'un point est gagné. Revoir cela, pas la bonne fonction, il faut la lier au compteur !!!!!
        alert("You lose!");
        scorePerdu++;
        // Ces methodes indiqueront à l'écran les points gagnés et perdus:
        scorePerdu.textContent = perdu;
    }
    //Pointe cet id dans mon html: 
    $("#perdu").text(scorePerdu);

    // Chaque fois que le joueur clique une touche, la valeur de chaque cristal (un nombre au hasard entre 1 et 12) s'additionne sur le compteur id "additionClics":
    // !!!!!!!! Ou essayer cette methode: !!!!!!!!!!!!!!
    //$("button").click(function(){
    //$("p").hide();

    $("#boutonRouge").on("click", function() {
        //Ai crée 1 variable avec un chiffre au hasard entre 1 et 12:
        var valeurHasardR = Math.floor(Math.random() * 12) + 1;
        console.log(valeurHasardR);
    });

    $("#boutonBleu").on("click", function() {
        //Ai crée 1 variable avec un chiffre au hasard entre 1 et 12:
        var valeurHasardB = Math.floor(Math.random() * 12) + 1;
        console.log(valeurHasardB);
    });

    $("#boutonJaune").on("click", function() {
        //Ai crée 1 variable avec un chiffre au hasard entre 1 et 12:
        var valeurHasardJ = Math.floor(Math.random() * 12) + 1;
        console.log(valeurHasardJ);
    });

    $("#boutonVert").on("click", function() {
        //Ai crée 1 variable avec un chiffre au hasard entre 1 et 12:
        var valeurHasardV = Math.floor(Math.random() * 12) + 1;
        console.log(valeurHasardV);
    });
    /// !!!!!!!!!!!!!!!! Je ne sais pas si il faut garder cela en plus!!!!!!!!
    //Create 4 strings which will hold crystals values (ne pas les afficher dans mon html):
    var valeurRouge = "";
    var valeurBleu = "";
    var valeurJaune = "";
    var valeurvert = "";

    //!!!!!!!!!!!Then initiate a loop to generate 4 separate numbers:!!!!!!! NOT SURE OF THAT EITHER
    for (var i = 0; i < 12; i++) {


    }
    //If statement: Si le chiffre donné est atteint, le joueur gagne, un message "You won" s'affiche et un point s'ajoute au un compteur score gagnés:
    //Si le chiffre donné est dépassé, le joueur perd, un message "You lost" s'affiche et un point s'ajoute au un compteur score perdu:

    $("#resultat").text(phraseResultat);
    // Nouveau nombre à deviner:
    // Nouvelles valeurs des differents cristaux
});