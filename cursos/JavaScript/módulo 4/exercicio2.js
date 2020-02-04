var inputControl = document.querySelector('#app input');
var listControl = document.querySelector('#app ul');

function adicionar() {
    var userName = inputControl.value;
    
    if (userName != '') 
        adicionarPromise(userName);
    else 
        alert('Digite um usuário');
    
}

function adicionarPromise(userName) {

    var promise = () => {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET','https://api.github.com/users/'+userName+'/repos');
            xhr.send(null);

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200)
                        resolve(JSON.parse(xhr.responseText))  
                    else
                        reject()
                }
            }
        });
    }

    promise()
        .then (function(response) {    
            for (var x = 0; x <= response.length-1; x++)        
                //console.log(response[x].name);
                geradorLi(response[x].name);
                
        })
        .catch (function(error) {
            console.log(error);
        })

}

function geradorLi(nomeProjeto) {
    var itemControl = document.createElement('li');
    var textItem = document.createTextNode(nomeProjeto);
    itemControl.appendChild(textItem);
    listControl.appendChild(itemControl);
}
