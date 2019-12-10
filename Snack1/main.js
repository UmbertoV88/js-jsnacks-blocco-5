$(document).ready(function() {

var zucchina = [];
var pesoFinale = 0 ;

for (var i = 0; i < 10; i++) {
    var peso = generaRandom(10, 50);
    var lunghezza = generaRandom(1, 15);
    var varieta = "Italiana";
    var oggetto = {
        varieta : varieta,
        peso : peso,
        lunghezza : lunghezza
    }
    zucchina.push(oggetto);
    console.log(oggetto.peso);
    pesoFinale = pesoFinale + oggetto.peso;

};

console.log(zucchina);
console.log("La somma del peso di tutte le zucchine è " + pesoFinale);




function generaRandom(min, max){
    var numero = Math.floor(Math.random() * (max - min + 1) ) + min;
    return numero;
}








});
