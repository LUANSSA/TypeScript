/*
Tipo Object
Dessa forma eu não posso garantir que todas as pessoas
que forem criadas irão ter um nome e um um sobrenome
*/
let pessoa: object = {
    nome: "Luan",
    sobrenome: "Souza"
}

//typeAlias
type Aluno = {
    nome: "",
    sobreNome: ""
};

/*
TypeAlias
Usando type Aluno eu defino que aluno terá que conter todas as
características(atributos) de type Aluno
*/
let aluno: Aluno= {
    nome: "",
    sobreNome: ""
} 