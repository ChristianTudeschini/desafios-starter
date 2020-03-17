// 1.1
import ClasseUsuario from './functions.js';
ClasseUsuario.info();

// 1.2
import { idade } from './functions';
console.log(idade);

// 1.3
// Já está importando a classe no 1.1 (acima)
import { idade as IdadeUsuario } from './functions';
console.log(IdadeUsuario);