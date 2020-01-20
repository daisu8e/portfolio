import React, {FC, useState} from 'react';

import {Switch, Route} from 'react-router-dom';
import {Home} from './Home';
import {ViewA} from './ViewA';
import {ViewB} from './ViewB';
import {ViewC} from './ViewC';
import {ViewD} from './ViewD';
import {ViewE} from './ViewE';
import {ViewF} from './ViewF';
import {ViewG} from './ViewG';
import {ViewH} from './ViewH';
import {ViewI} from './ViewI';
import {ViewJ} from './ViewJ';
import {ViewK} from './ViewK';
import {ViewL} from './ViewL';
import styles from './index.module.scss';

export const Body: FC = () => {

  const [, setTimestamp] = useState(new Date());

  function render() {
    setTimestamp(new Date());
  }

  return (
    <div className={styles.Body}>
      <Switch>
        <Route path="/view-a" component={ViewA}/>
        <Route path="/view-b" component={ViewB}/>
        <Route path="/view-c" component={ViewC}/>
        <Route path="/view-d" component={ViewD}/>
        <Route path="/view-e" component={ViewE}/>
        <Route path="/view-f" component={ViewF}/>
        <Route path="/view-g" component={ViewG}/>
        <Route path="/view-h" component={ViewH}/>
        <Route path="/view-i" component={ViewI}/>
        <Route path="/view-j" component={ViewJ}/>
        <Route path="/view-k" component={ViewK}/>
        <Route path="/view-l" component={ViewL}/>
        <Route component={Home}/>
      </Switch>
    </div>
  );
};
