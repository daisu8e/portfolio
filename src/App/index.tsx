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
      <Route component={views.Home} />
    </Switch>
  </div>
);
