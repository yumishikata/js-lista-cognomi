document.getElementById("invia").addEventListener('click' , 
function() {
    var lista = ["Bianchi" , "Rossi" , "Duzioni" , "Balsano" , "Verdi"];
    var cognome = document.getElementById("get_surname").value;
    lista.push(cognome);
    console.log(lista);
    var lista = lista.map(lista => lista.toUpperCase());
    console.log(lista);
    var lista_ordinata = lista.sort();
    console.log(lista_ordinata);
    var i = 0;
    while (cognome.toUpperCase() != lista_ordinata[i]){
        i++;
    }
    var posizione = i+1;
    console.log(posizione);

    for(i=0 ; i<lista_ordinata.length ; i++){
        document.getElementById("lista_cognomi").innerHTML += "<li>" + lista_ordinata[i] + "</li>";
    }
    
    document.getElementById("posizione").innerHTML = "Le diamo il benvenuto " + cognome + " la sua posizione è: " + posizione;

}
)

document.getElementById("annulla").addEventListener('click' , 
function() {
    location.reload();
}
)
