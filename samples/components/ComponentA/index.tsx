import React, {FC} from 'react';

import {Model} from 'src/App/models/entities';

import {ComponentB} from 'src/App/views/components';
import './index.css';

interface Props {
  model: Model;
  onUpdate?: () => void;
}

export const ComponentA: FC<Props> = props => {

  const {model, onUpdate} = props;

  function update() {
    model.update('Component A');
    if (onUpdate) onUpdate();
  }

  return (
    <section className="ComponentA">
      <h1>Component A : {model.name}</h1>
      <div><button onClick={update}>Update</button></div>
      <ComponentB model={model} onUpdate={onUpdate} />
    </section>
  );
};
