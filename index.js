
  function affichage(){
  var first = document.getElementById('premier_nombre').value;
  var second = document.getElementById('deuxieme_nombre').value;
  var nombre1 = parseInt(first);
  var nombre2 = parseFloat(second);
  var nombre3 = nombre1 % nombre2;
  alert(nombre3);
  }
