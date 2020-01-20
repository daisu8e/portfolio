import React, {FC} from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {ResetStyles} from './views/services';
import {Logo} from './views/components';
import {Cover, Content, StyleGuide, LogoCheck} from './views/interfaces';
import css from './index.module.scss';

export const App: FC = () => {
  return (
    <>
      <ResetStyles/>
      {/*
    <div className={css.corner1}></div>
    <div className={css.corner2}></div>
    <div className={css.corner3}></div>
    <div className={css.corner4}></div>
    */}
      <div className={css.logo}><Logo/></div>
      <BrowserRouter>
        <Switch>
          <Route path="/logo-check" component={LogoCheck}/>
          <Route path="/style-guide" component={StyleGuide}/>
          <Route path="/:something" component={Content}/>
          <Route component={Cover}/>
        </Switch>
      </BrowserRouter>
    </>
  );
};
