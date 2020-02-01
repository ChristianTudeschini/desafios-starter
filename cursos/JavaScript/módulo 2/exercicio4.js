var formElement = document.body;
var inputElement = formElement.querySelector('input');
var listElement = formElement.querySelector("#app ul")

var nomes = ["Diego", "Gabriel", "Lucas"];

function renderNomes() {

    listElement.innerHTML = '';
    
    for (nome of nomes) {        
 
        var nomeElement = document.createElement('li');
        var nomeText = document.createTextNode(nome);
    
        nomeElement.appendChild(nomeText);
        listElement.appendChild(nomeElement);
    }    
}

renderNomes();

function adicionar() {    
    nomes.push(inputElement.value);    
    resetInput();
    renderNomes();
}

function resetInput() {
    inputElement.value = ''; 
    inputElement.focus();   
}
