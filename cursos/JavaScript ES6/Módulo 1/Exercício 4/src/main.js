// 4.1 - SIMPLES
const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};

const { nome, idade, endereco: { cidade, estado } } = empresa;

console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC


// 4.2 - EM PARÂMETROS
const usuario = {
    nome: 'Diego',
    idade: 23
}

function mostraInfo({ nome, idade }) {
    return `${nome} tem ${idade} anos.`;
}

mostraInfo({ nome, idade } = usuario);