type User = {
    nome: string,
    lastName: string,
    birthDay: string,
    //A ? no age indica para o compilador que age é opcional
    age?: number
}

const luan : User ={
    nome: "Luan",
    lastName: "Souza",
    birthDay: "23",
    age: 25 //age pode existir aqui ou não pois é opcional
}


console.log(typeof luan);
//object
console.log(luan);
//{ nome: 'Luan', lastName: 'Souza', birthDay: '23', age: 25 }


/*
Union type | pode ser considerado um || (ou)
("a" || "b") de retorno de funções ou parâmetro

exemplo
function y(){
    if(true){
        return "a";
    }
    else{
        return 23
    }
}

*/
type logLevel = "info" | "debug" | "error";

function logMessage(message: string, level: logLevel){
    return `${message} - ${level}`;
}
//no segundo parâmetro de logMessage() é obrigatório uma string "info" ou "debug" ou "error"
console.log(logMessage("Deu tudo certo", "debug")); 
//Deu tudo certo - debug

//Intersection une vários typos diferentes
type About = {
    bio: string,
    interesses: string[]
};

//Type Profile é a união de About e User
type Profile  = About & User;

const userWithProfile: Profile = {
    nome: "Luan",
    lastName: "Souza",
    birthDay: "23",

    bio: "Animado, empático, gentil",
    interesses: ["Desenvolvimento de Sistemas", "Futebol", "Natação"]
};


type ComposeProfile = User & {
    log: logLevel,
    about: About;
}
