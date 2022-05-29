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