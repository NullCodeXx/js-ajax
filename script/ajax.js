/*
Copie de la requête ajax du fichier index.html.
*/

function doAjax(options) {
    //On définit les paramètres par défaut de notre requete
    let defaults = {
        url: '',
        method: 'GET',
        async: true,
        args: '',
        callback: function () { },
        callbackError: function () { }
    };
    //On assigne les arguments de options à defaults
    assignArgs(options,defaults);

    //On crée une nouvelle instance d'objet AJAX
    let ajax = new XMLHttpRequest();
    //AJAX étant une service asynchrone, il va falloir
    //lui dire via des évènements comment se comporter
    //au moment où il aura terminé sa requête et que 
    //sa réponse sera disponible
    ajax.onreadystatechange = function () {
        /*Le readystatechange sera appelé un certain
        nombre de fois selon où en est notre requête
        (codes dispo sur mozilla). Le seul code qui
        va nous intéresser nous sera celui indiquant que
        la requête est terminé et la réponse disponible : 4
        */
        if (ajax.readyState === 4) {
            //On ne voudra manipuler la réponse seulement si
            //la requête s'est couronnée de succès
            if (ajax.status === 200 || ajax.status === 304) {
                //La réponse de la requête se trouve alors dans
                //l'objet ajax dans sa propriété response.
                defaults.callback(ajax.response);
            } else {
                defaults.callbackError();
            }
        }
    };
    //On ouvre le requête en lui fournissant le type de
    //requête HTTP, l'url à requêter et si c'est synchrone ou non
    ajax.open(defaults.method, defaults.url, defaults.async);
    //On envoie la requête
    ajax.send(defaults.args);
}
/**
 * Fonction qui itère sur les propriétés d'un objet source,
 * vérifie si l'objet target possède une propriété correspondate
 * et si oui, assigne comme valeur de cette propriété target
 * la valeur de la propriété source.
 * @param {*} source 
 * @param {*} target 
 */
function assignArgs(source, target) {
    for(let clef in source) {
        if(target.hasOwnProperty(clef)) {
            target[clef] = source[clef];
        }
    }
}







/*

//Au lieu d'avoir cette ligne ci dessosu on va avoir un object.    
    //function doajax(url, method, async, args ,callback, callbackErreur) {}
    function doajax(option) {
        url='',
        method='',
        async='',
        args='',
        callback: function() { },
        callbackErreur: function() { },
    }

    //appel la function
    assgnArgs(option, default)

let ajax = new XMLHttpRequest(); //object qui sert a faire une requête.
    //Function doajax qui servira a savoir si 
    //on envoie du post ou du get, que c'est 
    //du asynchrome, args je sais pas, calaback 
    //pour renvoyer a l'utlisateur si il recois 
    //une erreur 404etc... lui renvoiyer une chose 
    //si la on passe dans le else.

        //AJAX étant un service asynchrome, il va falloire
        // lui dire via des evenement comment se comporter au 
        //moment ou il aura terminer sa requete et que sa
        //reponse seras disponible.
        ajax.onreadystatechange = function() {
            /*Le readyStatChange sera apple un certain nimber de fois selon 
            ou est notre requete (code dispo sur mozilla). le seul code
            qui va nous intéréssé nous sera celui indiquant que
            la requete est terminer et la reponse disponible.
            */

/*
/*
            //Voir github pour les comments de JEANS.
            if(ajax.readyState === 4) { //pourquoi 4, parcequ'il y a 4 value voir google readyState ajax.
                
                if (ajax.status === 200 || ajax.status === 304) { //200 = sucess et 304 = undifined.
                console.log(ajax.response);
                button = document.querySelector("#para");
                button.addEventListener("click", function() {
                    button = document.querySelector("#para").innerHTML = ajax.response;
                })
                //On place la function de l'object si sa marche.
                defaults.callback();
                }else{
                    //On place la function de l'object si sa ne marche pas.
                    defaults.callbackErreur();
                }
            }
        };

    //On va ouvrir le fichier par default en function des pro de l'object si dessus.
    ajax.open(defaults.method, defaults.url, defaults.async);
    ajax.send(defaults.args);



    //function qui servita a définir les valeur par default.
     function assgnArgs(option, target) {
        //param1        param10 
        //param2        param3
        //param3        param1
        //La function servira a ce que les param soit egal au param = d'en face.
        for(let clef in source) 
            //itere sur les cles de prop source.
            if (target.hasOwnProperty(clef)) {
                target[clef] = source[clef];
            }
        }
    }

    */