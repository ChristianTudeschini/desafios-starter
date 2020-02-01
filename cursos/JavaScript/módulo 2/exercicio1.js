var formElement = document.body;
var buttonElement = formElement.querySelector('button#geraQuadrado');

function criaQuadrado() {        
    var quadrado = document.createElement('button');            

    quadrado.style.backgroundColor = 'red';
    quadrado.style.width = "100px";
    quadrado.style.height = "100px";

    formElement.appendChild(quadrado);            
}

buttonElement.onclick = criaQuadrado;