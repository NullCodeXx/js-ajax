<?php
if(isset($_GET['text'])) {
    echo "yo" . " " . $_GET["text"];
}else {
    //Code erreur php : 
        //tout les codes 200 = sucess
        //tout les codes 400 = erreur utilisateur.
        //Tout les codes 500 = erreur serveur.
    http_response_code(400);
    echo 'Erreur utilisateur, paramètre manquant';
}
    
?>