import React, {FC} from 'react';
import {configureStore} from './samples/store';

import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux'
import {Nav, Body} from './views';
import './index.scss';

export const App: FC = () => (
  <Provider store={configureStore()}>
    <BrowserRouter>
      <Nav/>
      <Body/>
    </BrowserRouter>
  </Provider>
);
