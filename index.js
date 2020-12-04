const gets = require('prompt-sync')();

let nota1;
let nota2;
let media;


nota1 = parseFloat(gets());
while (nota1 < 0 || nota1 > 10){
  console.log("nota invalida");
  nota1 = parseFloat(gets());
}
//console.log(nota1);
nota2 = parseFloat(gets());
while (nota2 > 10 || nota2 < 0){
  console.log("nota invalida");
  nota2 = parseFloat(gets());
}
//console.log(nota2);
media = parseFloat((nota1 + nota2)/2).toFixed(2);
console.log("media = " + media);