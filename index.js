
function modulo(){
var number1 = document.getElementById("premier_nombre").value;
var number2 = document.getElementById("deuxieme_nombre").value;
if (isNaN(number1) || isNaN(number2)){ // Si la valeur n'est pas un nombre: alert('Il faut des nombres')
 alert('Il faut des nombres');
} else if(number2 == 0){
   alert('On ne peut pas diviser par zéro');
} else { // Sinon tu me donne le résultat de la multiplication
   var result = parseInt(number1) % parseFloat(number2);
   alert(result);
 }
}
