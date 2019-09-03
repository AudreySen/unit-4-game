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

    //Pointe ces id dans mon html:
    $("#gagne").text(scoreGagne);
    $("#perdu").text(scorePerdu);

    // Ces methodes indiqueront à l'écran les points gagnés et perdus:
    scoreGagne.textContent = gagne;
    scorePerdu.textContent = perdu;

    // Chaque fois que le joueur clique une touche, la valeur de chaque cristal (un nombre au hasard entre 1 et 12) s'additionne sur le compteur id "additionClics":
    // !!!!!!!! Ou essayer cette methode: !!!!!!!!!!!!!!
    //$("button").click(function(){
    //$("p").hide();

    $("#boutonRouge").on("click", function() {});

    $("#boutonBleu").on("click", function() {});

    $("#boutonJaune").on("click", function() {});

    $("#boutonVert").on("click", function() {});

    //Create 4 strings which will hold crystals numbers (ne pas les afficher dans mon html):
    var valeurRouge = "";
    var valeurBleu = "";
    var valeurJaune = "";
    var valeurvert = "";

    //!!!!!!!!!!!Then initiate a loop to generate 4 separate numbers:!!!!!!! NOT SURE OF THAT
    for (var i = 0; i < 12; i++) {

        //Ai crée 4 variables avec un chiffre au hasard entre 1 et 12:
        var valeurHasardR = Math.floor(Math.random() * 11) + 1;
        var valeurHasardB = Math.floor(Math.random() * 11) + 1;
        var valeurHasardJ = Math.floor(Math.random() * 11) + 1;
        var valeurHasardV = Math.floor(Math.random() * 11) + 1;
    }
    //If statement: Si le chiffre donné est atteint, le joueur gagne, un message "You won" s'affiche et un point s'ajoute au un compteur score gagnés:
    //Si le chiffre donné est dépassé, le joueur perd, un message "You lost" s'affiche et un point s'ajoute au un compteur score perdu:

    $("#resultat").text(phraseResultat);
    // Nouveau nombre à deviner:
    // Nouvelles valeurs des differents cristaux
});