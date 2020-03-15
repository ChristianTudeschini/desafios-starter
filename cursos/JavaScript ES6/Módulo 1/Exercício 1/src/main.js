class Usuario {
    constructor(email, senha) {        
        console.log(email)
        console.log(senha)
    }

    isAdmin = () => false;
}

class Admin extends Usuario {
    isAdmin = () => true;
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('oi@teste.com', 'senha123');

console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) //true