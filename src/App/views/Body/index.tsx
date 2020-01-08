import React, {FC} from 'react';

import {Switch, Route} from 'react-router-dom';
import {Cover} from './Cover';
import {About} from './About';
import {Work} from './Work';
import {Theory} from './Theory';
import {Skills} from './Skills';
import css from './index.module.scss';

export const Body: FC = () => {
  return (
    <div className={css.root}>
      <Switch>
        <Route path="/about" component={About}/>
        <Route path="/work" component={Work}/>
        <Route path="/theory" component={Theory}/>
        <Route path="/skills" component={Skills}/>
        <Route component={Cover}/>
      </Switch>
    </div>
  );
};
