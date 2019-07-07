

function calculer(){
       
      var valeur1,valeur2,resultat;


         valeur1 = document.getElementByID("nombre1").value;
         valeur2 = document.getElementByID("nombre2").value;

         if(document.getElementByID("add")){
              resultat = parseInt(valeur1) + parseInt(valeur2);
        }

         else if(document.getElementByID("sous")){
         	  resultat = parseInt(valeur1) - parseInt (valeur2);
         }

         else if(document.getElementByID("mult")){
         	  resultat = parseInt(valeur1) * parseInt (valeur2);
         }
         else{
         	  resultat = parseInt(valeur1) / parseInt (valeur2);
         }
         
     }

     document.getElementByID("btn").onclick = calculer;
     document.getElementByID("result").write =btn;