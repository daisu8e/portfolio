import React, {FC} from 'react';
import {Switch, Route} from 'react-router-dom';

import * as views from './views';
import './index.css';

export const App: FC = () => (
  <div className="App">
    <Switch>
      <Route path="/view-a" component={views.ViewA} />
      <Route path="/view-b" component={views.ViewB} />
      <Route path="/view-c" component={views.ViewC} />
      <Route path="/view-d" component={views.ViewD} />
      <Route path="/view-e" component={views.ViewE} />
      <Route path="/view-f" component={views.ViewF} />
      <Route component={views.Home} />
    </Switch>
  </div>
);
