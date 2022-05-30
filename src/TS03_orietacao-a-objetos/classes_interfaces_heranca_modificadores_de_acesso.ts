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
    protected plataforma: string = "steam";

    constructor(nome: string, empresa: string){
        this.nome = nome;
        this.empresa = empresa;
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

const csgo = new jogo("Counter-Strike Global Offensive", "Valve");
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
const perfilCsgoLuan = new perfilCsgoPlayer("CSGO", "Valve");

console.log(perfilCsgoLuan);
/*
perfilCsgoPlayer {
  plataforma: 'steam',
  nome: 'CSGO',
  empresa: 'Valve',
  nomeJogador: 'Luan'
}
*/
console.log(perfilCsgoLuan.infoJogadorCsgo());
/*
nome: Luan
jogo: CSGO
plataforma: steam
empresa: Valve
*/
