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
            
        });
    }



}
