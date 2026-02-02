/*

Il programma dovrà chiedere all'utente
- il numero di chilometri che vuole percorrere
- e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65
- L'output del prezzo finale va messo fuori in forma umana
    (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

TIP:
per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:
100km, 10 anni => prezzo corretto:  €16.80
100km, 70 anni => prezzo corretto: €12.60

*/



const distanza_km = '100';
const passeggero_eta = 70;
const prezzo_km = 0.21;

const distanza_prezzo = distanza_km * prezzo_km

if ( passeggero_eta < 18 ) {

    console.log('Biglietto minorenni', distanza_prezzo - (distanza_prezzo * 0.2) )

} else if ( passeggero_eta >= 65) {

    console.log('passeggero over 65', distanza_prezzo - (distanza_prezzo * 0.4) )

} else {

    console.log('Biglietto ordinario', distanza_prezzo)

}