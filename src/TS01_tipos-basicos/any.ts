//Any é uma variáveis sem tipagem definida.
//É utilizada durante o desenvolvimento do projeto quando o desenvolvedor não sabe o tipo
//Ele define uma variável como sem tipo definido

let valor: any;
valor = "25";
console.log(typeof valor)
//string
console.log(valor);
//25
valor = 25;
console.log(typeof valor)
//number
console.log(valor);
//25

let teste;
console.log(typeof teste);
//undefined
