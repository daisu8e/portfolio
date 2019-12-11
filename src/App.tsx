import React from 'react';
import './App.css';
import ItemListCC from './ItemListCC';
import ItemListFC from './ItemListFC';
import items from './items';

import Samples from './Samples';
new Samples().log();

const App: React.FC = () => {
  return (
    <div className="App">
      <ItemListCC title="Class Component" items={items} />
      <ItemListFC title="Function Component" items={items} />
    </div>
  );
};

export default App;
