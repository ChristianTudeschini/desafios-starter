var formElement = document.body;
var buttonElement = formElement.querySelector('button#geraQuadrado');

function criaQuadrado() {            
    var quadrado = document.createElement('button');                      
    
    quadrado.style.backgroundColor = 'red';
    quadrado.style.width = "100px";
    quadrado.style.height = "100px";

    quadrado.setAttribute('onmouseover', 'var newColor = getRandomColor(); this.style.backgroundColor = newColor')                        

    formElement.appendChild(quadrado);
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

buttonElement.onclick = criaQuadrado;