var numeroDaSequencia = 1;
var penultimo = 0;
var ultimo = 0;
var cont = 1;

while (cont <= 15) {
    console.log('numero', cont, '=', numeroDaSequencia);
    penultimo = numeroDaSequencia;
    numeroDaSequencia = penultimo + ultimo;
    ultimo = penultimo;
    cont = cont + 1;
}      
