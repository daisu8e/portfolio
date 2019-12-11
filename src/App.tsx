import React from 'react';
import './App.css';
import ItemList from './ItemList';
import items from './items';

import Samples from './Samples';
new Samples().log();

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Header</h1>
      </header>
      <ItemList title="Title" items={items} />
    </div>
  );
};

export default App;
