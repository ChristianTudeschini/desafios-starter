"use strict";

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}];
console.log(usuarios); // 2.1 - MAP

var idadeUsuario = usuarios.map(function (item) {
  return item.idade;
});
console.log(idadeUsuario); // 2.2 - FILTER

var rocketseatUsuario = usuarios.filter(function (item) {
  return item.empresa == 'Rocketseat' && item.idade > 18;
});
console.log(rocketseatUsuario); // 2.3 - FIND

var googleUsuario = usuarios.find(function (item) {
  return item.empresa === "Google";
});
console.log(googleUsuario); // 2.4 - UNINDO OPERAÇÕES

var unindoUsuario = usuarios.map(function (item) {
  item.idade = item.idade * 2;
  return item;
});
console.log(unindoUsuario);
var usuarioMaior = usuarios.find(function (unindoUsuario) {
  return unindoUsuario.idade > 50;
});
console.log(usuarioMaior);
