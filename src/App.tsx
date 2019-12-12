import React from 'react';
import './App.css';

import items from './items';

import FunctionComponent from './FunctionComponent';
import ItemListCC from './ItemListCC';
import ItemListFC from './ItemListFC';
import FunctionComponentState from './FunctionComponentState';

import Samples from './Samples';
new Samples().log();

const App: React.FC = () => {
  return (
    <div className="App">
      <FunctionComponent />
      <ItemListCC title="Class Component" items={items} />
      <ItemListFC title="Function Component" items={items} />
      <FunctionComponentState />
    </div>
  );
};

export default App;
