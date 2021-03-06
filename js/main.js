/***************************
 * VENDITA BIGLIETTO TRENO
 ***************************/

/** 
 * REFERENZE ELEMENTI
 */
var container = document.getElementById('biglietto');
var bottoneGenera = document.getElementById('bottoneGenera');



/**
 * EVENTI
 */

// Generare il biglieto
bottoneGenera.addEventListener('click', 
    function() {
        // Ottieni valori input utente
        var nome = document.getElementById('nome').value;
       
        var kmDaPercorrere = document.getElementById('km').value;
        //console.log(kmDaPercorrere); 

        var fasciaEta = document.getElementById('fascia-eta').value;
        //console.log(fasciaEta); 

         // Controllo compilazione campi e Mostra biglietto
         if ((nome != 0) && (kmDaPercorrere != 0) ){
            dati.className = 'hiddenDisplay';
            container.className =  ' show';
            
        } else if ((nome == 0) && (kmDaPercorrere == 0)){
            alert( "Assicurati di aver compilato tutti i campi");
        } else if ((nome == "")){
            alert( "Assicurati di aver compilato il campo Nome Cognome ");
        } else if (kmDaPercorrere == 0){
            alert( "Assicurati di aver compilato il campo dei Km da percorrere");
        }

        // Calcolo biglietto
        var prezzoKm = 0.21;
        var costoBiglietto = prezzoKm * kmDaPercorrere;
        var offerta = 'Biglietto Standard';

        // Calcoliamo il costo e l'offerta applicata
        if (fasciaEta == 'minorenne') {
            // 20% sconto
            costoBiglietto -= costoBiglietto * 0.2;
            offerta = 'Sconto minorenne';
        } else if (fasciaEta == 'over65') {
            //40% sconto
            costoBiglietto -= costoBiglietto * 0.4;
            offerta = 'Sconto Over 65';
        }

        // Controllo dei decimali
        costoBiglietto = costoBiglietto.toFixed(2) + '€';

        // Numero random per la carrozza da 1 a 9
        var numCarrozza = Math.floor( Math.random() * 9) + 1;

        // Numero random per codice cp da 90000 a 100000
        var codiceCp = Math.floor( Math.random() * (100000 - 90000) ) + 90000;

        // Inseriamo valori nella pagina
        document.getElementById('nome-passeggero').innerHTML = nome;
        document.getElementById('offerta-applicata').innerHTML = offerta;
        document.getElementById('carrozza').innerHTML = numCarrozza;
        document.getElementById('codice-cp').innerHTML = codiceCp;
        document.getElementById('costo').innerHTML = costoBiglietto;

    }   
);

// Reset biglietto
bottoneAnnulla.addEventListener('click',
    function() {
        // Ottieni valori input utente e resettali 
        var nome = document.getElementById('nome').value = '';
        var kmDaPercorrere = document.getElementById('km').value = '';
        var fasciaEta = document.getElementById('fascia-eta'). value = 'minorenne';

        // Resettiamo valori nella pagina
        document.getElementById('nome-passeggero').innerHTML = '';
        document.getElementById('offerta-applicata').innerHTML = '';
        document.getElementById('carrozza').innerHTML = '';
        document.getElementById('codice-cp').innerHTML = '';
        document.getElementById('costo').innerHTML = '';

         // Nascondi biglietto
        container.className = 'hiddenDisplay'
        dati.className = 'show'

    }




















)



