import React, {FC, useState} from 'react';

import {Author} from './models/entities/Author';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {GlobalStyle} from './views/services/GlobalStyle';
import {Logo} from './views/components/Logo';
import {Cover, Content} from './views/interfaces';
import {BackgroundImage} from './index.styled'; //Corner2, Corner2, Corner3, Corner4,

export const App: FC = () => {

  const [author] = useState(new Author('Daisuke Katsumata'));

  return (
    <>
      <GlobalStyle/>
      {/*
      <Corner1/>
      <Corner2/>
      <Corner3/>
      <Corner4/>
      <BackgroundImage><Logo/></BackgroundImage>
      */}
      <BrowserRouter>
        <Switch>
          <Route path="/:something" render={p => <Content {...p} author={author}/>}/>
          <Route render={p => <Cover {...p} author={author}/>}/>
        </Switch>
      </BrowserRouter>
    </>
  );
};
