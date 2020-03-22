// React serve pra poder fazer o HTML no JS
import React from 'react';
import ReactDOM from 'react-dom';
// AQUI
import App from './App';
import * as serviceWorker from './serviceWorker';

// Aqui estamos renderizando todo projeto (isso vai ser feito apenas uma única vez)
// No caso, renderizando o componente App (que importamos lá em cima)
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
