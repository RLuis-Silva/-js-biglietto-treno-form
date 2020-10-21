console.log("funziona JS");

// var bigl = document.getElementById('biglietto');
var bottoneGenera = document.getElementById('btnGenera');
var clickAnnulla = document.getElementById('btnAnnulla');

bottoneGenera.addEventListener('click', function(){
    // console.log('funziona sta merda di click!');

    //ottiene dati del passeggero
    var nomeCognomePasseggero = document.getElementById('nomeCognome').value;
    var kmPasseggero = document.getElementById('km').value;
    var etaPasseggero = document.getElementById('eta').value;
});