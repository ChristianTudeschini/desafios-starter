const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },    
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

console.log(usuarios);

// 2.1 - MAP
let idadeUsuario = usuarios.map((item) => {    
    return item.idade;
});

console.log(idadeUsuario);

// 2.2 - FILTER
let rocketseatUsuario = usuarios.filter((item) => {
    return item.empresa == 'Rocketseat' && item.idade > 18;
});

console.log(rocketseatUsuario)

// 2.3 - FIND
let googleUsuario = usuarios.find((item) => {
    return item.empresa === "Google";
});

console.log(googleUsuario);

// 2.4 - UNINDO OPERAÇÕES
let unindoUsuario = usuarios.map((item) => {
    item.idade = item.idade * 2;
    return item;
})

console.log(unindoUsuario);

let usuarioMaior = usuarios.find((unindoUsuario) => {
    return unindoUsuario.idade > 50; 
});

console.log(usuarioMaior);