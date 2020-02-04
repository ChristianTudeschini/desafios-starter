function checaIdade(idade) {
    // Retornando a promise
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            if (idade >= 18)
                return resolve();
            else {
                return reject();
            }                
        }, 2000);
    });

}

checaIdade(20)
    .then(function() {
        console.log("Maior que 18");
    })
    .catch(function() {
        console.log("Menor que 18");
    })
