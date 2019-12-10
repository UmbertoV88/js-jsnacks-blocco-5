$(document).ready(function() {

function reverse(parola) {

    var inverse = "";
    for (var i = 0; i < parola.length; i++) {
        inverse = parola[i] + inverse;
    }
    return inverse;
}

var parolaUtente = prompt ("inserisci una parola...");
var rovescia = reverse(parolaUtente);
console.log(rovescia);






});
