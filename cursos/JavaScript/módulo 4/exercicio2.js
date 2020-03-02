var inputElement = document.querySelector('#app input');
var listControl = document.querySelector('#app ul');

function adicionar() {
    var userName = inputElement.value;
    
    if (userName != '') 
        adicionarPromise(userName);
    else 
        alert('Digite um usuário');   
}

function adicionarPromise(userName) {
    limpaLista();
    geradorLi('Carregando...');

    var promise = () => {
        return new Promise(function(resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET','https://api.github.com/users/'+userName+'/repos');
            xhr.send(null);

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200)
                        resolve(JSON.parse(xhr.responseText));
                    else
                        reject();
                }
            }
        });
    }

    promise()
        .then ((response) => {  
            limpaLista();
            for (var x = 0; x <= response.length-1; x++)                    
                geradorLi(response[x].name);                
        })
        .catch ((error) => {
            limpaLista();
            console.log(error);
            geradorLi('Não foi possível encontrar repositórios deste usuário');
        })
}

function geradorLi(texto) {
    var itemElement = document.createElement('li');
    var textItem = document.createTextNode(texto);
    itemElement.appendChild(textItem);
    listControl.appendChild(itemElement);
}

function limpaLista() {
    listControl.innerHTML = "";
}