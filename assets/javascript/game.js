//!!!!!!!!!!!!! I still don't understand this line of code; !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
$(document).ready(function() {

            //Pointe cet id dans mon HTML:
            $("#numeroAatteindre").text(auHasard);
            //Un nombre a atteindre au hasard entre 19 et 120 s'affiche au hasard.
            var auHasard = Math.floor(Math.random() * 120) + 19

            //Ai cree 4 variables avec un chiffre au hasard entre 1 et 12:
            var rubis = Math.floor(Math.random() * 12) + 1;
            var saphir = Math.floor(Math.random() * 12) + 1;
            var ambre = Math.floor(Math.random() * 12) + 1;
            var emeraude = Math.floor(Math.random() * 12) + 1;

            //Pointe ces id dans mon html:
            $("gagne").text(gagne);
            $
            //Je declare trois variables pour le compteur:
            var total = 0;
            var gagne = 0;
            var perdu = 0;

            // Ces methodes imprimeront a l'ecran le score total, les points gagnes et perdus:
            scoreTotal.textContent = total;
            scoreGagne.textContent = gagne;
            scorePerdu.textContent = perdu;

            // Chaque fois que le joueur clique une touche, une valeur entre 1-12 s'affiche au hasard:
            $(".rouge").on("click", function() {
                    var auHasard = Math.floor(Math.random() * 12) + 1;

                    $(".bleu").on("click", function()



                    })







































































































            });