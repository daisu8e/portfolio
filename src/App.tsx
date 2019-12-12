import React from 'react';
import './App.css';

import items from './items';

import ItemListCC from './ItemListCC';
import ItemListFC from './ItemListFC';
import FunctionComponentState from './FunctionComponentState';

import Samples from './Samples';
new Samples().log();

const App: React.FC = () => {
  return (
    <div className="App">
      <ItemListCC title="Class Component" items={items} />
      <ItemListFC title="Function Component" items={items} />
      <FunctionComponentState />
    </div>
  );
};

export default App;
