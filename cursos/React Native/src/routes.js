import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Product from './pages/product'

const Routes = () => (
    // Serve para definir que as rotas estão sendo utilizadas pelo browser
    <BrowserRouter>
        {/* Permite que apenas uma única rota seja chamada/exibida ao mesmo tempo */}
        <Switch>
            {/* Definindo a primeira rota/rota padrão */}
            {/* exact indica que essa rota só vai ser chamada quando o path for EXATAMENTE igual a / */}
            <Route path="/" exact component={Main} />
            <Route path="/products/:id" component={Product} />
        </Switch>
    </BrowserRouter>
);

export default Routes;