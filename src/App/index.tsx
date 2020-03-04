import React, {FC, useState} from 'react';

import {Author} from './models/entities/Author';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {GlobalStyle} from './views/services/GlobalStyle';
import {Cover, Content} from './views/interfaces';

export const App: FC = () => {

  const [author] = useState(new Author('Daisuke Katsumata'));

  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
        <Switch>
          <Route path="/:something" render={p => <Content {...p} author={author}/>}/>
          <Route render={p => <Cover {...p} author={author}/>}/>
        </Switch>
      </BrowserRouter>
    </>
  );
};
