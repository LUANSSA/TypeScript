/*
Classe em js é um açucar sintático
pois classes em js são funções.
*/
class Us {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }
}

const pes = new Us("Luan", 25);
console.log(pes);
//Us { nome: 'Luan', idade: 25 }
console.log(typeof pes);
//object
console.log(Us);
//[class Us]
console.log(typeof Us);
//function

//Us é uma função 

class Player extends Us {
    game: string;
    constructor(name: string, idade: number, game:string){
        super(name, idade);
        this.game = game;
    }
}
const jogador = new Player("Luan", 25, "League of legends");
console.log(jogador);
//Player { nome: 'Luan', idade: 25, game: 'League of legends' }

//Métodos estáticos Static

class animal extends Us{
    public raca: string;
    constructor(name: string, idade: number, raca: string){
        super(name, idade);
        this.raca = raca;
    }
    public infoAnimal(){
        return `nome: ${this.nome}\nidade: ${this.idade}\nraça: ${this.raca}`;
    }

    static infoData(){
        return `A data é ${Date()}`;
    }
}

const chowchow = new animal("Lyon", 8, "Chow-Chow");
console.log(chowchow);
//animal { nome: 'Lyon', idade: 8, raca: 'Chow-Chow' }
console.log(chowchow.infoAnimal());
/*
nome: Lyon
idade: 8
raça: Chow-Chow//
*/
console.log(animal.infoData()); 
//A data é Mon May 30 2022 04:46:31 GMT-0300 (Horário Padrão de Brasília)


//private, protected, public

//public é acessível de forma geral, dentro e fora da classe
//private só pode ser acessado pela classe
//protected pode ser acessado pela classe e pelas classes filhas

class jogo {
    public nome: string;
    private empresa: string;
    protected plataforma: string;

    constructor(nome: string, empresa: string, plataforma: string){
        this.nome = nome;
        this.empresa = empresa;
        this.plataforma = plataforma;
    }

    dizerEmpresa(){
        return `A empresa dona do jogo é ${this.empresa}`;
    }

    setEmpresa(empresa: string){
        this.empresa = empresa;
    }
    getEmpresa(){
        return this.empresa;
    }
}

const csgo = new jogo("Counter-Strike Global Offensive", "Valve", "desktop");
console.log(csgo.nome);
//Counter-Strike Global Offensive
console.log(csgo.dizerEmpresa());
//A empresa dona do jogo é Valve

class perfilCsgoPlayer extends jogo{
    public nomeJogador: string = "Luan";
    super(nome: string, empresa: string){
        this.nome = nome;
        this.setEmpresa(empresa);
    }

    infoJogadorCsgo(){
    return `nome: ${this.nomeJogador}\njogo: ${this.nome}`+
            `\nplataforma: ${this.plataforma}\nempresa: ${this.getEmpresa()}`;
    }
}
const perfilCsgoLuan = new perfilCsgoPlayer("CSGO", "Valve", "PC");

console.log(perfilCsgoLuan);
/*
perfilCsgoPlayer {
  plataforma: 'PC',
  nome: 'CSGO',
  empresa: 'Valve',
  nomeJogador: 'Luan'
}
*/
console.log(perfilCsgoLuan.infoJogadorCsgo());
/*
nome: Luan
jogo: CSGO
plataforma: PC
empresa: Valve
*/


interface IJogo {
    nome: string;
    descricao: string;
    dizerNomeComDescricao(): string;
}

class jogoCartas extends jogo implements IJogo{
    descricao: string;

    constructor(nome: string, empresa: string, plataforma: string, descricao: string){
        super(nome, empresa, plataforma);
        this.descricao = descricao;
    }
    dizerNomeComDescricao(): string {
        return `nome: ${this.nome}\ndescrição: ${this.descricao}`
    }
}
const baralho = new jogoCartas("Baralho", "Qualquer", "Jogo de mão", "Jogo jogado a mão");
console.log(baralho);
/*
jogoCartas {
    nome: 'Baralho',
    empresa: 'Qualquer',
    plataforma: 'Jogo de mão',
    descricao: 'Jogo jogado a mão'
  }
*/
console.log(baralho.dizerNomeComDescricao());
/*
nome: Baralho
descrição: Jogo jogado a mão

*/

//Usar interface ou type Alias ? Depende do padrão de projeto
//Usando interface
const obj: IJogo = {
    nome: "Luague of Legends",
    descricao: "Jogo para desktop e mobile",
    dizerNomeComDescricao(){
        return `nome: ${this.nome} descricao: ${this.descricao}`;
    }
}
console.log(obj);
/*
{
  nome: 'Luague of Legends',
  descricao: 'Jogo para desktop e mobile',
  dizerNomeComDescricao: [Function: dizerNomeComDescricao]
}
*/
console.log(obj.dizerNomeComDescricao());
//nome: Luague of Legends descricao: Jogo para desktop e mobile

//OBS Interfaces em JS agrupam quando são escritas novamente

interface Ia  {
    nome: string;
}
interface Ia {
    descricao: string

}
class iaAgrupado implements Ia {
    nome = "Luan";
    descricao = "A tem tanto nome como descricao";
    dizerNomeDescricao(){
        return `nome: ${this.nome} descricao: ${this.descricao}`;
    }
}
const ia = new iaAgrupado();
console.log(ia.dizerNomeDescricao());
//nome: Luan descricao: A tem tanto nome como descricao