$(document).ready(function() {
            //This code makes sure that the JavaScript doesn't get run until the HTML is finished loading          

            //Un nombre a atteindre entre 19 et 120 s'affiche au hasard:
            var auHasard = Math.floor(Math.random() * 120) + 19

            //Pointe l'id "numeroAatteindre", donné au hasard, dans mon HTML:
            $("#numeroAatteindre").text(auHasard);
            console.log(auHasard)
                //Je déclare trois variables pour créer le compteur:
            var scoreTotal = 0;
            var scoreGagne = 0;
            var scorePerdu = 0;

            //Pointe ces id dans mon html:
            $("#gagne").text(scoreGagne);
            $("#perdu").text(scorePerdu);
            $("#resultat").text(scoreResultat);

            // Ces methodes indiqueront à l'écran le score total, les points gagnés et perdus:
            scoreTotal.textContent = total;
            scoreGagne.textContent = gagne;
            scorePerdu.textContent = perdu;

            //Ai cree 4 variables avec un chiffre au hasard entre 1 et 12:
            var valeurRouge = Math.floor(Math.random() * 12) + 1;
            var valeurBleu = Math.floor(Math.random() * 12) + 1;
            var valeurJaune = Math.floor(Math.random() * 12) + 1;
            var valeurVert = Math.floor(Math.random() * 12) + 1;

            //Stocker les valeurs de chaque cristal le temps de la partie (mais ne pas l'afficher dans mon html):

            // Chaque fois que le joueur clique une touche, la valeur de chaque cristal (un nombre au hasard entre 1 et 12) s'additionne sur le compteur id "additionClics":

            $(".rouge").on("click", function() {



                    $(".bleu").on("click", function() {

                        }




                    })

                //If statement: Si le chiffre donné est atteint, le joueur gagne et un point s'ajoute au un compteur score gagnés:
                //Si le chiffre donné est dépassé, le joueur perd et un point s'ajoute au un compteur score perdu:


                // Nouveau nombre à deviner:
                // Nouvelles valeurs des differents cristaux:





































































































            });