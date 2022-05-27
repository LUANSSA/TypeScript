//Forma de trabalhar com valores númericos de maneira mais ordenada
//O enum é uma representação númerica de um valor legível
enum Permissoes{
    admin,
    editor,
    comum
}

const usuario = {
    nivel: Permissoes.editor
}
console.log(usuario);
//{ nivel: 1 }

/*
É mais fácil lembrar que o usuario vai ter nível editor
que definir que o nível editor é o nível 1
*/


//TRABALHANDO COM STRINGS

enum Cargos {
    admin = "ADMIN",
    editor = "EDIT",
    comum = "COMUM"
}
const funcionario = {
    cargos : Cargos.admin,
    nivel: Permissoes.admin
}
console.log(funcionario);
//{ cargos: 'ADMIN', nivel: 0 }


//Trabalhando com cores

enum Cores  {
    red = "#ff0000",
    black = "#000",
    branco = "#fff" 
}

const design = {
    corBase: Cores.red,
    corCundaria: Cores.branco
}
console.log(design);
//{ corBase: '#ff0000', corCundaria: '#fff' }