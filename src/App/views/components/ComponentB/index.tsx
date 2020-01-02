import React, {FC} from 'react';

import {Model} from 'App/models/entities';

import {ComponentC} from 'App/views/components';
import './index.css';

interface Props {
  model: Model;
  onUpdate?: () => void;
}

export const ComponentB: FC<Props> = (props) => {

  const {model, onUpdate} = props;

  function update() {
    model.update('Component B');
    if (onUpdate) onUpdate();
  }

  return (
    <section className="ComponentB">
      <h1>Component B : {model.name}</h1>
      <div><button onClick={update}>Update</button></div>
      <ComponentC model={model} onUpdate={onUpdate} />
    </section>
  );
};
