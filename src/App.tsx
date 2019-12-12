import React, { FC } from 'react';
import './App.css';

import items from './items';

import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionComponent';
import ItemListCC from './ItemListCC';
import ItemListFC from './ItemListFC';
import FunctionComponentState from './FunctionComponentState';

import Samples from './Samples';
new Samples().log();

const App: FC = () => {
  return (
    <div className="App">
      <ClassComponent />
      <FunctionComponent />
      <ItemListCC title="Class Component" items={items} />
      <ItemListFC title="Function Component" items={items} />
      <FunctionComponentState />
    </div>
  );
};

export default App;
