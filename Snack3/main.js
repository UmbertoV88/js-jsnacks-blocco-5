$(document).ready(function() {

// Dividi in due array separati le zucchine che misurano meno o più di 15cm.

   var zucchina = [];
   var zucchina2 = [];
   var pesoFinale = 0;
   var pesoFinale2 = [];

//  Crea 10 oggetti che rappresentano una zucchina.

   for (var i = 0; i < 10; i++) {
       var peso = generaRandom(1, 50);
       var lunghezza = generaRandom(1, 30);
       var varieta = "Italiana";
       var oggetto = {
           varieta : varieta,
           peso : peso,
           lunghezza : lunghezza
       }
       if (oggetto.lunghezza >=15) {
           zucchina.push(oggetto.lunghezza);
           // pesoFinale.push(oggetto.peso);
           var pesoCorte = oggetto.peso;

       }else{
           zucchina2.push(oggetto.lunghezza);
           // pesoFinale2.push(oggetto.peso);
           var pesoLunghe = oggetto.peso;


       }

   };
   // Infine stampa separatamente quanto pesano i due gruppi di zucchine

    pesoFinale = pesoFinale + pesoCorte;
    console.log(pesoFinale);
    pesoFinale2 = pesoFinale2 + pesoLunghe;
    console.log(pesoFinale2);

   console.log("le Zucchine del primo array sono lunghe rispettivamente " + zucchina);
   console.log("le Zucchine del secondo array sono lunghe rispettivamente " + zucchina2);
   console.log("le Zucchine del primo array pesano " + pesoFinale);
   console.log("le Zucchine del secondo array pesano " + pesoFinale2);




   function generaRandom(min, max){
       var numero = Math.floor(Math.random() * (max - min + 1) ) + min;
       return numero;
   }





});
