let nome: string;

//erro
//nome = 1

nome = "Luna";

//Com const e atribuindo valor, o compilador já define como string
const nomeComValor = "Gabriel";


function nomeCompleto(nome: string, sobrenome: string){
    return `${nome} ${sobrenome}`;
}

nomeCompleto("Gabriel", "Alexandria");
