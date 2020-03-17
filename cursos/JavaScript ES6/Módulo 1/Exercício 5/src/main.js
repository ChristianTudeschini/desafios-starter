// 5.1 = REST
const arr = [1, 2, 3, 4, 5, 6]

function soma(x, ...params) {    
    return x + params.reduce((valorAtual, proxValor) => valorAtual + proxValor);
}

console.log(soma(arr[0], ...arr));


// 5.2 = SPREAD
const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};

const usuario2 = {...usuario, nome: 'Gabriel'};

const usuario3 = {...usuario, endereco: { cidade: 'Lontras' } }

console.log(usuario2);
console.log(usuario3);