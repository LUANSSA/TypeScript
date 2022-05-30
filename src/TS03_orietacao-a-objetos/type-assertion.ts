/*
Serve para fazer o compilador encarar um tipo como outro tipo
por exemplo o objeto jogo 1 é encarado como uma interface IJogoAssertion

Assertions é usando por exemplo em contexto de testes,
quando você importa um pacote e não quer definir o tipo

*/
interface IjogoAssertion{
    nome: string;
    descricao: string;
}

let jogo1 = <IjogoAssertion> {};
jogo1.nome = "Futebol";
jogo1.descricao = "Jogado na quadra e no campo";

let jogo2 = {} as IjogoAssertion;
jogo2.nome = "Volei";
jogo2.descricao = "Jogando na quadra e no campo de areia";

console.log(jogo1);
//{ nome: 'Futebol', descricao: 'Jogado na quadra e no campo' }
console.log(jogo2);
//{ nome: 'Volei', descricao: 'Jogando na quadra e no campo de areia' }
