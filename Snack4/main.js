$(document).ready(function() {
// Scrivi una funzione che fonda due array (con lo stesso
// numero di elementi) prendendo alternativamente gli
// elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
var lettere = ["a","b","c"];
var numeri = [1,2,3];
var arrayFinale = fusione(lettere, numeri)
console.log(arrayFinale);


function fusione(array1, array2){
    var fusione = [];
    for (var i = 0; i < array1.length; i++) {
        fusione.push(array1[i])
        fusione.push(array2[i])
    }
    return fusione;
};

});
