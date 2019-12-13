import React, {FC} from 'react';
import './App.css';

import items from './items';

import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionComponent';
import ClassComponentProps from './ClassComponentProps';
import FunctionComponentProps from './FunctionComponentProps';
import ClassComponentState from './ClassComponentState';
import FunctionComponentState from './FunctionComponentState';
import ClassComponentLifecycle from './ClassComponentLifecycle';
import FunctionComponentLifecycle from './FunctionComponentLifecycle';

import Samples from './Samples';
new Samples().log();

const App: FC = () => {
  return (
    <div className="App">
      <ClassComponent />
      <FunctionComponent />
      <ClassComponentProps desc="description" items={items} />
      <FunctionComponentProps desc="description" items={items} />
      <ClassComponentState />
      <FunctionComponentState />
      <ClassComponentLifecycle />
      <FunctionComponentLifecycle />
    </div>
  );
};

export default App;
