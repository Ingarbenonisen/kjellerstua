var spillerListe = [];

function leggTilSpiller () {
    
    var spillerNavnInput = document.getElementById("spillerNavn").value;
    
    spillerListe.push(spillerNavnInput);

    var navn = "";

    for (i= 0; i < spillerListe.length; i++){
        navn = navn + spillerListe[i] + "<br>";
    }
    document.getElementById("spillerListe").innerHTML = navn + "\n";
    document.getElementById("spillerNavn").value = "";

}

var randomNavn = spillerListe [Math.floor(Math.random()*spillerListe.length)];
document.getElementById("randomNavnPrint").innerHTML = randomNavn;

function randomNavn() {
    var i = parseInt(Math.random() * spillerListe.length);
    document.getElementById("randomNavnPrint").innerHTML = spillerListe[i];
}





