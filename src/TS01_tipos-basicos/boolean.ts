let estaAtivo: boolean;

estaAtivo = true;

function mapearStatusDoUsuario(status: boolean){
    if(status){
        return `Usuário está ativo`
    }else{
        return `Usuario não está ativo`;
    }
}

console.log(mapearStatusDoUsuario(estaAtivo));


