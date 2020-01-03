import React, {FC} from 'react';

import {Model} from 'App/models/entities';

import './index.css';

interface Props {
  model: Model;
  onUpdate?: () => void;
}

export const ComponentI: FC<Props> = props => {

  const {model, onUpdate} = props;

  function update() {
    model.update('Component I');
    if (onUpdate) onUpdate();
  }

  return (
    <section className="ComponentI">
      <h1>Component I : {model.name}</h1>
      <div><button onClick={update}>Update</button></div>
    </section>
  );
};
