console.log("funziona JS");

// var bigl = document.getElementById('biglietto');
var bottoneGenera = document.getElementById('btnGenera');
var clickAnnulla = document.getElementById('btnAnnulla');

bottoneGenera.addEventListener('click', function(){
    // console.log('funziona sta merda di click!'); //msg di debug

    //ottiene dati del passeggero dagli input utilizzando value
    var nomeCognomePasseggero = document.getElementById('nomeCognome').value;
    console.log(nomeCognomePasseggero);

    var kmPercorso = document.getElementById('km').value;
    console.log(kmPercorso + " Km");

    var etaPasseggero = document.getElementById('eta').value;
    console.log(etaPasseggero);


    //calcolo biglietto con sconto
    var prezzoKm = 0.21;
    var prezzoTotale = 0.21 * kmPercorso;
    var sconto20 = prezzoTotale / 100 * 20;
    var sconto40 = prezzoTotale / 100 * 40;
    var prezzoBiglietto;
    var tipoOfferta = "Biglietto Standard";
    
    if(etaPasseggero == minorenne){
        //sconto di 20%
        prezzoBiglietto = prezzoTotale - sconto20;
        tipoOfferta = "Sconto Minorenni";
    }else if(etaPasseggero == over65){
        prezzoBiglietto = prezzoTotale - sconto40;
        tipoOfferta = "Sconto Over 65";
    }else{
        prezzoBiglietto;
    }

    //output decimali e valuta
    prezzoBiglietto = prezzoBiglietto.toFixed(2) + " euro";

});