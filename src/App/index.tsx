import React, {FC} from 'react';
import {configureStore} from './samples/store';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux'
import * as views from './views';
import './index.css';

export const App: FC = () => (
  <div className="App">
    <BrowserRouter>
      <Provider store={configureStore()}>
        <Switch>
          <Route path="/view-a" component={views.ViewA} />
          <Route path="/view-b" component={views.ViewB} />
          <Route path="/view-c" component={views.ViewC} />
          <Route path="/view-d" component={views.ViewD} />
          <Route path="/view-e" component={views.ViewE} />
          <Route path="/view-f" component={views.ViewF} />
          <Route path="/view-g" component={views.ViewG} />
          <Route path="/view-h" component={views.ViewH} />
          <Route component={views.Home} />
        </Switch>
      </Provider>
    </BrowserRouter>
  </div>
);
