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
            console.log(response);
        })
        .catch (function(error) {
            console.log(error);
        })



}
