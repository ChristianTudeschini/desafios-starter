var formElement = document.body;
var listElement = formElement.querySelector("#app ul")

var nomes = ["Diego", "Gabriel", "Lucas"];

for (nome of nomes) {
    var nomeElement = document.createElement('li');
    var nomeText = document.createTextNode(nome);

    nomeElement.appendChild(nomeText);
    listElement.appendChild(nomeElement);
}