import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Footer from '../components/Footer';

import Main from '../pages/main';

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      {/* NOTA_ESTUDO: O Switch evita que rotas com o mesmo caminho sejam disparadas ao mesmo tempo. Ele só dispara a primeira que encontrar. */}
      {/* NOTA_ESTUDO: O exact força a rota a só executar exatamente quando for o path descrito */}
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>

      <Footer />
    </Fragment>
  </BrowserRouter>
);

export default Routes;
