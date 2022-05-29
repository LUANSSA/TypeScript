//Uma função por padrão retorna undefined

//Pilha de execução por ordem principal, a e b.
function a(){

}
function b(){

}
function principal(){
    a();
    b();
}
console.log(principal);
//[Function: principal]
console.log(principal());
//undefined

//retornando um valor
function c(){
    return 23;
}
//O próprio compilador infere o tipo do retorno
console.log(c);
//[Function: c]
console.log(c());
//23


//Deixando explicito que essa função não tem retorno
function d() : void {

}

console.log(d);
//[Function: d]
console.log(d());
//undefined

/*
Deixando explícito que essa função terá un retorno
do tipo string
*/
function e() :string{

    return "Função com retorno string";
}
console.log(e);
//[Function: e]
console.log(e());
//Função com retorno string

/*
never determina que a função não retorno 
e impede até que erros sejam retornados

Usada em loops infinitos
ou no retorno de erros

Essa função não tem fim
function f():void{
    while(true){}
}
console.log(f());


Dispara um error

function erro(): never{
    throw new Error("olá");
}
console.log(erro());

const testeNever = erro();
*/



