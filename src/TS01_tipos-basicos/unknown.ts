//Any com asteróids
//Unknown é utilizado quando não se sabe o tipo porem ele é mais seguro que o any
//Na hora que for necessário definir uma variável como sem tipo definido


let info: unknown;

let infoAny: any;

let infoCardapio: string;


//Com Unknown fazer isso não é permitido
//infoCardapio = info;

//Com Any isso é permitido
infoCardapio = infoAny;


//Com Unknown você tem mais segurançade validação de tipagem 

console.log(typeof infoAny);
//undefined
console.log(typeof infoCardapio);
//undefined

