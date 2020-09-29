import React from 'react';
import { Switch } from 'react-router-dom';

// Pages
import Questions from '../pages/questions';
import Heroes from '../pages/heroes';

// Configuração das rotas
import Route from './Route';

export default function Routes() {
   return (
      <Switch>
         <Route path="/" component={Questions} exact />
         <Route path="/heroes" component={Heroes} isPrivate exact />
      </Switch>
   );
}
